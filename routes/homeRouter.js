const router = require("express").Router();
const { Exercise, Workout } = require('../models');


// get last workout__________/api/workouts__________GET
router.get('/workout', (req, res) => {
    db.workout.find().sort({ "date": -1 }, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        lastWorkout = data[0];
        console.log(data[0]);
        res.json(data, lastWorkout);
      }
    });
  });




module.exports = router;
