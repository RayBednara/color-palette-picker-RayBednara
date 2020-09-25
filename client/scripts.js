const display = document.querySelector("main > div");
const pallets = document.querySelectorAll("div > div");
const compStyle = getComputedStyle(pallets[0]);

pallets.forEach((colorPalette, index) => {
  colorPalette.style.setProperty(
    "background-color",
    compStyle.getPropertyValue(`--${index}`)
  );

  colorPalette.addEventListener("click", () => {
    display.style.setProperty(
      "background-color",
      colorPalette.style.getPropertyValue("background-color")
    );
  });
});
