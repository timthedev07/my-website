---
title: Algorithm styled question - Lattice Paths
description: Dynamic programming algorithm with a detailed explanation.
date: 2022-07-02
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

Usually it is represented by arrays or key-value maps where a particular input to a recursive function is mapped to its corresponding solution.

## Get Started

Think about the grid as a coordinate system as follows:

![](https://raw.githubusercontent.com/timthedev07/my-website/dev/assets/lattic-paths-coordinate.jpg)

Note that the target coordinate is `(21, 21)` not `(20, 20)` because there are 20 blocks, but as we are using the corners, this means that there are 21 spots on each axis.

Therefore, it might be a good idea to start representing the grid and locations with some numbers so that we can keep track of a node and think about it as a position on the grid. The most straightforward way to do this is to use tuples:

```python
location => (row: int, column: int), e.g. (5, 14)
dimensions => (height: int, width: int), e.g. (20, 20)
```

When I encounter problems like this, I usually like to consider the scenario where no recursion is needed(i.e. the base case) first. That said, what is the base case for this problem?

Well, when we reach position `(21, 21)`, that means we should stop recursing and return some value. I chose to return 1 from that case because that signifies: when we arrive at the target location, we get one path.

There are also two other special scenarios we need to take into account:

- When we reach any node in the right column, we should stop recursing and just return 1 since the only way to reach the target is going down.
- Likewise, if we are at the bottom row, it's also logical to return 1 because you can only go to the right in this case.

Now that we have the special and base cases, let's think about the normal recursion part:

- The number of ways to get from a node to the target is equal to the sum of the numbers of ways computed from the two nodes that are below and to the right of the current node respectively.
- Therefore, let `f(a, b)` be the recursive function that calculates the number of paths from a node, where `a` is the row number and `b` is the column number, then `f(a, b) = f(a + 1, b) + f(a, b + 1)`.

## My Implementation

```python
# python version 3.10
def numPaths(dimensions: tuple[int], location: tuple[int] = (0, 0), memo = {}):
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

# Calling the function as follows would give you the desired result
numPaths((20, 20))
```

## Conclusion

This is a very nice problem to familiarize yourself with the basic concepts in dynamic programming and how to optimize your algorithm, and the difference in performance is evident when it's run with and without memoization.
