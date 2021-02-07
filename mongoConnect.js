const uri =
  "mongodb+srv://JeanMoblie:JeanMoblie@cluster0.r6thf.mongodb.net/test";
const mongoConnect = (callBack) => {
  const MongoClient = require("mongodb").MongoClient;
  MongoClient.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
      if (err) {
        return console.log(err);
      }
      if (client) {
        callBack(client);
      }
    }
  );
};

module.exports = mongoConnect;
