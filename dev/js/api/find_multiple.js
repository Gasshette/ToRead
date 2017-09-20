let MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  db.collection("customers").find({}, { _id: false }).toArray((error, result) => {
    if (error) throw error;
    console.log(result);
    db.close();
  });
});
