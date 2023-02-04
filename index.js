let h1 = document.querySelector("h1");
let body = document.querySelector("body");


// Animation header
window.addEventListener("load", () => {
  setTimeout(() => {
    h1.style.letterSpacing = "8px";
    body.style.background = "hsl(185, 41%, 84%)";
  }, 500);
});
