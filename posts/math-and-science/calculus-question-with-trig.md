---
title: "A Nice Calculus Question Involving Trigonometry"
description: "How I approached an interesting calculus question with differentiation."
date: 2022-07-26
keywords:
  - Calculus
  - Trigonometry
  - Algebra
---

## Problem Statement

The maximum point on the curve with the equation $y = x\sqrt{\sin(x)}$, $0 < x < \pi$, is the point A. Show that the x-coordinate of point A satisfies the equation $2\tan(x) + x = 0$.

## My Approach

First, let $f(x) = x\sqrt{\sin(x)}$, and let's try to calculate its first derivative.

Apply the product rule:

$$
\begin{align*}
f'(x) = x \cdot g'(x) + \sin^{\frac{1}{2}}(x)
\end{align*}
$$

Where $g(x)$ is defined as follows:

$$
\begin{align*}
g(x) &= \sin^{\frac{1}{2}}(x)\\
\end{align*}
$$

Now, differentiate $g(x)$ with the chain rule:

$$
\begin{align*}
g'(x) &= \frac{1}{2} \sin^{-\frac{1}{2}}(x) \cdot \cos(x)\\
\end{align*}
$$

Substituting $g'(x)$ back into $f'(x)$:

$$
\begin{align*}
f'(x) &= x \cdot \frac{1}{2} \sin^{-\frac{1}{2}}(x) \cdot \cos(x) + \sin^{\frac{1}{2}}(x) \\
&= \sin ^ {\frac{1}{2}}(x)[1 + \frac{x}{2}\cos(x)\sin^{-1}(x)]
\end{align*}
$$

Given that a point A is a stationary point and thus its gradient is 0, we can form the following equation:

$$
\begin{align*}
0 &= \sin ^ {\frac{1}{2}}(x)[1 + \frac{x}{2}\cos(x)\sin^{-1}(x)]
\end{align*}
$$

Let's take a look at the two possible scenarios.

1. $\sin ^ {\frac{1}{2}}(x) = 0$

$$
\begin{align*}
\therefore\space& \sin(x) = 0 \\
\therefore\space& x = 0, \pi
\end{align*}
$$

However, as given by the question, $x$ should be greater than 0 and smaller than $\pi$, so this is certainly not the case.

What about the other possibility?

2. $[1 + \frac{x}{2}\cos(x)\sin^{-1}(x)] = 0$

$$
\begin{align*}
[1 + \frac{x}{2}\cos(x)\sin^{-1}(x)] &= 0 \\
\therefore \frac{x}{2}\cos(x)\sin^{-1}(x) &= -1 \\
\end{align*}
$$

$$
\begin{align*}
\Longleftrightarrow\space& \frac{x}{2}\frac{\cos(x)}{\sin(x)} = -1 \\
\Longleftrightarrow\space& \frac{x}{2\tan(x)} = -1 \\
\Longleftrightarrow\space& x = -2 \tan(x) \\
\Longleftrightarrow\space& x + 2 \tan(x) = 0 \\
\end{align*}
$$

## Conclusion

Can't be bothered to write a conclusion today.
