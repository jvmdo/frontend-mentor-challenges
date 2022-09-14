# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### Screenshot

#### Mobile

<img src="./screenshots/screenshot_mobile.jpeg" alt="Screenshot of my mobile solution" width="200px"/>

#### Desktop

![Screenshot of my desktop solution](./screenshots/screenshot_desktop.jpeg)

### Links

- Solution URL [in this link.](https://www.frontendmentor.io/solutions/qr-code-component-flexbox-centering-aUtbF2S3fB)

- Live site URL [in this link](https://jvmdo.github.io/frontend-mentor-challenges/qr-code-component-main/).

## My process

### Built with

- Semantic HTML5 markup
- CSS simple properties (using element selector only)
- Mobile-first workflow
- Flexbox

### What I learned

CSS3 has a modern approach to center one single element horizontal and vertically using

```css
margin: auto;
```

within `flex` containers, which must take its parent's full `height` tho (or `width` depending on flex direction) . In this case, I wanted to center the element in the browser's viewport.

Therefore, I have set

```css
body {
  min-height: 100vh;
}
```

in order to the centering had make effect.

### Useful resources

- [Stack Overflow answer](https://stackoverflow.com/a/26079837) - This helped me about centering issue.
