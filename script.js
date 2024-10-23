let gridDimension = 98
const totalSquares = gridDimension  * gridDimension;
const parentGridWidth = 600;
const gridSize = parentGridWidth / gridDimension

// create main container div
const container = document.createElement("div");

// select body and append container
container.className = "container";

// create div to hold boxes
const gridContainer = document.createElement("div");
gridContainer.className = "grid-container";
gridContainer.style.display = "flex";
gridContainer.style.width = `${parentGridWidth}px`;
gridContainer.style.flexWrap = "wrap";

function createGird(){
    let grid = document.createElement("div");
    grid.className = "grid";
    grid.style.width = `${gridSize}px`;
    grid.style.height = `${gridSize}px`;
    grid.style.boxSizing = "border-box";
    grid.style.border = "1px solid black";

    gridContainer.appendChild(grid);
};
for (let i = 0; i < totalSquares; i ++) {
    createGird();
}

container.appendChild(gridContainer);
document.body.appendChild(container);

