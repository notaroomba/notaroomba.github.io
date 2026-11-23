---
title: trace: a pcb ruler
date: 2025-12-27
summary: a 310mm pcb ruler with footprints, awg and trace width references, a protractor, conversions and an nfc tag. one of the first things ember reflowed.
cover: /images/blog/trace/trace-built.jpg
repo: https://github.com/NotARoomba/Trace
---

i saw a cool pcb ruler on reddit and wanted my own, mostly as a break from more intense projects.

![trace](/images/blog/trace/trace-built.jpg)

## whats on it

it ended up **310 x 35mm** and has:

- inches and millimeters
- an awg gauge with via hole sizes, and a trace width reference
- a protractor with 5° and 10° markings
- common footprints: resistors, caps, inductors, diodes and ics
- a mosfet channel type reference
- useful conversions on the back
- an **nfc tag** to store owner info and formulas

![trace render](/images/blog/trace/trace-render.jpg)

i got into nfc after making a hacker card, so for this one i designed my own antenna. i used st's antenna design tool to figure out the inductance of a reference antenna, then made a smaller one that fits on the ruler.

![trace detail](/images/blog/trace/trace-detail.jpg)

## building it

to make it cheaper i ordered the parts separately from lcsc to learn how to solder small parts myself without a stencil. once ember was working i reflowed the first one on it. the nfc led didnt light at first because of a bad joint, and i learned you can put on a bunch of paste and then pull the extra away from the edges with tweezers. after the first one i made 2 more, so now i have 3.
