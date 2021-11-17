const router = require("express").Router();
const db = require("../models");

router.get("/workouts", (req, res) => {
  db.Workout.aggregate([
    { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
  ])
    .then((data) => {
      res.json(data);
    });
});

router.get("/workouts/range", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .sort({ _id: -1 })
    .limit(7)
    .then((data) => {
      res.json(data);
    });
});

router.post("/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then((data) => {
      res.json(data);
    });
});

router.put("/workouts/:id", ({ params, body }, res) => {
  db.Workout.findOneAndUpdate(
    { _id: params.id },
    { $push: { exercises: body } },
    { new: true }
  )
    .then((data) => {
      res.json(data);
    });
});

module.exports = router;
