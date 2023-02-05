const h1 = document.querySelector("h1");
const body = document.querySelector("body");
let bill = document.getElementById("bill");
const buttons = document.querySelectorAll("button");
let people = document.getElementById("people");
let totalBillPerPerson = document.getElementById("totalBillPerPerson");
let TipPerPersonAmount = document.getElementById("TipPerPersonAmount");
let custom = document.getElementById("custom");
const reset = document.getElementById("reset");

// Animation header
window.addEventListener("load", () => {
  setTimeout(() => {
    h1.style.letterSpacing = "8px";
    body.style.background = "hsl(185, 41%, 84%)";
  }, 500);
});

//

const billCalcul = () => {
  // Set bill amount
  bill.addEventListener("change", (event) => {
    billValue = parseFloat(event.target.value);
  });
  // Select tip %
  // Custom tip %
  custom.addEventListener("change", (event) => {
    const value = event.target.value;
    let percentage = event.target.value / 100;
    totalBill = billValue * percentage;
  });
  // Custom button %
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((button) => {
        button.classList.remove("buttonSelec");
      });
      button.classList.add("buttonSelec");
    });
    button.addEventListener("focus", (event) => {
      let percentage = parseFloat(event.target.textContent) / 100;
      totalBill = billValue * percentage;
    });
  });
  // Set number of person
  people.addEventListener("change", (event) => {
    peopleNb = parseFloat(event.target.value);
    TipPerPersonAmount.innerHTML =
      Math.round((totalBill / peopleNb) * 100) / 100;
    totalBillPerPerson.innerHTML =
      Math.round((billValue / peopleNb + totalBill / peopleNb) * 100) / 100;
  });
  // Reset button
  reset.addEventListener("click", () => {
    document.getElementById("bill").value = null;
    document.getElementById("people").value = null;
    document.getElementById("custom").value = null;
    TipPerPersonAmount.innerHTML = "00";
    totalBillPerPerson.innerHTML = "00";
  });
};

billCalcul();
