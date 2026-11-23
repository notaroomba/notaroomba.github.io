---
title: cyberboard: a pico sized stm32 dev board
date: 2026-03-07
summary: a raspberry pi pico sized stm32wb55 board with bluetooth, battery charging, an imu and a barometer. v1 cooked itself, v2 works.
cover: /images/blog/cyberboard/cyberboard-v2-render.jpg
repo: https://github.com/NotARoomba/Cyberboard
---

i wanted a dev board the size of a raspberry pi pico, with bluetooth and a battery charger so it works for small portable projects.

![cyberboard v2 render](/images/blog/cyberboard/cyberboard-v2-render.jpg)

## v1

v1 was an **stm32wb55**, a **bq24074** charger and a buck-boost converter. to make single sided assembly cheaper i shrank the decoupling caps down to 0201.

when the boards came i plugged one in and it wouldnt connect and got super hot. going back through the schematic i found the wrong decoupling values, and the 0201 parts were way too small to fix by hand. i spent a whole day trying to solder a salvaged cap from an old wifi router onto it with a wire lol. lesson learned.

## v2

v2 fixes everything and adds more:

- **4 layers** (sig / gnd / pwr / sig) instead of 2
- the **bq24072** charger instead of the bq24074, which is basically a drop in replacement at $0.80 instead of $3
- a smaller **tps631000** buck-boost
- an **icm-42688** imu and a **bmp580** barometer
- nothing smaller than 0402 this time
- pull up resistors on i2c (i remembered!!)

![cyberboard v2 pcb](/images/blog/cyberboard/cyberboard-v2-pcb.jpg)

i somehow fit the imu and barometer on a one sided board this tiny and panelized it so i got more boards for the same price.

## getting it working

i stenciled the first one and reflowed it on ember in a hotel lobby (actually). it turned on but usb wouldnt enumerate. after reflowing the stm32 a bunch of times at hack club hq i found it wasnt fully connected on one side.

then the barometer wasnt showing up on i2c, so i had to cut a trace that tied its CSB pin to ground. then the imu kept returning 0x00 for its whoami, and after reflowing it a few times i noticed the markings on the chip were different. it was a different imu than the one i ordered lol.

![cyberboard v2 working](/images/blog/cyberboard/cyberboard-v2-built.jpg)

after all that it works, and i made a demo that shows off every feature on the board.
