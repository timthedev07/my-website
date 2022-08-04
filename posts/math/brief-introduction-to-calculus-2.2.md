---
title: "A Brief Introduction to Calculus: Part 2.2 - Area Under the Curve"
description: "If you're new to calculus and know nothing about it, then this blog is aimed to get a gist of it for you, but not to turn you into a master of calculus."
date: 2022-08-06
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

# Riemann Sum

The Riemann sum is a strategy for estimating the area under a curve by dividing the area into $n$ rectangular strips, where each rectangle has a defined width, namely $\Delta x$, and its height is defined by the $y$ value calculated using each x value $f(x_i)$.

![](https://raw.githubusercontent.com/timthedev07/my-website/dev/assets/riemann-strips.png)

There are three types of Riemann sums:

- Right endpoint sum
- Left endpoint sum
- Midpoint sum

We will discuss the differences later.

The formula is as follows:

$$
\begin{align*}
A \approx \sum_{i=1}^{n}\, \Delta x f(x_i)
\end{align*}
$$

Let's break this down step by step.

- $n$ is the number of strips
- $\Delta x$ is the width of each rectangle, and it's given by $\frac{b - a}{n}$, where $b$ and $a$ are the limits on the x-axis
- $f(x)$ is the function of the curve

## Left Endpoint, Right Endpoint, and Midpoint

For a **_left endpoint sum_**, each rectangle's top-left corner touches the curve, and thus the approximation is always below the actual area.

![](https://raw.githubusercontent.com/timthedev07/my-website/dev/assets/left-endpoint.png)

In comparison, for a **_right endpoint_** sum, each rectangle's top-right corner touches the curve, therefore the approximation will always be above the actual area.

![](https://raw.githubusercontent.com/timthedev07/my-website/dev/assets/right-endpoint.png)

Finally, for a **_midpoint_** sum, the curve meets each strip at the midpoint of the length of the rectangle.

## Example

Calculate the area under the curve $f(x)=x^{2} + 1$ bounded by $x = 0$ and $x = 6$.

$$
\begin{align*}
\textnormal{Let } n &= 18 \\
\Delta x &= \frac{6 - 0}{18} = \frac{1}{3} \\
A &\approx \sum_{i=1}^{o}\,
\end{align*}
$$

# Using Integration to Find the Area

To start off, let's see how we can use **definite integrals** to calculate **the exact area**.

The method for Riemann sum was an approximation of the integral, because the value calculated from the integral is the limit of the Riemann sum, meaning that the approximation will always converge(approach) on the value of the integral.

# Conclusion

This blog introduced a few _basic_ concepts of definite and indefinite integrals, and more content will be covered in future blogs of this part.

Thanks for reading!
