let MongoClient = require('mongodb').MongoClient;

const url = "mongodb://127.0.0.1:27017/mydb";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  const myquery = { address: /^S/ };
  const newvalues = { $set: { name: "Minnie" } };
  db.collection("customers").updateMany(myquery, newvalues, (error, res) => {
    if (error) throw error;
    console.log(`${res.result.nModified} document(s) updated`);
    db.close();
  });
});
