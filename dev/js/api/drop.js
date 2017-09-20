let MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  db.collection("customers").drop((error, delOK) => {
    if (error) throw error;
    if (delOK) console.log("Collection deleted");
    db.close();
  });
});
