const router = require("express").Router();
const { Workout } = require('../models');

// get last workout__________/api/workouts__________GET
router.get('/workouts', (req, res) => {
    const workouts = Workout.find((err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(workouts);
        res.json(workouts);
      }
    });
  });


// add exercise to workout__________/api/workouts/${id}__________PUT
router.put('/workouts/:id', async (req, res) => {
    const workout = await Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } });
    await res.json(workout)
    });


//add new workout__________/api/workouts__________POST
router.post('/workouts', async (req, res) => {
    const workout = await Workout.create(req.body, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(workout);
    }
  });
});


//get workouts in range__________/api/workouts/range__________GET
router.get('/workouts/range', (req, res) => {
    Workout.find((err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        res.json(data);
      }
    });
  });

module.exports = router;