import React , {useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.css';

import { Tab } from "@headlessui/react";

import './PurchaseItem.css'
import tick from '../../assets/tick.png'
import phots from '../../assets/phots.png'
import dogpic from '../../assets/dogpic.png'
import {Footer } from '../../components/Footer/Footer'

import lip from '../../assets/lip.png'


import paytm from '../../assets/paytm.png'
import phonepe from '../../assets/phonepe.png'


import cod from '../../assets/cod.png'
import back from '../../assets/back.png'
import MediaFooter from '../../components/Footer/MediaFooter';
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar';
import lp from '../../assets/lp.png'
import fgm from '../../assets/fgm.png'
import cg from '../../assets/cg.png'

function PurchaseItem() {

    const [tabSelected, setTabSelected] = useState(null);

    const buttonheader = {
      backgroundColor: "transparent",
      borderRadius: "15px",
     
  
      height: "80px",
    
    };
  
    const tabpanls = {
      padding: "30px",
    };
    const handelTabCLick = (e) => {
      setTabSelected(e);
    };
  
    const [imageUri, setImageUri] = useState(paytm);
  return (
    <div>
          <>
    <div>
      <MediaNavbar />
        <Navbar />
        <div className='container-fluid'>
            <div ><button className='back'><span  style={{marginRight:'10px'}}><img src={back} alt="" /></span>Back</button></div>
          </div>    
        <div >


        
    <div className='tabgo'  >
 

                <Tab.Group  >
                  <div className="conatiner-fluid" style={buttonheader}>
                  

                    <Tab.List className="tablist" >
                    
                      <Tab
                        className={`tabbtn ${tabSelected === 1 ? "selected-tab" : ""}`}
                        onClick={() => handelTabCLick(1)}
                      >
                      
                      
                      Home Visit
                      
                      </Tab>
                      <Tab

                        className={`tabbtn ${tabSelected === 2 ? "selected-tab" : ""}`}
                        onClick={() => handelTabCLick(2)}
                      >

                      
                      Store Visit
                      </Tab>
                     
                    
                    </Tab.List>
                    <div className='dogflot'> <img src={dogpic} alt="" /></div>
                  </div>

                  <Tab.Panels style={tabpanls}>
                    <Tab.Panel>
                    
                    <div className='flex-container10' >
                    <div className='flex-item-left10'>
                    <div align='center'>
                    <form action="">
          <div className='poi'>
          <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">First Name</label></div>
              <div><input className='nameinput2' type="text" /></div>
        </div>
        <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">Last</label></div>
              <div><input className='nameinput2' type="text" /></div>
        </div>
          </div>
       
        <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">Mobile number</label></div>
              <div><input className='Mobiinput' type="text" /></div>
        </div>
        <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">Email</label></div>
              <div><input className='Mobiinput' type="text" /></div>
        </div>
        <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">Address</label></div>
              <div><input className='Mobiinput' type="text" /></div>
        </div>
        <div>
          <div>
   
        <div>
    <div className='poi' >
      <div >
      <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">State</label></div>
              <div>
              <select className='nameinput2' name="" id="">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
              
              </div>
        </div> 
          </div>
          <div>
          <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">City</label></div>
              <div>
              <select className='nameinput2' name="" id="">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
              </div>
        </div> 
          </div>
          <div>
       
          </div>
          
      </div>

      <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">Zip</label></div>
              <div><input className='Mobiinput' type="text" /></div>
        </div> 
        </div>
          </div>
        </div>
      
          
        
        </form>
                    </div>
                    </div>
                  
                    <div className='flex-item-right10'>
                    <div align='center' ><h4 className='header'>Payment Method</h4></div>
                    <div align='center' >
                    <div className='card' id='paycards'><h3> <img src={tick} alt="" /> <span style={{marginLeft:'20px'}}>Net Banking</span> </h3></div>
                        <div className='card'  id='paycards' style={{marginTop:'20px'}}><h3><img src={tick} alt="" /><span style={{marginLeft:'20px'}}>Upi</span></h3></div>
                        <div className='card' id='paycards' style={{marginTop:'20px'}}><h3> <img src={tick} alt="" /><span style={{marginLeft:'20px'}}>Cash On Delivery</span></h3></div>
                        <div className='phots'><img src={phots} alt="" /></div>
                    </div>
                      
                      
                    </div>
                    </div>
              
                    
                    <div align='center' className='container'>
                      <div className='flexcontent' id='cardt'>
                        <div align='center' className='flexleft' >
                        <div  align='center'><h4 style={{fontWeight:'bolder',color:'rgb(0,0,0,1)',fontSize:'25px',paddingTop:'50px'}}>Total Service Charges</h4></div>
                        </div>
                        <div className='flexright 'style={{marginTop:'40px'}}>
                        <div  className='card' id='paybutton' >
                        <h4 style={{fontWeight:'700'}}>Total: <span style={{paddingLeft:'10px'}} > ₹54.4</span></h4>
                        </div>
                      
                        </div>
                      </div>
                    </div>
                  
                    <div align='center'>
                <button className='paybtn' id='paybtn'> <span style={{marginRight:'15px'}}><img src={back} alt="" /></span>Pay with UPI</button>

                </div>
                <div style={{right:'0px'}} align='right' id='lipimg' className='container-fluid'>
                <img src={lip} alt="" />
                </div>
               
                      </Tab.Panel>
                    <Tab.Panel>

                      <div   id='container2' className='container' >
                        <div className='flexcontent' id='cardh'>
                          <div align='center' className='flecxLeft' id='line'>
                          <div className='card' id='carddate'>
                            <div><h5 align='left'>Date</h5></div>
                            <div><h6 align='left'>Shipping Charge Fixed 00.0</h6></div>
                          </div>
                          </div>
                          <div className='flexcright' id='cardq' >
                            <div align='center'>
                            <div className='card' id='carddate'>
                              <div align='center' >
                                  <div><h4 align='left'>Time</h4></div>
                                  <div align='left' >
                                                                
                              <input  className='boxpi'  style={{borderColor:'transparent',outlineColor:'transparent'}} type="text" name="timerange" value=" 9am- 10am" />
                              </div>
                              </div>

                            </div>
                            </div>
                            

                      
                          </div>
                        </div>
                        <div className='flexcontent2' id='mediacv'  >
                          <div  className='fleLeft'>
                          <div >
                    <div style={{justifyContent:'center'}} ><h4   className='headerpay' >Payment Method</h4></div>
                    <div   className='paym'   >
                            <div> <button  className='cardbtn' onClick={()=> {setImageUri(cod)}}  ><div  className='card' id='paycards'><h3 > <img src={tick} alt="" /> <span style={{marginLeft:'20px'}}>Net Banking</span> </h3></div></button></div>
                        <div > <button className='cardbtn' onClick={()=> {setImageUri(paytm)}}> <div className='card'  id='paycards' style={{marginTop:'20px'}}><h3><img src={tick} alt="" /><span style={{marginLeft:'20px'}}>UPI</span></h3></div></button></div>
                        <div><button className='cardbtn' onClick={()=> {setImageUri(phonepe)}}> <div className='card' id='paycards' style={{marginTop:'20px'}}><h3> <img src={tick} alt="" /><span style={{marginLeft:'20px'}}>Cash On Delivery</span></h3></div></button></div> 
                    </div>

                  <div align='center'>
                <button className='paybtn' id='paybtn'> <span style={{marginRight:'10px'}}><img src={back} alt="" /></span>Pay with UPI</button>
                </div>

                    </div>
                          </div>
                          <div className='fleright'>
                          <div id='bgimg' >
                          <img  src={imageUri} alt="Brand icon"></img>
                          </div>
                          </div>
                        </div>

                       
                      </div>
                      
                   <div align='center' className='desktopv'>
                   <div style={{transform:'translateY(40px)'}} align='right' id='bgimg2' >
                          <img  src={imageUri} alt="Brand icon"></img>
                   </div>
                   <div style={{justifyContent:'center'}} ><h4   className='headerpay' >Payment Method</h4></div>
                <div align='center'>
                <div align='center' className='paymmedia'   >
                         <div> <button  className='cardbtn' onClick={()=> {setImageUri(lp)}}  ><div  className='card' id='paycards'><h3 > <img src={tick} alt="" /> <span style={{marginLeft:'20px'}}>Net Banking</span> </h3></div></button></div>
                        <div > <button className='cardbtn' onClick={()=> {setImageUri(fgm)}}> <div className='card'  id='paycards' style={{marginTop:'20px'}}><h3><img src={tick} alt="" /><span style={{marginLeft:'20px'}}>UPI</span></h3></div></button></div>
                        <div><button className='cardbtn' onClick={()=> {setImageUri(cg)}}> <div className='card' id='paycards' style={{marginTop:'20px'}}><h3> <img src={tick} alt="" /><span style={{marginLeft:'20px'}}>Cash On Delivery</span></h3></div></button></div> 
                    </div>
                </div>
                   </div>
                   
                  <div align='center'>
                <button className='paybtn' id='paybtn'> <span style={{marginRight:'10px'}}><img src={back} alt="" /></span>Pay with UPI</button>
                </div>

               
             </Tab.Panel>
                  
                  </Tab.Panels>
                </Tab.Group>
           
    </div>
    </div>
      
      
    </div>

    <Footer />
    <MediaFooter />


</>
    </div>
  )
}

export default PurchaseItem
