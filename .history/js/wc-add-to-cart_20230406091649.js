// // Replace <your-store-url> with your WooCommerce store URL and <your-consumer-key> and <your-consumer-secret> with your WooCommerce API keys.
// const baseUrl = "https://wordpress.runeunhjem.no/wp-json/wc/store/products";
// const consumerKey = "ck_0a9221746a98e989919da079c6680ea1775a43c6";
// const consumerSecret = "cs_733d7600657d23aa12748b3d9d3707f08d8eab96";

// // Replace <game-id> with the ID of the game you want to add to the basket (cart).
// const gameId = 1;

// // Fetch the game data from your headless site's API.
// fetch(`details.html?id=${gameId}`)
//   .then((response) => response.json())
//   .then((game) => {
//     // Send a POST request to the WooCommerce API to add the game to the basket (cart).
//     fetch(`${baseUrl}/cart/add`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Basic ${btoa(`${consumerKey}:${consumerSecret}`)}`,
//       },
//       body: JSON.stringify({
//         product_id: game.id,
//         quantity: 1,
//       }),
//     })
//       .then((response) => {
//         if (response.ok) {
//           // Redirect the user to the WooCommerce basket (cart) page.
//           window.location.href = `${baseUrl}/cart`;
//         } else {
//           console.error(response.statusText);
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   })
//   .catch((error) => {
//     console.error(error);
//   });


// // Replace <product-id> with the ID of the product you want to add to the cart.
// const productId = <product-id>;

// // Get the "Add to Cart" button element.
// const addToCartButton = document.getElementById('add-to-cart-button');

// // Add a click event listener to the "Add to Cart" button.
// addToCartButton.addEventListener('click', event => {
//   event.preventDefault();

//   // Send a POST request to the WooCommerce API to add the product to the cart.
//   fetch(`${baseUrl}/cart/add`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Basic ${btoa(`${consumerKey}:${consumerSecret}`)}`
//     },
//     body: JSON.stringify({
//       product_id: productId,
//       quantity: 1
//     })
//   })
//     .then(response => {
//       if (response.ok) {
//         // Redirect the user to the WooCommerce cart page.
//         window.location.href = `${baseUrl}/cart`;
//       } else {
//         console.error(response.statusText);
//       }
//     })
//     .catch(error => {
//       console.error(error);
//     });
// });
