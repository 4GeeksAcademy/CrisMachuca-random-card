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

    // Assign the suit color

    if (randomSuit == "♥" || randomSuit == "♦") {
      suitElement1.style.color = "red";
      suitElement2.style.color = "red";
    } else {
      suitElement1.style.color = ""; // Revert to default color if it's not ♥ or ♦
      suitElement2.style.color = "";
    }
  };

  // Generate a new card by pressing a button

  document.getElementById("new-card-button").addEventListener("click", () => {
    updateCard();
  });

  // Change card at 5-second intervals

  const timer = 5;
  setInterval(updateCard, timer * 1000);

  // Call function onload

  updateCard();

  // Change size using user's input
  function changeSizeCard() {
    let userWidth = document.getElementById("widthInput").value;
    let userHeight = document.getElementById("heightInput").value;

    let myDiv = document.getElementById("card");
    myDiv.style.width = userWidth + "px";
    myDiv.style.height = userHeight + "px";
  }
  document
    .getElementById("changeSizeButton")
    .addEventListener("click", function() {
      changeSizeCard();
    });
};
