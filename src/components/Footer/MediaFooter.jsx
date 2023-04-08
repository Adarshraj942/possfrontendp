import React from 'react'
import './MediaFooter.css'
import facebooklink from '../../assets/facebooklink.png'
import instalink from '../../assets/instalink.png'

function MediaFooter() {
  return (
    <div className='container-fluid' id='mediafoot'>
   <div align='center'>
  <div className='row'>
  <p className="pt-5"  >
  <a href="/TermCondition" style={{textDecoration:'none',color:'black'}}><h5 style={{fontWeight:'bold'}}>Terms and Condition</h5></a>
                      <a href="/PrivacyPolicy" style={{textDecoration:'none',color:'black'}}><h5 style={{fontWeight:'bold'}}>Privacy Policy</h5></a>
                      <a href="/ReturnPolicy" style={{textDecoration:'none',color:'black'}}><h5 style={{fontWeight:'bold'}}>Returns Policy</h5></a>

                      <h5 style={{fontWeight:'bold'}}>Shipping Policy</h5>
                     
                   
                      <h5 style={{fontWeight:'bold'}}>Returns Centre</h5>
                     
  </p>
                    <p className="pt-2" >
                    <h5  href="/Contact" style={{fontWeight:'bold'}}>Contact Us</h5>
                      <h5  href="/AboutUs" style={{fontWeight:'bold'}}>About Us</h5>
                      
                     
                   
   </p>
  </div>
  <div className='instalinks' style={{display:'flex',justifyContent:'center'}}>
            <div><button style={{backgroundColor:'transparent',borderColor:'transparent'}}><img src={facebooklink} alt="" /></button></div>
            <div><button style={{backgroundColor:'transparent',borderColor:'transparent'}}><img src={instalink} alt="" /></button></div>
      </div>
        <div style={{display:'inline'}}>
        <h4 className='foottext'>© 2023 Poss India Private Limited. All Rights Reserved.</h4>
    
        <h4 className='foot'>Developed By <span><a href="vorpstech.com">Vorps Technologies</a></span> </h4>

        </div>
   </div>
      
    </div>
  )
}

export default MediaFooter
