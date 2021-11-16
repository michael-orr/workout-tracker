const router = require("express").Router();
const { Exercise, Workout } = require('../models');

// get last workout__________/api/workouts__________GET
router.get('/workouts', (req, res) => {
    Workout.find((err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        res.json(data);
      }
    });
  });


// add exercise to workout__________/api/workouts/${id}__________PUT
router.post('/workouts/:id', (req, res) => {
    Workout.update(
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
router.post('/workouts', (req, res) => {
    Workout.insert(req.body, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
});


//get workouts in range__________/api/workouts/range__________GET


module.exports = router;