# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

|                                              Initial state                                              |                                                          Activated states                                                           |
| :-----------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: |
| <img src="./screenshots/mobile.jpeg" alt="Screenshot of my solution for mobile devices" width="200px"/> | <img src="./screenshots/mobile-state.jpeg" alt="Screenshot of my solution for mobile devices with activated states" width="200px"/> |

#### Desktop

![Screenshot of my solution for desktop devices](./screenshots/desktop.jpeg)

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/form-error-messages-based-on-pseudoclasses-combined-a-bit-of-js-uxbQlR1sG9)

- [Live Site URL](https://jvmdo.github.io/frontend-mentor-challenges/intro-component-with-signup-form/)

## My process

### Built with

- Mobile-first workflow
- Semantic HTML5 markup
- CSS3
- Grid

### What I learned

- Set the maximum desktop `body`'s width adding the sides padding to the content width itself.

- Set the background image size as `background-size: auto 100vh` in order to make it match the same height as viewport's one whilst it is not stretched wide.

- How to use `:valid`, `:invalid`, `:not()`, `:focus`, `:placeholder-shown`, `<span>`, pseudo-elements and 1 class to style the appearance and behavior of a form.

- The `<label>` does not get the size of its `<input>` child. We must explicitly set its width:

  ```css
  label {
    display: inline-block;
    width: 100%;
  }
  ```

- How to code a simple push down animation on a button.

- Use `invalid` event to add a class on input field. This event is fired whenever a form is meant to be submitted.

- Use `focusout` event to remove that class.

### Useful resources

- [ValidityState on MDN](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState)
