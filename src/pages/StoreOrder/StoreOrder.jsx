import React from 'react'
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar'
import Navbar from '../../components/Navbar/Navbar'
import AccountSidebar from '../Account/AccountSidebar'
import MediaFooter from '../../components/Footer/MediaFooter'
import './StoreOrder.css'
function StoreOrder() {
  return (
    <>
    <div className='container-fluid' >
    <MediaNavbar />
    <Navbar />
    <div className='mediaview'>
        
    <div className='row' id='rowid'>
        <div className='col-2'  id='colid'>
            <AccountSidebar />
        </div>
        <div className='col-10' id='colid2'>
        <div className='container' id='container'>
            <div className='row' id='rowitem'>
                <h6> + Manage </h6> 
            </div>
        </div>
           
        </div>
    </div>
    </div>

</div>
<MediaFooter />
</>
  )
}

export default StoreOrder
