import React from 'react'
import './Sidebar.css'


function Sidebar() {
  return (
<>
    <div className="sidebar">
   
    <a href="/Anlyists">   Analytics Home</a>
    <a href="/AllProducts">Add Products</a>
    <a href="/ParentCatogry">All Parent Catogory's</a>
   
    <a href="/AllCategory">All Catogory's</a>
    <a href="/AllOrder">All Orders</a>
  
     <a href="/Returns">Returns</a>
    <a href="/Cancellation">Cancellation</a>
   
    <a href="/Diaries">Diaries</a>
  </div>
  

</>
  )
}

export default Sidebar