const mongoConnect = require("../mongoConnect");

const AddFood = async (req, res) => {
  let results;
  var newFood = { name: "Cheese", protine: "25.3" };
  mongoConnect((client) => {
    const collection = client.db("jean").collection("food");
    
    collection.insertOne(newFood, function(err, re) {
      if (err){
        res.send(err);

      }
      console.log("1 document inserted");
    
      //@TODO this should return the new object
   res.send(201,"Document Inserted");

    });   });

};

module.exports = AddFood;
