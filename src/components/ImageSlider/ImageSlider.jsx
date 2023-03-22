import React from 'react'
import sideone from '../../assets/sideone.png'
import slide from '../../assets/slide.png'
import './ImageSlider.css'

document.body.style = 'background: rgba(230, 235, 229, 1);'

const ImageSlider = () => {
  return (

  <div className='container-fluid' id='imageslider'>
    
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100"  src={slide} alt="First slide" />
            <div class="carousel-caption d-none d-md-block text-left" style={{justifyContent:'left',bottom:'200px'}}>
            <h1>First slide label</h1>
            <h3 style={{marginTop:'10px'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
             <button className='shopbtn'>Shop now</button>
        </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100"   src={slide} alt="Second slide" />
            <div class="carousel-caption d-none d-md-block text-center" style={{justifyContent:'left',bottom:'200px'}}>
            <h1>First slide label</h1>
            <h3 style={{marginTop:'10px'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
            <button className='shopbtn'>Shop now</button>
        </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100"   src={slide} alt="Third slide" />
            <div class="carousel-caption d-none d-md-block text-right" style={{justifyContent:'left',bottom:'200px'}}>
            <h1>First slide label</h1>
            <h3 style={{marginTop:'10px'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
             <button className='shopbtn'>Shop now</button>
        </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
  </div>
  )
}

export default ImageSlider
