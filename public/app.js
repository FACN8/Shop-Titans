
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
      });
    }
  }
  
  loadItems('/buy_shop', updateDom);
  
