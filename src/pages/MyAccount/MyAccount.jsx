import React , {useState}from 'react'
import './MyAccount.css'
import "bootstrap/dist/css/bootstrap.css";
import { Tab } from "@headlessui/react";
import Navbar from '../../components/Navbar/Navbar'
const MyAccount = () => {
  const [tabSelected, setTabSelected] = useState(null);
  const tabheader = {
    backgroundColor: "rgba(217, 217, 217, 1)",
    borderColor: "transparent",
    border: " 0.5px solid rgba(0, 0, 0, 0.25)",
  
    padding: "10px",
    fontWeight: "700",
    height: "50px",
    alignItems: "center",
    borderRadius: "10px",
    margin: "15px 5px 15px 5px",
    width: "1440px",
  };

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
  return (
  <>
  <Navbar />
   <div className='container-fluid'>
    <div align='center'><h4 className='header'>My Account</h4></div>
       <div >
    <div
           
              >
            
                
                <Tab.Group>
                  <div className="conatiner-fluid" style={buttonheader}>
                  

                    <Tab.List className="tablist">
                      <Tab
                        className={`tabbtn ${tabSelected === 1 ? "selected-tab" : ""}`}
                        onClick={() => handelTabCLick(1)}
                      >
                      
                       ABC  name
                      </Tab>
                      <Tab

                        className={`tabbtn ${tabSelected === 2 ? "selected-tab" : ""}`}
                        onClick={() => handelTabCLick(2)}
                      >

                      
                      abc@gmail.com
                      </Tab>
                      <Tab

                    className={`tabbtn ${tabSelected === 3 ? "selected-tab" : ""}`}
                    onClick={() => handelTabCLick(3)}
                    >

                        Address
                  
                    </Tab>
                    
                    </Tab.List>
                  </div>

                  <Tab.Panels style={tabpanls}>
                    <Tab.Panel>
                    <div className='Dashboardheading'></div>
                   
                      <div className="row" style={{backgroundColor:'#F3CA6D',padding:'15px'}}>
                        <div className="col" id='collabel'>Order ID</div>
                        <div className="col" id='collabel' >   Date  </div>
                        <div className="col" id='collabel'>  Type  </div>
                        <div className="col" id='collabel'>  Payment Method </div>
                        <div className="col" id='collabel'>  Account</div>
                        
                       
                      </div>
                      </Tab.Panel>
                    <Tab.Panel>
                    <div className='Dashboardheading'><h2>Warehouse</h2></div>
                      Content 2</Tab.Panel>
                  
                  </Tab.Panels>
                </Tab.Group>
    </div>
    </div>
   </div>
  </>
  )
}

export default MyAccount
