import React , {useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.css';

import { Tab } from "@headlessui/react";

import './PurchaseItem.css'

import {Footer } from '../../components/Footer/Footer'
import { useNavigate} from "react-router-dom";

import back from '../../assets/back.png'
import MediaFooter from '../../components/Footer/MediaFooter';
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar';


function PurchaseItem() {

    const [tabSelected, setTabSelected] = useState(null);

    const buttonheader = {
      backgroundColor: "transparent",
      borderRadius: "15px",
     
  
      height: "80px",
    
    };
  
 
    const handelTabCLick = (e) => {
      setTabSelected(e);
    };
    let navigate = useNavigate();
  
    // const [imageUri, setImageUri] = useState(paytm);
  return (
    <div>
          <>
    <div>
      <MediaNavbar />
        <Navbar />
        <div className='container-fluid'>
            <div ><button className='back' onClick={() => navigate(-1)}><span  style={{marginRight:'10px'}}><img src={back} alt="" /></span>Back</button></div>
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
                    {/* <div className='dogflot'> <img src={dogpic} alt="" /></div> */}
                  </div>

                  <Tab.Panels >
                    <Tab.Panel>
                    
                    <div >
                    <div >
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
        <div >
                <button className='paybtn2' id='paybtn2'> <span style={{marginRight:'15px'}}><i class="fa fa-reply" aria-hidden="true"></i></span>Request Callback</button>

                </div>
                    </div>
                    </div>
                  

                    </div>
              

                  
           
              
               
                      </Tab.Panel>
                    <Tab.Panel>

                      <div   id='container2' className='container-fluid' >
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
                                  <div><h5 align='left'>Time</h5></div>
                                  <div align='left' >
                                                                
                              <input  className='boxpi'  style={{borderColor:'transparent',outlineColor:'transparent'}} type="text" name="timerange" value=" 9am- 10am" />
                              </div>
                              </div>

                            </div>
                            </div>
                            

                      
                          </div>
                        </div>
                        <div  >
                        <div align='center' className='forml'  >
                    <form action="">
          <div  className='poi'>
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
        <div  >
                <button className='paybtn2' id='paybtn2'> <span style={{marginRight:'15px'}}><i class="fa fa-reply" aria-hidden="true"></i></span>Request Callback</button>

                </div>
       
                    </div>
                        </div>


                       
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
