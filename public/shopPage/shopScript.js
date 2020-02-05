function loadItems(url, cb) {
  axios
    .get(url)
    .then(result => {
      cb(null, result);
    })
    .catch(error => {
      cb(error);
    });
}
function postToCart(url, body) {
  axios.post(url, body).catch(error => {
    console.log(error);
  });
}

function updateDom(err, data) {
  if (err) {
    console.log(err);
  } else {
    var items = data.data;
    var table = document.getElementById("items-table");
    items.forEach(function(item) {
      var row = document.createElement("tr");
      var itemName = document.createElement("td");
      itemName.innerHTML = item.item_name;
      row.appendChild(itemName);
      var itemPrice = document.createElement("td");
      itemPrice.innerHTML = item.item_price;
      row.appendChild(itemPrice);
      table.appendChild(row);
      var priceCurrency = document.createElement("td");
      priceCurrency.innerHTML = item.price_currency;
      row.appendChild(priceCurrency);
      table.appendChild(row);
      var addToCart = document.createElement("button");
      addToCart.innerHTML = "add To Cart";
      addToCart.addEventListener("click", event => {
        console.log(item.item_id);
        postToCart("/sell_shop", { item_id: item.item_id });
      });
      row.appendChild(addToCart);
      table.appendChild(row);
    });
  }
}

loadItems("/buy_shop", updateDom);
