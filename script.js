const gridContainer = document.querySelector(".grid-container");
const newGridButton = document.querySelector(".reset");
newGridButton.addEventListener("click", function () {
  getUserDefinedWidth();
});

let userSelectedColor = "blue";
let isRainbow = false;
let isEraser = false;

const rainbowButton = document.querySelector(".rainbow");
rainbowButton.addEventListener("click", function () {
  isRainbow = !isRainbow;
  if (isRainbow === true) {
    isEraser = false;
  }
});

const eraserButton = document.querySelector(".eraser");
eraserButton.addEventListener("click", function () {
  isEraser = !isEraser;
  if (isEraser === true) {
    isRainbow = false;
  }
});

function getUserSelectedColor() {
  if (isRainbow === true) {
    return getRandomColor();
  } else if (isEraser === true) {
    return "white";
  } else {
    return userSelectedColor;
  }
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getUserDefinedWidth() {
  console.log("getUserDefinedWidth funciton called");
  let userDefinedWidth = prompt(
    "How big would you like your etch-a-sketch? Enter a number between 1 and 100."
  );
  if (userDefinedWidth < 101 && userDefinedWidth > 0) {
    console.log(userDefinedWidth);
    makeGrid(Math.floor(userDefinedWidth));
  }
}

function makeGrid(userDefinedWidth) {
  const boxesInGrid = userDefinedWidth * userDefinedWidth;
  const boxWidth = 960 / userDefinedWidth + "px"; //defines and stores how many px each box should be
  console.log(boxWidth);
  let gridBox = [];
  for (i = 0; i < boxesInGrid; i++) {
    gridBox[i] = document.createElement("div");
    gridBox[i].classList.add("grid-box");
    gridBox[i].addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = getUserSelectedColor();
    });
    gridBox[i].style.width = boxWidth;
    gridBox[i].style.height = boxWidth;
    gridBox[i].style.maxWidth = boxWidth;
    gridBox[i].style.maxheight = boxWidth;
    gridContainer.append(gridBox[i]);
  }
}
