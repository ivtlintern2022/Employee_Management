import React from "react";
import axios from "axios";
import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Tabs from "./Tabs";
import Panel from "./Panel";

import "./create.css";
// class Create extends React.Component 
//   constructor(props) {
//     super(props);
//     this.state = {
//     //    data: [], userId: 4, array: [5, 1, 3, 4, 6],
//       first_Name: "Mahesh",
//       last_Name: "A",
//       employee_Id: "0001",
//       gender: "Male",
//       date_Of_Birth: "12/02/2002",
//       phone_Number: "8360756141",
//       email_Id: "makesh2001@gmail.com",
//       blood_Group: "A+",
//       address1: "8/164,Salem new bus stand,Salem,Tamil Nadu,600021",
//       address2: "8/164,Salem new bus stand,Salem,Tamil Nadu,600021",
//       job_Role: "Software Engineer L1",
//       job_Location: "Chennai",
//     };
//   }

  export default function Register() {
    const [first_name, setFirstname] = useState("");
    const [last_name, setLastname] = useState("");
    const [emp_id, setEmployeeid] = useState("");
    const [email_id, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [dob, setDob] = useState("");
    const [driving_license, setDrivinglicense] = useState("");
    const [voter_id, setVoterid] = useState("");
    const [passport_no, setPassportno] = useState("");
    const [aadhar_no, setAadharno] = useState("");
    const [uan_no, setUanno] = useState("");
    const [pan_no, setPanno] = useState("");
    const [father_name, setFathername] = useState("");
    const [mother_name, setMothername] = useState("");
    const [spouse_name, setSpousename] = useState("");
    const [children_name1, setChildrenname] = useState("");
    const [father_occupation, setFatheroccupation] = useState("");
    const [mother_occupation, setMotheroccupation] = useState("");
    const [spouse_occupation, setSpouseoccupation] = useState("");
    const [tenth_school_name, setTenthschoolname] = useState("");
    const [tenth_percentage, setTenthpercentage] = useState("");
    const [twelfth_school_name, setTwelfthschoolname] = useState("");
    const [twelfth_percentage, setTwelfthpercentage] = useState("");
    const [diploma_college_name, setDiplomacollegename] = useState("");
    const [diploma_course, setDiplomacourse] = useState("");
    const [diploma_percentage, setDiplomapercentage] = useState("");
    const [ug_college_name, setUgcollegename] = useState("");
    const [ug_course, setUgcourse] = useState("");
    const [ug_cgpa, setUgcgpa] = useState("");
    const [pg_college_name, setPgcollegename] = useState("");
    const [pg_degree, setPgdegree] = useState("");
    const [pg_cgpa, setPgcgpa] = useState("");
    const [bank_name, setBankname] = useState("");
    const [bank_account_no, setBankaccountno] = useState("");
    const [bank_IFSC_no, setBankifscno] = useState("");
    const [insurance_no, setinsuranceno] = useState("");
    const [bank_branch, setBankbranch] = useState("");
    const [father_insurance_no, setfatherinsuranceno] = useState("");
    const [mother_insurance_no, setMotherinsuranceno] = useState("");
    const [spouse_insurance_no, setSpouseinsuranceno] = useState("");
    const [children_insurance_no1, setFirstchilninsurance] = useState("");
    const [children_insurance_no2, setSecondchildinsurance] = useState("");
    const [date_of_joining, setDateofjoining] = useState("");
    const [work_location, setJoblocation] = useState("");
    const [seat_no, setSeatno] = useState("");
    const [languages_known, setLanguagesknown] = useState("");
    const [asset_details, setAssetdetails] = useState("");
    const [error, setError] = useState(false);
    



    const handleSubmit = async (e) => {
      e.preventDefault();
      e.target.reset();
      setError(false); 
      try {
        const res = await axios.post("http://localhost:5000/api/auth/save", {
        first_name,
        last_name,
        emp_id,
        email_id,
        dob,
        phone,
        driving_license,
        voter_id,
        passport_no,
        aadhar_no,
        uan_no,
        pan_no,
        father_name,
        mother_name,
        spouse_name,
        children_name1,
        father_occupation,
        mother_occupation,
        spouse_occupation,
        tenth_school_name,
        tenth_percentage,
        twelfth_school_name,
        twelfth_percentage,
        diploma_college_name,
        diploma_course,
        diploma_percentage,
        ug_college_name,
        ug_course,
        ug_cgpa,
        pg_college_name,
        pg_degree,
        pg_cgpa,
        bank_name,
        bank_account_no,
        bank_IFSC_no,
        insurance_no,
        bank_branch,
        father_insurance_no,
        mother_insurance_no,
        spouse_insurance_no,
        children_insurance_no1,
        children_insurance_no2,
        date_of_joining,
        work_location,
        seat_no,
        languages_known,
        asset_details,
        });
        res.data ();
      } catch (err) {
        setError(true);
      }
    };
    // const { data, array, userId } = this.state;
    return (
      <div>
        <Form className="form_page" onSubmit={handleSubmit}>
        <div className="detailed_view_container">
        
        <Row className="profileContainer">
          <Col md={6}>
                
                  <label for="first_Name">First Name</label>
                  <input type="text" name="firstname" id="first_Name_Id" 
                  onChange={(e) => setFirstname(e.target.value)} /><br/>
                  <label for="last_Name">Last Name</label>
                  <input type="text" name="lastname" id="last_Name_Id" 
                  onChange={(e) => setLastname(e.target.value)} /><br></br>
                  <label for="employee_Id">Employee Id      </label>
                  <input type="text" name="EmployeeId" id="Employee_Id"  required 
                  onChange={(e) => setEmployeeid(e.target.value)}  /><br></br>
                  <label><span for="gender">Gender</span></label>
                  
                  <label for="male">
                  <input type="radio" name="gender" value="male" id="male"/>
                  Male </label>
                     <label for="female">
                  <input type="radio" name="gender" value="female" id="female"/> 
                  Female </label>
                  <label for="others">
                  <input type="radio" name="gender" value="others" id="others"/> 
                  Others</label>
                  <br/>
                   <label for="dob">Date Of Birth</label>
                  <input type="date" name="dob" id="date_Of_Birth_Id" 
                   onChange={(e) => setDob(e.target.value)} /><br></br> 
                  <label for="phone_Number">Phone Number</label>
                  <input type="number" name="phone_Number" id="phone_Number_Id" 
                   onChange={(e) => setPhone(e.target.value)} /><br></br>
                  <label for="email_Id">Email ID</label>
                  <input type="email" name="emailid" id="email_Id"  required
                  onChange={(e) => setEmail(e.target.value)} /><br/>
                  {/* <label for="job_Role">Job Role</label>
                  <select name="job_Role" style={{width:"190px"}}/>
                  <select name="job_Role"style={{width:"190px"}} >
                    <option value="none" selected>None</option>
                    <option value="hardware_engineer" >Hardware Engineer</option>
                    <option value="software_engineer">Software Engineer</option>
                    <option value="information_systems_manager">Information Systems Manager</option>
                    <option value="programmer">Programmer</option>
                    <option value="network_systems_and_data_analyst">Network Systems and Data Analyst</option>
                    <option value="database_administrator">Database Administrator</option>
                    <option value="systems_analyst">Systems Analyst</option>
                    <option value="system_administrator">system administrator</option>
                  </select><br></br>  */}
                  <label for="job_Location">Job Location</label>
                  <input type="text" name="job_Location" id="job_Location" 
                   onChange={(e) => setJoblocation(e.target.value)} /><br></br>
       
              </Col>
              <Col
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16" className="profilePic">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
              </Col>
            </Row>
            <label> <input type="submit" value="Submit" /></label>
            </div>



        <div className="main-container">
       <hr />
          <Tabs>
            <Panel title="Basic Details">
            <div className="container text-center">
             <div class="row">
                <div class="col">
            <label for="driving_license">Driving License No.</label>
                  <input type="text" name="driving_license" id="driving_license_Id"  
                            onChange={(e) => setDrivinglicense(e.target.value)} />
                  <br></br>
                  <label for="VoterId">Voter ID </label>
                  <input type="text" name="VoterId" id="Voter_Id"  
                       onChange={(e) => setVoterid(e.target.value)} /><br></br>    
                  <label for="PassportNo">Passport No </label> 
                  <input type="text" name="PassportNo" id="PassportNo_Id" 
                       onChange={(e) => setPassportno(e.target.value)} /><br></br> 
                  </div>
                 <div class="col">          
                   <label for="Aadhar">Aadhar Card No </label>
                  <input type="text" name="Aadhar" id="aadharcard_Id"  
                   onChange={(e) => setAadharno(e.target.value)} /><br></br>
                    <label for="uan_No">UAN No </label>
                  <input type="text" name="uann_No" id="uan_Id" 
                   onChange={(e) => setUanno(e.target.value)} /><br></br>
                  <label for="pan_No">Pan No.</label>
                  <input type="text" name="pan_No" id="pan_No_Id" 
                   onChange={(e) => setPanno(e.target.value)} /><br></br>
                  </div>
              </div>
            </div>
     
            </Panel>
            <Panel title="Family Details" >
            <div className="container text-center">
              <div class="row">
                <div class="col">
            <label for="father_Name">Father Name</label>
                  <input type="text" name="father_Name" id="father_Name_Id" 
                   onChange={(e) => setFathername(e.target.value)} /> <br></br>
                  <label for="mother_Name">Mother Name</label>
                  <input type="text" name="mother_Name" id="mother_Name_Id"  
                    onChange={(e) => setMothername(e.target.value)} /><br></br>    
                  <label for="spouse_Name">Spouse Name</label>
                  <input type="text" name="spouse_Name" id="spouse_Name_Id"  
                   onChange={(e) => setSpousename(e.target.value)} /><br></br>
                  <label for="children_Name1">Children Name</label>
                  <input type="text" name="children_Name1" id="children_Name1_Id" 
                   onChange={(e) => setChildrenname(e.target.value)} /><br></br>
                  </div>
                  <div class="col">
                   <label for="father_Occupation">Father Occupation</label>
                  <input type="text" name="father_Occupation" id="father_Occupation_Id" 
                   onChange={(e) => setFatheroccupation(e.target.value)} /><br></br>
                   <label for="mother_Occupation">Mother Occupation  </label>
                  <input type="text" name="mother_Occupation" id="mother_Occupation_Id"
                    onChange={(e) => setMotheroccupation(e.target.value)} /><br></br>
                  <label for="spouse_Occupation">spouse Occupation</label>
                  <input type="text" name="spouse_Occupation" id="spouse_Occupation_Id" 
                   onChange={(e) => setSpouseoccupation(e.target.value)} /><br></br>
                  </div>
              </div>
            </div>
    
            </Panel>
            <Panel title="Education Details">
            <div className="container text-center">
            <div class="row">
              <div class="col">
              <label for="tenth_School_Name">Tenth School Name</label>
              <input type="text" name="tenth_School_Name" id="tenth_School_Name" 
               onChange={(e) => setTenthschoolname(e.target.value)} /><br />
              <label for="tenth_Percentage">Tenth Percentage</label>
              <input type="number" name="tenth_Percentage" id="tenth_Percentage" step="any" 
               onChange={(e) => setTenthpercentage(e.target.value)} /><br />
              <label for="twelfth_School_Name">Tweleth School Name</label>
              <input type="text" name="twelfth_School_Name" id="twelfth_School_Name"
               onChange={(e) => setTwelfthschoolname(e.target.value)} /><br />
              <label for="twelfth_Percentage">Tweleth Percentage </label>
              <input type="number" name="tweleth_Percentage" id="twelfth_Percentage" step="any"
               onChange={(e) => setTwelfthpercentage(e.target.value)}  /><br />
              <label for="diploma_College_Name">Diploma College Name</label>
              <input type="text" name="diploma_College_Name" id="diploma_College_Name"
               onChange={(e) => setDiplomacollegename(e.target.value)} /><br />
              <label for="diploma_Course">Diploma Course</label>
              <input type="text" name="diploma_Course" id="diploma_Course"
               onChange={(e) => setDiplomacourse(e.target.value)} /><br />
              </div>
                  <div class="col">
              <label for="diploma_Percentage">Diploma Percentage</label>
              <input type="text" name="diploma_Percentage" id="diploma_Percentage" 
               onChange={(e) => setDiplomapercentage(e.target.value)} /><br />
              <label for="ug_College_Name">UG College Name</label>
              <input type="text" name="ug_College_Name" id="ug_College_Name"
              onChange={(e) => setUgcollegename(e.target.value)} /><br />
              <label for="ug_Course">UG Course</label>
              <input type="text" name="ug_Course" id="ug_Course"
              onChange={(e) => setUgcourse(e.target.value)} /><br />
              <label for="ug_Cgpa">UG CGPA</label>
              <input type="text" name="ug_Cgpa" id="ug_Cgpa"
              onChange={(e) => setUgcgpa(e.target.value)} /><br />
              <label for="pg_College_Name">PG College Name</label>
              <input type="text" name="pg_College_Name" id="pg_College_Name" 
               onChange={(e) => setPgcollegename(e.target.value)} /><br />
              <label for="pg_Degree">PG Degree</label>
              <input type="text" name="pg_Degree" id="pg_Degree" 
               onChange={(e) => setPgdegree(e.target.value)} /><br />
              <label for="pg_Cgpa">PG CGPA</label>
              <input type="text" name="pg_Cgpa" id="pg_Cgpa" 
               onChange={(e) => setPgcgpa(e.target.value)} /><br />
                  </div>
                  </div>
                  </div>

            </Panel>
            <Panel title="Bank Details">
            <div className="container text-center">
              <div class="row">
                <div class="col">
            <label for="bank_Name">bank_name</label>
                  <input type="text" name="bank_Name" id="bank_Name_Id" 
                  onChange={(e) => setBankname(e.target.value)} />
                  <br></br>
                  <label for="bank_Ifsc_No">Bank IFSC No.</label>
                  <input type="text" name="bank_Ifsc_No" id="bank_Ifsc_Id" 
                  onChange={(e) => setBankifscno(e.target.value)} /><br></br>    
                  <label for="insurance_No">Insurance No. </label>
                  <input type="text" name="insurance_No" id="insurance_No_Id" 
                  onChange={(e) => setinsuranceno(e.target.value)} /><br></br>
                  <label for="Mother_Insurance_No">Mother Insurance No.</label>
                  <input type="text" name="Mother_Insurance_No" id="Mother_Insurance_No" 
                  onChange={(e) => setMotherinsuranceno(e.target.value)} /><br></br>
                  <label for="first_Children_Insurance">First Children Insurance </label>
                  <input type="text" name="first_Children_Insurance" id="first_Children_Insurance" 
                  onChange={(e) => setFirstchilninsurance(e.target.value)} /><br></br>
                  </div>
                  <div class="col">
                   <label for="bank_account_no">Bank Account No</label>
                  <input type="text" name="bank_account_no" id="bank_account_Id" 
                  onChange={(e) => setBankaccountno(e.target.value)} /><br></br>
                   <label for="bank_branch">Bank Branch  </label>
                  <input type="text" name="bank_branch" id="bank_branch_Id" 
                  onChange={(e) => setBankbranch(e.target.value)} /><br></br>
                  <label for="father_Insurance_No">Father Insurance No</label>
                  <input type="text" name="father_Insurance_no" id="father_Insurance_Id" 
                  onChange={(e) => setfatherinsuranceno(e.target.value)} /><br></br>
                  <label for="spouse_Insurance_No">Spouse Insurance No</label>
                  <input type="text" name="spouse_Insurance_No" id="spouse_Insurance_Id" 
                  onChange={(e) => setSpouseinsuranceno(e.target.value)} /><br></br>
                  <label for="second_Children_Insurance">Second Children Insurance </label>
                  <input type="text" name="second_Children_Insurance" id="second_Children_Insurance" 
                  onChange={(e) => setSecondchildinsurance(e.target.value)} /><br></br>
                  </div>
              </div>
            </div>
      
            </Panel>
            <Panel title="Office Details">
            <div class="container text-center">
            <div class="row">
              <div class="col">
              {/* <label for="user_Id">User ID</label>
             <label> <input type="text" name="user_Id" id="user_Id" /></label><br/> */}
              <label for="date_Of_Joining">Date of Joining</label>
              <label><input type="date"  id="date_Of_Joining"
              onChange={(e) => setDateofjoining(e.target.value)} /></label><br/>
              <label for="seat_No">Seat No</label>
              <label><input type="text" name="seat_No" id="seat_No" 
              onChange={(e) => setSeatno(e.target.value)}  /></label><br/>
              </div>
                  <div class="col">
              <label for="languages_known">Languages Known</label>
              <input type="text" name="languages_known"  d="languages_known"
              onChange={(e) => setLanguagesknown(e.target.value)}  /><br/>
              <label for="asset_Details">Asset Details</label>
              <input type="text" name="asset_Details" id="asset_Details"
              onChange={(e) => setAssetdetails(e.target.value)}  /><br/>
              <label><span for="marital_Status"> Marital Status</span></label>
                  <label for="single">
                  <input type="radio" name="marital_Status" value="single" id="single"/>
                  Single </label>
                     <label for="married">
                  <input type="radio" name="marital_Status" value="married" id="married"/> 
                  Married </label>
                  <br/>
                  </div>
              </div>
                  </div>
                          
            </Panel>
          </Tabs>
          {/* {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>} */}

        </div>
        </Form>
        </div>
    );
  }
  

// export default Create;
