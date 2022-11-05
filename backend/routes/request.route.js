const router = require("express").Router();
const Request = require("../models/request.model");

/* Adding a new request */
router.post("/add", async (req, res) => {
  try {
    const newRequest = new Request({
      passenger: req.body.passenger,
      vehicleOwner: req.body.vehicleOwner,
      vehicle: req.body.vehicle,
      locationFrom: req.body.locationFrom,
      locationTo: req.body.locationTo,
      dateAndTime: req.body.dateAndTime,
      noOfSeats: req.body.noOfSeats,
      status: req.body.status,
    });

    const result = await newRequest.save();

    res
      .status(201)
      .send({ message: "Request Sent Successfully", data: result });
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

/* Update a request */
router.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Request.findByIdAndUpdate(id, req.body).exec();
    res.status(200).send({ message: "Updated Successfully", data: result });
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

/* Delete a request */
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Request.findByIdAndDelete(id).exec();
    res.status(200).send({ message: "Deleted Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

/* Update request status */
router.delete("/status/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Request.findByIdAndUpdate(id, {
      status: req.body.status,
    }).exec();
    res
      .status(200)
      .send({ message: "Status Updated Successfully", data: result });
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});
