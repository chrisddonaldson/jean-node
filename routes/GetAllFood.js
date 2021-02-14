const mongoConnect = require("../mongoConnect");

const GetAllFood = async (req, res) => {
  let results;

  mongoConnect((client) => {
    const collection = client.db("jean").collection("food");
    collection.find({}).toArray(function (err, result) {
      if (err) {
          res.send(err);
      } else {

          res.send(JSON.stringify(result));
      }
  })
  });

  // console.log(results);
  // res.send(results);
};

module.exports = GetAllFood;
