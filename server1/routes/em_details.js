const router = require("express").Router();
const details = require("../models/employeedetails");


// router.post("/save", async (req, res) => {
//     const newuser = new details (req.body);
//     try {
//       newuser.save()
//       res.status(200).json({"message": "Data is Inserted !"});
      
//     } catch  {
//       res.status(500).json({"message": "NOTData is Inserted !"});
//     }
//   });

  router.post("/save", async (req, res) => {
    // const newuser = new details(req.body);
    try {
      const newUser = new details ({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        emp_id: req.body.emp_id,
        email_id: req.body.email_id,
        dob: req.body.dob,
        phone: req.body.phone,
        driving_license: req.body.driving_license,
        voter_id: req.body.voter_id,
        aadhar_no: req.body.aadhar_no,
        uan_no: req.body.uan_no,
        passport_no: req.body.passport_no,
        pan_no: req.body.pan_no,

        employee_personal:{
        work_location: req.body.work_location,
        seat_no: req.body.seat_no,
        languages_known: req.body.languages_known,
        asset_details: req.body.asset_details,

        },
        
        employee_family: {
          father_name : req.body.father_name,
          father_occupation : req.body.father_occupation,
          mother_name : req.body.mother_name,
          mother_occupation : req.body.mother_occupation,
          spouse_name: req.body.spouse_name,
          spouse_occupation : req.body.spouse_occupation,
          children_name1 : req.body.children_name1,
          // children_name2 :  String,
          // sibling_name1 : String,
          // sibling_occupation1 : String,
          // sibling_name2 : String,
          // sibling_occupation2 : String,
          // sibling_name3 : String,
          // sibling_occupation3 : String,
          // sibling_name4 : String,
          // sibling_occupation4 : String,
          // sibling_name5 : String,
          // sibling_occupation5 : String,

        },

        employee_education: {
          tenth_school_name : req.body.tenth_school_name,
          tenth_percentage : req.body.tenth_percentage,
          twelfth_school_name : req.body.twelfth_school_name,
          twelfth_percentage  : req.body.twelfth_percentage,
          diploma_college_name : req.body.diploma_college_name,
          diploma_course : req.body.diploma_course,
          diploma_percentage : req.body.diploma_percentage,
          ug_college_name : req.body.ug_college_name,
          ug_degree : req.body.ug_course,
          ug_cgpa : req.body.ug_cgpa,
          pg_college_name1 : req.body.pg_college_name1,
          pg_degree1 : req.body.pg_degree1,
          pg_cgpa1 : req.body.pg_cgpa1,
          // pg_college_name2 : String,
          // pg_degree2 : String,
          // pg_cgpa2 : Number,
          // pg_college_name3 : String,
          // pg_degree3 : String,
          // pg_cgpa3 : Number,
         
        },

        employee_bank: { 
          bank_name : req.body.bank_name,
          bank_account_no : req.body.bank_account_no,
          bank_IFSC_no : req.body.bank_IFSC_no,
          bank_branch : req.body.bank_branch,
          insurance_no : req.body.insurance_no,
          father_insurance_no : req.body.father_insurance_no,
          mother_insurance_no : req.body.mother_insurance_no,
          spouse_insurance_no : req.body.spouse_insurance_no,
          children_insurance_no1 : req.body.children_insurance_no1,
          children_insurance_no2 : req.body.children_insurance_no2,


        },

      });
  
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;