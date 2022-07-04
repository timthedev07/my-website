---
title: "UKMT Maclaurin 2017: Q4"
description: Alternative trigonometry solution Q4 of UKMT Maclaurin 2017
date: 2022-07-04
keywords:
  - UKMT
  - UKMT Maclaurin
  - Geometry
  - Trigonometry
  - Algebra
---

## The Question

The diagram shows a square $PQRS$ with sides of
length 2. The point $T$ is the midpoint of $SR$, and $U$ lies on $RQ$ so that $\angle SPT$ = $\angle TPU$.

What is the length of $RU$?

![](https://raw.githubusercontent.com/timthedev07/my-website/dev/assets/maclaurin-2017-q4-a.png)

## Identities to Know

$$
\tan(90 - \theta) = {\cot(\theta)}\\\ \\\

\cot(\theta) = \frac{1}{\tan(\theta)}\\\ \\\

\tan(2\theta) = \frac{2\tan(\theta)}{1-\tan^2(\theta)}\\\ \\\
$$

## Solution with Trigonometry

Let $\alpha = \angle SPT, \beta = \angle UPQ, QU = y, UR = x$

$$
\begin{align*}
\tan(\alpha) &= \frac{ST}{SP} = \frac{1}{2}\\
\therefore\space\alpha &= \tan^{-1}(\frac{1}{2})
\end{align*}\\
$$

Now, because $\tan(\beta) = \frac{UQ}{QP} = \frac{y}{2}$, if we can workout the tan ratio for angle $\beta$, we would be able to find $y$.

$$
\begin{align*}
\beta &= 90 - 2\alpha\\ \\
\tan(\beta)&=\tan(90 - 2\alpha)=\cot(2\alpha)\\
&=\frac{1}{\tan(2\alpha)}\\ \\

Let\space t &= \tan(2\alpha)\\
&=\frac{2\tan(\alpha)}{1 - \tan^2(\alpha)}\\

\because\space\alpha &= \tan^{-1}(\frac{1}{2})\\
t&=\frac{2 \cdot \tan(\tan^{-1}(\frac{1}{2}))}{1 - [\tan(\tan^{-1}(\frac{1}{2}))]^{2}}
\end{align*}
$$

Notice that $\tan$ and $\tan^{-1}$ cancel out, and that means that we obtain the ratios without the need of a calculator.

$$
\begin{align*}
\therefore\space t&=\frac{2 \cdot \frac{1}{2}}{1 - (\frac{1}{2})^2}\\
&=\frac{1}{(\frac{3}{4})}\\
t&=\frac{4}{3}
\end{align*}
$$

Now, going back to finding $\tan(\beta)$:

$$
\begin{align*}
\tan(\beta) &= \frac{1}{t}\\
&=\frac{3}{4}
\end{align*}
$$

That means:

$$
\begin{align*}
\frac{3}{4}&=\frac{UQ}{QP}=\frac{y}{2}\\
\therefore y &= \frac{3}{2}\\ \\

\because x &= 2 - y\\
x &= \frac{1}{2} \Longleftrightarrow RU = \frac{1}{2}
\end{align*}
$$

## Conclusion

There are many ways to solve a single geometry problem, thus you are encouraged to find different solutions to a question, and this is very helpful for enhancing your problem solving skills.
