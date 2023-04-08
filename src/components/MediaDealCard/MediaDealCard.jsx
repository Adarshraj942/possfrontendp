import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {EffectCoverflow,Pagination,Navigation} from 'swiper'

import foodv from '../../assets/foodv.png'
import grooming from '../../assets/grooming.png'
import essentials from '../../assets/essentials.png'
import DogToys from '../../assets/DogToys.png'
import treak from '../../assets/treak.png'
import bed from '../../assets/bed.png'
import './MediaDealCard.css'

function MediaDealCard() {
  return (
    <div className='MediaDEalcard'>
            <div align='center' className='container-fluid'>
       
        <Swiper
        slidesPerView={1}
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
          <div   >
        <div className='container' >
              <div style={{justifyContent:'center'}} className='flex-item-center'>
               
               <div className='PRoductimg'><img  src={DogToys} alt="" /></div>
              
              </div>
             
            </div>
          </div>
            
          </SwiperSlide>
          <SwiperSlide>
          <div   >
        <div className='container' >
              <div style={{justifyContent:'center'}} className='flex-item-center'>
               
               <div className='PRoductimg'><img src={essentials} alt="" /></div>
              
              </div>
              <div id='dealcarrd'  style={{justifyContent:'right',paddingRight:'30px'}} className='flex-item-left'>
                
               
              </div>
            </div>
          </div>
           
          </SwiperSlide>
          <SwiperSlide>
          <div   >
        <div className='container' >
              <div style={{justifyContent:'center'}} className='flex-item-center'>
               
               <div className='PRoductimg'><img src={treak} alt="" /></div>
              
              </div>
              <div id='dealcarrd'  style={{justifyContent:'right',paddingRight:'30px'}} className='flex-item-left'>
                
               
              </div>
            </div>
          </div>
          
          </SwiperSlide>
          <SwiperSlide>
          <div   >
        <div className='container' >
              <div style={{justifyContent:'center'}} className='flex-item-center'>
               
               <div className='PRoductimg'><img src={grooming} alt="" /></div>
              
              </div>
              <div id='dealcarrd'  style={{justifyContent:'right',paddingRight:'30px'}} className='flex-item-left'>
                
               
              </div>
            </div>
          </div>
       
          </SwiperSlide>
          <SwiperSlide>
          <div   >
        <div className='container' >
              <div style={{justifyContent:'center'}} className='flex-item-center'>
               
               <div className='PRoductimg'><img src={bed} alt="" /></div>
              
              </div>
              <div id='dealcarrd'  style={{justifyContent:'right',paddingRight:'30px'}} className='flex-item-left'>
                
               
              </div>
            </div>
          </div>
          
          </SwiperSlide>
          <SwiperSlide>
          <div   >
        <div className='container' >
              <div style={{justifyContent:'center'}} className='flex-item-center'>
               
               <div className='PRoductimg'><img src={foodv} alt="" /></div>
              
              </div>
              <div id='dealcarrd'  style={{justifyContent:'right',paddingRight:'30px'}} className='flex-item-left'>
                
               
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
