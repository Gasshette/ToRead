const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://127.0.0.1:27017/mydb";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  const myquery = { address: "Valley 345" };
  const newvalues = { name: "Minnie" };
  db.collection("customers").updateOne(myquery, newvalues, (error, res) => {
    if (error) throw error;
    console.log("1 document updated");
    db.close();
  });
});
