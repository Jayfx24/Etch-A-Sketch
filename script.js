let gridDimension = 10;
let color = "grey";
let opacity = 0.1;
let isRandom = false;
const totalSquares = gridDimension * gridDimension;
const parentGridWidth = 600;
const gridSize = parentGridWidth / gridDimension;

// create main container div
const container = document.createElement("div");

// select body and append container
container.className = "container";
//
const randomize = document.createElement("button");
const resetButton = document.createElement("button");
const randButton = document.createElement("button");

resetButton.textContent = "Reset";
randomize.textContent = "Pick Random Color";
randButton.textContent = "Toggle Random Color Mode";

// create div to hold boxes
const gridContainer = document.createElement("div");
gridContainer.className = "grid-container";
gridContainer.style.display = "flex";
gridContainer.style.width = `${parentGridWidth}px`;
gridContainer.style.flexWrap = "wrap";

function createGird() {
  let grid = document.createElement("div");
  grid.className = "grid";
  grid.style.width = `${gridSize}px`;
  grid.style.height = `${gridSize}px`;
  grid.style.boxSizing = "border-box";
  grid.style.border = "1px solid black";

  grid.addEventListener("mouseover", hoverEffect);
  gridContainer.appendChild(grid);
}

function hoverEffect(event) {
  if (isRandom) {
    event.target.style.backgroundColor = getRandomColor();
    event.target.style.opacity = 1;
  } else {
    event.target.style.backgroundColor = color;
    event.target.style.opacity = opacity;
  }
  if (opacity >= 1) {
    opacity = 0.1;
  }
  opacity += 0.1;
}

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

function clear(){
    const resetGrid = document.querySelectorAll(".grid");
  resetGrid.forEach((e) => {
    e.style.backgroundColor = "white";
    e.style.opacity = 1;
  });
}
function reset() {
  color = "grey";
  isRandom = false
  clear()
  opacity = 0.1;
}

function randomizeColor() {
  isRandom = true;
  clear()
}
for (let i = 0; i < totalSquares; i++) {
  createGird();
}

resetButton.addEventListener("click", reset);
randButton.addEventListener("click", randomizeColor);
randomize.addEventListener("click", () => {
  color = getRandomColor();
  isRandom= false;
  clear()
});

container.appendChild(resetButton);
container.appendChild(randomize);
container.appendChild(randButton);
container.appendChild(gridContainer);
document.body.appendChild(container);
