import React from 'react'
import "./listview.css"
import { IoIosAdd } from "react-icons/io";


export default function Listview() {
  return (
    <div className='listview'>
      {/* list_view_starts_here */}
      <div className="card list_view_card shadow mb-2">
          <div className="table-responsive">
            <div className='table_responsive_list_view_card'>
          <table className="table table-hover text-center" style={{height:"460px"}}>
            
  <thead className='thead_list thead_list_position-sticky'>
  
    <tr>
      <th scope='col' className='position-sticky' style={{maxWidth:"55px"}}><small style={{fontSize:"12px"}}>Select all</small></th>
      <th className='position-sticky' scope='col' style={{maxWidth:"70px"}}>profile img</th>
      <th className='position-sticky' scope="col">Employee Id</th>
      <th className='position-sticky' scope="col">Employee Name</th>
      <th className='position-sticky' scope="col">Status</th>
      <th className='position-sticky' scope="col">Job Title</th>
      <th className='position-sticky' scope="col">Ratings</th>
    </tr>
  
  </thead>
 {/* position sticky ends */}
  <tbody>
    <tr>
      <td><input type="checkbox" name="checkbox-88" id="checkbox-88" /></td>
      <td>
        <img id="user_profile_image_list_view" src="https://image.shutterstock.com/mosaic_250/2780032/1194497251/stock-photo-portrait-of-smiling-red-haired-millennial-man-looking-at-camera-sitting-in-caf-or-coffeeshop-1194497251.jpg" alt="user_img" />
        </td>
      <td>1921189</td>
      <td>Saurav Arvind P</td>
      <td>Active</td>
      <td>Web Developer</td>
      <td>***</td>
    </tr>

    <tr>
      <td><input type="checkbox" name="checkbox-88" id="checkbox-88" /></td>
      <td><img id="user_profile_image_list_view" src="https://image.shutterstock.com/mosaic_250/2780032/1194497251/stock-photo-portrait-of-smiling-red-haired-millennial-man-looking-at-camera-sitting-in-caf-or-coffeeshop-1194497251.jpg" alt="user_img" /></td>
      <td>1921190</td>
      <td>Sedhuragavan L</td>
      <td>Active</td>
      <td>Software developer</td>
      <td>***</td>

    </tr>
    <tr>
    <td><input type="checkbox" name="checkbox-88" id="checkbox-88" /></td>
    <td><img id="user_profile_image_list_view" src="https://image.shutterstock.com/mosaic_250/2780032/1194497251/stock-photo-portrait-of-smiling-red-haired-millennial-man-looking-at-camera-sitting-in-caf-or-coffeeshop-1194497251.jpg" alt="user_img" /></td>
      <td  >1921189</td>
      <td>Saurav Arvind P</td>
      <td>Active</td>
      <td>Web Developer</td>
      <td>***</td>
    </tr>

    <tr>
    <td><input type="checkbox" name="checkbox-88" id="checkbox-88" /></td>
    <td><img id="user_profile_image_list_view" src="https://image.shutterstock.com/mosaic_250/2780032/1194497251/stock-photo-portrait-of-smiling-red-haired-millennial-man-looking-at-camera-sitting-in-caf-or-coffeeshop-1194497251.jpg" alt="user_img" /></td>
      <td  >1921189</td>
      <td>Saurav Arvind P</td>
      <td>Active</td>
      <td>Web Developer</td>
      <td>***</td>
    </tr>

    <tr>
    <td><input type="checkbox" name="checkbox-88" id="checkbox-88" /></td>
    <td><img id="user_profile_image_list_view_inactive" src="https://image.shutterstock.com/mosaic_250/2780032/1194497251/stock-photo-portrait-of-smiling-red-haired-millennial-man-looking-at-camera-sitting-in-caf-or-coffeeshop-1194497251.jpg" alt="user_img" /></td>
      <td  >1921189</td>
      <td>Saurav Arvind P</td>
      <td>Inactive</td>
      <td>Web Developer</td>
      <td>***</td>
    </tr>

    <tr>
    <td><input type="checkbox" name="checkbox-88" id="checkbox-88" /></td>
    <td><img id="user_profile_image_list_view_inactive" src="https://image.shutterstock.com/mosaic_250/2780032/1194497251/stock-photo-portrait-of-smiling-red-haired-millennial-man-looking-at-camera-sitting-in-caf-or-coffeeshop-1194497251.jpg" alt="user_img" /></td>
      <td  >1921189</td>
      <td>Saurav Arvind P</td>
      <td>Inactive</td>
      <td>Web Developer</td>
      <td>***</td>
    </tr>

    <tr>
    <td><input type="checkbox" name="checkbox-88" id="checkbox-88"/></td>
    <td><img id="user_profile_image_list_view_inactive" src="https://image.shutterstock.com/mosaic_250/2780032/1194497251/stock-photo-portrait-of-smiling-red-haired-millennial-man-looking-at-camera-sitting-in-caf-or-coffeeshop-1194497251.jpg" alt="user_img" /></td>
      <td  >1921189</td>
      <td>Saurav Arvind P</td>
      <td>Inactive</td>
      <td>Web Developer</td>
      <td>***</td>
    </tr>

    <tr>
    <td><input type="checkbox" name="checkbox-88" id="checkbox-88" /></td>
    <td><img id="user_profile_image_list_view_inactive" src="https://image.shutterstock.com/mosaic_250/2780032/1194497251/stock-photo-portrait-of-smiling-red-haired-millennial-man-looking-at-camera-sitting-in-caf-or-coffeeshop-1194497251.jpg" alt="user_img" /></td>
      <td  >1921189</td>
      <td>Saurav Arvind P</td>
      <td>Inactive</td>
      <td>Web Developer</td>
      <td>***</td>
    </tr>

    <tr>
    <td><input type="checkbox" name="checkbox-88" id="checkbox-88" /></td>
    <td><img id="user_profile_image_list_view_inactive" src="https://image.shutterstock.com/mosaic_250/2780032/1194497251/stock-photo-portrait-of-smiling-red-haired-millennial-man-looking-at-camera-sitting-in-caf-or-coffeeshop-1194497251.jpg" alt="user_img" /></td>
      <td>1921189</td>
      <td>Saurav Arvind P</td>
      <td>Active</td>
      <td>Web Developer</td>
      <td>***</td>
    </tr>

    <tr>
    <td><input type="checkbox" name="checkbox-88" id="checkbox-88" /></td>
    <td><img id="user_profile_image_list_view" src="https://image.shutterstock.com/mosaic_250/2780032/1194497251/stock-photo-portrait-of-smiling-red-haired-millennial-man-looking-at-camera-sitting-in-caf-or-coffeeshop-1194497251.jpg" alt="user_img" /></td>
      <td  >1921189</td>
      <td>Saurav Arvind P</td>
      <td>Active</td>
      <td>Web Developer</td>
      <td>***</td>
    </tr>

    <tr>
    <td><input type="checkbox" name="checkbox-88" id="checkbox-88" /></td>
    <td><img id="user_profile_image_list_view_inactive" src="https://image.shutterstock.com/mosaic_250/2780032/1194497251/stock-photo-portrait-of-smiling-red-haired-millennial-man-looking-at-camera-sitting-in-caf-or-coffeeshop-1194497251.jpg" alt="user_img" /></td>
      <td  >1921189</td>
      <td>Saurav Arvind P</td>
      <td>Inactive</td>
      <td>Web Developer</td>
      <td>***</td>
    </tr>

  </tbody>
          </table>
          </div> 
          {/* pagination starts here */}
          <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-end" style={{marginRight:"30px", marginTop:"10px"}}>
    <li className="page-item disabled">
      <a className="page-link page-link-pagination" href='./home'>Previous</a>
    </li>
    <li className="page-item"><a className="page-link page-link-pagination" href="./home">1</a></li>
    <li className="page-item"><a className="page-link page-link-pagination" href="./home">2</a></li>
    <li className="page-item"><a className="page-link page-link-pagination" href="./home">3</a></li>
    <li className="page-item">
      <a className="page-link page-link-pagination" href="./home">Next</a>
    </li>
  </ul>
</nav>
          {/* pagination ends here */}
        </div>
        </div>
      {/* list_view_ends_here */}

<div className='add_symbol'>
<IoIosAdd id='icon_add_main'/>
</div>

    </div>

  )
}
