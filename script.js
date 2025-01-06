const container = document.querySelector(".container");
const innerContainer = document.querySelector(".innercontainer");
const colorPicker = document.querySelector("#color-picker");
const slider = document.querySelector("#myRange");
const sliderOutput = document.querySelector("#demo");
const colorMode = document.querySelector(".buttons:nth-child(1)");
const rainbowMode = document.querySelector(".rainbow-mode");
const eraser = document.querySelector(".eraser");
const clearButton = document.querySelector(".buttons:nth-child(4)");

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

// Function to create rows dynamically
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

// Update color from color picker
colorPicker.addEventListener("input", (event) => {
  defaultColorValue = event.target.value;
});

// Color Mode
colorMode.addEventListener("click", () => {
  isRainbowModeActive = false; // Disable rainbow mode
  defaultColorValue = colorPicker.value; // Use the selected color
  colorMode.style.color = "#e5eaf5";
  if(isColorMode) {
    colorMode.style.backgroundColor = defaultColorValue;
  } else {
    colorMode.style.backgroundColor = "#e5eaf5";
  }
});

// Eraser
eraser.addEventListener("click", () => {
  let isColorMode = false;
  isRainbowModeActive = false; // Disable rainbow mode
  defaultColorValue = "white";
  eraser.style.backgroundColor = "#2f2f2f";
  eraser.style.color = "#e5eaf5";
});

// Rainbow Mode
rainbowMode.addEventListener("click", () => {
  let isColorMode = false;
  isRainbowModeActive = !isRainbowModeActive; // Toggle rainbow mode
  rainbowMode.textContent = isRainbowModeActive ? "Rainbow Mode: ON" : "Rainbow Mode: OFF"; // Update button text
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

// Initialize
sliderOutput.textContent = slider.value; // Display initial slider value
makeRows(slider.value); // Create the initial grid
