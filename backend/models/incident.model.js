const mongoose = require("mongoose");

const incidentSchema = new mongoose.Schema({
  // VehicleNo: {
  //   type: String,
  //   required: true,
  // },
  // OwnerName: {
  //   type: String,
  //   required: true,
  // },
  // PassengerName: {
  //   type: String,
  //   required: true,
  // },
  incident: {
    type: String,
    //required: true,
  },
  action: {
    type: String,
    //required: true,
    default: "None"
  },
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "user",
  //   required: true,
  // },
  passenger: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  vehicleOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  // vehicle: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "vehicle",
  // },
});

const incidents = new mongoose.model("incidents", incidentSchema);

module.exports = incidents;
