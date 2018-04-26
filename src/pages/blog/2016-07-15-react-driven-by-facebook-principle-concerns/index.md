---
layout: post
title: "React's “Driven by Facebook” principle concerns me"
date: '2016-07-15'
date_modified: '2016-07-16'
permalink: "/blog/react-driven-by-facebook-principle-concerns/"
description: "React's “Design Principles” article gave me a rollercoaster of emotions that reminded me of Facebook's ill-fated Parse service."
teaser: "React's “Design Principles” article gave me a rollercoaster of emotions that reminded me of Facebook's ill-fated Parse service."
tags: ['react']
image: '2016-07-15/react-logo.png'
---

<blockquote class="bg-warning">
  <p>
    <b>Update:</b>
    I've posted an <a href="response-to-react-design-principles-interpretation-by-react-members">update</a>
    based on the response I received from <a href="https://twitter.com/dan_abramov">a member</a>
    of the React team. Also, make sure you read his commment <a href="#comment-2786435370">below</a>.
    (2016-07-16)
  </p>
</blockquote>

Facebook just released [React Design Principles](https://facebook.github.io/react/contributing/design-principles.html), an article in which they share a few concepts that guide the library's development. I was feeling assured by the decision-making that drives it, until I was reminded to always keep my chin down and my guard up.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Hot off the press: React Design Principles. We hope that contributors to React will find them useful! <a href="https://t.co/93wr0tAXSZ">https://t.co/93wr0tAXSZ</a></p>&mdash; React (@reactjs) <a href="https://twitter.com/reactjs/status/753677502309072897">July 14, 2016</a></blockquote>

## The good

> React is pragmatic. [...] If we want to deprecate a pattern that we don't like, it is our responsibility to consider all existing use cases for it and educate the community about the alternatives before we deprecate it.

It doesn't get better than this. As a [fatigued developer](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4), it's good to know they have my back.

## The strange

> We value API stability because at Facebook we have more than 20 thousand components using React. This means that we are reluctant to change public APIs or behavior because teams depend on it both externally and internally.

I found the phrasing in this statement odd, as it can be implied that the reason why the API is stable is almost exclusively because of its internal usage and not because [stability matters](http://www.theregister.co.uk/2016/03/23/npm_left_pad_chaos/) to the hundreds of thousands of developers implementing the library. I braced myself.

## The frightening

> Ultimately React is driven by the needs of Facebook. We are more likely to spend time and energy on issues with React that people using it at Facebook are experiencing internally.

It makes sense that attention is given to ensure their platform provides a pleasant experience to its gigantic user base, while rolling out tools that benefit the rest of the world. However, I was immediately reminded of how shocking it was when they decided to shutdown it's fantastic “Parse” backend as a service platform and leave a myriad of businesses scrambling for their lives. As [TechChrunch.com](https://techcrunch.com/2016/01/28/facebook-shutters-its-parse-developer-platform/) remarked:

> The situation harkens back to the dark days of developer whiplash on Facebook’s web games platform, circa 2009. Facebook frequently made significant changes to what developers could do and how virality worked with little notice. That left developers with broken apps and lost business potential they were depending on.

## Let's ride the wave

Am I concerned that Facebook will “move my cheese”? I'm not. React is a wonderful library with a growing user base and I'm invested in it more so than any other out there.

In spite of this, when I remember the company's cutthroat history, I read between the lines and understand that that if React's direction suddenly misaligns with that of the community's, we played ourselves.

As George Orwell famously wrote on [“Animal Farm”](https://www.amazon.com/Animal-Farm-Anniversary-George-Orwell/dp/0451526341/):

> All animals are equal but some animals are more equal than others.
