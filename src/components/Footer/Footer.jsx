import React from 'react'
import facebooklink from '../../assets/facebooklink.png'
import instalink from '../../assets/instalink.png'
import logo from '../../assets/logo.png'
import './Footer.css'


export const Footer = () => {
  return (
 <div className='container-fluid' id='desktop'>
     <div style={{marginTop:'10px',backgrounColor:'#F4F7EE'}}>
        
        <footer className="bg-white text-center text-black" style={{width:'100%',backgroundColor:'#F4F7EE'}}>
          <div className="container p-4 pb-0"  >
            <section  style={{backgrounColor:'#F4F7EE'}} >
  
              <div className='flexcontent'>
                <div className='flexleft'>
                  <div className='row'>
                    <div className='col-md-6'>
                    <p className="pt-2" >
                      <a href="/TermCondition" style={{textDecoration:'none',color:'black'}}><h5 style={{backgroundColor:"white",fontWeight:'bold'}}>Terms and Condition</h5></a>
                      <a href="/PrivacyPolicy" style={{textDecoration:'none',color:'black'}}><h5 style={{backgroundColor:"white",fontWeight:'bold'}}>Privacy Policy</h5></a>
                      <a href="/ReturnPolicy" style={{textDecoration:'none',color:'black'}}><h5 style={{backgroundColor:"white",fontWeight:'bold'}}>Returns Policy</h5></a>

                      <h5 style={{backgroundColor:"white",fontWeight:'bold'}}>Shipping Policy</h5>
                   
                      <h5 style={{backgroundColor:"white",fontWeight:'bold'}}>Returns Centre</h5>
                      <h5 style={{backgroundColor:"white",fontWeight:'bold'}}>Contact Us</h5>
                    </p>
                    </div>
                    <div className='col-md-6'>
                    <p className="pt-2" >
                      
                      <h5 style={{backgroundColor:'white',fontWeight:'bold'}}>Privacy Policy</h5>
                      
                      <h5 style={{backgroundColor:'white',fontWeight:'bold'}}>FAQs</h5>
                      <h5><a href="/DashBoard">Dashboard</a></h5>
                      <h5><a href="/Account">My Account</a></h5>
                   
                    </p>
                    </div>
                    </div> 
                </div>
                <div className='flexright'>
                <div className="form-outline form-white mb-4" >
                      
                      <div style={{marginTop:'50px',marginLeft:'200px',backgroundColor:"white"}} >
                        <img src={logo} alt="" />
                        <div><h4 style={{fontWeight:'bold',fontSize:'20px',paddingBottom:'20px',backgroundColor:"white"}}>Follow us</h4></div>
                        <img src={facebooklink} alt="" /><span style={{margin:'10px'}}><img src={instalink} alt="" /></span></div>
                    </div>
                </div>
              </div>
         
            </section>
          </div>
  
  
          
          <div >
          <div className='flexcontent' >
            <div style={{paddingLeft:'40px'}}  className="md-3" id='flexleft'>  <h4>© 2023 Poss India . All Rights Reserved.</h4></div>
            <div  style={{paddingRight:'40px'}}   className="md-3" id='flexright'><h4>Developed By <span><a href="vorpstech.com">Vorps Technologies</a></span> </h4></div>
          </div>
            
          </div>
          
        </footer>
      </div>
 </div>
  )
}
