---
title: simple flight controller: a guide to building one from scratch
date: 2025-11-12
summary: a step by step guide for hack club blueprint on designing a rocket flight controller, from reading datasheets to ordering the boards.
cover: /images/blog/simple-flight-controller/sfc-render.jpg
repo: https://github.com/NotARoomba/simpleflightcontroller
---

i wrote a guide for hack club's blueprint program on building a flight controller for rockets from scratch. it explains everything from the ground up so anyone reading it can understand the concepts behind more advanced pcb design.

![simple flight controller render](/images/blog/simple-flight-controller/sfc-render.jpg)

the board has an **stm32f7**, an imu, a **bmp580** barometer, dual servo outputs for tvc or fin control, 2 cell lipo charging and a microsd card.

## what the guide covers

- picking chips for the problem you're solving, and how to read a datasheet
- communication protocols like i2c, spi and uart, and why pull ups matter
- how regulators work and what switching frequency and the other parameters mean
- wiring the barometer, imu and microsd
- using stm32cubemx to plan pins and interrupts
- crystals, load caps and decoupling caps
- footprints and how to pick them from the datasheet
- layout: grouping each ic with its passives, then joining the groups
- routing, differential pairs for usb-c, ground planes and stitching vias
- 3d models, silkscreen, and exporting production files for jlcpcb
- a starting point for firmware

i also wrote a script that runs easyeda2kicad on a text file of lcsc part numbers, so adding custom parts is one command.

![the finished layout](/images/blog/simple-flight-controller/sfc-pcb-layout.jpg)

the full guide is [on its own page](/simpleflightcontroller).
