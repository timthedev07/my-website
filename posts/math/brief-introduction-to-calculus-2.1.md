---
title: "A Brief Introduction to Calculus: Part 2.1 - Definite and Indefinite Integrals"
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

**This is the first chapter of the second part of the series, and it is about definite and indefinite integrals.**

**Further content in this topic will be published in separate articles for performance reasons.**

So now, let's sit back, relax, and have some fun!

# Integration

The process of integration is essentially the reverse operation of differentiation. That means, when differentiating a function, you tend to decrease the degree of the function to work out a rate of change; whereas integration reverses this process.

An integral is also the **anti-derivative** of a function.

There are two types of integrals:

- Indefinite integral
- Definite integral

## Indefinite Integrals

An **indefinite integral** is written in the form of $\int y\,dx$, where $y$ is the **expression to be integrated(aka the integrand)** and $x$ is the **variable to integrate with respect to**.

For example, $\int 2x\, dx$, is a indefinite integral whose integrand is $2x$ and variable to integrate is $x$.

Since an integral produces another function, by convention, that new function, i.e. the anti-derivative is represented by $F(x)$. In other words:

$$
\begin{align*}
\int f(x)\, dx = F(x) + C
\end{align*}
$$

where $C$ is some constant

As said earlier, integration is the reverse process of differentiation, so sometimes it will attempt to construct the function that's being differentiated.

For instance, if $f(x) = x^2$, then the derivative of $f(x)$ is given by $f'(x) = 2x$. However, let's say that we have another function $g(x) = x^2 + 5$, its derivative would also be $g'(x) = 2x$. And hence with these two functions as integrands, we would obtain the same integral:

$$
\begin{align*}
\int 2x\, dx
\end{align*}
$$

Thus, if you were asked to find $f(x)$ given that $f'(x) = 2x$, you cannot give a definite and single answer, because as seen above, $f'(x) = g'(x)$ but $f(x) \not= g(x)$; and this is due to the constant in $g(x)$, which is eliminated in the process of differentiation.

However, we can say that:

$$
\begin{align*}
\int 2x\, dx = x^2 + C
\end{align*}
$$

Where $C$ is a possible constant ignored/removed when differentiating; it could be anything, but without further information we won't be able to find $C$.

## Rules for Integration

Let's discuss some basic rules for integration before moving on to definite integrals.

Bear in mind that integration is the inverse operation, so you an verify them yourself if you want to see why these rules make sense.

Just like differentiating, you will need to integrate term by term.

Note that it's also very important to pay attention to the part of $dx$, because it indicates what variable you should integrate with respect to.

When applying the following rules to all the terms in a function, the constant $C$ is only added at the end and doesn't need to be included in every integrated term.

### Powers of $x$

$$
\begin{align*}
\int x^n\, dx = \frac{x^{n + 1}}{n + 1} + C \space\space\space (n \not= -1)
\end{align*}
$$

#### Examples

1. Find $\int 3x^2\, dx$

$$
\begin{align*}
&\int 3x^2\, dx \\
=& \frac{3}{3}x^3 + C \\
=& x^3 + C
\end{align*}
$$

2. Find $\int x^4\, dx$

$$
\begin{align*}
\int x^4\, dx = \frac{x^5}{5} + C
\end{align*}
$$

3. Find $\int \left(\sqrt{x} + 2x^3\right)\, dx$

$$
\begin{align*}
& \int (x^{\frac{1}{2}} + 2x^3)\, dx \\
=& \frac{2}{3}x^\frac{3}{2} + \frac{1}{2}x^4 + C
\end{align*}
$$

### A Single Constant

$$
\begin{align*}
\int a\, dx = ax + C
\end{align*}
$$

#### Example

$$
\begin{align*}
\int 3\, dx = 3x + C
\end{align*}
$$

### The Exponential Function

$$
\begin{align*}
\int e^{ax}\, dx = \frac{1}{a}e^{ax} + C
\end{align*}
$$

#### Example

Find $\int 5e^{-3x}\, dx$

$$
\begin{align*}
& \int 5e^{-3x}\, dx \\
=&\space-15e^{-3x} + C
\end{align*}
$$

### Sine & Cosine

$$
\begin{align*}
&\int \sin(ax)\, dx = -\frac{1}{a}\cos(ax) + C \\ \\
&\int \cos(ax)\, dx = \frac{1}{a}\sin(ax) + C \\
\end{align*}
$$

#### Example

find $I = \int \left(2\cos(x) + 3e^{-x} - \sin(2x)\right)\, dx$

$$
\begin{align*}
\int 2\cos(x)\, dx &= 2\sin(x) \\
\int 3e^{-x}\, dx &= -3e^{-x} \\
\int -\sin(2x)\, dx &= -(-\frac{1}{2}\cos(2x)) \\
&= \frac{1}{2}\cos(2x) \\ \\
\end{align*}
$$

$$
I = 2\sin(x) - 3e^{-x} + \frac{1}{2}\cos(2x) + C
$$

## Definite Integrals

Unlike indefinite integrals, these integrals have a limit of integration, composed of an upper and a lower bound. Moreover, they compute a definite value instead of producing a function.

A definite integral is written as follows:

$$
\int_{a}^{b} y\, dx
$$

What are $a$ and $b$ then?

$b$ represents the **upper limit** of integration, and $a$ represents the **lower limit**.

As discussed earlier, a function produced by an indefinite integral is written as $F(x)$.

However, a definite integral is the result of the calculation $F(b) - F(a)$ .

Hence:

$$
\begin{align*}
& \int_{a}^{b} f(x) \, dx \\
=& \left[\,F(x)\,\right]_{a}^{b} \\
=& F(b) - F(a)
\end{align*}
$$
