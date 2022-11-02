import React from 'react'
import "./overallview.css"



export default function Overallview() {
  return (
    <div className='overallview'>
      {/* div starts */}
      <div class="drop">
<div class="quick_link_btn_menu2" >
<div class="plus_symbol_rotate_menu2">
  <i class="bi bi-plus-circle-fill"></i>
</div>

</div>
    {/* <!-- Display the quick links --> */}
<div class="card quicklinks_card text-center">
    <i class="quick_icons bi bi-house-door-fill"></i>
    <i class="quick_icons bi bi-chat-dots-fill"></i>
    <i class="quick_icons bi bi-boxes"></i>
    <i class="quick_icons bi bi-calendar-plus"></i>
    <i class="quick_icons bi bi-pencil-square"></i>
</div>
{/* <!-- display the quick link ends --> */}
</div>
      {/* div ends */}
    </div>
  )
}
