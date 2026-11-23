---
title: keybytes: a keyboard you can rearrange
date: 2026-11-12
summary: every key is its own little pcb that snaps onto its neighbours with magnets. v1 works, v2 moves every key to a folding flex pcb with bluetooth.
cover: /images/blog/keybytes/keybytes-v1-working.jpg
repo: https://github.com/NotARoomba/keybytes
---

i always wanted to make a keyboard but i didnt want to be locked into one layout, so i wanted one i could rearrange whenever i want. i couldnt find anything like it online so i decided to make it myself.

the idea is that every key is its own 1u board (a **keybit**) and they all chain off one controller (the **keyword**) that does bluetooth, usb and the battery. you snap keys on wherever you want and the keyword figures out where everything is.

![keybytes v1 with keybits chained off the keyword](/images/blog/keybytes/keybytes-v1-working.jpg)

## v1

v1 keybits were a ch32v003 risc-v chip with pogo pins on all 4 sides talking i2c, and the keyword was 2 stacked boards with an stm32wb55. the boards came in october and i learned how to resin print at the makerspace for the cases.

![the v1 boards arriving](/images/blog/keybytes/keybytes-boards-arrived.jpg)

![a pile of clear resin prints](/images/blog/keybytes/keybytes-resin-prints.jpg)

the cases took a ton of iterations (v12 of the keyword case was the most overengineered thing ive done), mostly fighting magnets that were too weak to hold the keys together against the pogo pins. the fix was the J7 case with 8 4x3mm magnets per keybit and a glue jig so they all stick out exactly 0.75mm.

then flashing. my stlink v3 turned out to be the problem the whole time, so i swapped to an old v2 and it connected instantly lol. i also wrote a driver that bit bangs the ch32's one wire debug protocol so the keyword can flash any keybit you put on top of it. once the timing bugs were out of that, i got 3 keybits chained off the keyword and all showing up in the app.

![three keybits chained and detected](/images/blog/keybytes/keybytes-three-keybits-chained.jpg)

by the end of v1 the keyword showed up as a real usb keyboard that types from the saved keymap, the app placed every key exactly where it physically was, and i reprinted all the cases in tough 2000 resin since the first ones were brittle.

![v1 cases reprinted in tough 2000](/images/blog/keybytes/keybytes-tough2000-cases.jpg)

## v2

v1 worked but the pogo pins were most of the cost and it only worked in a straight grid. so v2 is a rethink:

- both boards move to the **ch592f**, which is about $1 and has ble and usb, so the keyword is a single board now
- the keybit is a **cross shaped flex pcb** that folds up into the case, and the **magnets are the contacts**, so no more pogo pins between keys
- contacts are on a 2.38mm grid (19.05 / 8), so keys can stagger and rotate and still connect
- every key gets hot swap sockets and an rgb led

since a neighbour can touch you in any rotation, each side has 2 p-fets and 2 n-fets with crossed gates, which acts like a bridge rectifier without the diode drop.

![keybit v2 flex routing](/images/blog/keybytes/keybytes-keybit-v2-flex-routing.jpg)

![keybit v2 render](/images/blog/keybytes/keybytes-keybit-v2-render.jpg)

i also spent a while on cost. panelizing 100 flex keybits as 4x5 panels at jlc took the order from $645 to $441 (the fixture fee alone went from $248 to $99). the final order is 5 8x3 panels with plain keybits, hall effect keybits and keywords.

![the 8x3 production panel](/images/blog/keybytes/keybytes-8x3-panel.jpg)

next up is assembling v2 and fixing what the review found: rounder inside corners so the flex doesnt tear, and a current limit on the keyword so something metal across the magnets cant short everything.
