const mongoose = require('mongoose');

const { Schema } = mongoose;


const workoutSchema = new Schema({
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [{
      type: {
        type: String,
        enum: ["cardio", "resistance"],
        required: "Type is Required",
      },
      name: {
        type: String,
        trim: true,
        required: "Name is Required",
      },
      duration: {
        type: Number,
        required: true,
      },
      distance: {
        type: Number,
        required: false,
      },
      weight: {
        type: Number,
        required: false,
      },
      reps: {
        type: Number,
       required: false,
      },
      sets: {
        type: Number,
        required: false,
      }
    }]
  });


const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;