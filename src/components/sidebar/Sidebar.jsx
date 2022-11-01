import React from 'react'
import "./sidebar.css"
// import { FaBeer } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div classNameName='sidebar' style={{fontSize:"12px",color:"black"}}>

    {/* filter by and reset filters */}     
    <div className='filter_span_row row-3' style={{paddingTop:"15px"}}>
    <span className='span_filter_by' style={{border:"none"}}>Filter By</span>
    <span className='span_reset_filters' style={{border:"none"}}>Reset Filters</span>
    </div> 
    {/* filter by and reset filters ends here */}
    

    {/* Employee_id */}
    <ul className="list-group-flush" style={{marginTop:"10px",marginLeft:"-15px"}}>
      {/* employee status */}
    <span id='employee_status_span'>Employee Status</span>
    <li className="list-group-item list_items" style={{fontSize:"14px"}}>
     {/* div row starts */}
     <div className='row' style={{width:"200px"}}>
    {/* div col starts */}
    <div className="col">
    <div class="form-check" style={{marginTop:"10px"}}>
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault"/>
        <label class="form-check-label" for="flexRadioDefault">
          Active
        </label>
      </div>
    </div>
    <div className="col">
    <div class="form-check" style={{marginTop:"10px"}}>
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault"/>
        <label class="form-check-label" for="flexRadioDefault">
          Inactive
        </label>
      </div>
    </div>
    {/* div col ends */}
     </div>
     {/* div row ends */}
    </li>
      {/* employee name */}
    <span id='employee_name_span'>Employee Name</span>
    <li className="list-group-item list_items">
      <input className="form-control emp_name_input" type="text" placeholder="Enter Name" aria-label="default input example"/>
    </li>
     {/* employee id */}
    <span id='employee_id_span'>Employee Id</span>
    <li className="list-group-item list_items">
      <input className="form-control emp_id_input" type="text" placeholder="Enter Emp ID" aria-label="default input example"/>
    </li>
    {/* Location */}
    <span id='job_location'>Job Location</span>
    {/* location options */}
    <li className="list-group-item list_items">
    {/* div row starts*/}
     <div className='row' style={{marginTop:"10px",fontSize:"14px", width:"210px"}}>
      {/* div col 1 */}
      <div className='col'>
           {/* location 1 */}
    <div className="form-check">  
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label className="form-check-label" for="flexCheckDefault">
          Chennai       
          </label>
      </div>  
      {/* location 1 ends here */}
      {/* location 2 */}
    <div className="form-check">  
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3"/>
          <label className="form-check-label" for="flexCheckDefault3">
          Madurai       
          </label>
      </div>  
      {/* location 2 ends here */}
      </div>
      {/* div col 2 */}
      <div className='col' style={{marginLeft:"-30px"}}>
     {/* location 2 */}
     <div className="form-check" style={{fontSize:"14px"}}>
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault4"/>
          <label className="form-check-label" for="flexCheckDefault4">
          Coimbatore       
          </label>
      </div> 
      {/* location 2 ends here */}
      {/* location 3 */}
     <div className="form-check" style={{fontSize:"14px"}}>
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault5"/>
          <label className="form-check-label" for="flexCheckDefault5">
          Banglore    
          </label>
      </div> 
      {/* location 3 ends here */}
      </div>
     </div>
    {/* div row ends here */}
    </li>
    {/* job location ends here */}

    {/* Gender */}
      <span id='gender_span'>Gender</span>
    <li className="list-group-item list_items" style={{fontSize:"14px"}}>
     {/* div row starts */}
     <div className='row' style={{width:"210px", fontSize:"13px"}}>
    {/* div col starts */}
    <div className="col-sm-5">
    <div class="form-check" style={{marginTop:"5px"}}>
        <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2"/>
        <label class="form-check-label" for="flexRadioDefault2">
          Male
        </label>
      </div>
    </div>
    <div className="col-sm-5">
    <div class="form-check" style={{marginTop:"5px"}}>
        <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2"/>
        <label class="form-check-label" for="flexRadioDefault2">
          Female
        </label>
      </div>
    </div>
    <div className="col-sm-5">
    <div class="form-check" style={{marginTop:"1px"}}>
        <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2"/>
        <label class="form-check-label" for="flexRadioDefault2">
          Others
        </label>
      </div>
    </div>
    {/* div col ends */}
     </div>
     {/* div row ends */}
    </li>
    {/* Gender ends*/}

    {/* date of joining */}
    <span id='gender_span'> Date of Joining </span>
    {/* div row */}
    <div className="row" style={{width:"210px"}}>
    {/* div col */}
    <div className="col-3">
    <p style={{fontSize:"13px", marginTop:"10px"}}>from</p>
    </div>
    {/* div col */}
    <div className="col" style={{paddingTop:"10px", height:"40px"}}>
    {/* select starts here */}
    <select class="form-select form-select-sm" aria-label=".form-select-sm example" style={{height:"30px",width:"120px"}}>
    <option selected>Select year</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    </select>
    {/* select ends here */}
    </div>
    </div>
    {/* div row ends here */}
    
    {/* div row */}
    <div className="row" style={{width:"210px"}}>
    {/* div col */}
    <div className="col-3">
    <p style={{fontSize:"13px", marginTop:"10px"}}>To</p>
    </div>
    {/* div col */}
    <div className="col" style={{paddingTop:"10px", height:"40px"}}>
    {/* select starts here */}
    <select class="form-select form-select-sm" aria-label=".form-select-sm example" style={{height:"30px",width:"120px"}}>
    <option selected>select-year</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    </select>
    {/* select ends here */}
    </div>
    </div>
    {/* div row ends here */}
    {/* date of joining ends here */}
  </ul>
   <div className='row'>
   {/* <input type="text" data-role="taginput"/> */}
   </div>
    </div>
  );
}
