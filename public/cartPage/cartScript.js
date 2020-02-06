
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

  function updateDom(err, data) {
      if (err) {
        console.log(err);
      } else {
        var items = data.data;
        console.log('asasa',items);
        var table = document.getElementById('items-table');
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
        });
      }
    }
    
 loadItems('/load_cart', updateDom);