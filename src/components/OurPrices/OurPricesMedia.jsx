import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useNavigate }  from 'react-router-dom';
import './OurPricesMedia.css'

import {EffectCoverflow,Pagination,Navigation} from 'swiper'
import tick from '../../assets/tick.png'


function OurPriceMedia() {
    const navigate = useNavigate();

    function handlebook(event) {
  
      navigate('/PurchaseItem');
    }
  return (
    <div className='MediaPrice' >
      <div align='center' className='container-fluid' style={{paddingTop:'20px',paddingBottom:'40px'}} >
      <div  className='Pricesheader' style={{padding:'30px'}}><h4>Our Services</h4> </div>
        {/* <div align='center' className='servicesheader'><h2>Subtext here--</h2> </div> */}
        <Swiper
         slidesPerView={1}
         effect={'coverflow'}
         grabCursor={true}
         // centeredSlides={true}
         loop={true}
         background={'transparent'}
         coverflowEffect={
           {
             rotate: 0,
           
             depth: 150,
             modifier: 1.5,
             slideShadows: false,
             centeredSlides: true,
             loop: true,
             paginationClickable: true,
             pagination: '.swiper-pagination',
           }
         }
         pagination={{ el: '.swiper-pagination', clickable: true }}
         navigation={{
           nextEl: 'swiper-button-next',
           prevEl: 'swiper-button-prev',
           
           clickable: true,
         }}
         modules={[EffectCoverflow, Pagination, Navigation]}
       
        >
       
         
         <SwiperSlide >
        <div>
        <div className='card lg-shadow' id='cardPrice' style={{height:'300px'}}>
        <div align="center" className='headerbook' ><h2>PETS BATHING</h2></div>
        {/* <div align="center" className='pricebook'> <h2>₹2499.00</h2> </div> */}
        <div style={{textAlign:'left'}} >
          <ul  style={{listStyle:'none'}} >
          <li><h4><img className='ticksize' src={tick} alt="" /><span style={{marginLeft:'20px'}} >Nail Cut</span></h4></li>
            <li><h4><img className='ticksize' src={tick} alt="" /><span style={{marginLeft:'20px'}} >Ear Cleaning</span></h4></li>

          </ul>
        </div>
        <div align="center" ><div> <button onClick={handlebook} className='booknowbtn' style={{marginTop:'20px'}} >Book now</button> </div></div> 
      </div>   
        </div>
       </SwiperSlide>
       <SwiperSlide >
        <div>
        <div className='card' id='cardPrice' style={{height:'430px'}}>
        <div className='headerbook'  align="center" ><h2 >PETS FULL GROOMING</h2></div>
        {/* <div align="center" className='pricebook' > <h2 >₹2499.00</h2> </div> */}
        <div style={{textAlign:'left'}} >
          <ul  style={{listStyle:'none'}}>
          <li ><h4><img className='ticksize' src={tick} alt="" /><span style={{paddingLeft:'10px'}}> Hair cut </span></h4></li>
            <li><h4><img className='ticksize' src={tick} alt="" /><span style={{paddingLeft:'10px'}}></span>Nail Cut</h4></li>
            <li><h4><img className='ticksize' src={tick} alt="" /><span style={{paddingLeft:'10px'}}></span>Ear Cleaning</h4></li>
            <li><h4><img className='ticksize' src={tick} alt="" /><span style={{paddingLeft:'10px'}}></span>Hygiene</h4></li>
            <li><div style={{display:'flex'}}>
              <div><img className='ticksize' src={tick} alt="" /></div>
              <div style={{paddingLeft:'10px'}} >Shamphoo And Conditioner</div>
            </div></li>
    
            {/* <li><h4><img src={tick} alt="" /><span style={{marginLeft:'20px'}}></span>Spritz of Perfume Dry</h4></li> */}
          
          </ul>
        </div>
        <div align="center" ><div> <button onClick={handlebook} className='booknowbtn' style={{marginTop:'20px'}} >Book now</button> </div></div> 
      </div>  
        </div>
       </SwiperSlide>
       <SwiperSlide >
        <div>
        <div className='card' id='cardPrice' style={{height:'430px'}}>
        <div align="center" className='headerbook' ><h2 >MEDICATED BATH</h2></div>
        {/* <div align="center" className='pricebook' > <h2 >₹2499.00</h2> </div> */}
        <div  className='listitems' >
          <ul style={{listStyle:'none'}}  >
          <li><h4><img className='ticksize' src={tick} alt="" /><span style={{marginLeft:'20px'}}></span>Nail Cut</h4></li>
          <li ><h4  ><img className='ticksize' src={tick} alt="" /><span style={{marginLeft:'20px'}}>Ear Cleaing </span></h4></li>
          <li><div style={{display:'flex'}}>
              <div><img className='ticksize' src={tick} alt="" /></div>
              <div style={{paddingLeft:'10px'}} >Shamphoo And Conditioner</div>
            </div></li>
          </ul>
        </div>
         <div align="center" ><div> <button onClick={handlebook} className='booknowbtn' style={{marginTop:'20px'}} >Book now</button> </div></div> 
      </div>
        </div>
       </SwiperSlide>
     
          
     
        
          <div className="slider-controler" >
        
          <div className="swiper-pagination"></div>

          </div>
        </Swiper>
      </div>
    </div>
  )
}

export default OurPriceMedia
