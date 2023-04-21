---
title: "Algorithm Styled Question - Max Path Sum"
description: My Python implementation of the algorithm used to solve problem 67 of Project Euler.
date: "2022-06-28"
keywords:
  - Programming
  - Algorithms
  - Math
  - Python
---

## Problem Statement

NOTE: This is adapted from [problem 67 of project euler](https://projecteuler.net/problem=67)

By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

```
   3
  7 4
 2 4 6
8 5 9 3
```

That is, 3 + 7 + 4 + 9 = 23.

Find the maximum total from top to bottom of the triangle in [the 15Kb text file](https://projecteuler.net/project/resources/p067_triangle.txt)

NOTE: It is not possible to try every route to solve this problem, as there are $2^{99}$ altogether! If you could check one trillion ($10^{12}$) routes every second it would take over twenty billion years to check them all. There is an efficient algorithm to solve it. ;o)

## The Algorithm I Used

I used recursion because it's the most intuitive and straightforward approach for me, but it's also because it's easier to implement.

Here is the code:

```python
def maxSum(triangle: list[list[int]], layer: int, node: int, memo: dict):
    curr = triangle[layer][node]

    if layer == len(triangle) - 1:
        return curr

    key = f"{layer}|{node}"

    if memo.get(key):
        return memo[key]

    res = max(maxSum(triangle, layer + 1, node, memo),
              maxSum(triangle, layer + 1, node + 1, memo)) + curr
    memo[key] = res

    return res


def solve(triangle: list[str]):
    integerizedTriangle = list(map(lambda row: list(
        map(int, row)), map(lambda x: x.split(" "), triangle)))
    memo = {}
    return maxSum(integerizedTriangle, 0, 0, memo)
```

## The `maxSum` Function

```python
def maxSum(triangle: list[list[int]], layer: int, node: int, memo: dict):
```

### Parameters

The function takes four arguments, the first oen is the triangle represented as a 2d integer array, where each nested array is the equivalent of a layer in the triangle.

`layer` and `node` are simply indices used to determine the position of the current node we are looking at. `layer` is the row and `node` is the ith item in that row(0-indexed).

Lastly, `memo` is the dictionary used for optimization with memoization, whereby a key representing the position of a node is mapped to its computed maximum sum.

### Explanation

```python
def maxSum(triangle: list[list[int]], layer: int, node: int, memo: dict):
    # get's the value of the current node in the triangle
    curr = triangle[layer][node]

    # if we are at the bottom layer of the triangle, we reach a base case
    if layer == len(triangle) - 1:
        # then return the current node as the maximum sum as there's nothing below it
        return curr

    # define our own representation for the location of the node
    key = f"{layer}|{node}"

    # check if the maximum sum for this node is already computed and stored in memo
    if memo.get(key):
        # if so, return the memoized value, avoiding further time-consuming computation
        return memo[key]

    # if no value is memoized, recursively calculate the maximum sum for the current node
    # it works by comparing the *maximum sums* of the two nodes immediately below it
    # (which we will have to compute recursively), and adding the greater one to the value
    # of the curren node
    res = max(maxSum(triangle, layer + 1, node, memo),
              maxSum(triangle, layer + 1, node + 1, memo)) + curr
    # memoize the value
    memo[key] = res

    # return that as the result
    return res
```

### Efficiency

For this specific input, it took the algorithm about 0.0073 seconds(on average) to run, which, I'm pretty happy with.

## Conclusion

Overall, it was a very fun problem to attempt and having the algorithm work on the first try was very exciting.
