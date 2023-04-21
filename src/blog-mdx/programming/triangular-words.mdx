---
title: "Algorithm styled question - Triangular Words"
description: "A quick solution to Project Euler #42"
date: 2022-07-05
keywords:
  - Math
  - Algorithms
  - Recursion
---

## Problem Statement

NOTE: This is adapted from [problem 42 of Project Euler](https://projecteuler.net/problem=42)

The nth term of the sequence of triangle numbers is given by, $t_n = \frac{n}{2}(n+1)$; so the first ten triangle numbers are:

> 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

By converting each letter in a word to a number corresponding to its alphabetical position and adding these values we form a word value. For example, the word value for _'SKY'_ is $19 + 11 + 25 = 55 = t_{10}$. If the word value is a triangle number then we shall call the word a triangle word.

Using words.txt(available on the problem's page), a 16K text file containing nearly two-thousand common English words, how many are triangle words?

## Testing If a Number Is Triangular

Before we start coding, let's take a look at the given formula:

$$
t_n = \frac{n}{2}(n+1)
$$

It's evident that we can use this formula to calculate the nth term in the triangular number sequence if we have $n$.

However, what we are really trying to do is verifying if the word value is actually a triangular number. And to do this, let's rearrange the equation and see what happens:

$$
\begin{align*}
&t_n = \frac{n}{2}(n+1)\\
\Longleftrightarrow\space&2t_n = n^2 + n\\
\Longleftrightarrow\space&n^2 + n - 2t_n = 0
\end{align*}
$$

Now that we have a quadratic, it would usually be a good idea to isolate what we need to calculate from the equation, so we can bring in the quadratic formula and workout the relationship between $n$ and $t$:

$$
n = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

Looking at the coefficients of the quadratic, we will notice that the only one that varies as $t_n$ does is $c$, therefore, we can safely assume that:

$$
\begin{align*}
n &= \frac{-1 \pm \sqrt{1 - 4(1)(-2t_n)}}{2}\\ \\
n &= \frac{-1 \pm \sqrt{1 + 8t_n}}{2}
\end{align*}
$$

Thus we can implement our check in Python as follows, where we are basically checking if the fraction, with $t_n$(shown by param x) substituted, gives us the index of x in the sequence, which must then be an integer.

```python
def isTriangular(x: int):
    return (-1 + (1 + 4 * (x * 2))**0.5) % 2 == 0
```

## What's Left?

Hopefully the remaining part of the solution is more straightforward:

```python
def isTriangularWord(w: str):
    # adds up the alphabetical position of each letter
    # to compute the "word value"
    total = sum(map(lambda c: U.index(c) + 1, w))
    # test if that value is a triangular number
    return isTriangular(total)


def countTriangular(words: list[str]):
    count = 0

    for word in words:
        if isTriangularWord(word):
            count += 1

    return count
```

## Conclusion

I quite like this problem because I could easily replace trial and error processes with some mathematical thinking.
