import React from 'react'

import Navbar from '../../components/Navbar/Navbar'

import MediaFooter from '../../components/Footer/MediaFooter'
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar'
import Sidebar from '../Sidebar/Sidebar'

function Diaries() {
  return (
   
        <>
        <div className='container-fluid'>
            <Navbar />
            <MediaNavbar />
          <div className='mediaview'>
          <div className='row'  id='rowid'>
                <div className='col-2' id='colid' >
                    <Sidebar />
                </div>
                <div className='col-10' id='colid2'>
                <div className='container' id='container'>
                <div><h4 className='passwordlabel'>Add Diaries</h4></div>
                <hr />
                <div>
                    <form action="">
                        <div>
                            <div className='formlabel'><label htmlFor="">Title *</label></div>
                            <div><input className='inputbox' type="text" required /></div>
                        </div>
                        <div>
                            <div className='formlabel'><label htmlFor="">Image</label></div>
                            <div><input  type="file" required />
                          
                            </div>
                            <div>
                            <div className='formlabel'><label>Short Description *</label></div>
                            <div><textarea className='inputbox' name="" id="" cols="40" rows="10"></textarea></div>
                           
                            </div>
                            <div>
                            <div className='formlabel'><label>Content *</label></div>
                            <div><textarea className='inputbox' name="" id="" cols="40" rows="10"></textarea></div>
                            
                           
                            </div>
                            
                        </div>
                        <div className='button'><button>Submit</button></div>
                    </form>
                </div>
            </div>
                </div>
            </div>
          </div>
        </div>
        <MediaFooter/>
        </>
  )
}

export default Diaries