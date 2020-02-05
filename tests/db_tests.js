const tape = require("tape");
const runDbBuild = require("../src/database/db_build");
const { getData, postData } = require("../src/queries/handleData");

tape("this test shoul fail", t => {
  console.log("sfsfsf before");
  runDbBuild(function(err, res) {
    console.log("before");
    postData("car", "19.99", "$", (err, res) => {
      if (err) console.log(err);
      getData((err, result) => {
        if (err) console.log(err);
        t.deepEqual(result.length, 1, "Returns expected data");
        t.end();
      });
    });
  });
});
