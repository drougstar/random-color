"use strict";

const buttonEl = document.querySelector(".button-color"),
  bodyEl = document.querySelector(".body"),
  backgroundColorEl = document.querySelector(".background-color"),
  buttonHexEl = document.querySelector(".hex"),
  buttonSimpleEl = document.querySelector(".simple"),
  randSimpleElements = [
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Blue",
    "Cyan",
    "Purple",
    "White",
    "Black",
    "Brown",
    "Magenta",
    "Tan",
    "Olive",
    "Maroon",
    "Navy",
    "Aquamarine",
    "Turquoise",
    "Silver",
    "Lime",
    "Teal",
    "Indigo",
    "Violet",
    "Pink",
    "Gray",
    "Rose",
  ],
  randHexElements = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
backgroundColorEl.style.color = "#dddddd";
// Color starting as white,simple mode not selected
let randColor = "#ffffff",
  simpleSelected = 0;
backgroundColorEl.innerHTML = `Color is : ${randColor}`;

// Simple mode button clicked
buttonSimpleEl.addEventListener("click", function () {
  if (randColor === "#ffffff") {
    randColor = "White";
    backgroundColorEl.innerHTML = `Color is : ${randColor}`;
  }
  // Simple mode active
  simpleSelected = 1;
});
// Hex mode button is clicked
buttonHexEl.addEventListener("click", function () {
  if (randColor === "White") {
    randColor = "#ffffff";
    backgroundColorEl.innerHTML = `Color is : ${randColor}`;
  }
  // Hex mode is active
  simpleSelected = 0;
});
// Change color button clicked
buttonEl.addEventListener("click", function () {
  // if hex mode is active, then create a hex value
  if (!simpleSelected) {
    randColor = "#";
    for (let i = 0; i < 6; i++) {
      randColor +=
        randHexElements[
          Math.trunc(Math.random() * Number(randHexElements.length))
        ];
    }
  }
  // if simple mode active then select one from color library
  else
    randColor =
      randSimpleElements[
        Math.trunc(Math.random() * Number(randSimpleElements.length))
      ];
  // Change color of the hexagon
  bodyEl.style.background = randColor;
  // Write the value to the screen
  backgroundColorEl.innerHTML = `Color is : ${randColor}`;
});
