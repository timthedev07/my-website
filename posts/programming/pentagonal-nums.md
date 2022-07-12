---
title: "Project Euler #44: Pentagon numbers"
description: My solution to problem 44 of project euler in Python and C++
date: 2022-07-08
keywords:
  - Python
  - Algorithms
  - C++
  - Math
---

## Problem Statement

Pentagonal numbers are generated by the formula, $P_n=n(3n−1)/2$. The first ten pentagonal numbers are:

1, 5, 12, 22, 35, 51, 70, 92, 117, 145, ...

It can be seen that $P_4 + P_7 = 22 + 70 = 92 = P_8$. However, their difference, 70 − 22 = 48, is not pentagonal.

Find the pair of pentagonal numbers, $P_j$ and $P_k$, for which their sum and difference are pentagonal and D = $|{P_k − P_j}|$ is minimized; what is the value of $D$?

## Let's Analyze the Problem Mathematically

The pair we are trying to find is $P_j$ and $P_k$, and it also has to satisfy the constraint that their sum and different are also pentagonal. Therefore we can write two equations for the sum and difference respectively, where $a$ and $b$ are the indices of the the resulting pentagonal number:

$$
\begin{align*}
&P_j + P_k = P_a\\
\Longleftrightarrow\space&\frac{j(3j−1)}{2}+\frac{k(3k−1)}{2} = \frac{a(3a−1)}{2}\\
\Longleftrightarrow\space&j(3j−1)+k(3k−1) = a(3a−1)
\end{align*}
$$

Let $j(3j−1)+k(3k−1)$ be $t_1$:

$$
\begin{align*}
&j(3j−1)+k(3k−1) = a(3a−1)\\
\Longleftrightarrow\space&t_1 = 3a^2−a\\
\Longleftrightarrow\space&3a^2−a - t_1 = 0\\
\therefore\space a &= \frac{1 \pm \sqrt{1 - 4(3)(-t_1)}}{2 \cdot 3}\\
&=\frac{1 \pm \sqrt{1 + 12t_1}}{6}
\end{align*}
$$

Let $j(3j−1)-k(3k−1)$ be $t_2$, and the same applies to the difference:

$$
\begin{align*}
b=\frac{1 \pm \sqrt{1 + 12t_2}}{6}
\end{align*}
$$

Now that we have a formula for $a$ and $b$, we can simplify verify if a pair meets the stated requirements by testing if the numerator is divisible by 6(which would therefore make $a$ and $b$ integers).

However, we can try to determined the $\pm$ in the numerators of our equations.

We know that $a$ and $b$ are indices of a sequence, so they have to be **positive** integers.

Let's look at $\sqrt{1 + 12t}$, here, we can say that $12t$ is some constant added to 1, thus transforming it into $\sqrt{1 + k}$. Since $t$ is a **pentagonal number**, which starts at 1, it's certain that $t > 0$, and so $k = 12t > 0$. Therefore, $\sqrt{1 + k}$ is definite greater than 1.

Back to the numerator:

$$
\begin{align*}
{1 \pm \sqrt{1 + 12t}}
\end{align*}
$$

At this stage, since we know that the numerator has to be positive to make $a$ and $b$ positive, we can safely eliminate the minus sign and obtain:

$$
\begin{align*}
\frac{1 + \sqrt{1 + 12t}}{6}
\end{align*}
$$

Finally, to check if a pair satisfies the condition, we can simply substitute $j(3j−1)+k(3k−1)$ or $j(3j−1)-k(3k−1)$ for the $t$ values and see if the numerator is divisible by 6.

## Python Implementation

```python
def getPairDiff(k, j):
    return math.fabs(k * (3 * k - 1) / 2 - j * (3 * j - 1) / 2)

def isValidPair(k, j):
    x = k * (3 * k - 1)
    y = j * (3 * j - 1)

    # calculating the sqrt part
    p1 = (1 + 12 * (
        abs(x - y)
    ))**0.5

    # slight optimization, avoids further computation in some scenarios
    if not p1.is_integer():
        return False

    p2 = (1 + 12 * (
        x + y
    ))**0.5

    # same optimization as the p1 check
    if not p2.is_integer():
        return False

    # check for divisibility
    diffIsPentagonal = (1 + p1) % 6 == 0
    sumIsPentagonal = (1 + p2) % 6 == 0

    # both numerators have to be divisible by 6
    return sumIsPentagonal and diffIsPentagonal

def main():
    d = None
    i = 2

    start = time.time()

    while not d:
        for j in range(1, i):
            if isValidPair(i, j):
                d = getPairDiff(i, j)

        i += 1

    end = time.time()

    d = int(d)

    print(
        f"Computed solution: {d}; took {1000*(round(1000 * (end-start)) / 1000)}ms")
```

## C++ Implementation

```cpp
#include <iostream>
#include <cmath>

int getPairDiff(int k, int j)
{
    return abs(k * (3 * k - 1) / 2 - j * (3 * j - 1) / 2);
}

bool isValidPair(int k, int j)
{
    int x = k * (3 * k - 1);
    int y = j * (3 * j - 1);

    double t1 = sqrt(1 + 12 * (
        abs(x - y)
    ));

    if (trunc(t1) != t1)
    {
        return false;
    }

    double t2 = sqrt(1 + 12 * (
        x + y
    ));

    if (trunc(t2) != t2)
    {
        return false;
    }

    double diff = (1 + t1) / 6;
    if (trunc(diff) != diff)
    {
        return false;
    }

    double sum = (1 + t2) / 6;
    return trunc(sum) == sum;
}

int main() {
    int d = 0;
    int i = 2;

    while (d == 0)
    {
        for (int j = 1; j < i; ++j)
        {
            if (isValidPair(i, j))
            {
                d = getPairDiff(i, j);
                break;
            }
        }
        i++;
    }

    printf("Computed solution: %d", d);
}
```

## Performance

I implemented the algorithm in C++ because with Python, the execution time was hideous. However, in C++, it's much faster.

Average run times:

- C++
  ```bash
  $ time ./main
  Computed solution: 5482660
  real    0m0.017s
  user    0m0.017s
  sys 0m0.000s
  ```
- Python
  ```bash
  $ python src/main.py
  Computed solution: 5482660; took 1746.0ms
  ```