const router = require("express").Router();
const { Workout } = require('../models');

// get last workout__________/api/workouts__________GET
router.get('/workouts', (req, res) => {
    const workouts = Workout.find((err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        res.json(data);
      }
    });
  });


// add exercise to workout__________/api/workouts/${id}__________PUT
router.put('/workouts/:id', async (req, res) => {
    const workout = Workout.findById(req.params.id);
    workout.exercises.push(req.body);
    const result = await workout.save();
    res.send(result);
    });

//add new workout__________/api/workouts__________POST
router.post('/workouts', (req, res) => {
    Workout.create(req.body, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
});

//get workouts in range__________/api/workouts/range__________GET
router.get('/workouts/range', (req, res) => {
    const workouts = Workout.find((err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(workouts);
        res.json(workouts);
      }
    });
  });

module.exports = router;