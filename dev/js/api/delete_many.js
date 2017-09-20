let MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  const myquery = { address: /^O/ };
  db.collection("customers").deleteMany(myquery, (error, obj) => {
    if (error) throw error;
    console.log(`${obj.result.n} document(s) deleted`);
    db.close();
  });
});
