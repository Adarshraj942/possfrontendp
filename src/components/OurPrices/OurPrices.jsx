import React from 'react'

import { useNavigate }  from 'react-router-dom';
import tick from '../../assets/tick.png'
import './OurPrices.css'

function OurPrices() {
  const navigate = useNavigate();

  function handlebook(event) {

    navigate('/PurchaseItem');
  }


   
  return (
<>
<div className='container-fluid' id='priceContainer' >
  <div  className='Pricesheader'><h4> Our Services</h4> </div>

   <div align='center'  className='row' id='pricerow' >
      <div className="col" id='col1'  >
      <div className='card lg-shadow' id='cardPrice'>
        <div align="center" className='headerbook' ><h2>PETS BATHING</h2></div>
        {/* <div align="center" className='pricebook'> <h2>₹2499.00</h2> </div> */}
        <div className='listitems' >
          <ul  style={{listStyle:'none'}} >
          <li><h4><img className='ticksize' src={tick} alt="" /><span style={{marginLeft:'20px'}} >Nail Cut</span></h4></li>
            <li><h4><img className='ticksize' src={tick} alt="" /><span style={{marginLeft:'20px'}} >Ear Cleaning</span></h4></li>
            <li><div style={{display:'flex'}}>
              <div><img className='ticksize' src={tick} alt="" /></div>
              <div>Shamphoo And Conditioner</div>
            </div></li>
            <li ><h4><img className='ticksize' src={tick} alt="" /><span style={{marginLeft:'20px'}} >Shamphoo And Conditioner</span></h4></li>
            {/* <li ><h4><img src={tick} alt="" /><span  style={{marginLeft:'20px'}}>Teeth and Ear Cleaning</span></h4></li>
            <li ><h4 ><img src={tick} alt="" /><span  style={{marginLeft:'20px',textAlign:'center'}}>Paw Massage and Mouth Spray</span></h4></li>
            <li ><h4><img src={tick} alt="" /><span  style={{marginLeft:'20px'}}>Spritz of Perfume Dry</span></h4></li> */}
          </ul>
        </div>
        <div align="center" ><div> <button onClick={handlebook} className='booknowbtn' style={{marginTop:'45px'}} >Book now</button> </div></div> 
      </div>
    
      </div>
      <div className="col" id='col1' >
      <div className='card' id='cardPrice'>
        <div className='headerbook'  align="center" ><h2 >PETS FULL GROOMING</h2></div>
        {/* <div align="center" className='pricebook' > <h2 >₹2499.00</h2> </div> */}
        <div className='listitems' >
          <ul  style={{listStyle:'none'}}>
          <li ><h4><img className='ticksize' src={tick} alt="" /><span style={{paddingLeft:'10px'}}> Hair cut </span></h4></li>
            <li><h4><img className='ticksize' src={tick} alt="" /><span style={{paddingLeft:'10px'}}></span>Nail Cut</h4></li>
            <li><h4><img className='ticksize' src={tick} alt="" /><span style={{paddingLeft:'10px'}}></span>Ear Cleaning</h4></li>
            <li><h4><img className='ticksize' src={tick} alt="" /><span style={{paddingLeft:'10px'}}></span>Hygiene</h4></li>
          
            <li><h4><img className='ticksize' src={tick} alt="" /><span style={{paddingLeft:'10px'}}>Shamphoo And Conditioner </span></h4></li>
            {/* <li><h4><img src={tick} alt="" /><span style={{marginLeft:'20px'}}></span>Spritz of Perfume Dry</h4></li> */}
          
          </ul>
        </div>
        <div align="center" ><div> <button onClick={handlebook} className='booknowbtn' style={{marginTop:'45px'}} >Book now</button> </div></div> 
      </div>

      
       
        
      </div>
      <div className="col" id='col1' style={{backgroundColor:'rgba(230, 235, 229, 1)'}}>
      <div className='card' id='cardPrice'>
        <div align="center" className='headerbook' ><h2 >MEDICATED BATH</h2></div>
        {/* <div align="center" className='pricebook' > <h2 >₹2499.00</h2> </div> */}
        <div  className='listitems' >
          <ul style={{listStyle:'none'}}  >
          <li><h4><img className='ticksize' src={tick} alt="" /><span style={{marginLeft:'20px'}}></span>Nail Cut</h4></li>
          <li ><h4  ><img className='ticksize' src={tick} alt="" /><span style={{marginLeft:'20px'}}>Ear Cleaing </span></h4></li>
          <li><h4><img className='ticksize' src={tick} alt="" /><span style={{marginLeft:'20px'}}></span>Shamphoo And Conditioner</h4></li>
          {/* <li><h4><img src={tick} alt="" /><span style={{marginLeft:'20px'}}></span>Paw Creme</h4></li>
          <li><h4><img src={tick} alt="" /><span style={{marginLeft:'20px'}}></span>Spritz of Perfume Dry</h4></li> */}
  
         
          </ul>
        </div>
                <div align="center" ><div> <button onClick={handlebook} className='booknowbtn' style={{marginTop:'45px'}} >Book now</button> </div></div> 
      </div>
      
  
        
      </div>

    </div>
 </div>
</>
   
   
  )
}

export default OurPrices