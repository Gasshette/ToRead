let MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  const mysort = { name: 1 };
  db.collection("customers").find().sort(mysort).toArray((error, result) => {
    if (error) throw error;
    console.log(result);
    db.close();
  });
});
