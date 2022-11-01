import React from 'react'
import "./topbar.css"

export default function Topbar() {
  return (
    // div starts here 
  <div className='navbar header_navbar'>
      {/* nav bar starts here */}
       <div className='logo_img'>
         <img id='ivtl_logo' src="https://ivtlinfoview.com/wp-content/uploads/2022/09/Infoview-Logo-green-png-320x96.png" alt="" />
       </div>      
      {/* nav bar ends here */}
      {/* user name, photo , designation */}
       <div className='d-flex header_user_designation'>
        <div className="card header_user_designation_card">
  <div className="row">
    <div className="col-4">
      <img src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=" className="img-fluid header_user_image" alt="header_user_image" />
    </div>
    <div className="col-8 p-0">
      <div className="card-body p-0" style={{fontSize:"12px"}}>
        <p> <span className="emp_name">Saurav Arvind P</span> </p>
        <p style={{marginTop:"-15px"}}> <span className="emp_designation">Ivtl Intern</span> </p>
      </div>
    </div>
  </div>
</div>
       </div>
      {/* user name, photo , designation ends here*/}

  </div>
    // div ends here
  )
}
