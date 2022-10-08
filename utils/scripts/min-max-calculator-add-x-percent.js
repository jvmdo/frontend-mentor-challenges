//? Min-max calculator uses 16px as REM reference
//? I usually use 10px, then I need to add 60%
//? to the values returned from calculator.

/* 
  Get the input typing in the console
  [const input = document.querySelector("._outputCSS_jtxbz_248").textContent;]
  at https://min-max-calculator.9elements.com/ 
*/
const input = "clamp(1rem, -0.408rem + 6.01vw, 5rem)";

/* 
  Copy this code from here below the end in the console 
*/
const regex = /([0-9]+\.[0-9]+|[0-9]+)rem/g;

function addPercent(value, percentage = 0.6) {
  value = Number.parseFloat(value);
  return (value + value * percentage).toFixed(3);
}

function getValues() {
  const matches = [];
  let m;

  while ((m = regex.exec(input)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }
    matches.push(m);
  }

  return matches;
}

const values = getValues().map(([_, group]) => group);
// values;

const rems = input.split(", ");
// rems;

const hold = [];

for (const i in values) {
  hold.push(rems[i].replace(regex, `${addPercent(values[i])}rem`));
}

const output = hold.join(", ");
output;
