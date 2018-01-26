---
layout: post
title: Managing front end components with Bower
date: '2016-01-10'
permalink: "/blog/managing-front-end-components-with-bower"
redirectFrom: ["/managing-front-end-components-with-bower/"]
description: "Learn the basics of maintaining your third-party assets using the Bower package manager."
tags: ['javascript']
#image: ./images/bower-logo.png
---

[Bower](http://bower.io/) is a package manager for web applications that allows you to install, update and remove web assets (JavaScript, CSS, fonts, etc.) in a consistent manner. Bower also maintains a frequently updated database of all available packages and their corresponding dependencies. _Gone_ are the days of scavenging libraries throughout the internet for a given library on a specific version.

### Installing Bower

Bower depends on [npm](https://nodejs.org/) and [git](http://git-scm.com/).

    $ npm install -g bower

### Setting up

You can consistently keep track of your setup by creating a `bower.json` file. Bower includes a command for interactively creating it:

    $ bower init

### Searching the repository

You can find out which packages are available by either going on the [online registry](http://bower.io/search/) or using [`bower search`](http://bower.io/docs/api/#search).

    $ bower search <package>
    $ bower search jquery

### Installing packages

Install packages using [`bower install`](http://bower.io/docs/api/#install)

    $ bower install jquery --save
    $ bower install jquery#1.12.0 --save

* The `--save` flag ensures consistency across any device where the bower setup is used by saving any installed dependencies are saved in the `bower.json` file.

### Using packages

All packages are stored in `/bower_components/`. First, you'll want to check with the installed package's `bower.json` to see which assets are required, as defined by the `main` element.

    {
      "name": "jquery",
      "version": "2.1.4",
      "main": "dist/jquery.js"
    }

Finally, the simplest way to use the downloaded package is to include them directly:

    <html>
      <body>
        <script src="/bower_components/jquery/dist/jquery.js"></script>
        <script>
          $(function () {
            alert('Hello Bower!');
          });
        </script>
      </body>
    </html>
