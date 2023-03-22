import React from 'react'
import catone from '../../assets/catone.png'
import cattwo from '../../assets/cattwo.png'
import './CatCatogriesMedia.css'
import {EffectCoverflow,Pagination,Navigation} from 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import dogfood from '../../assets/dogfood.png'
import container from '../../assets/container.png'
import newcat from '../../assets/newcat.png'
import dogimg from '../../assets/dogimg.png'


import catthree from '../../assets/catthree.png'
import icon from '../../assets/icon.png'
import catpc1 from '../../assets/catpc1.png'
import catpc2 from '../../assets/catpc2.png'
import catpc3 from '../../assets/catpc3.png'
import catpc4 from '../../assets/catpc4.png'
import Typography from '@mui/material/Typography';
import { useNavigate }  from 'react-router-dom';
import catfour from '../../assets/catfour.png'
import catseven from '../../assets/catseven.png'


function CatCatogriesMedia() {
  return (
    <div className='Mediacontainer'>
           <div align='center' className='container'>
           <div  className='catslider'  style={{marginTop:'20px',marginBottom:'40px'}}>
   <span >
    <h4 align="center">
    <div style={{fontSize:'15px',backgroundColor:'white',fontWeight:'bold',borderRadius:'12px',padding:'5px',outline:'transparent',width:'130px',borderColor:'white',marginRight:'20px'}} className="dropdownbutton">
        <button className="dropbtn20"><img style={{height:'20px'}} src={icon} alt="" /></button>
        <div className="dropdown-content20" style={{  position:"absolute" , zIndex:"100" }}>
        <a href="#"><img src={catone} alt="" />
          <div>Accessories</div>
          </a>
          <a href="#"><img src={cattwo } alt="" />
          <div>Cat Litter</div>
          </a>
          <a href="#"><img src={catthree } alt="" />
          <div>Food & Treats</div>
          </a>
          <a href=""><img src={catfour} alt="" />
          <div>Supplies</div>
          </a>
          <a href=""><img src={catseven} alt="" />
          <div>Healthcare</div>
          
          </a>
        </div>
      </div>
   <span className='dogheader'>Cat
    <select  style={{fontSize:'15px',textAlign:'center',backgroundColor:'white',fontWeight:'800',borderColor:'white',borderRadius:'12px',padding:'5px',outline:'transparent',marginLeft:'20px',width:"130px"}} name="" id="">
      <option value="">5 year</option>
      <option value="">4 year</option>
      <option value="">3 year</option>
      <option value="">2 year</option>
      <option value="">1 year</option>
      </select></span></h4>
   </span>
      </div> 
        <Swiper
        effect={'coverflow'}
        // grabCursor={true}
        // centeredSlides={true}
        loop={true}
        // slidesPerView={'auto'}
        // background={'transparent'}
        coverflowEffect={
          {
            rotate: 0,
            stretch: 100,
            depth: 150,
            modifier: 1.5,
            slideShadows: false,
            centeredSlides: true,
            loop: true,
            paginationClickable: true,
            pagination: '.swiper-pagination',

          }
        }
        // pagination={{el:'.swiper-pagination',clickable:true}}
        // navigation={{
        //   nextEl:'swiper-button-next',
        //   prevEl:'swiper-button-prev',
        //   backgroundColor:'transparent',
        //   clickable:true,


          
        // }}
       modules={[EffectCoverflow,Pagination,Navigation]}
       
        >

        
          <SwiperSlide sx={{}}>
          <img src={catpc1} alt="" />
          <div className='cardtitle'>Food</div>
          </SwiperSlide>
          <SwiperSlide>
          <img src={catpc2} alt="" />
          <div className='cardtitle'>Litter</div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={catpc3} alt="" />
            <div className='cardtitle'>Carriers</div>
          </SwiperSlide>
          <SwiperSlide>
          <img src={catpc4} alt="" />
          <div className='cardtitle'>Toys</div>
          </SwiperSlide>
          <div className="slider-controler" >
        
          <div className="swiper-pagination"></div>

          </div>
        </Swiper>
      </div> 
    </div>
  )
}

export default CatCatogriesMedia
