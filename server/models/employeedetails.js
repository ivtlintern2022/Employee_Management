const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const { Schema } = mongoose;


const employee_family_schema = new Schema({
  father_name :  String,
  father_occupation : String,
  mother_name : String,
  mother_occupation : String,
  spouse_name: String,
  spouse_occupation : String,
  children_name1 : String,
  children_name2 :  String,
  sibling_name1 : String,
  sibling_occupation1 : String,
  sibling_name2 : String,
  sibling_occupation2 : String,
  sibling_name3 : String,
  sibling_occupation3 : String,
  sibling_name4 : String,
  sibling_occupation4 : String,
  sibling_name5 : String,
  sibling_occupation5 : String,
});



const employee_education_schema = new Schema({
  tenth_school_name : String,
  tenth_percentage : Number,
  twelfth_school_name : String,
  twelfth_percentage  : Number,
  diploma_college_name : String,
  diploma_course : String,
  diploma_percentage : Number,
  ug_college_name : String,
  ug_degree : String,
  ug_cgpa : Number,
  pg_college_name1 : String,
  pg_degree1 : String,
  pg_cgpa1 : Number,
  pg_college_name2 : String,
  pg_degree2 : String,
  pg_cgpa2 : Number,
  pg_college_name3 : String,
  pg_degree3 : String,
  pg_cgpa3 : Number,
  
});

const employee_bank_schema = new Schema({
  bank_name : String,
  bank_account_no : Number,
  bank_IFSC_no : String,
  bank_branch : String,
  insurance_no : String,
  father_insurance_no : String,
  mother_insurance_no : String,
  spouse_insurance_no : String,
  children_insurance_no1 : String,
  children_insurance_no2 : String,

});

const employee_personal_schema = new Schema({
  date_of_joining : Date,
  work_location : String,
  seat_no : String,
  languages_known : String,
  asset_details : String,
  status : Boolean,
  marital_status : String,
  
});

// const  ObjectID = mongoose.Types.ObjectId();
const employee_details_schema= new Schema({
    // employee_primaryinfo: {
      emp_id: {
        type: String,
        unique: true,
      },
      first_name: String,
      last_name: String,
      gender: String,
      dob: Date,
      phone: Number,
      email_id :  {
        type: String,
        unique: true,
         },
      blood_group: String,
      address1: String,
      address2: String,
      driving_license: String,
      voter_id: String,
      aadhar_no: Number,
      uan_no: Number,
      pan_no: String,
      passport_no: String,
      profile_pic: String,
      employee_family: employee_family_schema,
      employee_education: employee_education_schema,
      employee_bank: employee_bank_schema,
      employee_personal: employee_personal_schema,

    // }
  });
 
 
  module.exports = mongoose.model("employee_detail", employee_details_schema);