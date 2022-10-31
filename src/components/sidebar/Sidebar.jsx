import React from 'react'
import "./sidebar.css"
export default function Sidebar() {
  return (
    <div classNameName='sidebar'>

    {/* filter by and reset filters */}     
    <div className='filter_span_row row-3' style={{paddingTop:"15px"}}>
    <span className='span_filter_by'>Filter By</span>
    <span className='span_reset_filters'>Reset Filters</span>
    </div>
    {/* filter by and reset filters ends here */}
    {/* Employee_id */}

    <ul className="list-group-flush" style={{marginTop:"10px",marginLeft:"-15px", color:"#fff"}}>
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
    <span id='employee_id_span'>Employee Id</span>
    {/* location options */}
    <li className="list-group-item list_items">
    <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label className="form-check-label" for="flexCheckDefault">
          Simulators        
          </label>
      </div>  
    </li>
  </ul>

    </div>
  );
}
