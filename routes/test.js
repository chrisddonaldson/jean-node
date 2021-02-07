const mongoConnect = require("../mongoConnect");

const Test = async (req, res) => {
  mongoConnect((client) => {
    const collection = client.db("jean").collection("food");
    console.log(collection);
  });

  res.send("Hello World!");
};

module.exports = Test;
