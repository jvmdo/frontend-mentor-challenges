# Frontend Mentor - Order summary card solution

This is a solution to the [Order summary card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- See hover states for interactive elements

### Screenshot

#### Mobile

|                                        Initial state                                        |                                             Hover state (over the image)                                             |
| :-----------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------: |
| <img src="./screenshots/mobile.jpeg" alt="Screenshot of my mobile solution" width="200px"/> | <img src="./screenshots/mobile-state.jpeg" alt="Screenshot of my mobile (with hover state) solution" width="200px"/> |

#### Desktop

![Screenshot of my desktop solution](./screenshots/desktop.jpeg)

### Links

- Solution URL: [in this link.](https://www.frontendmentor.io/solutions/flexbox-card-with-only-one-side-box-shadow-MdxfAnL52I)
- Live Site URL: [in this link.](https://jvmdo.github.io/frontend-mentor-challenges/order-summary-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS3 only
- Flexbox

### What I learned

#### Avoid underline decoration breaks

```css
a {
  text-decoration-skip-ink: none;
}
```

#### Box shadow in only one side of a box

```css
.box-bottom-shadow {
  box-shadow: 0 5rem 5rem -5rem red;
}
```

#### Background color does not display?

It may because the `background-color` declaration is before the `background-image`. Therefore, put de color after it.

```css
html {
  background: url("path/to/bg-img") no-repeat center;
  background-size: cover;
  background-color: teal; /* AFTER */
}
```

### Useful resources

- [Box shadow gist](https://gist.github.com/ocean90/1268328) - This helped me to define a only one side box shadow.
