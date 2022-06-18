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
