const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    make: { type: String },
    model: { type: String },
    plateNo: { type: String },
    passengers: { type: Number },
    registered: { type: String, default: "No" },
    vehicleType: { type: String },
  },
  { timestamps: true }
);

const Vehicle = new mongoose.model("vehicle", VehicleSchema);

module.exports = Vehicle;
