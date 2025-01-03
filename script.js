// Copied and need to be understand. Source: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color#example

// let colorPicker;
// const defaultColor = "#2f2f2f";

// window.addEventListener("load", startup, false);

// function startup() {
//   colorPicker = document.querySelector("#color-picker");
//   colorPicker.value = defaultColor;
//   colorPicker.addEventListener("input", updateFirst, false);
//   colorPicker.addEventListener("change", updateAll, false);
//   colorPicker.select();
// }

// function updateFirst(event) {
//   const changeDivColor = document.querySelector(".rows");
//   if (changeDivColor) {
//     changeDivColor.style.backgroundColor = event.target.value;
//   }
// }


// previous code



// create a function that will run when you hover over a single or multiple divs
// add event listener that will listen to hover 
// apply the value that was stored in the varible to the div/divs

const container = document.querySelector(".container");

const defaultColorValue = "#2f2f2f";

let slider = document.querySelector("#myRange");
let sliderOutput = document.querySelector("#demo");
let isMouseDown = false;

function makeRows(rowNum) {
  const squareSize = container.clientWidth / rowNum;

  for (let i = 0; i < rowNum * rowNum; i++) {
    const row = document.createElement("div");
    row.className = "rows";
    row.style.width = `${squareSize}px`;
    row.style.height = `${squareSize}px`;

    // this is for hovering over divs but i changed it to mouse clicking and dragging
    // row.addEventListener("click, mouseover", () => {
    // row.style.backgroundColor = defaultColorValue;
    // });

    // mouse click and dragging
    row.addEventListener("mousedown", () => {
      isMouseDown = true;
      row.style.backgroundColor = defaultColorValue;
    });
    row.addEventListener("mousemove", () => {
      if(isMouseDown){
      row.style.backgroundColor = defaultColorValue;
      }
    });
    container.appendChild(row);
  }
}

// Mouse up
document.addEventListener("mouseup", () => {
  isMouseDown = false;
});

sliderOutput.textContent = `${slider.value} x ${slider.value}`; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  sliderOutput.textContent = this.value + " x " + this.value;
};

makeRows(16);
