const mongoConnect = require("../mongoConnect");

const AddWorkout = async (req, res) => {
  // let results;
  const object = req.body;
  mongoConnect((client) => {
    const collection = client.db("jean").collection("workouts");
    
    collection.insertOne(object, function(err, re) {
      if (err){
        res.send(err);

      }
      console.log("1 document inserted");
    
      //  @TODO this should return the new object
      req.on('body', (chunk) => {
        console.log(`Data chunk available: ${chunk}`)
      })
    console.log(req.body)
      res.status(201).send(req.body);


    });  
   });

};

module.exports = AddWorkout;
