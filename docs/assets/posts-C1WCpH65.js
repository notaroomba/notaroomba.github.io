const i=`---
title: cyberboard
date: 2026-03-07
summary: a pico sized stm32 dev board with bluetooth, battery charging, an imu and a barometer.
cover: /images/blog/cyberboard/cyberboard-v2-render.jpg
repo: https://github.com/NotARoomba/Cyberboard
---

cyberboard is a raspberry pi pico sized board with an stm32wb55, bluetooth and lipo charging. v1 got super hot the first time i plugged it in because of wrong cap values and tiny 0201 parts, so v2 went to 4 layers, 0402 parts, and added an imu and a barometer.

![cyberboard v2 render](/images/blog/cyberboard/cyberboard-v2-render.jpg)

i reflowed v2 on ember in a hotel lobby. after reflowing the stm32 a few times and finding out the imu was a different chip than i ordered, it works.

![cyberboard v2 built](/images/blog/cyberboard/cyberboard-v2-built.jpg)
`,d=`---
title: ember
date: 2026-02-28
summary: a usb-c powered reflow hotplate with a screen, bluetooth and nfc presets.
cover: /images/blog/ember/ember-render.jpg
repo: https://github.com/NotARoomba/Ember
---

i wanted to reflow my own boards at home, so i made a hotplate that runs off usb-c pd. it has an stm32wb55, an oled with a knob, temperature sensors and an nfc tag for presets, and the heater is a $9 flex pcb from jlc.

![ember render](/images/blog/ember/ember-render.jpg)

it ended up reflowing trace and cyberboard, and i almost burned a hole through hack club hq trying to boil water with it.

![ember built](/images/blog/ember/ember-built.jpg)
`,l=`---
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
`,b=`---
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
`,c=`---
title: simple flight controller
date: 2025-11-12
summary: a step by step guide to designing a rocket flight controller, made for hack club blueprint.
cover: /images/blog/simple-flight-controller/sfc-render.jpg
repo: https://github.com/NotARoomba/simpleflightcontroller
---

i wrote a guide for hack club blueprint on building a rocket flight controller from scratch, from reading datasheets to ordering the boards. the board has an stm32f7, an imu, a barometer, servo outputs, lipo charging and a microsd card.

![simple flight controller render](/images/blog/simple-flight-controller/sfc-render.jpg)

read the [full guide](/simpleflightcontroller).
`,m=`---
title: trace
date: 2025-12-27
summary: a 310mm pcb ruler with footprints, references and an nfc tag.
cover: /images/blog/trace/trace-built.jpg
repo: https://github.com/NotARoomba/Trace
---

trace is a pcb ruler with inches and mm, an awg gauge, trace widths, a protractor, common footprints, conversions on the back and an nfc tag with my own antenna.

![trace](/images/blog/trace/trace-built.jpg)

it was one of the first things i reflowed on ember, and now i have 3.

![trace render](/images/blog/trace/trace-render.jpg)
`,g=Object.assign({"../posts/cyberboard.md":i,"../posts/ember.md":d,"../posts/keybytes.md":l,"../posts/ledify.md":b,"../posts/simple-flight-controller.md":c,"../posts/trace.md":m});function h(e,t){const s=e.split("/").pop().replace(/\.md$/,""),r=t.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/),n={};if(r)for(const o of r[1].split(`
`)){const a=o.indexOf(":");a>0&&(n[o.slice(0,a).trim()]=o.slice(a+1).trim())}return{slug:s,title:n.title??s,date:n.date??"",summary:n.summary??"",cover:n.cover,repo:n.repo,body:r?r[2]:t}}const p=Object.entries(g).map(([e,t])=>h(e,t)).sort((e,t)=>t.date.localeCompare(e.date)),y=e=>p.find(t=>t.slug===e),f=e=>new Date(e+"T12:00:00").toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});export{f,y as g,p};
