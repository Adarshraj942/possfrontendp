import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import  './Returns.css'

function Returns() {
  return (
   <div>
     <Navbar />
    <div className='container-fluid'>

        <div className='row' >
            <div className='col-2'><Sidebar /></div>
            <div className='col-10'>
                <div className='container' id='container'>
                <div className='row'>
                    <div className='col'><label className='collabel' htmlFor="">Image</label></div>
                    <div className='col-4'><label className='collabel' htmlFor="">Return Products Name</label></div>
                    <div className='col'><label className='collabel' htmlFor="">Return Reason</label></div>
                    <div className='col'><label className='collabel' htmlFor="">Return Status</label></div>
                    <div className='col'><label className='collabel' htmlFor="">Edit</label></div>
                    <div className='col'><label className='collabel' htmlFor="">Read</label></div>

                </div>
                </div>
            </div>
        </div>
      
    </div>
   </div>
  )
}

export default Returns
