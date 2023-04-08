import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'

import { Footer } from '../../components/Footer/Footer'

function Cancellation() {
  return (
    <div>
         <Navbar />
        <div className='container-fluid'>
       
        <div className='row'>
            <div className='col-2'>
                <Sidebar />
            </div>
            <div className='col-10'>
            <div className='container' id='container'>
                <div className='row'>
                    <div className='col'><label className='collabel' htmlFor="">Image</label></div>
                    <div className='col'><label className='collabel' htmlFor="">Products Name</label></div>
                    <div className='col'><label className='collabel' htmlFor="">Cancel Reason</label></div>
                    <div className='col'><label className='collabel' htmlFor="">Cancel Status</label></div>
                    <div className='col'><label className='collabel' htmlFor="">Edit</label></div>
                    <div className='col'><label className='collabel' htmlFor="">Read</label></div>

                </div>
                </div> 
            </div>
        </div>

    </div>
    <br />
    <br />
    <Footer />
    </div>
  )
}

export default Cancellation
