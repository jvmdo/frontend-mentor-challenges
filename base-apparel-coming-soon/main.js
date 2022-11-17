const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  if (!this.checkValidity()) {
    event.preventDefault();
    setRuleProperty(".errorMessage::before", "display", "inline");
    setRuleProperty(".content-form .errorMessage", "max-height", "5rem");
    setRuleProperty(
      ".content-form input",
      "border",
      "2px solid hsl(0, 93%, 68%)"
    );
  }
});

function setRuleProperty(query, prop, value) {
  /* 
    Set the rule's properties directly on the first linked CSS.
    It does not work on insecure environments. 
  */
  for (let rule of document.styleSheets[0].cssRules) {
    if (rule.selectorText === query) {
      rule.style[prop] = value;
      break;
    }
  }
}

/* window.addEventListener("resize", function () {
  const base = 480;
  if (this.innerWidth >= base && this.innerWidth < 780) {
    const hr = (this.innerWidth - base) / 1000;
    setRuleProperty(".hero img", "aspect-ratio", `1 / ${0.67 - hr}`);
  }
}); */
