const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    make: { type: String },
    makeHide: { type: Boolean, default: true },
    model: { type: String },
    modelHide: { type: Boolean, default: true },
    plateNo: { type: String },
    plateNoHide: { type: Boolean, default: true },
    passengers: { type: Number },
    passengersHide: { type: Boolean, default: true },
    registered: { type: String, default: "No" },
    registeredHide: { type: Boolean, default: true },
    vehicleType: { type: String },
  },
  { timestamps: true }
);

const Vehicle = new mongoose.model("vehicle", VehicleSchema);

module.exports = Vehicle;
