import React from 'react'
import slide1 from '../../assets/slide1.png'
import slide2 from '../../assets/slide2.png'
import slidethree from '../../assets/slidethree.png'
import './ImageSlider.css'
import { useNavigate } from 'react-router-dom'

document.body.style = 'background: rgba(230, 235, 229, 1);'

const ImageSlider = () => {
  const navigate=useNavigate()
  return (

  <div className='container-fluid' id='imageslider'>
     <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{borderRadius:'20px'}} >
        <ol className="carousel-indicators" style={{width:'0px'}}>
          <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
          <div className="carousel-inner" style={{width:'100%'}}>
            <div className="carousel-item active">
                <img className="d-block w-100"  src={slide1} alt="First slide" />
                <div class="carousel-caption block w-100"   >
                <button className='shopbtn2'> <a   
                 onClick={()=>{
                  navigate("/PurchaseItem")
                }}
                style={{color:'black',textDecoration:'none'}}> Book Now</a></button>
              </div>
          </div>
          <div className="carousel-item"  style={{width:'100%'}}>
            <img className="d-block w-100"   src={slide2} alt="Second slide" />
            <div class="carousel-caption" >
              <div className='container-fluid' style={{marginTop:'20px'}}>
              <button className='shopbtn'  onClick={()=>{
              navigate("/ProductPage/DOG/FOOD")
            }}> <a  style={{color:'black',textDecoration:'none'}}>Shop Now</a> </button>
              </div>
            
        </div>
          </div>
          <div className="carousel-item"  style={{width:'100%'}}>
            <img className="d-block w-100"   src={slidethree} alt="Third slide" />
            <div class="carousel-caption">
            <button className='shopbtn2'> <a  
            // href='#priceContainer'
             style={{color:'black',textDecoration:'none'}} onClick={()=>{
              navigate("/PurchaseItem")
            }}> Book Now</a></button>
        </div>
          </div>
        </div>
        <a style={{padding:'10px'}}  className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="false" />
          <span className="sr-only">Previous</span>
        </a>
        <a style={{padding:'10px'}} className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="false" />
          <span className="sr-only">Next</span>
        </a>
      </div>
  </div>
  )
}

export default ImageSlider
