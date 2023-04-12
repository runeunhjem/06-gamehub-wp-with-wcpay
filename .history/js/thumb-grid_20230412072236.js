import { games } from "./games.js";
const thumbsContainer = document.getElementById("product-grid");


// Get the array of wishlisted games from the local storage
const wishlistedGames = JSON.parse(localStorage.getItem("wishlist")) || [];
console.log("wishlistedGames is: ", wishlistedGames);

games.forEach((game) => {
  // Check if the game is in the wishlisted games array
  if (wishlistedGames.includes(parseInt(game.id))) {
    // If the game is wishlisted, set its isWishlisted value to 1
    game.isWishlisted = 1;
  };
});

setTimeout(() => {
  // Generate the HTML for all the games
  const html = games
  .map((game) => {
    // Determine which heart icon to display based on isWishlisted
    let heartIcon = parseInt(game.isWishlisted) === 1 ? "images/ico_heart.svg" : "images/ico_heart_+.svg";
    // const heartIcon = wishlistedGames.includes(parseInt(game.id)) ? "images/ico_heart.svg" : "images/ico_heart_+.svg";
    const typeIcon = game.type === "Key" ? "images/ico_key.svg" : "images/ico_disc.svg";

    setTimeout(() => {
      const wishlistIcons = document.querySelectorAll(".wishlist-icon");
      console.log("wishlistIcons.length is: ", wishlistIcons.length);
      wishlistIcons.forEach(function (wishlistIcon) {
        wishlistIcon.addEventListener("click", function () {
          heartIcon = this.classList.contains("far") ? "images/ico_heart.svg" : "images/ico_heart_+.svg";
          this.src = heartIcon;
          this.classList.toggle("far");
          this.classList.toggle("fas");
        });
      });
    }, 1000);

    return `
    <div class="container game-cards" data-filter="${game.platform}-${game.type}">
      <div class="items ${game.itemName}">
        <div class="psnleft game-title">
          <h2 class="h4 type">${game.itemName}</h2><span class="gametitle-info">${game.platformShort} | ${
      game.type
    } Version</span>
        </div>
        <div class="game-cover">
          <a href="details.html?id=${parseInt(game.id)}" class="results-list">
          <img class="game-img" src=${game.coverImage} alt="${game.itemName} ${game.platform} | ${game.type} Version">
          </a>
        </div>`;

  })
    .join("");

  thumbsContainer.innerHTML = html;
}, 800);


// import { games } from "./games.js";
// console.log("games is: ", games); // Add this line to check that the game objects are being retrieved correctly
// // setTimeout(() => {
// function renderProductGrid(games) {
//   // Get a reference to the element where we will render the grid
//   const gridElement = document.getElementById("product-grid");

//   // Loop through the games and create a thumbnail for each one
//   for (const game of games) {
//     console.log("game is: ", game); // Add this line to check that the game objects are being retrieved correctly
//     // Create a new element for the thumbnail
//     const thumbnailElement = document.createElement("div");
//     thumbnailElement.className = "product-thumbnail";

//     // Create an image element for the product's image
//     const imageElement = document.createElement("img");
//     imageElement.className = "thumb-image";
//     imageElement.src = game.coverImage;
//     imageElement.alt = game.itemName;

//     // Add the image element to the thumbnail element
//     thumbnailElement.appendChild(imageElement);

//     // Create a span element for the product's name
//     const nameElement = document.createElement("span");
//     nameElement.textContent = game.itemName;

//     // Add the name element to the thumbnail element
//     thumbnailElement.appendChild(nameElement);

//     // Add the thumbnail element to the grid element
//     gridElement.appendChild(thumbnailElement);
//   };
//   };
//   // }, 1000);
// document.addEventListener("DOMContentLoaded", () => {
//   renderProductGrid(games);
// });
