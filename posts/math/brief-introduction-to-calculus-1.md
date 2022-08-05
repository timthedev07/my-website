---
title: "A Brief Introduction to Calculus: Part 1 - Derivatives"
description: "If you're new to calculus and know nothing about it, then this blog is aimed to get a gist of it for you, but not to turn you into a master of calculus."
date: 2022-08-03
keywords:
  - Math
  - Calculus
  - Further Math
---

# Introduction

This series would primarily focus on the three fundamental areas of calculus - _derivatives_, _limits_, and _integration_, looking briefly at some of the different concepts to get started with calculus.; thus no prior knowledge of calculus is needed.

**This is the first part of the series, it is entirely about derivatives**

Note: the content covered here would only require a solid understanding of basic algebra.

So now, let's sit back, relax, and have some fun!

# Quick Access

- [Part 1 - Derivatives](/blog/math/brief-introduction-to-calculus-1)
- [Part 2.1 - Definite & Indefinite Integrals](/blog/math/brief-introduction-to-calculus-2.1)
- [Part 2.2 - Area Under the Curve](/blog/math/brief-introduction-to-calculus-2.2)
- [Part 2.2 - Area Bounded by Two Equations](/blog/math/brief-introduction-to-calculus-2.3)

# Functions

This is one of the most fundamental and critical ideas in calculus, so do ensure that you understand this part perfectly.

Functions are the way we define the relationship between an independent variable and a dependent variable. Like in computer science, a function has an input(mathematically called a variable) and an output(the value of a function).

For example, a quadratic equation in the form of $y = ax^2 + bx + c$ could be written as $f(x) = ax^2 + bx + c$ where $y = f(x)$.

In the example above, $ax^2 + bx + c$ would be the expression for the **value of the function** $f(x)$, i.e. the output, but it's also a representation of the relationship between $f(x)$, or $y$, and $x$; likewise $x$ would be the variable, i.e. the input.

Graphically, this is the equivalent of for each x-coordinate, calculate its corresponding y-coordinate using $f(x)$; and the point $P(x, f(x))$ would hence be plotted, for example, on a cartesian graph.

# Derivatives

Differentiation in calculus refers to the process of finding the derivative of a function, which also represents the rate of change of a function.

The way I think of taking a derivative is a linear downward transformation since the indices of x are reduced by 1.

The mathematical representation of the derivative of a function is $f'(x)$ where the number of apostrophes after $f$ indicates the nth derivative of function $f(x)$; meanwhile, you can also say that the first derivative of $y$, **with respect to** $x$, is $\frac{dy}{dx}$. Furthermore, the $nth$ derivative of $y$ is written as $\large\frac{d^{n}y}{dx^{n}}$

Not only can we calculate the derivative of a function, but we can also calculate the derivative of a derivative. This might sound a bit confusing, but to put it simply, say we have a function $f(x)$, its **first derivative** is $f'(x)$, and the derivative of the first derivative, i.e. the **second derivative** of $f(x)$, would be $f''(x)$, so on and so forth.

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
\frac{d}{dx}\space& \cos(ax) = -a \cdot \sin(ax)
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
- $\frac{d}{dx}\space \ln(\sin(x)) = \frac{\cos(x)}{\sin(x)} = \frac{1}{\tan(x)} = \cot(x)$
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

For example, for a linear function $y = mx + b$, its derivative is given by $\frac{dy}{dx} = m$, which means that for any linear function, its derivative is always its gradient.

Now, when it comes to a non-linear function, for any arbitrary point $P$ on the curve, it is said to have its own gradient, and its gradient is that of the tangent to the curve at P.

The green line is the tangent to the blue curve at P. Try to drag the point $P$, and you'll see that the gradient of the tangent varies as $P$ moves along the curve.

<iframe src="https://www.desmos.com/calculator/kynbnsv9ss?embed" width="100%" height="500" frameborder=0></iframe>

Thus **the gradient of a curve changes**, unlike a linear equation where the gradient is constant no matter what $x$ is.

Take point $P(x, f(x))$, how do we find the gradient at $P$ then?

As discussed above, we can formulate a gradient function for any line/curve by taking the derivative of the original function.

In this example, the curve shown is a quadratic function, so let $f(x) = ax^2 + bx + c$. Taking its derivative would give $f'(x) = 2ax + b$, and the tangent's gradient at $P(x, f(x))$ is simply equal to $f'(x)$.

### Calculating the Equation of The Tangent

Now that we have the gradient of the tangent, you might wonder, can we form an equation for the straight line?

We can use the formula for the equation of a straight line $y - y_1 = m(x - x_1)$, and in this case, $x_1$ and $y_1$ would be the coordinates of the point $P$.

**The equation of the tangent to a curve at** $P(a, f(a))$ is:

$$
y = f'(a)(x - a) + f(a)
$$

### The Normal

The normal is a straight line that crosses the tangent at 90 degrees(perpendicular) through the point where the tangent meets the curve.

Therefore, the normal's gradient is the negative reciprocal to that of the tangent.

<iframe src="https://www.desmos.com/calculator/4fhbarj2z8?embed" width="100%" height="500"></iframe>

Hence we can conclude that the equation of the normal can be calculated as follows:

$$
y = -\frac{1}{f'(a)}(x - a) + f(a)
$$

#### Example

> The equation of a curve is given by $f(x) = x^3 - 3x^2 + 2x - 1$, where $y = f(x)$, find the equations of the tangent and normal at the point (3, 5).

1. Find the gradient function by taking the function's derivative and calculating $f'(3)$

$$
\begin{align*}
f'(x) &= 3x^2 - 6x + 2 \\
f'(3) &= 3\cdot 3^2 - 6 \cdot 3 + 2 \\
&= 27 - 18 + 2 \\
&= 11
\end{align*}
$$

2. Find the equation of the tangent

$$
\begin{align*}
y &= f'(3)(x - 3) + f(3) \\
&= 11(x - 3) + [3^3 - 3\cdot 3^2 + 2 \cdot 3 - 1] \\
&= 11x - 33 + 5 \\
y &= 11x - 28
\end{align*}
$$

3. Find the equation of the normal

$$
\begin{align*}
y &= -\frac{1}{f'(3)}(x - 3) + f(3) \\
&= -\frac{1}{11}(x - 3) + 5 \\
&= -\frac{x}{11} + \frac{3}{11} + 5 \\
y &= -\frac{x}{11} + 5\frac{3}{11} \\
\end{align*}
$$

## Stationary Points

Stationary points are points on a curve such **that their tangent has a gradient of 0**(i.e., a horizontal line). They are said to be stationary because, at these points, the function is neither decreasing nor increasing.

A function can have multiple stationary points, or just one. For example, a quadratic curve($y = ax^2 + bx + c$) would have only one stationary point.

![](https://raw.githubusercontent.com/timthedev07/my-website/dev/assets/stationary-calculus-0.png)

There are three types of stationary points:

- Maximum
- Minimum
- Neither

For example, the point labeled in the image is a **minimum stationary point**.

A stationary point is a **turning point** if it is where the curve changes from increasing to decreasing, or the other way around.

In the image above, the labeled point is a **_minimum turning point_**, because from there, the function becomes increasing.

A polynomial function of degree $n$ would have at most $n - 1$ turning points. E.g., a quadratic function(degree 2) has at most $2 -1 = 1$ turning points.

### Finding the Stationary Points

As said above, a stationary point has a gradient of 0. So to calculate the coordinates of the stationary points of a function set $f'(x) = 0$ and find the solutions of x

These values of x would be the x-coordinates of the stationary points, and to find the corresponding y-coordinates, simply calculate $f(x)$ for each x-coordinate.

#### Example

![](https://raw.githubusercontent.com/timthedev07/my-website/dev/assets/stationary-calculus-2.png)

The function of the curve above is given by $f\left(x\right)\ =\ -x^{2\ }+3x+2$; find the coordinates of the stationary point P.

1. Find the derivative of $f(x)$

$$
\begin{align*}
f'(x) = -2x + 3
\end{align*}
$$

2. Solve for $x$ when $f'(x) = 0$

$$
\begin{align*}
0 &= 3 - 2x \\
3 &= 2x \\
x &= \frac{3}{2}
\end{align*}
$$

3. Substitute the $x$ value back into $f(x)$

$$
\begin{align*}
y &= f(\frac{3}{2}) \\
y &= \frac{17}{4} = 4\frac{1}{4}
\end{align*}
$$

**Conclusion**

Stationary point $P = (1\frac{1}{2}, 4\frac{1}{4})$.

### The Second Derivative

Now, what if the curve we are dealing with has more than one stationary point? How do we classify them into these three categories?

The second derivative of a function can be used to check if a stationary point is the maximum, minimum, or neither.

#### Key Point

If $f'(x) = 0$, i.e. for a stationary point:

- If $f''(x) < 0$, the point is a maximum point.
- Else if $f''(x) > 0$, the point is a minimum point.
- Otherwise, the point is neither a maximum nor a minimum.

#### Example

![](https://raw.githubusercontent.com/timthedev07/my-website/dev/assets/stationary-calculus-1.png)

The curve is given by the equation $f\left(x\right)\ =\ x\left(x+2\right)\left(x-2\right)$. Find the stationary points of the function and determine which of them are maximum/minimum.

To find the coordinates of the two stationary points:

1. Expand

$$
\begin{align*}
f(x) &= x\left(x^2 - 4\right) \\
&= x^3 - 4x
\end{align*}
$$

2. Differentiate

$$
\begin{align*}
f'(x) = 3x^2 - 4
\end{align*}
$$

3. Set $f'(x) = 0$ and solve for x

$$
\begin{align*}
& 3x^2 - 4 = 0 \\
& x = \pm \frac{2\sqrt{3}}{3}
\end{align*}
$$

4. Find the corresponding y coordinates

$$
\begin{align*}
y_1 &= f(\frac{2\sqrt{3}}{3}) \\
&= -\frac{16\sqrt{3}}{9} \\ \\

y_2 &= f(-\frac{2\sqrt{3}}{3}) \\
&= \frac{16\sqrt{3}}{9} \\ \\
\end{align*}
$$

So our coordinates would be $\left(\pm\frac{2\sqrt{3}}{3}, \mp\frac{16\sqrt{3}}{9}\right)$

Now, determine which is maximum or minimum:

1. Find the second derivative of the function

$$
\begin{align*}
f''(x) = 6x
\end{align*}
$$

2. So for any positive value of $x$, the point is a minimum, and hence for any negative value of $x$, the point is a maximum.

**Conclusion**

- $x_1 = \frac{2\sqrt{3}}{3} > 0$, so the stationary point with the x-coordinate $x_1$ is a _minimum_.

- $x_2 = -\frac{2\sqrt{3}}{3} < 0$, so the stationary point with the x-coordinate $x_2$ is a _maximum_.

## Rate of Change

Now, in calculus, the concept of rate of change is also important. It's simply a rate of how a dependent variable changes as the independent variable changes.

There are two types of rates of change we will look at here:

- Instantaneous rate of change
- Average rate of change

For example, for a linear function, the rate of change is **constant**, because there is a linear(straight line) correlation between the variables. And the rate also happens to be the derivative of the function, i.e. the gradient/slope of the line, as discussed above.

In contrast, a quadratic function, for example, would have a **variable rate of change** over an interval or a point. As you saw earlier, the derivative would produce an expression whose value actually depends on x; in other words, the derivative's value at different x coordinates may vary, unlike a linear function's derivative, which is a single constant that represents the gradient.

### Average Rate of Change

The average rate of change over an interval $[a, b]$ is the gradient of the secant line that passes through the curve at $x_1 = a$ and $x_2 = b$.

<iframe src="https://www.desmos.com/calculator/mpygaspgsp?embed" width="100%" height="500"></iframe>

To calculate this, find the coordinates of the two points of intersection and calculate the gradient:

$$
\begin{align*}
m = \frac{y_2 - y_1}{x_2 - x_1}
\end{align*}
$$

And to form an equation for the secant line:

$$
\begin{align*}
y = m(x - x_1) + y_1
\end{align*}
$$

#### Example

Let $f\left(x\right)\ =\ \frac{1}{20}x^{3}$, find the average rate of change over the interval $[1, 4]$, and hence the equation of the secant line.

$$
\begin{align*}
x_1 &= 1 \\
y_1 &= f(1) = 0.05 \\ \\

x_2 &= 4 \\
y_2 &= f(4) = 3.2 \\ \\

m &= \frac{3.15}{3} = 1.05 \\ \\

y &= 1.05(x - 1) + 0.05 = 1.05x - 1
\end{align*}
$$

Thus the average rate of change required is $1.05$ and the equation of the secant line drawn is $y = 1.05x - 1$.

### Instantaneous Rate Of Change

The instantaneous rate of change is the value of the derivative at a specific point on the curve of the function, i.e. the gradient of the tangent line at a point.

To calculate its value for a curve $f(x)$, is simply $f'(x)$, where $x$ is the x-coordinate of a point on the curve.

Take this as an example:

> The curve C is given by the equation $f(x) = 2x^2+4x-3$, find the instantaneous rate of change at the point (7, 123).

$$
\begin{align*}
f'(x) &= 4x + 4 \\
f'(7) = 32
\end{align*}
$$

In this case, 32 represents the gradient of the line that's tangent to the curve at $(7, 123)$.

## Problems Involving Displacement, Velocity, and Acceleration

- Displacement is a vector quantity represented by $s$.
- Velocity is a vector quantity represented by $v$.
- Acceleration is a vector quantity represented by $a$.

If you've learned a little bit of physics, you would know that $v = s/t$ where t is time, and $a = v/t$.

Generally, the expressions' variable would be time, and we would have to differentiate the functions with respect to $t$(time) to work out the rate of something.

Now, if you get a question that, for example, gives you a polynomial of some degree indicating the relationship between two of these quantities stated above(e.g. $s = 3t^2 + 7t - 13$), you'll have to calculate the derivative of the function to obtain some result, for example, velocity.

### Key Point

- $v = \frac{ds}{dt}$
- $a = \frac{dv}{dt} = \frac{d^2s}{dt^2}$

### Example 1

A particle $P$ is moving along a straight line that passes through the fixed point $O$. The displacement, $s$ meters, of $P$ from $O$ at time $t$ seconds is given by:

$$
\begin{align*}
s = t^3 - 6t^2 + 5t - 4
\end{align*}
$$

Find the value of t for which the acceleration of P is $3m/s^2$.

$$
\begin{align*}
a &= \frac{d^2s}{dt^2} = 6t -12 \\ \\
3 &= 6t - 12  \\
6t &= 15 \\
t &= \frac{5}{2} \space seconds
\end{align*}
$$

### Example 2

The velocity, $v$ m/s, of a particle after t seconds is given by $v = 160 - 32t$. Find the acceleration.

$$
\begin{align*}
a &= \frac{dv}{dt} \\
&= -32 m/s^2 \\ \\
\end{align*}
$$

### Example 3

The displacement, $s$ meters, of a particle after $t$ seconds is given by $s = t^3 - 2t^2 + 3t + 1$

1. Find an expression for $v$.

$$
\begin{align*}
v &= \frac{ds}{dt} \\ \\
v &= 3t^2 - 4t + 3
\end{align*}
$$

2. Find an expression for $a$.

$$
\begin{align*}
a &= \frac{dv}{dt} \\ \\
a &= 6t - 4
\end{align*}
$$

3. Work out the velocity and acceleration of the particle after two seconds, in the correct units.

$$
\begin{align*}
v &= 3 \cdot 2^2 - 4 \cdot 2 + 3 \\
&= 12 - 8 + 3 \\
&= 7 m/s \\ \\

a &= 6t - 4 \\
&= 12 - 4 \\
&= 8m/s^2
\end{align*}
$$

## Maximization/Minimization Problems

Oftentimes, you will have to construct a function that relates one quantity to another, say $x$ is the independent variable and $y$ is the dependent variable, and you will have to find the value of $x$ for which $y$ is a maximum/minimum.

Once you have a function, calculate its derivative and set its value to 0, thus providing an equation whose solutions would be the coordinates of the turning points. Refer back to the "Stationary Points" section for more explanation of the method.

### Example 1

Prerequisite:

- The minor **arc length** of a sector is $l = r\theta$, where $\theta$ is the angle in **radians**(180 degrees = $\pi$ radians).

$OMT$ is a minor sector of a circle with center $O$ and radius $r$ cm. The perimeter of the sector is 200cm.

1. Find a function for the area of the sector, A, in $cm^2$.

$$
\begin{align*}
P &= 200 \\
200 &= 2r + r\theta \\
\frac{200}{r} &= 2 + \theta \\
\theta &= \frac{200}{r} - 2 \\ \\

A &= \pi r^2 \frac{\theta}{2\pi} \\
A &= r^2 \frac{\theta}{2} \\ \\

\because \theta &= \frac{200}{r} - 2 \\
A &= r^2 \cdot \frac{1}{2}\left[\frac{200}{r} - 2\right] \\
&= r^2 \left[\frac{100}{r} - 1\right] \\
&= 100r - r^2

\end{align*}
$$

2. Find the value of $r$ for which $A$ is a maximum.

$$
\begin{align*}
\frac{dA}{dr} &= 100 - 2r \\ \\
0 &= 100 - 2r \\
r &= 50

\end{align*}
$$

3. Prove that the area of a sector with the radius calculated above is indeed a maximum.

$$
\begin{align*}
\frac{d^2A}{dr^2} &= -2 < 0
\end{align*}
$$

4. Find the maximum area of the sector $OMN$.

$$
\begin{align*}
r &= 50 \\
A &= 100 \cdot 50 - 50^2 \\
&= 5000 - 2500 \\
&= 2500 cm^2
\end{align*}
$$

### Example 2

A large tank in the shape of a cuboid is to be made from $54m^2$ of sheet metal. There is no top, i.e. only 5 faces. The height and width of the tank are both $x$ meters.

1. Find a function for the volume of the cuboid.

$$
\textnormal{Let } y \textnormal{ be the length of the cuboid} \\

\begin{align*}
\\ 54 &= 2x^2 + 3xy \\
y &= \frac{54 - 2x^2}{3x}
\end{align*}
$$

$$
\begin{align*}
V &= x^2y \\
&= x^2\left[\frac{54 - 2x^2}{3x}\right] \\
&= 18x - \frac{2}{3}x^3
\end{align*}
$$

2. Find the maximum stationary point of $V$ and justify that it's a maximum.

$$
\begin{align*}
\frac{dV}{dx} &= 18 - 2x^2 \\
0 &= 18 - 2x^2 \\
x &= {3} \\ \\

\frac{d^2V}{dx^2} &= -4x \\
\end{align*}
$$

$$
\begin{align*}
&\textnormal{Thus a coordinate with a positive x value} \\
&\textnormal{would be a maximum stationary point.} \\
\end{align*}
$$

$$
\begin{align*}
x &= 3 \\
V &= 18\cdot 3 - \frac{2}{3}\cdot 3^3 \\
&= 54 - 18 \\
&= 36 m^3
\end{align*}
$$

### Example 3

A community is planning the greenery for a land of area $1000m^2$. One part would be planted with flowers and the other part with grass.

Let the area of grass be $x$ $m^2$; the cost of the grass, $y_1$, is given by $y_1 = 30x$. The cost of the flowers, $y_2$ is given by $y_2 = -0.01x^2 - 20x + 30000$.

Let $W$ be the total cost of greenery for the whole area, calculate the maximum value of $W$; and thus find the area of grass when $W$ is maximum.

$$
\begin{align*}
W &= y_1 + y_2 \\
W &= -\frac{1}{100}x^2 + 10x + 30000 \\ \\
\frac{dW}{dx} &= - \frac{1}{50}x + 10 \\
0 &= - \frac{1}{50}x + 10 \\
10 &= \frac{1}{50}x \\
x &= 500 \\ \\

W_{max} &= -\frac{1}{100}\cdot 500^2 + 10 \cdot 500 + 30000 \\
&= 32500
\end{align*}
$$

# Conclusion

I personally found calculus very fascinating, and that's why I decided to spend some time writing about what I perceived in the process of learning calculus.

Not too far in the future, blogs about integration and limits will be published too, so stay tuned!

Again, all of the content I have covered and am about to cover is at an introductory level, so this is about high school level if you will. But to anyone reading this, thanks for getting through it!
