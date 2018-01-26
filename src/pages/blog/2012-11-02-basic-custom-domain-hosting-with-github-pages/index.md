---
layout: post
title: "Basic custom domain hosting with GitHub Pages"
date: '2011-11-02'
permalink: "/blog/basic-custom-domain-hosting-with-github-pages/"
description: "Basic custom domain hosting with GitHub Pages"
tags: ['setup']
#image: ./images/github-logo.png
---

[GitHub Pages](https://pages.github.com/) are hosted free and easily published through [GitHub](https://desktop.github.com/) or from the command line. Manage your site’s content from GitHub using the tools and workflow that you’re familiar with, so you won’t skip a beat. More about publishing with [GitHub Pages](https://help.github.com/categories/github-pages-basics/).

> **[Update] This post is outdated.** For the latest instructions, see the official [GitHub guide](https://help.github.com/articles/using-a-custom-domain-with-github-pages/).

A third-party content editor is Development Seed's wonderful [Prose](http://prose.io/).

## GitHub setup

After creating your [GitHub repository](https://github.com/new), you need to create a file named `CNAME` in your root directory and fill its contents [with your domain](https://github.com/rebelliard/rebelliard.github.com/blob/master/CNAME).

## Domain setup

1. Create an `A` record with the `204.232.175.78` address as value.
2. Create an `CNAME` record with `www` as name and `example.github.com` as value.
