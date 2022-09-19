# Frontend Mentor - Profile card component solution

This is a solution to the [Profile card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

- Build out the project to the designs provided

### Screenshot

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- HTML5
- CSS3
- Flexbox

### What I learned

#### CSS3 `min` function

I used this function to set `max-width` of a box in a responsive way. In the below example, the box can be at most 300px wide.

```css
.box {
  width: min(100% - 5rem, 300px);
}
```

#### How to transform translate background images

It is not possible with default `background` property. Therefore, I made a workaround using divs.

### Useful resources

- [MDN's `min` definition.](https://developer.mozilla.org/en-US/docs/Web/CSS/min)

- [Workaround to translate background images.](https://www.sitepoint.com/css3-transform-background-image/)
