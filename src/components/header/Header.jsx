import React from 'react'
import "./header.css"
import { HiOutlineSearchCircle } from "react-icons/hi";
import { HiViewList } from "react-icons/hi";
import { HiViewGrid } from "react-icons/hi";


export default function Header() {
  return (
    <div className='header p-1 mb-2'>
    

    <div className='row'>
       <div className="col-10">
       {/* search input starts here */}
<div class="input-group header_input_group">
  <input type="text" class="form-control header_search_form_control" placeholder="Search by Field Name" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button class="btn header_search_button" type="button" id="button-addon2"><HiOutlineSearchCircle style={{fontSize:"25px"}}/></button>
</div>
      {/* search input ends here */}
       </div>
       <div className="col-2 col_of_grid_list_view">
       <span id='span_list_view' data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top"><HiViewList/></span><span id='span_grid_view'><HiViewGrid/></span>
       </div>
    </div> 

    </div>
  )
}
 