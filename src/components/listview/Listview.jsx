import React from 'react'
import "./listview.css"

export default function Listview() {
  return (
    <div className='listview'>
      {/* list_view_starts_here */}
      <div className="card">
          <div className="table-responsive">
          <table className="table table-hover text-center">
  <thead >
    <tr className='position-sticky'>
      <th scope="col">Application-ID</th>
      <th scope="col">Application Name</th>
      <th scope="col">Status</th>
      <th scope="col">Posting Title</th>
      <th scope="col">Ratings</th>
      <th scope="col">View Profile</th>
    </tr>
  </thead>
  <tbody>
    <tr>

      <th scope="row">1921189</th>
      <td>Saurav Arvind P</td>
      <td>Viewed</td>
      <td>Web Developer</td>
      <td>***</td>

    </tr>
    <tr>
      <th scope="row">1921190</th>
      <td>Sedhuragavan L</td>
      <td>Not Viewed</td>
      <td>Software developer</td>
      <td>***</td>

    </tr>
    <tr>
      <th scope="row">1921189</th>
      <td>Saurav Arvind P</td>
      <td>Viewed</td>
      <td>Web Developer</td>
      <td>***</td>
    </tr>

    <tr>
      <th scope="row">1921189</th>
      <td>Saurav Arvind P</td>
      <td>Viewed</td>
      <td>Web Developer</td>
      <td>***</td>
    </tr>

    <tr>
      <th scope="row">1921189</th>
      <td>Saurav Arvind P</td>
      <td>Viewed</td>
      <td>Web Developer</td>
      <td>***</td>
    </tr>

    <tr>
      <th scope="row">1921189</th>
      <td>Saurav Arvind P</td>
      <td>Viewed</td>
      <td>Web Developer</td>
      <td>***</td>
    </tr>

    <tr>
      <th scope="row">1921189</th>
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
