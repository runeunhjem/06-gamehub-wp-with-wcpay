  import { featured } from "./featured.js";
  import { games } from "./games.js";
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  // DROPDOWN MENU
  const burger1 = document.querySelector("#burger1");
  const burger2 = document.querySelector("#burger2");
  const menuFlyin = document.querySelector(".menu-flyin");

  burger1.addEventListener("click", function () {
    menuFlyin.classList.toggle("show");
  });

  burger1.addEventListener("keydown", function (event) {
    if (event.code === "Enter" || event.code === "Space") {
      menuFlyin.classList.toggle("show");
    }
  });
  burger2.addEventListener("keydown", function (event) {
    if (event.code === "Enter" || event.code === "Space") {
      menuFlyin.classList.toggle("show");
    }
  });

  burger2.addEventListener("click", function () {
    menuFlyin.classList.toggle("show");
  });

  // BACK BUTTON
  const gamesContainer = document.getElementById("games-container");
  let backLinks = document.querySelectorAll(".back-link");
  backLinks.forEach(function (backLink) {
    backLink.addEventListener("click", function (event) {
      event.preventDefault();
      window.history.go(-1);
    });
  });

  //SEARCH
  const form = document.getElementById("search-form");
  const input = form.querySelector("input[name='query']");

  input.addEventListener("focus", function () {
    document.querySelector("#search").style.backgroundColor = "#fafad2";
    document.querySelector("#search").style.color = "#000";
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const query = input.value;
    const url = `search-results.html?query=${query}`;
    form.action = url;
    form.submit();
  });

  function resetBackgroundColor() {
    var searchInput = document.querySelector('input[type="text"]');
    searchInput.style.backgroundColor = "#00000099";
  }

  document.addEventListener("click", function (event) {
    var searchForm = document.querySelector("form");
    var isClickInside = searchForm.contains(event.target);
    if (!isClickInside) {
      resetBackgroundColor();
    }
  });

  // ADD TO CART FUNCTION
  function addToCart(event) {
    const target = event.target;
    if (!target.classList.contains("add-to-cart")) {
      return; // ignore clicks on non-add-to-cart elements
    }

    console.log(target.dataset.id);
    const gameID = target.dataset.id;
    console.log("gameID is: ", gameID);
    const game = games.find((g) => parseInt(g.id, 10) === parseInt(gameID, 10));
    console.log("game is: ", game);
    const coverImage = game.coverImage;
    let quantity = 1;
    // const isWishlisted = game.isWishlisted;
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const isWishlisted = wishlist.findIndex((game) => parseInt(game.id) === parseInt(gameID, 10)) >= 0 ? 1 : 0;
    console.log("game.id is: ", game.id);
    console.log("game.isWishlisted is: ", game.isWishlisted);
    console.log("coverImage is: ", coverImage);
    const container = target.closest(".container");
    const itemName = container.querySelector(".game-title .type").textContent;
    const price = parseFloat(container.querySelector(".currentPrice").textContent);
    const platformShort = container.querySelector(".gametitle-info").textContent;
    const total = price * quantity;
    const featured = game.featured;
    const formattedTotal = total.toFixed(2);
    const product = {
      id: parseInt(gameID),
      itemName: itemName,
      coverImage: coverImage,
      isWishlisted: isWishlisted,
      quantity: quantity,
      price: parseFloat(price),
      total: parseFloat(formattedTotal),
      platformShort: platformShort,
      featured: featured,
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cart.findIndex((p) => parseInt(p.id) === parseInt(gameID));
    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += quantity;
      cart[existingProductIndex].total = (cart[existingProductIndex].quantity * cart[existingProductIndex].price).toFixed(2);
    } else {
      cart.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("cart is: ", cart);
  }

  // ADD TO WISHLIST FUNCTION
  function addToWishlist(event) {
    const target = event.target;
    if (!target.classList.contains("add-to-wishlist")) {
      return; // ignore clicks on non-add-to-wishlist elements
    }
    console.log("target.dataset.id is: ", target.dataset.id);
    const gameID = target.dataset.id;
    console.log("gameID is: ", gameID);
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const existingIndex = wishlist.findIndex((game) => parseInt(game.id) === parseInt(gameID));
    console.log("existingIndex is: ", existingIndex);
    if (existingIndex >= 0) {
      // game is already in wishlist, remove it
      wishlist.splice(existingIndex, 1);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      console.log(`Game with ID ${gameID} removed from wishlist`);
      if (window.location.pathname === "/wishlist.html") {
        const icon = document.querySelector(`.wishlist-icon[data-id="${gameID}"]`);
        console.log("icon is: ", icon);
        icon.closest(".container").remove();
        console.log("wishlist is: ", wishlist);
      };
    } else {
      // event.target.src = isWishlisted ? "images/ico_heart_+.svg" : "images/ico_heart.svg";
      const game = games.find((g) => parseInt(g.id, 10) === parseInt(gameID, 10));

      console.log("game is: ", game);
      const coverImage = game.coverImage;

      const container = target.closest(".container");
      const itemName = game.itemName;
      const currentPrice = parseFloat(game.currentPrice);
      const beforePrice = parseFloat(game.beforePrice);
      const platformShort = game.platformShort;
      const type = game.type;
      const releaseDate = game.releaseDate;
      const region = game.region;
      const isWishlisted = 1;
      const quantity = 1;
      const platform = game.platform;
      const gamespotRating = game.gamespotRating;
      const total = parseFloat(currentPrice);
      const formattedTotal = total.toFixed(2);
      const productOverview = game.productOverview;
      const productDescription = game.productDescription;
      const productPlot = game.productPlot;
      const productGameplay = game.productGameplay;
      const productKeyFeatures = game.productKeyFeatures;
      const featured = game.featured;
      // const index = game.index;

      const product = {
        id: parseInt(gameID),
        // index: index,
        itemName: itemName,
        coverImage: coverImage,
        isWishlisted: isWishlisted,
        releaseDate: releaseDate,
        type: type,
        region: region,
        platform: platform,
        gamespotRating: gamespotRating,
        quantity: quantity,
        currentPrice: parseInt(currentPrice) * quantity,
        beforePrice: beforePrice,
        total: parseFloat(formattedTotal),
        platformShort: platformShort,
        productOverview: productOverview,
        productDescription: productDescription,
        productPlot: productPlot,
        productGameplay: productGameplay,
        productKeyFeatures: productKeyFeatures,
        featured: featured
      };

      // let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      console.log("wishlist is: ", wishlist);

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const cartGame = cart.find((game) => parseInt(game.id) === parseInt(gameID));
      console.log("cartGame is: ", cartGame);
      if (cartGame) {
        cartGame.isWishlisted = 1;
        localStorage.setItem("cart", JSON.stringify(cart));
      }
      console.log("cart is: ", cart);
    }
  }

  if (gamesContainer) {
    gamesContainer.addEventListener("click", addToCart);
    gamesContainer.addEventListener("click", addToWishlist); // add this line
  }

  // add event listener to the clear cart & clear wishlist buttons
  if (document.querySelector(".clear-cart")) {
    document.querySelector(".clear-cart").addEventListener("click", clearCart);
  }

  if (document.querySelector(".clear-wishlist")) {
    document.querySelector(".clear-wishlist").addEventListener("click", clearWishlist);
  }

  // clear cart function
  function clearCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
    updateCartCount();
  }

  // clear wishlist function
  function clearWishlist() {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist = [];
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    location.reload();
    updatewishlistCount();
  }

  // FILTER SECTION
  const filterSelect = document.getElementById("filters");
  const filtersAreOnPage = document.querySelector(".search-container");
  if (filtersAreOnPage) {
    filterSelect.addEventListener("change", (event) => {
      const selectedFilter = event.target.value;
      let filteredGames = games;
      if (selectedFilter === "Playstation 4" || selectedFilter === "Playstation 5") {
        filteredGames = filteredGames.filter((game) => game.platform === selectedFilter);
      } else if (selectedFilter === "Full Disc Versions" || selectedFilter === "Key only Versions") {
        filteredGames = filteredGames.filter((game) => {
          if (selectedFilter === "Full Disc Versions" && game.type === "Disc") {
            return true;
          } else if (selectedFilter === "Key only Versions" && game.type === "Key") {
            return true;
          } else {
            return false;
          }
        });
      }

      // Regenerate the HTML for the filtered games
      const filteredHtml = filteredGames
        .map((game) => {
          const heartIcon = parseInt(game.isWishlisted) === 1 ? "images/ico_heart.svg" : "images/ico_heart_+.svg";
          const typeIcon = game.type === "Key" ? "images/ico_key.svg" : "images/ico_disc.svg";

        return `
          <div class="container game-cards" data-filter="${game.platform}-${game.type}">
          <div class="items ${game.itemName}">
            <div class="psnleft game-title">
              <h2 class="h4 type">${game.itemName}</h2><span class="gametitle-info">${game.platformShort} | ${game.type} Version</span>
            </div>
            <div class="game-cover">
              <a href="details.html?id=${parseInt(game.id)}" class="results-list">
              <img class="game-img" src=${game.coverImage} alt="${game.itemName} ${game.platform} | ${game.type} Version">
              </a>
            </div>
            <div class="small psnleft release-date">Release Date:</div>
            <div class="small psnleft reldate">${game.releaseDate}</div>
            <div class="small psnleft">Type:</div>
            <div class="small psncenter type-ico">
              <img src="${typeIcon}" alt="${game.type}">
            </div>
            <div class="small psnleft type-text">${game.type}</div>
            <div class="small psnleft region">Region:</div>
            <div class="small psncenter region-ico">
              <img src="images/ico_europe.svg" alt="Region | Europe">
            </div>
            <div class="small psnleft region-text">${game.region}</div>
            <div class="small psnleft platform">Platform:</div>
            <div class="small psncenter platform-ico">
              <img src="images/ico_psn.svg" alt="Playstation 5">
            </div>
            <div class="small psnleft platform-text">${game.platform}</div>
            <div class="psnleft gsrating">Gamespot Rating:</div>
            <div class="psnright rating">${game.gamespotRating}</div>
            <div class="small psnleft readreview">
              <a href="https://www.gamespot.com/games/reviews/">Read review</a>
            </div>
            <div class="togglewishlist add-to-wishlist">
              <span class="small psnright" href="wishlist.html">
                <img class="remove small psnright add-to-wishlist" src="${heartIcon}" alt="Add to wishlist" data-id="${parseInt(game.id)}">
              </span>
            </div>
            <div class="price psnright">
              <span class="dollar yellow">.</span>
              <span class="price currentPrice">${parseFloat(game.currentPrice)}</span>
            </div>
            <div class="price__before psnright">
              <span class="dollar yellow">.</span>${parseFloat(game.beforePrice)}
            </div>
          </div>
            <div class="psn__buttons">
              <div class="cta add-to-cart" data-id="${parseInt(game.id)}">Add to cart</div>
              <a href="details.html?id=${parseInt(game.id)}" class="results-list" role="button">
                <div class="cta">View Details</div>
              </a>
            </div>
          </div>
        `;
      })
      .join("");

      // Set the HTML of the gamesContainer element to the filtered HTML
      gamesContainer.innerHTML = filteredHtml;
    });
  };
// }, 1000);



// SORT SECTION
const sortSelect = document.getElementById("sort");
const sortAreOnPage = document.querySelector(".choose-sort");
if (sortAreOnPage) {
  sortSelect.addEventListener("change", (event) => {
    const selectedSort = event.target.value;
    let sortedGames = games;
    if (selectedSort === "Price (Low to High)") {
      sortedGames = sortedGames.sort((a, b) => parseFloat(a.currentPrice) - parseFloat(b.currentPrice));
    } else if (selectedSort === "Price (High to Low)") {
      sortedGames = sortedGames.sort((a, b) => parseFloat(b.currentPrice) - parseFloat(a.currentPrice));
    } else if (selectedSort === "Release Date (Newest First)") {
      sortedGames = sortedGames.sort((a, b) => a.releaseDate.localeCompare(b.releaseDate));
    } else if (selectedSort === "Release Date (Oldest First)") {
      sortedGames = sortedGames.sort((a, b) => b.releaseDate.localeCompare(a.releaseDate));
    } else if (selectedSort === "Name (A to Z)") {
      sortedGames = sortedGames.sort((a, b) => a.itemName.localeCompare(b.itemName));
    } else if (selectedSort === "Name (Z to A)") {
      sortedGames = sortedGames.sort((a, b) => b.itemName.localeCompare(a.itemName));
    }

      // Regenerate the HTML for the sorted games
      const sortedHtml = sortedGames
        .map((game) => {
          const heartIcon = parseInt(game.isWishlisted) === 1 ? "images/ico_heart.svg" : "images/ico_heart_+.svg";
          const typeIcon = game.type === "Key" ? "images/ico_key.svg" : "images/ico_disc.svg";

        return `
          <div class="container game-cards" data-filter="${game.platform}-${game.type}">
          <div class="items ${game.itemName}">
            <div class="psnleft game-title">
              <h2 class="h4 type">${game.itemName}</h2><span class="gametitle-info">${game.platformShort} | ${game.type} Version</span>
            </div>
            <div class="game-cover">
              <a href="details.html?id=${parseInt(game.id)}" class="results-list">
              <img class="game-img" src=${game.coverImage} alt="${game.itemName} ${game.platform} | ${game.type} Version">
              </a>
            </div>
            <div class="small psnleft release-date">Release Date:</div>
            <div class="small psnleft reldate">${game.releaseDate}</div>
            <div class="small psnleft">Type:</div>
            <div class="small psncenter type-ico">
              <img src="${typeIcon}" alt="${game.type}">
            </div>
            <div class="small psnleft type-text">${game.type}</div>
            <div class="small psnleft region">Region:</div>
            <div class="small psncenter region-ico">
              <img src="images/ico_europe.svg" alt="Region | Europe">
            </div>
            <div class="small psnleft region-text">${game.region}</div>
            <div class="small psnleft platform">Platform:</div>
            <div class="small psncenter platform-ico">
              <img src="images/ico_psn.svg" alt="Playstation 5">
            </div>
            <div class="small psnleft platform-text">${game.platform}</div>
            <div class="psnleft gsrating">Gamespot Rating:</div>
            <div class="psnright rating">${game.gamespotRating}</div>
            <div class="small psnleft readreview">
              <a href="https://www.gamespot.com/games/reviews/">Read review</a>
            </div>
            <div class="togglewishlist add-to-wishlist">
              <span class="small psnright" href="wishlist.html">
                <img class="remove small psnright add-to-wishlist" src="${heartIcon}" alt="Add to wishlist" data-id="${parseInt(game.id)}">
              </span>
            </div>
            <div class="price psnright">
              <span class="dollar yellow">.</span>
              <span class="price currentPrice">${parseFloat(game.currentPrice)}</span>
            </div>
            <div class="price__before psnright">
              <span class="dollar yellow">.</span>${parseFloat(game.beforePrice)}
            </div>
          </div>
            <div class="psn__buttons">
              <div class="cta add-to-cart" data-id="${parseInt(game.id)}">Add to cart</div>
              <a href="details.html?id=${parseInt(game.id)}" class="results-list" role="button">
                <div class="cta">View Details</div>
              </a>
            </div>
          </div>
        `;
      })
      .join("");

      // Set the HTML of the gamesContainer element to the filtered HTML
      gamesContainer.innerHTML = sortedHtml;
    });
  };