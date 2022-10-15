/* 
  Useful resource:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#replacing_a_fahrenheit_degree_with_its_celsius_equivalent
 */

//? Min-max calculator uses 16px as REM reference
//? I usually use 10px, then I need to add 60%
//? to the values returned from calculator.

/* 
  Get the [input] typing in the console
  const input = document.querySelector("._outputCSS_jtxbz_248").textContent;
  at https://min-max-calculator.9elements.com/ 
*/
const input = "clamp(1rem, -0.408rem + 6.01vw, 5rem)";

/* 
  Then copy this code below
  The output should have its REM values 60% increased
*/
function replaceRem(input) {
  const regex = /([0-9]+\.[0-9]+|[0-9]+)rem/g;

  function addPercentage(value, percentage = 1.6) {
    return (Number.parseFloat(value) * percentage).toFixed(3);
  }

  //? The arguments may contain one or more groups
  //? f(match, group1, group2, ..., index, source)
  function updateRem(match, group, index, source) {
    return `${addPercentage(group)}rem`;
  }

  return input.replace(regex, updateRem);
}

const output = replaceRem(input);
console.log(output);
