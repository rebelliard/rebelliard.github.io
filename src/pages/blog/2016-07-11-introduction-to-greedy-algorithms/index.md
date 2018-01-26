---
layout: post
title: "Introduction to greedy algorithms"
date: '2016-07-11'
permalink: "/blog/introduction-greedy-algorithms/"
description: "Greedy algorithms are good at finding solutions to problems by choosing a consistently optimal solution on each step."
teaser: "Greedy algorithms are good at finding solutions to problems by choosing a consistently optimal solution on each step."
#image: ./images/mr-burns.jpg
tags: ['algorithms']
---

{{ page.teaser }}

## Basic concepts

* An **optimal solution** is a feasible solution with the largest (or smallest) objective function value.
* A **local optimum** can be obtained by finding the optimal solution within a neighboring set of candidate solutions.
* A **global optimum** can be obtained by finding the optimal solutions among all possible solutions.

## Problem characteristics

1. **Greedy choice property**: a global optimum can be obtained by the selection of a local optimum.
2. **Optimal substructure**: a global optimum can be obtained by using the local optimum of its subproblems.

## General strategies

### "Greedy stays ahead" arguments

Using "Greedy stays ahead" strategy, the algorithm is always at least as far ahead as the optimal solution of each iteration.

1. **Define your solutions.** Define what object will represent the global optimum, and what form each local optimum takes.
2. **Find a measure.** Find a series of measurements to ensure your algorithm stays ahead of the local optimums you've found.
3. **Proove greedy stays ahead.** _Inductively_ show that the local optimums are as good as any of the solution's measures.

* _Mathematical induction:_ a means of proving a theorem by showing that if it is true of any particular case, it is true of the next case in a series, and then showing that it is indeed true in one particular case.

4. **Prove optimality.** By _contradiction_, prove that since the algorithm stays ahead of its previous measures, it must produce an optimal solution.

* _Mathematical proof by contradiction:_ assume that a statement is not true and then to show that that assumption leads to a contradiction. In the case of trying to prove this is equivalent to assuming that That is, to assume that is true and is false.

### Exchange arguments

The greedy exchange strategy is used to prove the correctness of greedy algorithms by transforming the global optimum iteratively without worsening its quality.

1. **Define your solutions.** Define an object `A` that will represent the global optimum and an object `O` that represents a local optimum.
2. **Compare solutions.** Show that if the global optimum is not the same as the local optimum, either:
3. There is an element in `O` that is not in `A`.
4. There are two elements of `O` that are in a different order in `A`.
5. **Exchange pieces.** Gradually modify the local optimum `O` until it is the same as the algorithm's global optimum `A`.
6. **Iterate.** Decrease the number of differences between `A` and `O`, until you can turn `A` into `O` without worsening the quality of the solution. Inductively, `O` must be optimal.

## Example: Change-making problem

This [classical problem](https://en.wikipedia.org/wiki/Change-making_problem) addresses the following question: How can a given amount of money be made with the least number of coins of given denominations 1, 5, 10 and 25?

Example:

    Input:
      37

    Output:
      4

    Explanation:
      37 = 25 + 10 + 1 + 1

Implementation in Python:

    def change_making_problem(n):
        count = 0
        for coin in [25, 10, 5, 1]:
            # Largest coin not greater
            # than the remaining amount.
            while n >= coin:
                count += 1
                n -= coin
        return count

### Read more

* [Guide to Greedy Algorithms](http://web.stanford.edu/class/archive/cs/cs161/cs161.1138/handouts/120%20Guide%20to%20Greedy%20Algorithms.pdf).
* [Proof Techniques: Greedy Stays Ahead](http://www.cs.cornell.edu/courses/cs482/2004su/handouts/greedy_ahead.pdf).
* [Proof Techniques: Greedy Exchange](http://www.cs.cornell.edu/courses/cs482/2003su/handouts/greedy_exchange.pdf).
