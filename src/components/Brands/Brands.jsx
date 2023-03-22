import React from 'react'
import slideview from '../../assets/slideview.png'
import './Brands.css'

const Brands = () => {
  return (
    <div>
        <div align='center' className='container-fluid' id='desklop'>
        <div align="center" className='Conatctheader' style={{marginTop:'40px',marginBottom:'40px'}}><h4>Featured Brands</h4> </div> 
           <div className='img'><img src={slideview} alt="" /></div> 
        </div>
    </div>
  )
}

export default Brands