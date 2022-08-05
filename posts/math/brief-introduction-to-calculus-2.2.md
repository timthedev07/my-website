---
title: "A Brief Introduction to Calculus: Part 2.2 - Area Under the Curve"
description: "If you're new to calculus and know nothing about it, then this blog is aimed to get a gist of it for you, but not to turn you into a master of calculus."
date: 2022-08-05
keywords:
  - Math
  - Calculus
  - Further Math
thumbnail: brief-introduction-to-calculus-2
---

# Introduction

This series would primarily focus on the three fundamental areas of calculus - _derivatives_, _limits_, and _integration_, looking briefly at some of the different concepts to get started with calculus.; thus no prior knowledge of calculus is needed.

**This is the second chapter of the second part of the series, and it is about finding the area under the curve.**

**Further content on this topic will be published in separate articles for performance reasons.**

So now, let's sit back, relax, and have some fun!

# Quick Access

- [Part 1 - Derivatives](/blog/math/brief-introduction-to-calculus-1)
- [Part 2.1 - Definite & Indefinite Integrals](/blog/math/brief-introduction-to-calculus-2.1)
- [Part 2.2 - Area Under the Curve](/blog/math/brief-introduction-to-calculus-2.2)
- [Part 2.2 - Area Under the Curve](/blog/math/brief-introduction-to-calculus-2.3)

# Using Integration to Find the Area

Firstly, let's see how we can use **definite integrals** to calculate **the exact area** of a region bounded by the $x$-axis, and the lines $x = a$ and $x = b$.

The method for Riemann sum, which will be discussed later, is an approximation of the integral, because the value calculated from the integral is the limit of the Riemann sum, meaning that the approximation will always converge(approach) on the value of the integral.

## The Basic Scenario

When the entirety of the region required is on one side of the $x$-axis, we can find the area between the curve and the $x$-axis, bounded by the limits $[a, b]$ using the definite integral:

$$
\begin{align*}
\int_{a}^{b} f(x)\, dx
\end{align*}
$$

### Examples

1. The function of the curve is given by $f(x) = -x^2 + 10$, find the exact area of the shaded region.

![](https://raw.githubusercontent.com/timthedev07/my-website/dev/assets/area-curve-simple.png)

$$
\begin{align*}
a &= -2 \\
b &= 2 \\ \\
A &= \int_{-2}^{2} \left[-x^2 + 10\right]\, dx \\
&= \left[-\frac{1}{3}x^3 + 10x\right]_{-2}^{2} \\
&= 34\frac{2}{3}
\end{align*}
$$

2. The function of the curve is given by $f(x) = \left(x-4\right)\left(x+4\right)$, find the exact area of the shaded region.

![](https://raw.githubusercontent.com/timthedev07/my-website/dev/assets/area-curve-simple-2.png)

$$
\begin{align*}
I &= \int_{0}^{4} (x-4)(x+4)\, dx \\
&= \int_{0}^{4} \left(x^2 - 16\right)\, dx \\
&= \left[\frac{x^3}{3} - 16x\right]_{0}^{4} \\
&= -\frac{128}{3}
\end{align*}
$$

Now, because (in this context) area is a scalar quantity, we should take the absolute value of the integral.

$$
\begin{align*}
\therefore A &= |-\frac{128}{3}| \\
&= 42\frac{2}{3}
\end{align*}
$$

# Riemann Sum

The Riemann sum is a strategy for estimating the area under a curve by dividing the area into $n$ rectangular strips, where each rectangle has a defined width, namely $\Delta x$, and its height is defined by the $y$ value calculated using each x value $f(x_i)$.

![](https://raw.githubusercontent.com/timthedev07/my-website/dev/assets/riemann-strips.png)

There are three types of Riemann sums:

- Right endpoint sum
- Left endpoint sum
- Midpoint rule

We will discuss the differences later.

The formula is as follows, however, for the different types of Riemann sum, the formulas differ a little.

$$
\begin{align*}
A \approx \sum_{i=1}^{n}\, \Delta x f(x_i)
\end{align*}
$$

![](https://raw.githubusercontent.com/timthedev07/my-website/dev/assets/riemann-labels.png)

Let's break this down step by step.

- $n$ is the number of strips the area is divided into; generally the higher $n$ is, the closer the approximation
- $\Delta x$ is the width of each rectangle, and it's given by $\frac{b - a}{n}$, where $b$ and $a$ are the limits on the x-axis
- $f(x)$ is the function of the curve
- $x_i$ is the ith value in the arithmetic sequence, given by $x_i = x_1 + (i - 1)\Delta x$, which is based on $U_i = U_1 + (n-1)d$
- $x_1 = a$, which means that the sequence starts at the lower bound, hence $x_i = a + (i - 1)\Delta x$

Furthermore, let $R(n)$ be the function for the left endpoint Riemann approximation:

$$
\begin{align*}
R(n) = \sum_{i=1}^{n}\, \Delta x f(x_i)
\end{align*}
$$

As $n$, the number of subintervals is increased, the blank gap reduces, therefore increasing the resulting approximated area:

![](https://raw.githubusercontent.com/timthedev07/my-website/dev/assets/riemann-n-increase.gif)

However, the value of $R(n)$ will never exceed a certain value no matter how large $n$ becomes, and that limit is the exact area of the curve.

By definition, the integral used to find the area for the same region is exactly the limit of $R(n)$ as $n \rightarrow \infty$:

$$
\begin{align*}
\int_{a}^{b} f(x)\, dx = \lim_{n \to \infty} R(n)
\end{align*}
$$

## Left Endpoint, Right Endpoint, and Midpoint

For a **_left endpoint sum_**, each rectangle's top-left corner touches the curve, and thus the approximation is always below the actual area.

![](https://raw.githubusercontent.com/timthedev07/my-website/dev/assets/left-endpoint.png)

In comparison, for a **_right endpoint sum_**, each rectangle's top-right corner touches the curve, therefore the approximation will always be above the actual area.

Note that, in this case, the height of the rectangles is $f(x)$ for which $x$ is shifted by $\Delta x$ to the right, thus:

$$
\begin{align*}
A \approx \sum_{i=1}^{n}\, \Delta x f(x_i + \Delta x)
\end{align*}
$$

![](https://raw.githubusercontent.com/timthedev07/my-website/dev/assets/right-endpoint.png)

Finally, for a **_midpoint_** rule, the curve meets each strip at the midpoint of the length of the rectangle.

Likewise, for the midpoint rule, the height of the rectangles is $f(x)$ for which $x$ is shifted by $\frac{1}{2}\Delta x$ to the right, thus:

![](https://raw.githubusercontent.com/timthedev07/my-website/dev/assets/midpoint-riemann.png)

$$
\begin{align*}
A \approx \sum_{i=1}^{n}\, \Delta x f(x_i + \frac{1}{2}\Delta x)
\end{align*}
$$

## Example

Calculate the area under the curve $f(x)=x^{2} + 1$ bounded by $x = 0$ and $x = 3$. Use the midpoint rule.

$$
A \approx \sum_{i=1}^{n}\, \Delta x f(x_i + \frac{1}{2}\Delta x)\\
a = 0 \\
b = 3
$$

$$
\begin{align*}
\textnormal{Let } n &= 18 \\ \\
\Delta x &= \frac{3 - 0}{18} = \frac{1}{6} \\
A &\approx \sum_{i=1}^{18}\, \frac{1}{6} \times f(a + \frac{1}{6}(i - 1) + \frac{1}{2} \times \frac{1}{6}) \\
&\because a = 0 \\
A &\approx \sum_{i=1}^{18}\, \frac{1}{6} \times f(\frac{1}{6}(i - 1) + \frac{1}{12}) \\

A &\approx \frac{1727}{144} \\
&\approx 11\frac{143}{144}
\end{align*}
$$

You will realize that the value is very close to what the definite integral would give:

$$
\begin{align*}
\int_{0}^{3} f(x)\, dx = 12
\end{align*}
$$

# Conclusion

This blog introduced a few _basic_ concepts of definite and indefinite integrals, and more content will be covered in future blogs of this part of the series.

Thanks for reading!
