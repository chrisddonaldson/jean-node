const mongoConnect = require("../mongoConnect");

const getTodaysEvents = async (req, res) => {


  // get the user's Jeans


  // Workout 5 times a week

  // Run 3 Times a week

  // Draw 1 hour a day

  // Language 30mins a day
  
  // Journal 30mins a day

  // Wake up at 5:30
  // In bed chilling at 9:30
  // Sleep at 10:30


  res.status(201).send("n.toString()" );

};

module.exports = getTodaysEvents;

function getExerciseJeans(){
  // What are the workouts I want to do



  var d = new Date();
  var dayOfTheWeek = d.getDay();
  switch (dayOfTheWeek) {
    case 0:
    case 7:
      console.log("It's Sunday!")
      break;
    case 1:
      console.log("It's Monday");
      
      break;
    case 2:
      console.log("It's Tuesday");
    
      break;
    case 3:
      console.log("It's Wednesday");
       
      break;
    case 4:
      console.log("It's Thursday");
       
      break;
    case 5:
      console.log("It's Friday");
          
      break;
    case 6:
      console.log("It's Saturday");
   
      break;
    default: 
      console.log("Wrong input!");
     
      break;

  }
    // do a 
}