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

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS3
- Flexbox

### What I learned

How to overlay an image with a foreground color using `::before` pseudo-element. This technique requires the `<picture>` element to be wrapped into a box.

```css
.wrapper {
  position: absolute;
}

.wrapper picture::before {
  position: relative;
  content: "";
  background: hsla(50, 50%, 50%, 50%) no-repeat center;
  height: 100%;
  width: 100%;
}
```

Assuming the responsive `<img>` is inside `<picture>`.
