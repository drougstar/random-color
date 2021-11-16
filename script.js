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
let randColor = "#ffffff",
  simpleSelected = 0;
backgroundColorEl.innerHTML = `Background color is : ${randColor}`;

buttonSimpleEl.addEventListener("click", function () {
  if (randColor === "#ffffff") {
    randColor = "White";
    backgroundColorEl.innerHTML = `Background color is : ${randColor}`;
  }

  simpleSelected = 1;
});
buttonHexEl.addEventListener("click", function () {
  if (randColor === "White") {
    randColor = "#ffffff";
    backgroundColorEl.innerHTML = `Color is : ${randColor}`;
  }
  simpleSelected = 0;
});
buttonEl.addEventListener("click", function () {
  if (!simpleSelected) {
    randColor = "#";
    for (let i = 0; i < 6; i++) {
      // To check what is this about
      // let testRandom = Math.random();
      // console.log(testRandom);
      // console.log(randHexElements.length);
      // console.log(testRandom * (Number(randHexElements.length) + 1));
      // console.log(Math.trunc(testRandom * (Number(randHexElements.length) + 1)));
      // console.log("-----------------------------------------------------");

      randColor +=
        randHexElements[
          Math.trunc(Math.random() * Number(randHexElements.length))
        ];
    }
  } else randColor = randSimpleElements[Math.trunc(Math.random() * Number(randSimpleElements.length))];
  backgroundColorEl.style.color = randColor === "Black" ? "white" : "black";
  console.log(randColor);
  bodyEl.style.background = randColor;
  backgroundColorEl.innerHTML = `Background color is : ${randColor}`;
});
