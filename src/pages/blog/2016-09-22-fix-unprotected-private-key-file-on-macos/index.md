---
layout: post
title: "Fix “UNPROTECTED PRIVATE KEY FILE” on MacOS Sierra"
date: '2016-09-22'
permalink: "/blog/fix-unprotected-private-key-file-on-macos"
description: "It is recommended that your private key files are NOT accessible by others."
teaser:      "It is recommended that your private key files are NOT accessible by others."
tags: ['setup']
#image: ./images/iterm2.png
---

After I upgraded from Mac OS X “El Capitan” to MacOS Sierra, I started getting the following error when trying to use my SSH keys:

    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @         WARNING: UNPROTECTED PRIVATE KEY FILE!          @
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    Permissions 0644 for '/home/foo/.ssh/id_rsa' are too open.
    It is recommended that your private key files are NOT accessible by others.
    This private key will be ignored.
    bad permissions: ignore key: /home/foo/.ssh/id_rsa

Somehow my SSH keys permissions got messed up. The fix was to simply change their permissions to the [recommended](http://bodhizazen.net/Tutorials/SSH_keys#Login) settings:

    chmod 600 ~/.ssh/id_rsa
    chmod 600 ~/.ssh/id_rsa.pub

Lastly, I made sure the private key was added to MacOS' Keychain:

    ssh-add -K ~/.ssh/id_rsa
