# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

#### Mobile

<img src="./screenshot/mobile.jpeg" alt="My mobile's screenshot solution" width="200">

#### Desktop

![My desktop's screenshot solution](./screenshot/desktop.jpeg)

### Links

- Solution URL: [in this link.](https://www.frontendmentor.io/solutions/flexbox-card-with-image-overlay-using-pseudoelement-L1NwXFSjET)
- Live Site URL: [in this link.](https://jvmdo.github.io/frontend-mentor-challenges/stats-preview-card-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS3
- Flexbox

### What I learned

How to overlay an image with a foreground color using `::before` pseudo-element. This technique requires the `<picture>` element to be wrapped into a box.

```css
.wrapper {
  position: relative;
}

.wrapper picture::before {
  position: absolute;
  content: "";
  background: hsla(50, 50%, 50%, 50%) no-repeat center;
  height: 100%;
  width: 100%;
}
```

Assuming the responsive `<img>` is inside `<picture>`.

Also, I learned that a `<span>` direct child of an `<ul>` generates HTML issues.
