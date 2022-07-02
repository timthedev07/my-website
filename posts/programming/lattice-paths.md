---
title: Algorithm styled question - Lattice Paths
description: Dynamic programming algorithm with a detailed explanation.
date: "2022-06-28"
keywords:
  - Dynamic Programming
  - Algorithms
  - Recursion
  - Python
---

## Problem Statement

NOTE: This is adapted from [problem 15 of project euler](https://projecteuler.net/problem=15)

Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

![](https://raw.githubusercontent.com/timthedev07/my-website/dev/assets/15-statement.png)

How many such routes are there through a 20×20 grid?

## Dynamic Programming

This is a classic example where dynamic programming comes in really handy.

A recursive algorithm can be developed intuitively and it can be optimized with tabulation/memoization. But in this blog, we will just go with memoization.

The key to dynamic programming is decomposing a problem such that you can start with a very basic base case and consider the solution to that fundamental sub-problem, and then later apply that strategy to the bigger picture.

## Recap on Memoization

If you don't remember, memoization is an optimization strategy used for recursive functions whereby a recursively computed solution to a sub-problem is memoized(stored in a memo) so that when that sub-problem comes up again in future computation, no further recursion will be required since we can directly fetch the memoized solution.

## Get Started

When I encounter problems like this, I usually like to consider the scenario where no recursion is needed(i.e. the base case) first. That said, what is the base case for this problem?

Well, think about the grid as a coordinate system as follows:

![](https://raw.githubusercontent.com/timthedev07/my-website/dev/assets/lattic-paths-coordinate.jpg)

## My Implementation

```python
# python version 3.10
def numPaths(dimensions: tuple[int], location: tuple[int], memo = {}):
    (row, column) = location
    (n, m) = dimensions

    key = f"{row}|{column}"

    memoized = memo.get(key)

    if memoized:
        return memoized

    if row == n and column == m:
        # reached the target
        return 0

    # if at the bottom border, then the only way is to go right until reaching the target
    if row == n:
        return 1

    # if at the right border, then the only way is to go down until reaching the target
    if column == m:
        return 1

    res = numPaths(dimensions, (row + 1, column), memo) + numPaths(dimensions, (row, column + 1), memo)
    memo[key] = res

    return res
```
