---
title: "A Brief Introduction to Calculus"
description: "If you're new to calculus and know nothing about it, then this blog is aimed to get a gist of it for you, but not to turn you into a master of calculus."
date: 2022-07-31
keywords:
  - Math
  - Calculus
  - Further Math
---

# Introduction

This blog would primarily focus on the three fundamental areas of calculus - _differentiation_, _limits_, and _integration_; thus no prior knowledge of calculus is needed.

Note: the content covered here would only require a solid understanding of basic algebra.

So now, let's sit back, relax, and have some fun!

# Functions

This is one of the most fundamental and critical ideas in calculus, so do ensure that you understand this part perfectly.

Functions are the way we define the relationship between an independent variable and a dependent variable. Like in computer science, a function has an input(mathematically called a variable) and an output(the value of a function).

For example, a quadratic equation in the form of $y = ax^2 + bx + c$ could be written as $f(x) = ax^2 + bx + c$ where $y = f(x)$.

In the example above, $ax^2 + bx + c$ would be the expression for the **value of the function** $f(x)$, i.e. the output, but it's also a representation of the relationship between $f(x)$, or $y$, and $x$; likewise $x$ would be the variable, i.e. the input.

Graphically, this is the equivalent of: for each x-coordinate, calculate its corresponding y-coordinate using $f(x)$; and the point $P(x, f(x))$ would hence be plotted, for example, on a cartesian graph.

# Differentiation

Differentiation in calculus refers to the process of finding the derivative of a function, which also represents the rate of change of a function.

The way I think of taking a derivative is a linear downward transformation since the indices of x are reduced by 1.

The mathematical representation of the derivative of a function is $f'(x)$ where the number of apostrophes after $f$ indicates the nth derivative of function $f(x)$; meanwhile you can also say that the first derivative of $y$, **with respect to** $x$, is $\frac{dy}{dx}$. Furthermore, the $nth$ derivative of $y$ is written as $\large\frac{d^{n}y}{dx^{n}}$

Not only can we calculate the derivative of a function, we can also calculate the derivative of a derivative. This might sound a bit confusing, but to put simply, say we have a function $f(x)$, its **first derivative** is $f'(x)$, and the derivative of the first derivative, i.e. the **second derivative** of $f(x)$, would be $f''(x)$, so on and so forth.

A function's derivative can be calculated by applying some rules _**to each term of the expression**_.

## Formulae for Differentiation

Here we will just discuss a few basic ones used in differentiation.

### $x^n$

$\frac{d}{dx}(x^n) = n \cdot x^{n - 1}$

In other words, move the previous power of x out for multiplication and subtract 1 to get the new index.

Examples:

- $\frac{d}{dx}(x^3) = 3x^2$
- $\frac{d}{dx}(x^{-1}) = -x^{-2}$
- $\frac{d}{dx}(5x^2) = 5 * 2x = 10x$, note: this can be proved with the product rule, which would be discussed later

### A Single Constant

When differentiating a single constant(a term that does not involve the variable that we are differentiating with respect to), like 7, $\pi$, etc., simply ignore the term in the resulting derivative.

To understand why, though, we can let $c$ be a constant, then it is also the equivalent of $c \cdot x^{0}$ and the value is unchanged as anything that $\not= 0$ to the power of 0 is 1.

Therefore, applying the rule above would give $0 \cdot c \cdot x^{-1}$, which would always equal 0.

Examples:

- $\frac{d}{dx}(4) = 0$
- $\frac{d}{dx}(\pi) = 0$
- $\frac{d}{dx}(t^2) = 0$ note that $\frac{d}{dx}$ signifies that we should any variable that's not x should be treated as a constant, thus the derivative of the expression **with respect to x** is 0.
- $\frac{d}{dx}(3px^4) = 12px^3$ in this case, p is treated as a constant that multiplies with 3 to make the coefficient of $x^4$.
- $\frac{d}{dx}(3x^2 - 10x + 5) = 6x - 10$

### Sine & Cosine

$$
\begin{align*}
\frac{d}{dx}\space& \sin(ax) = a \cdot \cos(ax) \\ \\
\frac{d}{dx}\space& \cos(x) = -a \cdot \sin(x)
\end{align*}
$$

Note that it's easier to have your angle(if in degrees) converted to radians before differentiating. (Hint: $\pi$ radians = $180^\circ$)

Examples:

- $\frac{d}{dx}[\sin(3x)] = 3\cos(3x)$
- $\frac{d}{dx}[\frac{1}{2}\sin(4x)] = 2\cos(4x)$
- $\frac{d}{dx}[2\cos(4x)] = -8\sin(4x)$

### The Exponential Function

$$
\frac{d}{dx}\space e^{ax} = a \cdot e^{ax}
$$

Examples:

- $\frac{d}{dx}\space e^{x} = e^{x}$
- $\frac{d}{dx}\space 3e^{4x} = 12e^{4x}$

### Logarithmic Functions

$$
\frac{d}{dx}[\ln(u)] = \frac{u'}{u}
$$

Where $u'$ is the derivative of $u$.

Examples:

- $\frac{d}{dx}\space \ln(x^n) = \frac{n}{x}$
- $\frac{d}{dx}\space \ln(\sin(x)) = \frac{\cos(x)}{\sin(x)} = \tan^{-1}(x) = \cot(x)$
- $\frac{d}{dx}\space \ln(\cos(x)) = -\frac{\sin(x)}{\cos(x)} = -\tan(x)$
- $\frac{d}{dx}\space \ln(c) = 0$
- $\frac{d}{dx}\space \ln(c) = 0$
- $\frac{d}{dx}\space \ln(e^{ax}) = a$

## Rules of Differentiation

### The Chain Rule

This is when an expression can be seen as a function nested inside another.

If $y = f(g(x))$, then $y'$ or $\frac{dy}{dx} = f'(g(x)) \cdot g'(x)$.

Examples:

1. Differentiate $\sin(2x^2 + 3)$

$$
\begin{align*}
f(x) &= \sin(x) \\
f'(x) &= \cos(x) \\ \\

g(x) &= 2x^2 + 3 \\
g'(x) &= 4x \\ \\

\frac{dy}{dx} &= \cos(2x^2 + 3) \cdot 4x
\end{align*}
$$

2. Differentiate $\large e^{x^2+x}$

$$
\begin{align*}
f(x) &= e^x \\
f'(x) &= e^x \\ \\

g(x) &= x^2 + x \\
g'(x) &= 2x + 1 \\ \\

\frac{dy}{dx} &= e^{x^2 + x}(2x + 1)
\end{align*}
$$

3. Differentiate $(x^3 + 4)^6$

$$
\begin{align*}
f(x) &= x^6 \\
f'(x) &= 6x^5 \\ \\

g(x) &= x^3 + 4 \\
g'(x) &= 3x^2 \\ \\

\frac{dy}{dx} &= 6(x^3 + 4)^5 \cdot 3x^2 \\
&= 18x^2(x^3 + 4)^5
\end{align*}
$$

### The Product Rule

This is used to differentiate a term that is made by multiplying two others, e.g. $\sin(x)\cdot x^3$

If $y = uv$, then $\frac{dy}{dx} = u \cdot v' + v \cdot u'$.

Examples:

1. Differentiate $y = e^x \sin(x)$

$$
\begin{align*}
u &= e^x \\
u' &= e^x \\ \\

v &= \sin(x) \\
v' &= \cos(x) \\ \\

\frac{dy}{dx} &= e^x\cos(x) + e^x\sin(x) \\
&= e^x[\cos(x) + \sin(x)]
\end{align*}
$$

2. Differentiate $y = x^2(3 + 2x)^4$

$$
\begin{align*}
u &= x^2 \\
u' &= 2x \\ \\

v &= (3 + 2x)^4 \\
v' &= 8(3 + 2x)^3\\ \\

\frac{dy}{dx} &= 8x^2(3+2x)^3 + 2x(3+2x)^4 \\
&= 2x(3+2x)^3[4x + (3 + 2x)] \\
&= 2x(3+2x)^3[6x + 3] \\
&= 6x(3+2x)^3[2x + 1]
\end{align*}
$$

### The Quotient Rule

To differentiate a quotient(an expression obtained from dividing one value by another).

If $y = \frac{u}{v}$, then $\frac{dy}{dx} = \large\frac{vu' - uv'}{v^2}$.

Examples:

1. Differentiate $y = \frac{x}{3x + 4}$

$$
\begin{align*}
u &= x \\
u' &= 1 \\ \\

v &= 3x + 4 \\
v' &= 3 \\ \\

\frac{dy}{dx} &= \frac{3x+4 - 3x}{(3x+4)^2} \\
&= \frac{4}{(3x+4)^2}
\end{align*}
$$

2. Differentiate $\frac{e^{x^2}}{x}$

$$
\begin{align*}
u &= e^{x^2} \\
u' &= e^{x^2} \cdot 2x \\ \\

v &= x \\
v' &= 1 \\ \\

\frac{dy}{dx} &= \frac{2x^2e^{x^2} - e^{x^2}}{x^2} \\
&= \frac{e^{x^2}(2x^2 - 1)}{x^2}
\end{align*}
$$

## Gradient Functions

Now that you have some basic knowledge of the different rules and formulae used to differentiate functions. Let's talk a bit more about the graphical interpretations.

**The first derivative of a function is always the gradient function of the curve/line.**

For example, for a linear function $y = mx + c$, its derivative is given by $\frac{dy}{dx} = m$, which means that for any linear function, its derivative is always its gradient.

Now, when it comes to a non-linear function, for any arbitrary point $P$ on the curve, it is said to have its own gradient, and its gradient is that of the tangent to the curve at P.

The green line is the tangent to the blue curve at P. Try to drag the point $P$, and you'll see that the gradient of the tangent varies as $P$ moves along the curve.

<iframe src="https://www.desmos.com/calculator/kynbnsv9ss?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

Thus **the gradient of a curve changes**, unlike a linear equation where the gradient is constant no matter what $x$ is.

Take point $P(x, f(x))$, how do we find the gradient at $P$ then?

As discusses above, we can formulate a gradient function for any line/curve by taking the derivative of the original function.

In this example, the curve shown is a quadratic function, so let $f(x) = ax^2 + bx + c$. Taking its derivative would give $f'(x) = 2ax + b$, which means that the tangent's gradient at $P(x, f(x))$ is simply equal to $f'(x)$.
