import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import dogfood from '../../assets/dogfood.png'
import container from '../../assets/container.png'
import newcat from '../../assets/newcat.png'
import dogimg from '../../assets/dogimg.png'
import {EffectCoverflow,Pagination,Navigation} from 'swiper'
import product from '../../assets/product.png'
import deals from '../../assets/deals.png'
import './MediaDealCard.css'

function MediaDealCard() {
  return (
    <div className='MediaDEalcard'>
            <div align='center' className='container'>
       
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
         // pagination={{ el: '.swiper-pagination', clickable: true }}
         // navigation={{
         //   nextEl: 'swiper-button-next',
         //   prevEl: 'swiper-button-prev',
         //   backgroundColor: 'transparent',
         //   clickable: true,
 
 
 
         // }}
         modules={[EffectCoverflow, Pagination, Navigation]}
       
        >
        
          <SwiperSlide sx={{}}>
          <div id="superdealcard" className='card' >
        <div className='flex-container20' style={{display:'flex',justifyContent:'space-evenly'}}>
              <div style={{justifyContent:'center'}} className='flex-item-center'>
               <h5 style={{paddingTop:'40px'}} >Subtext</h5>
               <div className='PRoductimg'><img src={product} alt="" /></div>
              
              </div>
              <div id='dealcarrd'  style={{justifyContent:'right',paddingRight:'30px'}} className='flex-item-left'>
                <img  src={deals} alt="" />
               
              </div>
            </div>
          </div>
            
          </SwiperSlide>
          <SwiperSlide>
          <div id="superdealcard" className='card' >
        <div className='flex-container20' style={{display:'flex',justifyContent:'space-evenly'}}>
              <div style={{justifyContent:'center'}} className='flex-item-center'>
               <h5 style={{paddingTop:'40px'}} >Subtext</h5>
               <div className='PRoductimg'><img src={product} alt="" /></div>
              
              </div>
              <div id='dealcarrd'  style={{justifyContent:'right',paddingRight:'30px'}} className='flex-item-left'>
                <img  src={deals} alt="" />
               
              </div>
            </div>
          </div>
           
          </SwiperSlide>
          <SwiperSlide>
          <div id="superdealcard" className='card' >
        <div className='flex-container20' style={{display:'flex',justifyContent:'space-evenly'}}>
              <div style={{justifyContent:'center'}} className='flex-item-center'>
               <h5 style={{paddingTop:'40px'}} >Subtext</h5>
               <div className='PRoductimg'><img src={product} alt="" /></div>
              
              </div>
              <div id='dealcarrd'  style={{justifyContent:'right',paddingRight:'30px'}} className='flex-item-left'>
                <img  src={deals} alt="" />
               
              </div>
            </div>
          </div>
          
          </SwiperSlide>
          <SwiperSlide>
          <div id="superdealcard" className='card' >
        <div className='flex-container20' style={{display:'flex',justifyContent:'space-evenly'}}>
              <div style={{justifyContent:'center'}} className='flex-item-center'>
               <h5 style={{paddingTop:'40px'}} >Subtext</h5>
               <div className='PRoductimg'><img src={product} alt="" /></div>
              
              </div>
              <div id='dealcarrd'  style={{justifyContent:'right',paddingRight:'30px'}} className='flex-item-left'>
                <img  src={deals} alt="" />
               
              </div>
            </div>
          </div>
       
          </SwiperSlide>
          <div style={{marginTop:'40px'}} className="slider-controler" >
        
          <div  className="swiper-pagination"></div>

          </div>
        </Swiper>
      </div>
    </div>
  )
}

export default MediaDealCard
