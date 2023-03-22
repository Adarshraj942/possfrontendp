import React from 'react'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import container from '../../assets/container.png'
import dogfood from '../../assets/dogfood.png'
import newcat from '../../assets/newcat.png'
import dogimg from '../../assets/dogimg.png'
import icon from '../../assets/icon.png'
import { useNavigate } from 'react-router-dom';
import sec from '../../assets/sec.png'
import first from '../../assets/first.png'
import third from '../../assets/third.png'
import forth from '../../assets/forth.png'
import six from '../../assets/six.png'
import secmediafoot from '../../assets/secmediafoot.png'
import mediafoot from '../../assets/mediafoot.png'
import { EffectCoverflow, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './DogMediaCatogries.css'


function DogCatogriesMedia() {

  const navigate = useNavigate();
  function handleProduct(event) {
    navigate('/ProductPage');
  }
  return (
    <div className='Mediacontainer'>
      <div className='flexl'>
        <div className='flexp'><img src={mediafoot} alt="" /></div>
        <div className='flexr'><img src={secmediafoot} alt="" /></div>
      </div>
      <div align='center' className='container'>
        <div className='dogslider' style={{marginTop:'20px',marginBottom:'40px'}} >
          <span >
            <h4 align="center">
              <div style={{ fontSize: '15px', backgroundColor: 'white', fontWeight: 'bold', borderRadius: '12px', padding: '5px', outline: 'transparent', width: '130px', borderColor: 'white', marginRight: '20px' }} className="dropdownbutton">
                <button className="dropbtn20"><img style={{ height: '20px' }} src={icon} alt="" /></button>
                <div className="dropdown-content20" style={{  position:"absolute" , zIndex:"100" }}>
                  <a href="#"><img src={first} alt="" />
                    <div>Accessories</div>
                  </a>


                  <a href="#"><img src={third} alt="" />
                    <div> Treats</div>
                  </a>
                  <a href="#"><img src={sec} alt="" />
                    <div> Dog Food</div>

                  </a>

                  <a href="#"><img src={forth} alt="" />
                    <div>  supplies</div>
                  </a>
                  <a href="#"><img src={six} alt="" />
                    <div> Health care</div>
                  </a>
                </div>
              </div>
              <span className='dogheader'>Dog
                <select style={{ fontSize: '15px', textAlign: 'center', backgroundColor: 'white', fontWeight: '800', borderColor: 'white', borderRadius: '12px', padding: '5px', outline: 'transparent', marginLeft: '20px', width: "130px" }} name="" id="">
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
            <img src={container} alt="" />
            <div className='cardtitle'>Accessories</div>
          </SwiperSlide>
          <SwiperSlide>
            <img onClick={handleProduct} src={newcat} alt="" />
            <div className='cardtitle'>Treats</div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={dogimg} alt="" />
            <div className='cardtitle'>Toys</div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={dogfood} alt="" />
            <div className='cardtitle'>Food</div>
          </SwiperSlide>
          <div className="slider-controler" >

            <div className="swiper-pagination"></div>

          </div>
        </Swiper>
      </div>
    </div>
  )
}

export default DogCatogriesMedia