const display = document.querySelector("main > div");
const pallets = document.querySelectorAll("div > div");

const compStyle = getComputedStyle(document.querySelector("div > div"));
console.log(compStyle);
pallets.forEach((colorPalette, index) => {
  colorPalette.style.setProperty(
    "background-color",
    compStyle.getPropertyValue(`--${index}`)
  );
});
