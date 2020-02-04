const dbConnection = require("../database/db_connections.js");
const getData = cb => {
  dbConnection.query("SELECT * FROM shop"
  , (err, res) => {
    if (err) return cb(err);
      console.log('res.rows: ' + res.rows);
      cb(null, res.rows);
  });
};
const postData = (item_name,item_price,price_currency,cb) => {
    dbConnection.query("insert into shop(item_name,item_price,price_currency) values ($1,$2,$3)",[item_name,item_price,price_currency]
    , (err, res) => {
        if (err) return cb(err);
          console.log('res.rows: ' + res.rows);
          cb(null, res.rows);
      });
    };
  
module.exports = {
    getData,
    postData
};
