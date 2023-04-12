
import { games } from "./games.js";
console.log("games is: ", games); // Add this line to check that the game objects are being retrieved correctly
// setTimeout(() => {
function renderProductGrid(games) {
  // Get a reference to the element where we will render the grid
  const gridElement = document.getElementById("product-grid");

  // Loop through the games and create a thumbnail for each one
  for (const game of games) {
    console.log("game is: ", game); // Add this line to check that the game objects are being retrieved correctly
    // Create a new element for the thumbnail
    const thumbnailElement = document.createElement("div");
    thumbnailElement.className = "product-thumbnail";

    // Create an image element for the product's image
    const imageElement = document.createElement("img");
    imageElement.className = "thumb-image";
    imageElement.src = game.coverImage;
    imageElement.alt = game.itemName;

    // Add the image element to the thumbnail element
    thumbnailElement.appendChild(imageElement);

    // Create a span element for the product's name
    const nameElement = document.createElement("span");
    nameElement.textContent = game.itemName;

    // Add the name element to the thumbnail element
    thumbnailElement.appendChild(nameElement);

    // Add the thumbnail element to the grid element
    gridElement.appendChild(thumbnailElement);
  };
  };
  // }, 1000);
renderProductGrid(games);