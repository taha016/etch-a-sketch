const container = document.querySelector(".container");

var slider = document.querySelector("#myRange");
var output = document.querySelector("#demo");

function makeRows(rowNum) {
    const squareSize = container.clientWidth / rowNum; 

    for (let i = 0; i < rowNum * rowNum; i++) {
        const row = document.createElement("div");
        row.className = "rows";
        row.style.width = `${squareSize}px`;
        row.style.height = `${squareSize}px`;
        container.appendChild(row);
    }
}

output.textContent = `${slider.value} x ${slider.value}`; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    if(slider.oninput == 1) {
        output.textContent = `${slider.value}`;
    } else {
        output.textContent = this.value + " x " + this.value;
}
} 

makeRows(8);
