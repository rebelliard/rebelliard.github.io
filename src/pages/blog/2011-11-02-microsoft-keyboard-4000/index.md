---
layout: post
title: "Microsoft Natural Ergonomic Keyboard 4000's zoom slider on Ubuntu 12.10"
date: '2011-11-02'
permalink: "/blog/enabling-scrolling-using-the-microsoft-natural-ergonomic-keyboard-4000s-zoom-slider-on-ubuntu-1210/"
description: "Enabling scrolling using the Microsoft Natural Ergonomic Keyboard 4000's zoom slider on Ubuntu 12.10"
tags: ['setup']
image: '2011-11-02/microsoft-keyboard-4000.jpg'
---

For the past two years, I have been using the excellent [Microsoft Natural Ergonomic Keyboard 4000](https://www.amazon.com/Microsoft-Natural-Ergonomic-Keyboard-4000/dp/B000A6PPOK) almost exclusively. This keyboard has a zoom slider in between the two main keys section that I just never use. I don't understand what the reasoning behind having a zoom slider instead of a vertical slider, but today we'll fix that for Ubuntu.

![Microsoft Natural Ergonomic Keyboard 4000](/public/images/blog/2011-11-02/microsoft-keyboard-4000.jpg)

Open the `/lib/udev/rules.d/95-keymap.rules` file:

```bash
$ sudo nano /lib/udev/rules.d/95-keymap.rules
```

Let's find the line that starts with `ENV{ID_VENDOR}=="Microsoft"`. On my setup, it looks like:

```bash
ENV{ID_VENDOR}=="Microsoft", ENV{ID_MODEL_ID}=="00db", RUN+="keymap $name 0xc022d zoomin 0xc022e zoomout"
```

Replace the `zoomin` value with `pageup` and the `zoomout` value with `pagedown`:

```bash
ENV{ID_VENDOR}=="Microsoft", ENV{ID_MODEL_ID}=="00db", RUN+="keymap $name 0xc022d pageup 0xc022e pagedown"
```

After restarting your computer, your scrolling keys should now work.

**Heads up!** This tip has been tested on [Ubuntu 12.10](https://en.wikipedia.org/wiki/List_of_Ubuntu_releases#Ubuntu_12.10_.28Quantal_Quetzal.29).
