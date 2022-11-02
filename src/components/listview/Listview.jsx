import React from 'react'
import "./listview.css"

export default function Listview() {
  return (
    <div className='listview'>
      {/* list_view_starts_here */}
      <div className="card list_view_card shadow mb-2">
          <div className="table-responsive">
          <table className="table table-hover text-center">
  <thead className='thead_list'>
    <tr className='position-sticky'>
      <th scope='col' style={{maxWidth:"55px"}}><small style={{fontSize:"12px"}}>Select all</small></th>
      <th scope='col' style={{maxWidth:"70px"}}>profile img</th>
      <th scope="col">Employee Id</th>
      <th scope="col">Employee Name</th>
      <th scope="col">Status</th>
      <th scope="col">Job Title</th>
      <th scope="col">Ratings</th>
    </tr>
  </thead>
 
  <tbody>
    <tr>
      <td><input type="checkbox" name="checkbox-88" id="checkbox-88" /></td>
      <td>
        <img id="user_profile_image_list_view" src="https://image.shutterstock.com/mosaic_250/2780032/1194497251/stock-photo-portrait-of-smiling-red-haired-millennial-man-looking-at-camera-sitting-in-caf-or-coffeeshop-1194497251.jpg" alt="user_img" />
        </td>
      <td>1921189</td>
      <td>Saurav Arvind P</td>
      <td>Viewed</td>
      <td>Web Developer</td>
      <td>***</td>
    </tr>

    <tr>
      <td><input type="checkbox" name="checkbox-88" id="checkbox-88" /></td>
      <td><img id="user_profile_image_list_view" src="https://image.shutterstock.com/mosaic_250/2780032/1194497251/stock-photo-portrait-of-smiling-red-haired-millennial-man-looking-at-camera-sitting-in-caf-or-coffeeshop-1194497251.jpg" alt="user_img" /></td>
      <td>1921190</td>
      <td>Sedhuragavan L</td>
      <td>Not Viewed</td>
      <td>Software developer</td>
      <td>***</td>

    </tr>
    <tr>
    <td><input type="checkbox" name="checkbox-88" id="checkbox-88" /></td>
    <td><img id="user_profile_image_list_view" src="https://image.shutterstock.com/mosaic_250/2780032/1194497251/stock-photo-portrait-of-smiling-red-haired-millennial-man-looking-at-camera-sitting-in-caf-or-coffeeshop-1194497251.jpg" alt="user_img" /></td>
      <td  >1921189</td>
      <td>Saurav Arvind P</td>
      <td>Viewed</td>
      <td>Web Developer</td>
      <td>***</td>
    </tr>

    <tr>
    <td><input type="checkbox" name="checkbox-88" id="checkbox-88" /></td>
    <td><img id="user_profile_image_list_view" src="https://image.shutterstock.com/mosaic_250/2780032/1194497251/stock-photo-portrait-of-smiling-red-haired-millennial-man-looking-at-camera-sitting-in-caf-or-coffeeshop-1194497251.jpg" alt="user_img" /></td>
      <td  >1921189</td>
      <td>Saurav Arvind P</td>
      <td>Viewed</td>
      <td>Web Developer</td>
      <td>***</td>
    </tr>

    <tr>
    <td><input type="checkbox" name="checkbox-88" id="checkbox-88" /></td>
    <td><img id="user_profile_image_list_view" src="https://image.shutterstock.com/mosaic_250/2780032/1194497251/stock-photo-portrait-of-smiling-red-haired-millennial-man-looking-at-camera-sitting-in-caf-or-coffeeshop-1194497251.jpg" alt="user_img" /></td>
      <td  >1921189</td>
      <td>Saurav Arvind P</td>
      <td>Viewed</td>
      <td>Web Developer</td>
      <td>***</td>
    </tr>

    <tr>
    <td><input type="checkbox" name="checkbox-88" id="checkbox-88" /></td>
    <td><img id="user_profile_image_list_view" src="https://image.shutterstock.com/mosaic_250/2780032/1194497251/stock-photo-portrait-of-smiling-red-haired-millennial-man-looking-at-camera-sitting-in-caf-or-coffeeshop-1194497251.jpg" alt="user_img" /></td>
      <td  >1921189</td>
      <td>Saurav Arvind P</td>
      <td>Viewed</td>
      <td>Web Developer</td>
      <td>***</td>
    </tr>

    <tr>
    <td><input type="checkbox" name="checkbox-88" id="checkbox-88"/></td>
    <td><img id="user_profile_image_list_view" src="https://image.shutterstock.com/mosaic_250/2780032/1194497251/stock-photo-portrait-of-smiling-red-haired-millennial-man-looking-at-camera-sitting-in-caf-or-coffeeshop-1194497251.jpg" alt="user_img" /></td>
      <td  >1921189</td>
      <td>Saurav Arvind P</td>
      <td>Viewed</td>
      <td>Web Developer</td>
      <td>***</td>
    </tr>

    <tr>
    <td><input type="checkbox" name="checkbox-88" id="checkbox-88" /></td>
    <td><img id="user_profile_image_list_view" src="https://image.shutterstock.com/mosaic_250/2780032/1194497251/stock-photo-portrait-of-smiling-red-haired-millennial-man-looking-at-camera-sitting-in-caf-or-coffeeshop-1194497251.jpg" alt="user_img" /></td>
      <td  >1921189</td>
      <td>Saurav Arvind P</td>
      <td>Viewed</td>
      <td>Web Developer</td>
      <td>***</td>
    </tr>

    <tr>
    <td><input type="checkbox" name="checkbox-88" id="checkbox-88" /></td>
    <td><img id="user_profile_image_list_view" src="https://image.shutterstock.com/mosaic_250/2780032/1194497251/stock-photo-portrait-of-smiling-red-haired-millennial-man-looking-at-camera-sitting-in-caf-or-coffeeshop-1194497251.jpg" alt="user_img" /></td>
      <td  >1921189</td>
      <td>Saurav Arvind P</td>
      <td>Viewed</td>
      <td>Web Developer</td>
      <td>***</td>
    </tr>

    <tr>
    <td><input type="checkbox" name="checkbox-88" id="checkbox-88" /></td>
    <td><img id="user_profile_image_list_view" src="https://image.shutterstock.com/mosaic_250/2780032/1194497251/stock-photo-portrait-of-smiling-red-haired-millennial-man-looking-at-camera-sitting-in-caf-or-coffeeshop-1194497251.jpg" alt="user_img" /></td>
      <td  >1921189</td>
      <td>Saurav Arvind P</td>
      <td>Viewed</td>
      <td>Web Developer</td>
      <td>***</td>
    </tr>

    <tr>
    <td><input type="checkbox" name="checkbox-88" id="checkbox-88" /></td>
    <td><img id="user_profile_image_list_view" src="https://image.shutterstock.com/mosaic_250/2780032/1194497251/stock-photo-portrait-of-smiling-red-haired-millennial-man-looking-at-camera-sitting-in-caf-or-coffeeshop-1194497251.jpg" alt="user_img" /></td>
      <td  >1921189</td>
      <td>Saurav Arvind P</td>
      <td>Viewed</td>
      <td>Web Developer</td>
      <td>***</td>
    </tr>

  </tbody>
          </table>
        </div>
        </div>
      {/* list_view_ends_here */}



    </div>

  )
}
