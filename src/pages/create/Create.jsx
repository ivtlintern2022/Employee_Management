import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import Tabs from "./Tabs";
import Panel from "./Panel";

import "./create.css";
class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //    data: [], userId: 4, array: [5, 1, 3, 4, 6],
      first_Name: "Mahesh",
      last_Name: "A",
      employee_Id: "0001",
      gender: "Male",
      date_Of_Birth: "12/02/2002",
      phone_Number: "8360756141",
      email_Id: "makesh2001@gmail.com",
      blood_Group: "A+",
      address1: "8/164,Salem new bus stand,Salem,Tamil Nadu,600021",
      address2: "8/164,Salem new bus stand,Salem,Tamil Nadu,600021",
      job_Role: "Software Engineer L1",
      job_Location: "Chennai",
    };
  }
//     componentDidMount() {
//       fetch("https://jsonplaceholder.typicode.com/users")
//         .then((res) => res.json())
//         .then(
//           (result) => {
//             this.setState({
//               data: result,
//             });
//             console.log(this.state.data);
//           },
//           (error) => {
//             console.log(error);
//           }
//         );
//   }

  render() {
    // const { data, array, userId } = this.state;
    return (
      <div>
        <div className="create_page"> 
        <Form>
        <div className="detailed_view_container">
        <Row className="profileContainer">
          <Col md={6}>
            
              <div id="detail_View">
                <div id="label_view">
                  {/* <form action="">
                    <label>{fname}</label>
                  </form> */}
                  {/* <table>
                    <tr>
                      <td> Name</td>
                      <td>
                        {this.state.first_Name}
                        {"  "}
                        {this.state.last_Name}
                      </td>
                    </tr>
                    <tr>
                      <td>Employee Id</td>
                      <td>{this.state.employee_Id}</td>
                    </tr>
                    <tr>
                      <td>Email Id</td>
                      <td>{this.state.email_Id}</td>
                    </tr>
                    <tr>
                      <td>Gender</td>
                      <td>{this.state.gender}</td>
                    </tr>
                    <tr>
                      <td>Blood Group</td>
                      <td>{this.state.blood_Group}</td>
                    </tr>
                    <tr>
                      <td>Permenent Address</td>
                      <td>{this.state.address1}</td>
                    </tr>
                    <tr>
                      <td>Temporary Address</td>
                      <td>{this.state.address2}</td>
                    </tr>
                    <tr>
                      <td>Job Role</td>
                      <td>{this.state.job_Role}</td>
                    </tr>
                    <tr>
                      <td>Job Location</td>
                      <td>{this.state.job_Location}</td>
                    </tr>
                  </table> */}
        </div>
        </div>
        
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
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
              </Col>
            </Row>
            </div>
        <div className="main-container">
          <div style={{ marginLeft: "33px" }}>
          </div>
          <hr />
          <br />
          <Tabs>
            <Panel title="Basic Details">
            
            <form action="">
            <div class="container text-center">
                  <div class="row">
                    <div class="col">
                    <label for="driving_license">Driving License</label>
                  <input type="text" name="driving_license" id="driving_license_Id" required />
                  <br></br>
                  <label for="VoterId">Voter ID</label>
                  <input type="text" name="VoterId" id="Voter_Id" required /><br></br>    
                  <label for="PassportNo">Passport No.     
                  <input type="text" name="PassportNo" id="PassportNo_Id" required /></label><br></br>           
                    </div>
                   <div class="col">
                   <label for="Aadhar">Aadhar Card No.</label>
                  <input type="text" name="Aadhar" id="aadharcard_Id" required /><br></br>
                    <label for="uan_No">UAN No.   
                  <input type="text" name="uann_No" id="uan_Id" required /></label><br></br>
                  <label for="pan_No">Pan No.</label>
                  <input type="text" name="pan_No" id="pan_No_Id" required /><br></br>
                    </div>
                  </div>
                </div>
                  </form>
              {/* {data.map((event) => {
                return (
                  <>
                    <div key={event.id}>
                      <h3>
                        <label>Name: </label>
                        {event.name}
                      </h3>
                    </div>
                    <label>Email: </label>
                    <span>{event.email}</span>
                    <br />
                    <label>Phone: </label>
                    <span>{event.phone}</span>
                    <br />
                  </>
                );
              })} */}
            </Panel>
            <Panel title="Family Details" >

            <form action="">
            <div class="container text-center">
                  <div class="row">
                    <div class="col">
                    <label for="father_Name">Father Name</label>
                  <input type="text" name="father_Name" id="father_Name_Id" required />
                  <br></br>
                  <label for="mother_Name">Mother Name</label>
                  <input type="text" name="mother_Name" id="mother_Name_Id" required /><br></br>    
                  <label for="spouse_Name">Spouse Name</label>
                  <input type="text" name="spouse_Name" id="spouse_Name_Id"  /><br></br>
                  <label for="children_Name1">Children Name 1</label>
                  <input type="text" name="children_Name1" id="children_Name1_Id"  /><br></br>
                    </div>
                   <div class="col">
                   <label for="father_Occupation">Father_Occupation</label>
                  <input type="text" name="father_Occupation" id="father_Occupation_Id" required /><br></br>
                   <label for="mother_Occupation">Mother Occupation  
                  <input type="text" name="mother_Occupation" id="mother_Occupation_Id"  /></label><br></br>
                  <label for="spouse_Occupation">spouse_Occupation</label>
                  <input type="text" name="spouse_Occupation" id="spouse_Occupation_Id"  /><br></br>
                  <label for="children_Name2">Children Name 2</label>
                  <input type="text" name="children_Name2" id="children_Name2_Id"  /><br></br>
                    </div>
                  </div>
                </div>
                  </form>

              {/* {data
                .filter((event) => event.id !== userId)
                .map((event) => {
                  return (
                    <>
                      <div key={event.id}>
                        <h3>
                          <label>Name: </label>
                          {event.name}
                        </h3>
                      </div>
                      <label>Email: </label>
                      <span>{event.email}</span>
                      <br />
                      <label>Phone: </label>
                      <span>{event.phone}</span>
                      <br />
                    </>
                  );
                })} */}
            </Panel>
            <Panel title="Education Details">
              {/* {data
                .filter((event) => array.includes(event.id))
                .map((event) => {
                  return (
                    <>
                      <div key={event.id}>
                        <h3>
                          <label>Name: </label>
                          {event.name}
                        </h3>
                      </div>
                      <label>Email: </label>
                      <span>{event.email}</span>
                      <br />
                      <label>Phone: </label>
                      <span>{event.phone}</span>
                      <br />
                    </>
                  );
                })} */}
            </Panel>
            <Panel title="Bank Details">
            <div class="container text-center">
                  <div class="row">
                    <div class="col">
                    <label for="bank_Name">bank_name</label>
                  <input type="text" name="bank_Name" id="bank_Name_Id" required />
                  <br></br>
                  <label for="bank_Ifsc_No">Bank IFSC No.</label>
                  <input type="text" name="bank_Ifsc_No" id="bank_Ifsc_Id" required /><br></br>    
                  <label for="insurance_No">Insurance No. </label>
                  <input type="text" name="insurance_No" id="insurance_No_Id"  /><br></br>
                  <label for="Mother_Insurance_No">Mother Insurance No.</label>
                  <input type="text" name="Mother_Insurance_No" id="Mother_Insurance_No"  /><br></br>
                  <label for="first_Children_Insurance">First Children Insurance </label>
                  <input type="text" name="first_Children_Insurance" id="first_Children_Insurance"  /><br></br>
                    </div>
                   <div class="col">
                   <label for="bank_account_no">Bank Account No</label>
                  <input type="text" name="bank_account_no" id="bank_account_Id" required /><br></br>
                   <label for="bank_branch">Bank Branch  
                  <input type="text" name="bank_branch" id="bank_branch_Id"  /></label><br></br>
                  <label for="father_Insurance_No">Father Insurance No</label>
                  <input type="text" name="father_Insurance_no" id="father_Insurance_Id"  /><br></br>
                  <label for="spouse_Insurance_No">Spouse Insurance No</label>
                  <input type="text" name="spouse_Insurance_No" id="spouse_Insurance_Id"  /><br></br>
                  <label for="second_Children_Insurance">Second Children Insurance </label>
                  <input type="text" name="second_Children_Insurance" id="second_Children_Insurance"  /><br></br>
                    </div>
                  </div>
                </div>
              {/* {data
                .filter((event) => array.includes(event.id))
                .map((event) => {
                  return (
                    <>
                      <div key={event.id}>
                        <h3>
                          <label>Name: </label>
                          {event.name}
                        </h3>
                      </div>
                      <label>Email: </label>
                      <span>{event.email}</span>
                      <br />
                      <label>Phone: </label>
                      <span>{event.phone}</span>
                      <br />
                    </>
                  );
                })} */}
            </Panel>
            <Panel title="Office Details">
              {/* <table>
                <tr>
                  <td>
                    Father Name
                  </td>
                  <td>
                    Arun V
                  </td>
                </tr>
                <tr>
                  <td>
                    Mother Name
                  </td>
                  <td>
                    Rani A
                  </td>
                </tr>
              </table> */}
            </Panel>
          </Tabs>
        </div>
        </Form>
      </div>

        </div>
    );
  }
  
}
export default Create;