import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import Tabs from "./Tabs";
import Panel from "./Panel";

import "./detailedview.css";
class Detailedview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       data: [], userId: 4, array: [5, 1, 3, 4, 6],
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
    componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then(
          (result) => {
            this.setState({
              data: result,
            });
            console.log(this.state.data);
          },
          (error) => {
            console.log(error);
          }
        );
  }

  render() {
    const { data, array, userId } = this.state;
    return (
      <div><div className="detailed_view_container">
        <Row className="profileContainer">
          <Col md={6}>
            <Form>
              <div id="detail_View">
                <div id="label_view">
                  <form action="">
                    <label>{fname}</label>
                  </form>
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
        </Form>
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
              {data.map((event) => {
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
              })}
            </Panel>
            <Panel title="Family Details">
              {data
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
                })}
            </Panel>
            <Panel title="Education Details">
              {data
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
                })}
            </Panel>
            <Panel title="Bank Details">
              {data
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
                })}
            </Panel>
            <Panel title="Office Details">
              <table>
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
              </table>
            </Panel>
          </Tabs>
        </div></div>
    );
  }
  
}
export default Detailedview;
