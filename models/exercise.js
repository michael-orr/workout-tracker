const mongoose = require("mongoose");

const { Schema } = mongoose;

const exerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Type is Required",
  },
  name: {
    type: String,
    trim: true,
    required: "Name is Required",
  },
  duration: {
    type: Number,
    unique: true,
    required: true,
  },
  weight: {
    type: Number,
    unique: true,
    required: true,
  },
  reps: {
    type: Number,
    unique: true,
    required: true,
  },
  sets: {
    type: Number,
    unique: true,
    required: true,
  },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
