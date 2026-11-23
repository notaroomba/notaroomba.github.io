---
title: ledify
date: 2026-11-09
summary: a tiny usb-c pd led controller that drives 5v or 12v strips and reacts to sound.
cover: /images/blog/ledify/ledify-render.jpg
repo: https://github.com/NotARoomba/ledify
---

ledify is an esp32-c6 led controller that pulls up to 100w over usb-c pd and switches between 5v and 12v strips from software. it also has a mic, a light sensor, an imu and a barometer.

![ledify render](/images/blog/ledify/ledify-render.jpg)

i stenciled and reflowed the boards myself, fixed a short, and it lit up. the firmware does home assistant, spotify album colours, and sound reactive modes that predict the next beat.

![first light](/images/blog/ledify/ledify-first-light.jpg)
