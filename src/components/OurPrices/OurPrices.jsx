import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { useNavigate }  from 'react-router-dom';
import tick from '../../assets/tick.png'
import './OurPrices.css'

function OurPrices() {
  const navigate = useNavigate();

  function handlebook(event) {

    navigate('/PurchaseItem');
  }


   
  return (
 <div className='container-fluid'  style={{padding:'40px'}}>
  <div  className='Pricesheader'><h4> Our Prices</h4> </div>
  <div align='center'  className='subtextheader'><h2>Subtext---</h2> </div>
   <div align='center'  className='row' id='pricerow' >
      <div className="col" id='col1'  >
      <div className='card lg-shadow' id='cardPrice'>
        <div align="center" className='headerbook' ><h2>Cat Grooming</h2></div>
        <div align="center" className='pricebook'> <h2>₹2499.00</h2> </div>
        <div className='listitems' >
          <ul  style={{listStyle:'none'}} >
          <li><h4><img src={tick} alt="" /><span style={{marginLeft:'20px'}} >Bath and Dry</span></h4></li>
            <li><h4><img src={tick} alt="" /><span style={{marginLeft:'20px'}} >Full Body Haircut</span></h4></li>
            <li ><h4><img src={tick} alt="" /><span style={{marginLeft:'20px'}} >Nail and Sanitary Clipping</span></h4></li>
            <li ><h4><img src={tick} alt="" /><span  style={{marginLeft:'20px'}}>Teeth and Ear Cleaning</span></h4></li>
            <li ><h4 ><img src={tick} alt="" /><span  style={{marginLeft:'20px',textAlign:'center'}}>Paw Massage and Mouth Spray</span></h4></li>
            <li ><h4><img src={tick} alt="" /><span  style={{marginLeft:'20px'}}>Spritz of Perfume Dry</span></h4></li>
          </ul>
        </div>
        <div  className='container' align="center" ><div style={{marginTop:'30px'}}   className='booknowbtn'>Book now</div></div> 
      </div>
    
      </div>
      <div className="col" id='col1' >
      <div className='card' id='cardPrice'>
        <div className='headerbook'  align="center" ><h2 >Dog Grooming</h2></div>
        <div align="center" className='pricebook' > <h2 >₹2499.00</h2> </div>
        <div className='listitems' >
          <ul  style={{listStyle:'none'}}   >
          <li ><h4><img src={tick} alt="" /><span style={{marginLeft:'20px'}}></span> Bath and Dry</h4></li>
            <li><h4><img src={tick} alt="" /><span style={{marginLeft:'20px'}}></span>Full Body Haircut</h4></li>
            <li><h4><img src={tick} alt="" /><span style={{marginLeft:'20px'}}></span>Nail and Sanitary Clipping</h4></li>
            <li><h4><img src={tick} alt="" /><span style={{marginLeft:'20px'}}></span>Teeth and Ear Cleaning</h4></li>
            <li><h4><img src={tick} alt="" /><span style={{marginLeft:'20px'}}></span>Paw Massage and Mouth Spray</h4></li>
            <li><h4><img src={tick} alt="" /><span style={{marginLeft:'20px'}}></span>Spritz of Perfume Dry</h4></li>
          
          </ul>
        </div>
              <div align="center" ><div style={{marginTop:'30px'}}   className='booknowbtn'>Book now</div></div> 
      </div>
       
        
      </div>
      <div className="col" id='col1' style={{backgroundColor:'rgba(230, 235, 229, 1)'}}>
      <div className='card' id='cardPrice'>
        <div align="center" className='headerbook' ><h2 >Bath</h2></div>
        <div align="center" className='pricebook' > <h2 >₹2499.00</h2> </div>
        <div  className='listitems' >
          <ul style={{listStyle:'none'}}  >
          <li><h4><img src={tick} alt="" /><span style={{marginLeft:'20px'}}></span>Basic Bathing</h4></li>
          <li ><h4  ><img src={tick} alt="" /><span style={{marginLeft:'20px'}}>Special Shampoos and <span style={{marginLeft:'33px'}}  >Conditioners</span> </span></h4></li>
          <li><h4><img src={tick} alt="" /><span style={{marginLeft:'20px'}}></span>Blow Dry</h4></li>
          <li><h4><img src={tick} alt="" /><span style={{marginLeft:'20px'}}></span>Paw Creme</h4></li>
          <li><h4><img src={tick} alt="" /><span style={{marginLeft:'20px'}}></span>Spritz of Perfume Dry</h4></li>
  
         
          </ul>
        </div>
                <div align="center" ><div> <button onClick={handlebook} className='booknowbtn' style={{marginTop:'45px'}} >Book now</button> </div></div> 
      </div>
      
  
        
      </div>
      <div className="col" id='col1' style={{backgroundColor:'rgba(230, 235, 229, 1)'}}>
      <div className='card' id='cardPrice'>
        <div align="center" className='headerbook' ><h2 >Cat Grooming</h2></div>
        <div align="center" className='pricebook' > <h2>₹2499.00</h2> </div>
        <div  className='listitemslast' >
          <ul style={{listStyle:'none'}}  >
          <li><h4><img src={tick} alt="" /><span style={{marginLeft:'20px'}}></span>35 minutes of walk everyday</h4></li>
          <li><h4><img src={tick} alt="" /><span style={{marginLeft:'20px'}}></span>Avoid walking in extreme heat</h4></li>
          <li><h4><img src={tick} alt="" /><span style={{marginLeft:'20px'}}></span>Take fresh water for your <span  style={{marginLeft:'33px'}}>dog to drink</span> </h4></li>
          <li><h4><img src={tick} alt="" /><span style={{marginLeft:'20px'}}></span>Supervise your dog at all <span style={{marginLeft:'33px'}}  >  times</span></h4></li>
          <li><h4><img src={tick} alt="" /><span style={{marginLeft:'20px'}}></span>Free Support</h4></li>
          
          </ul>
        </div>
              <div align="center" ><div   className='booknowbtn' style={{marginTop:'15px'}}>Book now</div></div> 
      </div>
     
      </div>
    </div>
 </div>
   
   
  )
}

export default OurPrices