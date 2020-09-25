const display = document.querySelector("main > div");
const pallets = document.querySelectorAll("div > div");
const compStyle = getComputedStyle(pallets[0]);

const resetPalette = () => {
  const greyed = document.querySelector(".greyscale");
  if (greyed) {
    greyed.classList.remove("greyscale");
  }
};

pallets.forEach((colorPalette, index) => {
  colorPalette.style.setProperty(
    "background-color",
    compStyle.getPropertyValue(`--${index}`)
  );

  colorPalette.addEventListener("click", () => {
    resetPalette();
    display.style.setProperty(
      "background-color",
      colorPalette.style.getPropertyValue("background-color")
    );

    colorPalette.classList.add("greyscale");
  });
});
