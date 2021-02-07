const MongoClient = require("mongodb").MongoClient;
const test = require("./routes/test");
const express = require("express");
const app = express();
const port = 3000;

// replace the uri string with your connection string.
const uri =
  "mongodb+srv://JeanMoblie:JeanMoblie@cluster0.r6thf.mongodb.net/test";
MongoClient.connect(uri, function (err, client) {
  if (err) {
    console.log("Error occurred while connecting to MongoDB Atlas...\n", err);
  }
  console.log("Connected...");
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const router = express.Router();
app.use("/api", router);

// test
router.get("/test", test);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
