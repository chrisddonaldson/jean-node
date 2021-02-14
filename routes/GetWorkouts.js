const mongoConnect = require("../mongoConnect");

const GetWorkouts = async (req, res) => {
  // let results;
  // const object = req.body;
  // try {
  //   const db = req.app.locals.db;
  //   // const id = new ObjectID(req.params.id);
  //   const result = await db.collection('workouts').find({})
  //   // const user = await db.collection('user').findOne({ _id: id }, {
  //   console.log(result)

  // } catch (err) {
  //   console.log(err);
  // }
  // //
  //
  //
  mongoConnect((client) => {
    const collection = client.db("jean").collection("workouts");
  
    collection.find({}).toArray(function (err, result) {
      if (err) {
          res.send(err);
          client.close()
      } else {
        console.log(result)
          res.send(JSON.stringify(result));
      }
  })
  });

};

module.exports = GetWorkouts;
