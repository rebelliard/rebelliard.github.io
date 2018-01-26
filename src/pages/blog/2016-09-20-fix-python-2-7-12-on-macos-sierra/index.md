---
layout: post
title: "Fix Homebrew's Python 2.7.12 --universal on MacOS Sierra"
date: '2016-09-21'
permalink: "/blog/fix-python-2-7-12-on-macos-sierra"
description: "Avoid issues installing Python on MacOS Sierra due of deprecated dependencies."
teaser:      "Avoid issues installing Python on MacOS Sierra due of deprecated dependencies."
tags: ['setup']
#image: ./images/macos-sierra.png
---

Early adopters of MacOS Sierra like myself are not able to use Homebrew to install Python 2.7.12 with the `--universal` flag. This has been reported on [Issue 27806: 2.7 32-bit builds fail on macOS 10.12 Sierra due to dependency on deleted header file QuickTime/QuickTime.h](https://bugs.python.org/issue27806).

To fix this, you have to patch Homebrew's Python build:

    brew edit python

Add the following lines to your `python.rb` file:

    patch do
      url "https://bugs.python.org/file44699/issue27806_v3.patch"
      sha256 "fff60cbdb9ff344cd84ea776ea16e940147419c303ab378fb5c7fb3e9053ef0a"
    end

The `diff` will look like this:

    diff --git a/Formula/python.rb b/Formula/python.rb
    index b02aef9..55a1a9a 100644
    --- a/Formula/python.rb
    +++ b/Formula/python.rb
    @@ -68,6 +68,11 @@ class Python < Formula
         sha256 "c075353337f9ff3ccf8091693d278782fcdff62c113245d8de43c5c7acc57daf"
       end

    +  patch do
    +    url "https://bugs.python.org/file44699/issue27806_v3.patch"
    +    sha256 "fff60cbdb9ff344cd84ea776ea16e940147419c303ab378fb5c7fb3e9053ef0a"
    +  end
    +
       def lib_cellar
         prefix/"Frameworks/Python.framework/Versions/2.7/lib/python2.7"
       end

You should now be able to install python universally:

    brew install python --universal
