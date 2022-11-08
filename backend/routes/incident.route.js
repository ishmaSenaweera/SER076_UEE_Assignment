const express = require("express");
const router = express.Router();
const incidents = require("../models/incident.model");





router.post("/incident/new", async (req, res) => {
    const { Incident } =
      req.body;

    
      try {
        const addincident = new incidents({
          // VehicleNo: req.body.VehicleNo,
          // OwnerName: req.body.OwnerName,
          // PassengerName: req.body.PassengerName,
          Incident: req.body.Incident
          
        })

        await addincident.save();
        res.status(201).json(addincident);
        console.log(addincident);
      } catch (error) {
        res.status(422).json('error');
      }
}
  
);

// get incident data

router.get("/incident/view", async (req, res) => {
  try {
    

    const getincidentdata = await incidents.find();

    res.status(201).json(getincidentdata);
    console.log(getincidentdata);
  } catch (error) {
    return res.status(422).json(error);
  }
});

router.get("/incident/view-current", async (req, res) => {
  try {
    const pageNo = req.query.pageNo || 1;
    const itemsPerPage = req.query.pageSize || 10;
    const skip = (pageNo - 1) * itemsPerPage;
    const count = await incidents.estimatedDocumentCount();
    const pageCount = Math.ceil(count / itemsPerPage);

    const getincidentdata = await incidents
      .find({ user: req.body.user._id })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(itemsPerPage)
      .populate("user");

    res.status(201).json({ pagination: { count, pageCount }, getincidentdata });
  } catch (error) {
    return res.status(422).json(error);
  }
});

router.get("/incident/view-current/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const pageNo = req.query.pageNo || 1;
    const itemsPerPage = req.query.pageSize || 10;
    const skip = (pageNo - 1) * itemsPerPage;
    const count = await incidents.estimatedDocumentCount();
    const pageCount = Math.ceil(count / itemsPerPage);

    const getincidentdata = await incidents
      .find({ user: id })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(itemsPerPage)
      .populate("user");

    res.status(201).json({ pagination: { count, pageCount }, getincidentdata });
  } catch (error) {
    return res.status(422).json(error);
  }
});

// get individual incident

router.get("/incident/view/:id", async (req, res) => {
  try {
    const { id } = req.params;
const incidentindividual = await incidents.findById(id);
    
    res.status(201).json(incidentindividual);
  } catch (error) {
    res.status(422).json(error);
  }
});

// update incident data

router.patch("/incident/update/:id", async (req, res) => {
  const { VehicleNo, OwnerName, PassengerName, Incident, Action } = req.body;
  
  try {
    const { id } = req.params;

    const updateincident = await incidents.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(201).json(updateincident);
    console.log(updateincident);
  } catch (error) {
    res.status(422).json(error);
  }
});

// update incident data

router.put("/incident/update-status/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updateincident = await incidents.findByIdAndUpdate(id, req.body);

    res.status(201).json(updateincident);
  } catch (error) {
    res.status(422).json(error);
  }
});

// delete incident
router.delete("/incident/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteincident = await incidents.findByIdAndDelete({ _id: id });
    res.status(201).json(deleteincident);
    console.log(deleteincident);
  } catch (error) {
    res.status(422).json(error);
  }
});


module.exports = router;
