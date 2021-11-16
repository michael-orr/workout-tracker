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

// add exercise to workout__________/api/workouts/${id}__________PUT
app.post('/workouts/:id', (req, res) => {
    db.workout.update(
      {
        _id: mongojs.ObjectId(req.params.id),
      },
      {
        $push: { exercises: req.body.exercises }
      },
      (error, data) => {
        if (error) {
          res.send(error);
        } else {
          res.send(data);
        }
      }
    );
  });

//add new workout__________/api/workouts__________POST
app.post('/workouts', (req, res) => {
    db.workout.insert(req.body, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
});


//get workouts in range__________/api/workouts/range__________GET


module.exports = router;