const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const GetAllFood = require("./routes/GetAllFood");
const AddFood = require("./routes/AddFood");
const getTodaysEvents = require("./routes/getTodaysEvents");
const AddWorkout = require("./routes/AddWorkout");


const express = require("express");
const app = express();

//"proxy": "http://localhost:3000",
const port = 3000;
require('dotenv').config()




app.use((req, res, next) => {
  const allowedOrigins = [
    "http://localhost:19006",
    "http://localhost:19005",
    "http://localhost:19004",
    "http://localhost:19003",
    "http://localhost:19002",
    "http://localhost:19001",
    "http://localhost:19000",
,
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, email, uuid, token, test"
  );
  next();
});

// replace the uri string with your connection string.
const uri = process.env.DB_URI;
// console.log(uri)
console.log("")
console.log("")
console.log("=====================STARTING UP=====================")
// console.log(uri)
// MongoClient.connect(uri,{ useUnifiedTopology: true }, function (err, client) {
//   if (err) {
//     console.log("Error occurred while connecting to MongoDB Atlas...\n", err);
//   }
//   console.log("Connected...");
//   // const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const router = express.Router();
app.use("/api", router);

// test
router.get("/food", GetAllFood);
router.post("/food", AddFood);

router.get("/todays-events", getTodaysEvents);

router.post("/workout", AddWorkout);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
