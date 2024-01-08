const mongoose = require("mongoose");

const numberSchema = new mongoose.Schema({
  number: {
    type: "Number",
    required: true,
    unique: true,
  },
});

const Number = mongoose.model("Number", numberSchema);

module.exports = Number;
