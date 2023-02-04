const h1 = document.querySelector("h1");
const body = document.querySelector("body");
let bill = document.getElementById("bill");
const buttons = document.querySelectorAll("button");
let people = document.getElementById("people");
let totalBillPerPerson = document.getElementById("totalBillPerPerson");
let TipPerPersonAmount = document.getElementById("TipPerPersonAmount");
const reset = document.getElementById("reset");

// Animation header
window.addEventListener("load", () => {
  setTimeout(() => {
    h1.style.letterSpacing = "8px";
    body.style.background = "hsl(185, 41%, 84%)";
  }, 500);
});

const billCalcul = () => {
  bill.addEventListener("change", (event) => {
    billValue = parseFloat(event.target.value);
  });

  buttons.forEach((button) => {
    button.addEventListener("focus", (event) => {
      let percentage = parseFloat(event.target.textContent) / 100;
      totalBill = billValue * percentage;
    });
  });

  people.addEventListener("change", (event) => {
    peopleNb = parseFloat(event.target.value);
    TipPerPersonAmount.innerHTML =
      Math.round((totalBill / peopleNb) * 100) / 100;
    totalBillPerPerson.innerHTML = billValue / peopleNb + totalBill / peopleNb;
  });

  reset.addEventListener("click", () => {
    document.getElementById("bill").value = null;
    document.getElementById("people").value = null;
    TipPerPersonAmount.innerHTML = "00";
    totalBillPerPerson.innerHTML = "00";
  });
};


billCalcul();
