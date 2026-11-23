---
title: keybytes
date: 2026-11-12
summary: a keyboard where every key is its own pcb that snaps on with magnets.
cover: /images/blog/keybytes/keybytes-v1-working.jpg
repo: https://github.com/NotARoomba/keybytes
---

i wanted a keyboard i could rearrange whenever i want, so every key is its own little board (a keybit) that chains off one controller (the keyword) with bluetooth, usb and a battery. you snap keys on anywhere and the keyword figures out where they are.

![keybytes v1 working](/images/blog/keybytes/keybytes-v1-working.jpg)

v1 used ch32v003 keybits with pogo pins and an stm32wb55 keyword. after a lot of resin printed cases and flashing bugs, i got keys chained, detected and typing as a real usb keyboard.

v2 moves everything to the ch592f, makes each keybit a folding flex pcb, and uses the magnets themselves as the contacts so keys can stagger and rotate.

![keybit v2 render](/images/blog/keybytes/keybytes-keybit-v2-render.jpg)
