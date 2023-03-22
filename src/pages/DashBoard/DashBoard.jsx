import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'



const DashBoard = () => {
  return (
<>
<Navbar />
    <div className='container-fluid'>
      
      <div className='row'>
        <div className='col-2'>
       
       <Sidebar />
        </div>
        <div className='col-10'>
         
        </div>

      </div>
    </div>
</>
  )
}

export default DashBoard