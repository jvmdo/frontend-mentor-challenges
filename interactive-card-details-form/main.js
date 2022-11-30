import Cleave from "./cleave-esm.js";

//* ====================== //
//* ===== FORMATTING ===== //
//* ====================== //

//? Replace a character at given [index] by [replacement]
String.prototype.replaceAt = function (index, replacement, trailing) {
  return (
    this.substring(0, index) +
    replacement +
    (trailing?.substring(index + 1) ??
      this.substring(index + replacement.length))
  );
};

const card = document.querySelectorAll(".card-value");
const nameInput = document.querySelector("#name");

//? Get the field name from class ("card-cvc card-value" => cvc)
const fieldName = (el) => el.classList[0].split("-")[1];

//? Map the field to its default text content
const defaultText = Array.from(card).reduce(
  (textMap, el) => ((textMap[fieldName(el)] = el.textContent), textMap),
  {}
);

//? Create a property for each field (name, number, date, cvc)
card.forEach((el) => (card[fieldName(el)] = el));

//? Update [card-name] in real-time
nameInput.addEventListener("input", function () {
  const value = this.value.split(" ");
  card.name.textContent = `${value[0]} ${value[1] ?? ""}`;
  !this.value && (card.name.textContent = defaultText["card-name"]);
});

//? Update and format [card-number] in real-time
new Cleave("#number", {
  creditCard: true,
  onValueChanged() {
    const number = this.getFormattedValue();
    // Get the position of the last typed value
    let pos = number.length - 1;
    // Decrement twice when position points to [empty string]
    [4, 9, 14].includes(pos) && pos--;

    // Update the number without wiping the whole UI default text
    card.number.textContent = number.replaceAt(
      pos,
      number[pos],
      defaultText.number
    );

    // Rollback to default text when input is empty
    !this.getRawValue() && (card.number.textContent = defaultText.number);
  },
  onCreditCardTypeChanged(type) {
    // TODO: change default number text according to [type]
  },
});

//? Update and format [card-date] in real-time
const cleaveMonth = new Cleave("#month", {
  date: true,
  datePattern: ["m"],
  onValueChanged() {
    // Rollback to 00/YY
    if (!this.getRawValue()) {
      card.date.textContent = card.date.textContent
        .replaceAt(1, "0")
        .replaceAt(0, "0");
      return;
    }

    const month = this.getFormattedValue();
    const pos = month.length - 1;

    card.date.textContent =
      month.replaceAt(pos, (month.length === 1 ? "0" : "") + month[pos]) +
      "/" +
      (cleaveYear.getRawValue() || "00");
  },
});

//? Complement Cleave leading zero feature
document.querySelector("#month").addEventListener("blur", function () {
  if (this.value === "0" || this.value === "1") {
    cleaveMonth.setRawValue("01");
  }
});

//? Auto tab to year date input
document.querySelector("#month").addEventListener("keyup", function (event) {
  if (this.value.length === 2 && isFinite(event.key)) {
    document.querySelector("#year").focus();
  }
});

const cleaveYear = new Cleave("#year", {
  date: true,
  dateMin: "22", // not working 😟
  datePattern: ["y"],
  onValueChanged() {
    // Rollback to MM/00
    if (!this.getRawValue()) {
      card.date.textContent = card.date.textContent
        .replaceAt(3, "0")
        .replaceAt(4, "0");
      return;
    }

    const year = this.getFormattedValue();
    const pos = year.length - 1;

    card.date.textContent =
      (cleaveMonth.getRawValue() || "00") +
      "/" +
      year.replaceAt(pos, (year.length === 1 ? "0" : "") + year[pos]);
  },
});

//? Complement Cleave leading zero feature
document.querySelector("#year").addEventListener("blur", function () {
  if (this.value.length === 1) {
    cleaveYear.setRawValue(`0${cleaveYear.getRawValue()}`);
  }
});

//? Update and format [card-cvc] in real-time
new Cleave("#cvc", {
  blocks: [3],
  numericOnly: true,
  onValueChanged() {
    const cvc = this.getFormattedValue();
    const pos = cvc.length - 1;
    card.cvc.textContent = cvc.replaceAt(pos, cvc[pos], defaultText.cvc);
    !this.getRawValue() && (card.cvc.textContent = defaultText.cvc);
  },
});

//* ====================== //
//* ===== VALIDATION ===== //
//* ====================== //

//? Get the <input>'s related <span> and set its text
HTMLInputElement.prototype.setErrorMessage = function (
  message = "",
  className = "input-error"
) {
  Array.from(this.parentElement.childNodes).find(
    (node) => node.className === className
  ).textContent = message;
};

function activateErrors() {
  inputs.forEach((input) => {
    const { valid, valueMissing, patternMismatch } = input.validity;

    if (valid) {
      input.setErrorMessage();
      input.classList.remove("active");
    } else {
      valueMissing && input.setErrorMessage("Can't be blank");
      patternMismatch &&
        input.setErrorMessage(`Must match pattern (${input.placeholder})`);
      input.classList.add("active");
    }
  });
}

async function requestFormPost(data, url = window.location.pathname) {
  return setTimeout(() => true, 250);

  //! It is not allowed to make a POST request on a GitHub page
  const response = await fetch(url, {
    method: "POST",
    mode: "no-cors",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
    body: data,
  });

  return response.ok;
}

const form = document.querySelector("form");
const inputs = Array.from(document.querySelectorAll("input"));

form.addEventListener("submit", function (event) {
  if (this.checkValidity()) {
    requestFormPost(new FormData(form))
      .then((status) => {
        if (status) {
          document
            .querySelector(".form-wrapper")
            .setAttribute("style", "display: none");
          document
            .querySelector(".complete-wrapper")
            .setAttribute("style", "display: block");
        } else {
          console.log("Something mysteriously got wrong 😟🤔");
        }
      })
      .catch((err) => console.log({ error: err }));
  } else {
    activateErrors();
    inputs.forEach((input) =>
      // Display error messages in real-time after first failed attempt
      input.addEventListener("input", function () {
        activateErrors();
      })
    );
  }

  // Wouldn't work if the callback function were async
  event.preventDefault();
});

document.querySelector("#complete").addEventListener("click", () => {
  form.reset();
  document.location.reload();
});
