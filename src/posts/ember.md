---
title: ember: a usb-c reflow hotplate
date: 2026-02-28
summary: a usb-c pd powered reflow hotplate with a 400mm flex heater, an oled ui, bluetooth and nfc presets. it reflowed trace and cyberboard.
cover: /images/blog/ember/ember-render.jpg
repo: https://github.com/NotARoomba/Ember
---

i wanted to solder and reflow my own boards at home to save money and make bigger projects, and the hotplates you can buy felt too small. so i made one.

![ember render](/images/blog/ember/ember-render.jpg)

goals:

- powered by usb-c
- portable and easy to store
- an oled screen with a knob and a button
- a cool case (and a chance to learn cad)

## the heater

a slab of aluminum with copper is expensive at this size. but jlcpcb has flex heaters that are way cheaper, so i designed my own heating trace (playing around with hilbert curves) for a **400 x 400mm** heater. it was only $9.

![the flex heater design](/images/blog/ember/ember-flex-heater.jpg)

## the board

i went with a **tps25730d** for usb-c pd and an **stm32wb55** for bluetooth, plus:

- a mosfet and gate driver to pwm the heater
- a max6675 thermocouple and a pt1000 for temperature, plus a board temp sensor and a current sensor
- an ssd1306 oled, a rotary encoder and a buzzer
- an nfc tag so you can tap a phone to load presets

i posted it in the kicad discord and on r/PrintedCircuitBoards for review, and the feedback made me swap the buck converter (electrolytic caps dont like heat) and the optocoupler for a proper gate driver.

![ember pcb](/images/blog/ember/ember-pcb.jpg)

the case is designed in onshape with a slope on the nfc side so phones with short range can still reach it, and heatset inserts with slotted cylinder head screws.

![ember case in onshape](/images/blog/ember/ember-case-cad.jpg)

## bringing it up

when i plugged it in it didnt burn up like cyberboard v1 (wooo). then:

- usb-c pd gave me the charger's power options, and later a solid 20v
- i got the buzzer playing jingle bells lol
- nfc, pwm, the temp sensors, bluetooth and the oled all came up one by one
- i wrote a script that converts any font into a bitmap font for the ui

![ember built](/images/blog/ember/ember-built.jpg)

it ended up reflowing trace and cyberboard v2. i demoed it at mit blueprint and almost burned a hole through hq trying to boil water.
