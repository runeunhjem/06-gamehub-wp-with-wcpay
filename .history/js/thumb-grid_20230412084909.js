import { games } from "./games.js";
const thumbsContainer = document.getElementById("thumb-grid");
const hideTumbsContainer = document.getElementById("thumb-container");
const hideThumbs = document.getElementById("hide-thumbs");
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

    return `
    <div class="thumb-box">
      <div class="thumbTitle">${game.itemName}</div>
      <span class="thumbInfo">${game.platformShort} | ${ game.type } Version</span>
      <div class="thumb-cover">
        <a href="details.html?id=${parseInt(game.id)}" class="thumbs-list">
          <img class="thumb-image" src=${game.coverImage} alt="${game.itemName} ${game.platform} | ${game.type} Version">
        </a>
      </div>
    </div>`;
  })
    .join("");

  thumbsContainer.innerHTML = html;
}, 800);
//Show/Hide thumbnails
    hideThumbs.addEventListener("click", function () {
      if (hideThumbs.innerHTML === "Hide Thumbnails") {
        hideThumbs.innerHTML = "Show Thumbnails";
        hideTumbsContainer.classList.add("hide");
      } else {
        hideThumbs.innerHTML = "Hide Thumbnails";
        hideTumbsContainer.classList.remove("hide");
      }
    });