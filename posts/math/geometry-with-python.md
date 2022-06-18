---
title: I Tackled a Math Problem With Programming, Is This Cheating?
description: How I solved a Geometry Problem with Python
date: 2022-06-18
keywords: ["Math", "Programming", "Geometry"]
---

## Problem Statement

> A point D is randomly generated within the equilateral triangle ABC. Find the probability that the area of triangle ADB is greater than that of each triangle ADC and triangle BDC.

**A.1/6&nbsp;&nbsp;&nbsp;&nbsp;B.1/4&nbsp;&nbsp;&nbsp;&nbsp;C.1/3&nbsp;&nbsp;&nbsp;&nbsp;D.1/2&nbsp;&nbsp;&nbsp;&nbsp;E.2/3**

## Brute-forcing with Python

The computes the probability by randomly generating a huge number of points within the triangle, and for each of the points, a test is run to check if one of the triangles is greater than both of the other ones.

For reliability, this experiment/process is repeated a few times and thus an average probability is presented as the result.

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

Given that each triangle shares a base of length 3, the only thing missing in finding their areas is the **perpendicular distance from P to each of the three lines** respectively.

Consider the following point, (1, 1):

![](https://raw.githubusercontent.com/timthedev07/my-website/dev/assets/p-in-equilateral.png)

We can construct a triangle as follows:

![](https://raw.githubusercontent.com/timthedev07/my-website/dev/assets/p-in-equilateral-1.png)

Notice that to get the area of it, there are **two** ways to do it with `bh / 2`.

Firstly, the triangle can be interpreted this way, and we will just call the two distances `deltaX` and `deltaY` for simplicity:

![](https://raw.githubusercontent.com/timthedev07/my-website/dev/assets/p-in-equilateral-2.png)

The area will equal `deltaX * deltaY / 2`

However, there is another way to calculate its area, and that is, we can easily find the hypotenuse with Pythagoras's theorem, but the point of this is that, when we multiply the hypotenuse by the **perpendicular** distance between P and the line\*_, we get the same value as `deltaX _ deltaY / 2`. Therefore, the equation can be written as follows, where D is the perpendicular distance:

```
deltaX * deltaY = sqrt(deltaX^2 + deltaY^2) * D
```

Rearranging it gets us the formula for D:

```
D = deltaX * deltaY / sqrt(deltaX^2 + deltaY^2)
```

The formula is implemented in this function:

```python
def perpendicularDistance(line, point):
  # if the line is horizontal, just return the change in Y, which in fact, is the perpendicular distance
  if line.gradient == 0:
    return math.fabs(point[1] - line.getY(point[0]))

  # get change in y between the point and the point above and collinear with it at 90deg
  deltaY = math.fabs(line.getY(point[0]) - point[1])

  # get change in x between the point and the point horizontally aligned and collinear with it
  deltaX = math.fabs(line.getX(point[1]) - point[0])

  res = (deltaX * deltaY) / math.sqrt(deltaY**2 + deltaX**2)
  return res
```

To compute the area, we simply multiply the base, which is 3 in this case, by the `D` that is computed from the function.

### Testing the statement

So in the end, we end up with this `testStatement` function:

```python
def testStatement(triangle, p):
  h1 = perpendicularDistance(triangle.base, p)
  h2 = perpendicularDistance(triangle.left, p)
  h3 = perpendicularDistance(triangle.right, p)

  trA = getAreaTriangle(3, h1)
  trB = getAreaTriangle(3, h2)
  trC = getAreaTriangle(3, h3)

  computedSum = trA + trB + trC

  triangleArea = (3**2 * math.sqrt(3) / 4)

  if math.fabs(computedSum - triangleArea) > THRESHOLD:
    exit("Error boundary for the computed areas is exceeded!")

  return trA > trB and trA > trC
```

Now, `trA`, `trB`, and `trC` are the areas of the individual smaller triangles. For the sake of accuracy, an error boundary is enforced to ensure that the sum of the three areas is off from the theoretically correct sum(the area of the larger triangle) no more than `THRESHOLD`, which is defined as 10 to the power of -10.

This is not because the algorithm is not accurate, it's just in programs, there are sometimes number overflows and other issues which may result in inaccuracy. But the difference is unnoticeable and shall not affect our conclusion.

The function's return value indicates if one of the areas is greater than the other two.

### Computing a probability from random points

Now, as `N_POINTS` points are generated, we will run `testStatement` on each of them to give us a conclusion.

The probability can be shown as `the number of times the statement is true / N_POINTS`.

### Reiterating for reliability

Repeat the above step `N_ITERATIONS` times and find the average.

This would be our conclusion.

## Conclusion

Some might argue that solving math problems with programming is kind of like cheating. Now, to some extent I do agree, because the problem challenges you, not the computer.

However, I think combining the two of them does make things more interesting. From my experience implementing it, integrating mathematical ideas into programming is quite enjoyable.

[Check out the source code on GitHub](https://github.com/timthedev07/brute-force-math-june-2022)
