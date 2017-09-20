const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let myobj = { name: "Company Inc", address: "Highway 37" };
  db.collection("customers").insertOne(myobj, (error, res) => {
    if (error) throw error;
    console.log("1 document inserted");
    db.close();
  });
});
