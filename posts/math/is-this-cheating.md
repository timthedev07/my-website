---
title: I Tackled a Math Problem With Programming, Is This Cheating?
description: How I solved a Geometry Problem with Python
date: 2022-06-18
keywords: ["Math", "Programming", "Geometry"]
---

## Problem Statement

> A point D is randomly generated within the equilateral triangle ABC. Find the probability that the area of triangle ADB is greater than that of each triangle ADC and triangle BDC

**A.1/6&nbsp;&nbsp;&nbsp;&nbsp;B.1/4&nbsp;&nbsp;&nbsp;&nbsp;C.1/3&nbsp;&nbsp;&nbsp;&nbsp;D.1/2&nbsp;&nbsp;&nbsp;&nbsp;E.2/3**

## Brute-forcing with Python

The computes the probability by randomly generating a huge number of points within the triangle, and for each of the points, a test is run to check if one of the triangles is greater than both of the other ones.

For reliability, this experiment/process is repeated a few number of times and thus an average probability is presented as the result.

## Implementation Details

### Cartesian coordinate system

I decided to use the Cartesian coordinate system for this program because I find it easier and more intuitive to represent the triangle as the area bounded by the lines with the following equations:

- `y = sqrt(3)x`
- `y = -sqrt(3)x + 3sqrt(3)`
- `y = 0`

Which creates the following straight lines:
![](https://raw.githubusercontent.com/timthedev07/my-website/dev/assets/cartesian-equilateral.png)

Now, to generate a point within this bounded region we have to check for the following inequalities:

- `y < sqrt(3)x`
- `y < -sqrt(3)x + 3sqrt(3)`
- `y > 0`

That's where these two methods of the `Line` class come in handy:

```python
def isAboveSlope(self, x, y, allowEqual=False):
  # if on the Line
  yBound = self.getY(x)
  if yBound == y:
    return allowEqual

  return yBound < y

def isBelowSlope(self, x, y, allowEqual=False):
  # if on the Line
  yBound = self.getY(x)
  if yBound == y:
    return allowEqual

  return yBound > y
```

What is the `getY` method?

```python
def getY(self, x):
  return self.gradient * x + self.yIntercept

def getX(self, y):
  return (y - self.yIntercept) / self.gradient
```

Basically, it's just substituting a given value in the pair `(x, y)` to find the other. Simple algebra. These methods simply rearrange the equation to find the desired value.

### Finding the areas of the smaller triangles

Now that we have functions to check if a point P(x, y) is within the equilateral triangle, the next step is to compute the areas of triangles `ADB`, `ADC`, and `BDC`.

How should we do that?

Given that each triangle shares a base of length 3, the only thing missing to finding their areas is the **perpendicular distance from P to each of the three lines** respectively.

Consider the following random point, (1, 1):
![](https://raw.githubusercontent.com/timthedev07/my-website/dev/assets/p-in-equilateral.png)
