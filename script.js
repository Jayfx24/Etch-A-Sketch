const parentGridWidth = 600;
let gridDimension = 16;
let color = "grey";
let opacity = 0.1;
let isRandom = false;
let borderStatus;
let totalSquares = gridDimension * gridDimension;
let gridSize = parentGridWidth / gridDimension;
let toggle = true;

// create main container div

const container = document.createElement("div");
const content = document.createElement("div");

const gameContainer = document.createElement("div");

const btnDiv = document.createElement("div");
// select body and append container
container.className = "container";
btnDiv.className = "btn-div";
gameContainer.className = 'game-div'
content.className = "content"
//
const randomize = document.createElement("button");
const resetButton = document.createElement("button");
const randButton = document.createElement("button");
const gridLine = document.createElement("button");
const changeSize = document.createElement("button");

const title = document.createElement("h1");

title.textContent = "Etch-A-Sketch";
resetButton.textContent = "Reset";
randomize.textContent = "Pick Random Color";
randButton.textContent = "Random Color";
gridLine.textContent = "Toggle Grid Lines";
changeSize.textContent = "Change Size";

// create div to hold boxes
let gridContainer = document.createElement("div");
gridContainer.className = "grid-container";
title.className = "title";
gridContainer.style.display = "flex";
gridContainer.style.width = `${parentGridWidth}px`;
gridContainer.style.flexWrap = "wrap";

function createGird() {
  let grid = document.createElement("div");
  grid.className = "grid";
  grid.style.width = `${gridSize}px`;
  grid.style.height = `${gridSize}px`;
  grid.style.backgroundColor = "white";
  grid.style.boxSizing = "border-box";
  grid.style.border = toggle ? "1px solid black" : "none";

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

function clear() {
  const resetGrid = document.querySelectorAll(".grid");
  resetGrid.forEach((e) => {
    e.style.backgroundColor = "white";
    e.style.opacity = 1;
  });
}

function reset() {
  color = "grey";
  isRandom = false;
  clear();
  opacity = 0.1;
}

function randomizeColor() {
  isRandom = true;
  clear();
}

function showGrid() {
  grid = document.querySelectorAll(".grid");
  
  grid.forEach((item) => {
    if (toggle) {
      item.style.border = "none";
    } else {
      item.style.border = "1px solid black";
    }
  });
  toggle = !toggle;
}

function gridMeasurement() {
  size = Number(prompt("Set the grid size between 1-100\ndefault size is 16"));
  if (size && size >= 1 && size <= 100) {
    gridDimension = size;
    toggle = !toggle;
    totalSquares = gridDimension * gridDimension;
    gridSize = parentGridWidth / gridDimension;
    gridContainer.innerHTML = ""
    gridLoop()
    showGrid()



  }
}
function gridLoop() {
  for (let i = 0; i < totalSquares; i++) {
    createGird();
  }
  console.log(totalSquares)
}
gridLoop()

resetButton.addEventListener("click", reset);
randButton.addEventListener("click", randomizeColor);
gridLine.addEventListener("click", showGrid);
changeSize.addEventListener("click", gridMeasurement);
randomize.addEventListener("click", () => {
  color = getRandomColor();
  isRandom = false;
  clear();
});
content.appendChild(title);
btnDiv.appendChild(resetButton);
btnDiv.appendChild(randomize);
btnDiv.appendChild(randButton);
btnDiv.appendChild(gridLine);
btnDiv.appendChild(changeSize);
gameContainer.append(btnDiv)
gameContainer.appendChild(gridContainer);
content.appendChild(gameContainer)
container.appendChild(content)
document.body.appendChild(container);

// change size prompt and UI
