const dbConnection = require("../database/db_connections.js");
const getData = cb => {
  dbConnection.query("SELECT * FROM shop"
  , (err, res) => {
    if (err) return cb(err);
      console.log('res.rows: ' + res.rows);
      cb(null, res.rows);
  });
};
const postData = (iteam_name,item_price,cb) => {
    dbConnection.query("insert into shop(item_name,item_price) values ($1,$2)",[iteam_name,item_price]
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
