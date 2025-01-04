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

function makeRows(rowNum) {
  innerContainer.innerText = ""; // Clear existing rows
  const squareSize = innerContainer.clientWidth / rowNum;

  for (let i = 0; i < rowNum * rowNum; i++) {
    const row = document.createElement("div");
    row.className = "rows";
    row.style.width = `${squareSize}px`;
    row.style.height = `${squareSize}px`;

    // Add mouse events for drawing
    row.addEventListener("mousedown", () => {
      isMouseDown = true;
      row.style.backgroundColor = defaultColorValue;
    });
    row.addEventListener("mousemove", () => {
      if (isMouseDown) {
        row.style.backgroundColor = defaultColorValue;
      }
    });

    innerContainer.appendChild(row);
  }
}

// Update color from color picker
colorPicker.addEventListener("input", (event) => {
  defaultColorValue = event.target.value;
});

//Color Mode
colorMode.addEventListener("click", (event) => {
  defaultColorValue;
  defaultColorValue = event.target.value;
});

// Eraser
eraser.addEventListener("click", (event) => {
  defaultColorValue = "white";
  defaultColorValue = event.target.value;
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
makeRows(slider.value);
