
function loadItems(url, cb) {
    console.log('inside load')
  axios
    .get(url)
    .then(result => {
      cb(null, result);
    })
    .catch(error => {
      cb(error);
    });
}

function updateDom(err, data) {
    if (err) {
      console.log(err);
    } else {
      var items = data.data;
      var table = document.getElementById('items-table');
      /* create a row in table for each user returned from DB */
      items.forEach(function(item) {
        var row = document.createElement('tr');
        var itemName = document.createElement('td');
        itemName.innerHTML = item.item_name;
        row.appendChild(itemName);
        var itemPrice = document.createElement('td');
        itemPrice.innerHTML = item.item_price;
        row.appendChild(itemPrice);
        table.appendChild(row);
        var priceCurrency = document.createElement('td');
        priceCurrency.innerHTML = item.price_currency;
        row.appendChild(priceCurrency);
        table.appendChild(row);
        var addToCart = document.createElement('button');
        addToCart.innerHTML = 'add To Cart';
        addToCart.addEventListener('click',(event)=>{
          console.log({item_name:item.item_name,item_price:item.item_price,price_currency:item.price_currency})
        })
        row.appendChild(addToCart);
        table.appendChild(row);
      });
    }
  }
  
  loadItems('/buy_shop', updateDom);
  