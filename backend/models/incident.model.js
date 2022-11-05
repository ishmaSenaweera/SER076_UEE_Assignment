const mongoose = require("mongoose");

const incidentSchema = new mongoose.Schema({
  VehicleNo: {
    type: String,
    required: true,
  },
  OwnerName: {
    type: String,
    required: true,
  },
  PassengerName: {
    type: String,
    required: true,
  },
  Incident: {
    type: String,
    required: true,
  }
  // Action: {
  //   type: String,
  //   required: true,
  // }
//   Status: {
//     type: String,
//     default: "Rejected",
//   },
//   Image: {
//     type: String,
//   },
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "user",
//     required: true,
//   },
});

const incidents = new mongoose.model("incidents", incidentSchema);

module.exports = incidents;
