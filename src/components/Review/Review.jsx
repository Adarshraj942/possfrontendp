import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import video from '../../assets/video.png'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import './Review.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import dogfood from '../../assets/dogfood.png'
import container from '../../assets/container.png'
import newcat from '../../assets/newcat.png'
import dogimg from '../../assets/dogimg.png'
import { EffectCoverflow, Pagination, Navigation } from 'swiper'

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';





const Review = () => {

  const value = 3.4

  return (
    <>
      <div className='Reviewheader'><h4>What Our Customer has  to say about us</h4> </div>
      <div align='center' className='Reviewheader'><h2>Subtext here--</h2> </div>
      <div align='center' className='container' id='fmki'>
        <Swiper
          slidesPerView={2}
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
            <div className="card10">
              <div className='gridcontainer' style={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '30px', }}>
                <div className='gridleft' style={{ float: 'left', paddingLeft: '40px', }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </div>
                <div className='gridright' style={{ justifyContent: 'right', }}>
                  <div >
                    <Box
                      sx={{
                        width: 150,
                        display: 'flex',
                        alignItems: 'center',


                      }}
                    >
                      <Rating
                        name="text-feedback"
                        value={value}
                        readOnly
                        precision={0.5}
                        sx={{
                          fontSize: "1.5rem"
                        }}

                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="1.5rem" />}
                      />

                      <Box sx={{ ml: 2 }}></Box>
                    </Box>
                  </div>
                </div>
              </div>
              <CardContent >

                <Typography variant="body2" >
                  
                  It's a Happy Day when our Furry friends can get Groomed!
                  Grooming Keeps Your Pet Healthy and Active so that he
                  never misses a Ball you throw. Grooming can help remove
                  old hair and dead skin cells, as well as clean off the dirt
                  and excess oil and lingeringandlingering
                </Typography>
              </CardContent>
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className="card10">
              <div className='gridcontainer' style={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '30px', }}>
                <div className='gridleft' style={{ float: 'left', paddingLeft: '40px', }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </div>
                <div className='gridright' style={{ justifyContent: 'right', }}>
                  <div >
                    <Box
                      sx={{
                        width: 150,
                        display: 'flex',
                        alignItems: 'center',


                      }}
                    >
                      <Rating
                        name="text-feedback"
                        value={value}
                        readOnly
                        precision={0.5}
                        sx={{
                          fontSize: "1.5rem"
                        }}

                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="1.5rem" />}
                      />

                      <Box sx={{ ml: 2 }}></Box>
                    </Box>
                  </div>
                </div>
              </div>
              <CardContent >

                <Typography variant="body2" >
                  It's a Happy Day when our Furry friends can get Groomed!
                  Grooming Keeps Your Pet Healthy and Active so that he
                  never misses a Ball you throw. Grooming can help remove
                  old hair and dead skin cells, as well as clean off the dirt
                  and excess oil and lingeringandlingering
                </Typography>
              </CardContent>
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className="card10">
              <div className='gridcontainer' style={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '30px', }}>
                <div className='gridleft' style={{ float: 'left', paddingLeft: '40px', }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </div>
                <div className='gridright' style={{ justifyContent: 'right', }}>
                  <div >
                    <Box
                      sx={{
                        width: 150,
                        display: 'flex',
                        alignItems: 'center',


                      }}
                    >
                      <Rating
                        name="text-feedback"
                        value={value}
                        readOnly
                        precision={0.5}
                        sx={{
                          fontSize: "1.5rem"
                        }}

                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="1.5rem" />}
                      />

                      <Box sx={{ ml: 2 }}></Box>
                    </Box>
                  </div>
                </div>
              </div>
              <CardContent >

                <Typography variant="body2" >
                  It's a Happy Day when our Furry friends can get Groomed!
                  Grooming Keeps Your Pet Healthy and Active so that he
                  never misses a Ball you throw. Grooming can help remove
                  old hair and dead skin cells, as well as clean off the dirt
                  and excess oil and lingeringandlingering
                </Typography>
              </CardContent>
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className="card10">
              <div className='gridcontainer' style={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '30px', }}>
                <div className='gridleft' style={{ float: 'left', paddingLeft: '40px', }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </div>
                <div className='gridright' style={{ justifyContent: 'right', }}>
                  <div >
                    <Box
                      sx={{
                        width: 150,
                        display: 'flex',
                        alignItems: 'center',


                      }}
                    >
                      <Rating
                        name="text-feedback"
                        value={value}
                        readOnly
                        precision={0.5}
                        sx={{
                          fontSize: "1.5rem"
                        }}

                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="1.5rem" />}
                      />

                      <Box sx={{ ml: 2 }}></Box>
                    </Box>
                  </div>

                </div>

              </div>
              <CardContent >

                <Typography variant="body2" >
                  It's a Happy Day when our Furry friends can get Groomed!
                  Grooming Keeps Your Pet Healthy and Active so that he
                  never misses a Ball you throw. Grooming can help remove
                  old hair and dead skin cells, as well as clean off the dirt
                  and excess oil and lingeringandlingering
                </Typography>
              </CardContent>
            </div>

          </SwiperSlide>
          <div className="slider-controler" >

            <div className="swiper-pagination"></div>

          </div>
        </Swiper>
      </div>

    </>

  )
}

export default Review