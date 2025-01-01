const container  = document.querySelector(".container");

let rows = document.querySelector(".rows");

function makeRows(rowNum) {
    for(let r = 0; r < rowNum; r++) {
        for(let nr = 0; nr < rowNum; nr++) {
            let row = document.createElement("div");
            container.appendChild(row).className = "rows";
        }
    }
}
makeRows(5);