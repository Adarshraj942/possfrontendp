import * as React from 'react';
import Card from '@mui/material/Card';
import './SuperDeals.css'

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import product from '../../assets/product.png'
import deals from '../../assets/deals.png'

export default function SuperDeals() {
  return (
    <>
    <div >
     <div className='OurServiceSlider'><h4>Best Deals For You</h4> </div>
    <div   className='container-fluid' id='Delasblock' style={{padding:'20px 20px 20px 20px'}} >
    <div align="center" className='row' id='crdroes' style={{marginTop:'40px'}}>
        <div className='col'>
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
        </div>
        <div className='col'>
        <div id="superdealcard" className='card' >
            <div className='flex-container20' style={{display:'flex',justifyContent:'space-evenly'}}>
              <div style={{justifyContent:'center'}} className='flex-item-center'>
               <h5 style={{paddingTop:'40px'}} >Subtext</h5>
               <div className='PRoductimg'><img src={product} alt="" /></div>
              </div>
              <div id='dealcarrd'  style={{justifyContent:'right',paddingRight:'30px'}} className='flex-item-left'>
                <img src={deals} alt="" />
              </div>
            </div>
          
          </div>
        </div>
        <div className='col' id='crd'>
        <div id="superdealcard" className='card' >
            <div className='flex-container20' style={{display:'flex',justifyContent:'space-evenly'}}>
              <div style={{justifyContent:'center'}} className='flex-item-center'>
               <h5 style={{paddingTop:'40px'}} >Subtext</h5>
               <div className='PRoductimg'><img src={product} alt="" /></div>
              </div>
              <div  id='dealcarrd' style={{justifyContent:'right',paddingRight:'30px'}} className='flex-item-left'>
                <img src={deals} alt="" />
              </div>
            </div>
          
          </div>
        </div>
    </div>
        <div align="center" className='row' id='crdroes'  style={{marginTop:'40px'}}>
        <div className='col'>
        <div id="superdealcard" className='card'>
            <div className='flex-container20' style={{display:'flex',justifyContent:'space-evenly'}}>
              <div style={{justifyContent:'center'}} className='flex-item-center'>
               <h5 style={{paddingTop:'40px'}} >Subtext</h5>
               <div className='PRoductimg'><img src={product} alt="" /></div>
              </div>
              <div  id='dealcarrd' style={{justifyContent:'right',paddingRight:'30px'}} className='flex-item-left'>
                <img src={deals} alt="" />
              </div>
            </div>
          
          </div>
        </div>
        <div className='col'>
        <div id="superdealcard" className='card'>
            <div className='flex-container20' style={{display:'flex',justifyContent:'space-evenly'}}>
              <div style={{justifyContent:'center'}} className='flex-item-center'>
               <h5 style={{paddingTop:'40px'}} >Subtext</h5>
               <div className='PRoductimg'><img src={product} alt="" /></div>
              </div>
              <div id='dealcarrd'  style={{justifyContent:'right',paddingRight:'30px'}} className='flex-item-left'>
                <img src={deals} alt="" />
              </div>
            </div>
          
          </div>
        </div>
        <div className='col' id='crd'>
        <div id="superdealcard" className='card'>
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
        </div>
    </div>
    </div>
    </div>

</>
  );
}