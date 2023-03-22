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
import video from '../../assets/video.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import './CardCarasouel.css'
import Typography from '@mui/material/Typography';
import './CardCarasouel.css'

function CardCarasouel() {
  return (
    <div style={{backgroundColor:'white'}}>
      <div align='center' className='container-fluid' style={{paddingTop:'20px',paddingBottom:'40px'}} >
      <div  className='servicesheader'><h4>Our Services</h4> </div>
        <div align='center' className='servicesheader'><h2>Subtext here--</h2> </div>
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
         pagination={{ el: '.swiper-pagination', clickable: true }}
         navigation={{
           nextEl: 'swiper-button-next',
           prevEl: 'swiper-button-prev',
           backgroundColor: 'transparent',
           clickable: true,
         }}
         modules={[EffectCoverflow, Pagination, Navigation]}
       
        >
        
          <SwiperSlide sx={{}}>
          
            <div>
            <Card class='Slidercard'  align="center" sx={{ borderRadius:'20.1355px' }}>
              <CardMedia
                sx={{ height: 270,borderRadius:'20.1355px;'  }}
                image={video}

              />
              <CardContent className='Cardcontent' >
                <Typography  align="center" gutterBottom variant="h5" component="div"  style={{color:'rgba(56, 43, 40, 1)',fontWeight:'bold',fontSize:'25px'}}>
                Door to Door Service 
                </Typography>
                <Typography variant="body2" className='cardcolor' sx={{fontSize:'14px'}} >
                Working Day and Night and Have no Energy to Get your 
                Dog to the nearest Grooming Station? No Worries, The
                Rolling Groomers is here to Provide you with the 
                hassle-free Grooming Experience without you even 
                getting worried about the transportation.
                </Typography>
              </CardContent>
              
            </Card>
            </div>
          </SwiperSlide>
          <SwiperSlide>
       
            <div>
            <Card class='Slidercard'  align="center" sx={{ borderRadius:'20.1355px' }}>
              <CardMedia
                sx={{ height: 270,borderRadius:'20.1355px;' , }}
                image={video}

              />
              <CardContent className='Cardcontent' >
                <Typography  align="center" gutterBottom variant="h5" component="div"  style={{color:'rgba(56, 43, 40, 1)',fontWeight:'bold',fontSize:'25px'}}>
                Door to Door Service 
                </Typography>
                <Typography variant="body2" className='cardcolor' sx={{fontSize:'14px'}} >
                Working Day and Night and Have no Energy to Get your 
                Dog to the nearest Grooming Station? No Worries, The
                Rolling Groomers is here to Provide you with the 
                hassle-free Grooming Experience without you even 
                getting worried about the transportation.
                </Typography>
              </CardContent>
              
            </Card>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            
            <div>
            <Card class='Slidercard'  align="center" sx={{ borderRadius:'20.1355px' }}>
              <CardMedia
                sx={{ height: 270,borderRadius:'20.1355px;' , }}
                image={video}

              />
              <CardContent className='Cardcontent' >
                <Typography  align="center" gutterBottom variant="h5" component="div"  style={{color:'rgba(56, 43, 40, 1)',fontWeight:'bold',fontSize:'25px'}}>
                Door to Door Service 
                </Typography>
                <Typography variant="body2" className='cardcolor' sx={{fontSize:'14px'}} >
                Working Day and Night and Have no Energy to Get your 
                Dog to the nearest Grooming Station? No Worries, The
                Rolling Groomers is here to Provide you with the 
                hassle-free Grooming Experience without you even 
                getting worried about the transportation.
                </Typography>
              </CardContent>
              
            </Card>
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

export default CardCarasouel
