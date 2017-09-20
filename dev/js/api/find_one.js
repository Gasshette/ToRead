const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  db.collection("customers").findOne({ name: 'Minnie' }, (error, result) => {
    if (error) throw error;
    console.log(result.address);
    db.close();
  });
});
