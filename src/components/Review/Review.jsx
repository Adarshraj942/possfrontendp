import React from 'react'

import "react-multi-carousel/lib/styles.css"

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import './Review.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper'

import CardContent from '@mui/material/CardContent';

import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';





const Review = () => {

  const value = 3.4

  return (
    <>
      <div className='Reviewheader'><h4>What Our Customer has  to say about us</h4> </div>
      <div align='center' className='Reviewheader'><h2>Subtext here--</h2> </div>
      <div align='center' className='container-fluid' id='fmki'>
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
            <div className="card0">
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
                  
                Had an amazing and beautiful experience with them.
                 The staff was super friendly and professional.
                  My fur baby Micku had fun and was really happy. 
                  Strongly recommended. Thank you POSS.
                </Typography>
              </CardContent>
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className="card0">
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
                Best service for dogs
              And good ambience
              Nice behaviour .
              Excellent products and services.A must visit place ..loved it
                </Typography>
              </CardContent>
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className="card0">
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
                Quality and quantity of model of product are available.
                 The prices are so affordable and your small loved one gonna love them❤✨.
                  Thankyou POSS for giving us amazing
                  products.
                </Typography>
              </CardContent>
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className="card0">
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
                It was a good experience to visit POSS the other day and overwhelming to see 
                the hospitality and response by the staff.

                  Recommended to all Pet Lovers
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