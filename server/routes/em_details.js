const router = require("express").Router();
const details = require("../models/employeedetails");


// router.post("/", async (req, res) => {
//     const newuser = new details (req.body);
//     try {
//       newuser.save()
//       res.status(200).json({"message": "Data is Inserted !"});
      
//     } catch  {
//       res.status(500).json({"message": "NOTData is Inserted !"});
//     }
//   });

  router.post("/", async (req, res) => {
    const newuser = await new details (req.body);
    try {
      newuser.save()
      res.status(200).json({"message": "Data is Inserted !"});
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;