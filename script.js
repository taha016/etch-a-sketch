const container = document.querySelector(".container");
const innerContainer = document.querySelector(".innercontainer");
const colorPicker = document.querySelector("#color-picker");
const slider = document.querySelector("#myRange");
const sliderOutput = document.querySelector("#demo");
const colorMode = document.querySelector(".color-mode"); // Use the specific class
const rainbowMode = document.querySelector(".rainbow-mode"); // Use the specific class
const eraser = document.querySelector(".eraser"); // Use the specific class
const clearButton = document.querySelector(".clear"); // Use the specific class

let defaultColorValue = "#2f2f2f";
let isMouseDown = false;
let isColorMode = true;
let isRainbowModeActive = false;
let isErasing = false;

// Function to generate a random RGB color
function rainbow() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

// Do not change makeRows function
function makeRows(rowNum) {
  innerContainer.innerHTML = ""; // Clear existing rows
  const squareSize = innerContainer.clientWidth / rowNum;

  for (let i = 0; i < rowNum * rowNum; i++) {
    const row = document.createElement("div");
    row.className = "rows";
    row.style.width = `${squareSize}px`;
    row.style.height = `${squareSize}px`;

    // Add mouse events for drawing
    row.addEventListener("mousedown", () => {
      isMouseDown = true;
      row.style.backgroundColor = isRainbowModeActive ? rainbow() : defaultColorValue;
    });
    row.addEventListener("mousemove", () => {
      if (isMouseDown) {
        row.style.backgroundColor = isRainbowModeActive ? rainbow() : defaultColorValue;
      }
    });

    innerContainer.appendChild(row);
  }
}

// Color Mode
colorMode.addEventListener("click", () => {
  isColorMode = true;
  isRainbowModeActive = false; // Disable rainbow mode
  isErasing = false; // Disable eraser
  defaultColorValue = colorPicker.value; // Use the selected color

  // Update button styles
  colorMode.style.backgroundColor = defaultColorValue;
  colorMode.style.color = "#e5eaf5";
  rainbowMode.style.backgroundColor = "#e5eaf5";
  rainbowMode.style.color = "#2f2f2f";
  eraser.style.backgroundColor = "#e5eaf5";
  eraser.style.color = "#2f2f2f";
});

// Eraser
eraser.addEventListener("click", () => {
  isColorMode = false;
  isRainbowModeActive = false; // Disable rainbow mode
  isErasing = true;
  defaultColorValue = "white"; // Set to eraser color

  // Update button styles
  eraser.style.backgroundColor = "#2f2f2f";
  eraser.style.color = "#e5eaf5";
  colorMode.style.backgroundColor = "#e5eaf5";
  colorMode.style.color = "#2f2f2f";
  rainbowMode.style.backgroundColor = "#e5eaf5";
  rainbowMode.style.color = "#2f2f2f";
});

// Rainbow Mode
rainbowMode.addEventListener("click", () => {
  isColorMode = false;
  isRainbowModeActive = !isRainbowModeActive; // Toggle rainbow mode
  isErasing = false; // Disable eraser

  // for example if the rainbow mode is on, then this this statement should run
  if (isRainbowModeActive) {
    rainbowMode.style.backgroundColor = "#2f2f2f";
    rainbowMode.style.color = "#e5eaf5";
    colorMode.style.backgroundColor = "#e5eaf5";
    colorMode.style.color = "#2f2f2f";
    eraser.style.backgroundColor = "#e5eaf5";
    eraser.style.color = "#2f2f2f";

    // if isRainbowModeAcitve = false then run this:
  } else {
    rainbowMode.style.backgroundColor = "#e5eaf5";
    rainbowMode.style.color = "#2f2f2f";
  }
});

// Clear grid
clearButton.addEventListener("click", () => {
  document.querySelectorAll(".rows").forEach((row) => {
    row.style.backgroundColor = "white";
  });
});

// Update grid size dynamically with slider
slider.addEventListener("input", () => {
  sliderOutput.textContent = slider.value;
  makeRows(slider.value);
});

// Detect mouse up to stop drawing
document.addEventListener("mouseup", () => {
  isMouseDown = false;
});

// Change color picker value
colorPicker.addEventListener("change", () => {
  isColorMode = true;
  isRainbowModeActive = false; // Disable rainbow mode
  isErasing = false; // Disable eraser
  defaultColorValue = colorPicker.value; // Update the default color

  // Update button styles
  colorMode.style.backgroundColor = defaultColorValue;
  colorMode.style.color = "#e5eaf5";
  rainbowMode.style.backgroundColor = "#e5eaf5";
  rainbowMode.style.color = "#2f2f2f";
  eraser.style.backgroundColor = "#e5eaf5";
  eraser.style.color = "#2f2f2f";
});

// Initialize
window.addEventListener("load", () => {
  sliderOutput.textContent = slider.value; // Display initial slider value
  makeRows(slider.value); // Create the initial grid // Set initial button styles
});
