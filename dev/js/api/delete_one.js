let MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  const myquery = { address: 'Mountain 21' };
  db.collection("customers").deleteOne(myquery, (error, obj) => {
    if (error) throw error;
    console.log("1 document deleted", obj);
    db.close();
  });
});
