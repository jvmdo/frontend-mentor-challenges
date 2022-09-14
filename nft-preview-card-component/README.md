# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

#### Mobile

<img src="./screenshots/mobile.jpeg" alt="Screenshot of my mobile solution" width="200px"/> 
<img src="./screenshots/mobile-state.jpeg" alt="Screenshot of my mobile (with hover state) solution" width="200px"/>

#### Desktop

![Screenshot of my desktop solution](./screenshots/desktop.jpeg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS3 simple
- Flexbox for cards' layout
- Grid for overlap elements

### What I learned

1. `Grid` to overlap elements.

2. Simple `transition` animation between two states.

3. Hover over pass through ancestor element using `pointer-events`.

4. Flexbox's `align-items` property reduces the container's flex item size to fit its content.
   For example, if I set

```css
main {
  align-items: flex-start;
}
```

then the full width behavior of the `ul` block element is disabled. In this case, I'd use

```css
ul {
  width: 100%;
}
```

to fill up all the horizontal space, which I didn't liked. I've figure it out later so the previous snippet was removed.

### Useful resources

- [Overlapping elements with `grid`.](https://audreesteinberg.medium.com/overlapping-html-elements-using-css-grid-f401262a4486)

- [`transition` property on MDN.](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)

- [Stack Overflow answer about `pointer-event`.](https://stackoverflow.com/a/9739105)
