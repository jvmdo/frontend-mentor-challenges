# Frontend Mentor - Huddle landing page with alternating feature blocks solution

This is a solution to the [Huddle landing page with alternating feature blocks challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-alternating-feature-blocks-5ca5f5981e82137ec91a5100). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

#### Mobile

|                                       State: initial                                       |                                      State: hover over (buttons, links, icons)                                       |
| :----------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------: |
| <img src="./screenshots/mobile.png" alt="Screenshot of my mobile solution" width="200px"/> | <img src="./screenshots/mobile-state.jpeg" alt="Screenshot of my mobile (with hover state) solution" width="200px"/> |

#### Desktop

![Screenshot of my solution for desktop devices](./screenshots/desktop.png)

### Links

- [Solution URL](https://your-solution-url.com)
- [Live Site URL](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS3
- Flexbox
- Grid
- Mobile-first workflow

### What I learned

- I tried to apply fluid responsive website using `clamp()` as explained in the resources links.

- First time using `vmax` unit.

- Using `div.wrapper` as the first child of a `header` and `footer` in order to make their background expand the full page width while their content at a maximum 1440 px width.

- An element without a set `background-color` is transparent.

- It's important to note that `flex-grow` is related to the main axis.

- Absolute positioned elements lose their relative sizes (?)

- Set `div` size than make the inside `svg` size relative to it.

### Useful resources

- [Utopia](https://utopia.fyi/) - About fluid responsive websites.

- [min-max Calculator](https://min-max-calculator.9elements.com/) - Type scale calculator.
