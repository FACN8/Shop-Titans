const dbConnection = require("../database/db_connections.js");
const getData = cb => {
  dbConnection.query("SELECT * FROM shop", (err, res) => {
    if (err) return cb(err);
    cb(null, res.rows);
  });
};
const postData = (item_name, item_price, price_currency, cb) => {
  dbConnection.query(
    "insert into shop(item_name,item_price,price_currency) values ($1,$2,$3)",
    [item_name, item_price, price_currency],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res.rows);
    }
  );
};

const addToCart = (item_id, cb) => {
  dbConnection.query(
    "insert into cart(item_id) values ($1)",
    [item_id],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res.rows);
    }
  );
};
const getCart = cb => {
  dbConnection.query(
    "SELECT item_name,item_price,price_currency from shop INNER JOIN cart ON cart.item_id=shop.item_id GROUP BY item_name,item_price,price_currency",
    (err, res) => {
      if (err) return cb(err);
      cb(null, res.rows);
    }
  );
};

module.exports = {
  getData,
  postData,
  addToCart,
  getCart
};
