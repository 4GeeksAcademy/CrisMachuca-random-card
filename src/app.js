/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let suit = ["♠", "♣", "♥", "♦"];
  let number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];

  const updateCard = () => {
    // Get random number

    let randomNumber = number[Math.floor(Math.random() * number.length)];
    document.getElementById("number").innerHTML = randomNumber;

    // Get random suit

    let randomSuit = suit[Math.floor(Math.random() * suit.length)];
    let suitElement1 = document.getElementById("suit1");
    let suitElement2 = document.getElementById("suit2");
    suitElement1.innerHTML = randomSuit;
    suitElement2.innerHTML = randomSuit;

    // Assign the suit color using defined class in css

    if (randomSuit == "♥" || randomSuit == "♦") {
      suitElement1.classList.add("red-suit");
      suitElement2.classList.add("red-suit");
    } else {
      suitElement1.classList.remove("red-suit"); // Revert to default color if it's not ♥ or ♦
      suitElement2.classList.remove("red-suit");
    }
  };

  // Generate a new card by pressing a button

  document.getElementById("new-card-button").addEventListener("click", () => {
    updateCard();
  });

  // Change card at 5-second intervals

  setInterval(updateCard, 5 * 1000);

  // Call function onload

  updateCard();

  // Change size using user's input

  function changeSizeCard() {
    let userWidth = parseInt(document.getElementById("widthInput").value, 10);
    let userHeight = parseInt(document.getElementById("heightInput").value, 10);

    // Set minimum and maximum limits for the width and height.

    const minWidth = 100;
    const maxWidth = 500;
    const minHeight = 140;
    const maxHeight = 700;

    // Validate the width

    if (userWidth < minWidth) {
      alert(`El ancho mínimo es ${minWidth}px.`);
      userWidth = minWidth;
    } else if (userWidth > maxWidth) {
      alert(`El ancho máximo permitido es ${maxWidth}px.`);
      userWidth = maxWidth;
    }

    // Validate the height

    if (userHeight < minHeight) {
      alert(`El alto mínimo es ${minHeight}px.`);
      userHeight = minHeight;
    } else if (userHeight > maxHeight) {
      alert(`El alto máximo permitido es ${maxHeight}px.`);
      userHeight = maxHeight;
    }

    // Apply the validated sizes

    let myDiv = document.getElementById("card");
    myDiv.style.width = `${userWidth}px`;
    myDiv.style.height = `${userHeight}px`;
  }

  document
    .getElementById("changeSizeButton")
    .addEventListener("click", function() {
      changeSizeCard();
    });
};
