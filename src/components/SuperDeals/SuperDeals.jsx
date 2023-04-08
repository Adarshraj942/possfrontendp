import * as React from 'react';

import './SuperDeals.css'



import foodv from '../../assets/foodv.png'
import grooming from '../../assets/grooming.png'
import essentials from '../../assets/essentials.png'
import DogToys from '../../assets/DogToys.png'
import treak from '../../assets/treak.png'
import bed from '../../assets/bed.png'


export default function SuperDeals() {
  return (
    <>
    <div >
     <div className='OurServiceSlider'><h4>Best Deals For You</h4> </div>
    <div   className='container' id='Delasblock' style={{padding:'20px 20px 20px 20px'}} >
    <div align="center" className='row' id='crdroes' >
        <div className='col'>
        <div   >
        <div className='container20' >
              <div style={{justifyContent:'center'}} className='flex-item-center'>
              
               <div className='PRoductimg'><img src={foodv} alt="" /></div>
              
              </div>
              <div id='dealcarrd'  style={{justifyContent:'right',paddingRight:'30px'}} className='flex-item-left'>
                
               
              </div>
            </div>
          </div>
        </div>
        <div className='col'>
        <div   >
            <div className='flex-container20' >
              <div style={{justifyContent:'center'}} className='flex-item-center'>
              
               <div className='PRoductimg'><img src={grooming} alt="" /></div>
              </div>
           
            </div>
          
          </div>
        </div>
        <div className='col' id='crd'>
        <div   >
            <div className='flex-container20' >
              <div style={{justifyContent:'center'}} className='flex-item-center'>
              
               <div className='PRoductimg'><img src={essentials} alt="" /></div>
              </div>
             
            </div>
          
          </div>
        </div>
    </div>
        <div align="center" className='row' id='crdroes'  >
        <div className='col'>
        <div  >
            <div className='flex-container20' >
              <div style={{justifyContent:'center'}} className='flex-item-center'>
              
               <div className='PRoductimg'><img src={DogToys} alt="" /></div>
              </div>
             
            </div>
          
          </div>
        </div>
        <div className='col'>
        <div  >
            <div className='flex-container20' >
              <div style={{justifyContent:'center'}} className='flex-item-center'>
              
               <div className='PRoductimg'><img src={bed} alt="" /></div>
              </div>
           
            </div>
          
          </div>
        </div>
        <div className='col' >
        <div  >
            <div className='flex-container20' >
              
              <div style={{justifyContent:'center'}} className='flex-item-center'>
              
               <div className='PRoductimg'><img src={treak} alt="" /></div>
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