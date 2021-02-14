const mongoConnect = require("../mongoConnect");

const AddWorkout = async (req, res) => {
  let results;

  // mongoConnect((client) => {
  //   const collection = client.db("jean").collection("food");
    
  //   collection.insertOne(newFood, function(err, re) {
  //     if (err){
  //       res.send(err);

  //     }
  //     console.log("1 document inserted");
    
      //@TODO this should return the new object
      console.log(req)
      res.status(201).send(req.data );


    // });   });

};

module.exports = AddWorkout;
