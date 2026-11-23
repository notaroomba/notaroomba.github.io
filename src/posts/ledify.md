---
title: ledify: a tiny usb-c pd led controller
date: 2026-11-09
summary: an esp32-c6 led controller that pulls up to 100w over usb-c pd, switches between 5v and 12v strips, and reacts to sound.
cover: /images/blog/ledify/ledify-render.jpg
repo: https://github.com/NotARoomba/ledify
---

i wanted a simple led controller that runs off usb-c pd and can drive either 5v or 12v strips depending on a setting in software. it kinda grew from there lol.

![ledify render](/images/blog/ledify/ledify-render.jpg)

## the board

- **esp32-c6** for wi-fi and bluetooth
- **fusb302** for usb-c pd negotiation, up to 20v
- a big buck for the leds with a mosfet on the feedback divider, so off is 5v and on is 12v. theres a pull down on the gate so it cant send 12v into a 5v strip while the esp is booting
- an imu, a barometer, an **opt4001** ambient light sensor and an **ics-43434** i2s mic for sound reactive effects
- 4 layers

this was the first time i did a real antenna matching network. the esp is around 35 + 10j ohms and the antenna wants 50, so i calculated a pi network on the smith chart instead of just copying values. i also found i had signal tracks on the inner layers cutting slots in the ground plane right under the esp, with only one ground via under it, so i fixed that too.

![ledify pcb layout](/images/blog/ledify/ledify-pcb-layout.jpg)

## building it

i didnt go with pcba in the end, i stenciled them myself. i taped a board into a jig made of pcb rulers, clamped the stencil over it with wood blocks and spread the paste.

![spreading paste through the stencil](/images/blog/ledify/ledify-stencil-paste.jpg)

then i checked every board under the microscope next to the layout in kicad, mostly the esp (0.4mm pitch) and the tiny mic.

![checking paste under the microscope](/images/blog/ledify/ledify-microscope-bench.jpg)

![three assembled boards](/images/blog/ledify/ledify-three-boards.jpg)

none of them worked at first lol, there was a short. after fixing it i wired one to a strip and it lit up!!

![first light](/images/blog/ledify/ledify-first-light.jpg)

## firmware

the firmware is an esp-idf app that does the pd negotiation, reads the sensors and talks over ble, wi-fi and mqtt so it shows up in home assistant. it goes up to 1000 pixels and caps brightness to what the charger can actually give. some of the stuff in it:

- gradients, zones, schedules, sunrise timers
- ddp and e1.31 so other programs can stream pixels to it
- album cover colours from whatever is playing on spotify as a gradient
- 5 sound reactive modes at 60 fps with a 16 band spectrum, plus a tempo tracker that predicts the next beat so the lights land on time instead of 10+ ms late
- a local web panel served by the board itself, with a live ring of the strip in the middle

![the web panel](/images/blog/ledify/ledify-web-panel.jpg)

by the end i had 4 boards completely done with sound working on them.
