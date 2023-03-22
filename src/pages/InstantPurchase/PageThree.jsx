import React from 'react'
import product from '../../assets/product.png'
import './PageThree.css'
import { useNavigate }  from 'react-router-dom';
import pp from '../../assets/pp.png'
import jump from '../../assets/jump.png'
import gikk from '../../assets/gikk.png'
import jil from '../../assets/jil.png'
import pip from '../../assets/pip.png'



const PageThree = () => {
  const navigate = useNavigate();

  function MyAccount(event) {

    navigate('/MyAccount');
  }
  return (
<>
<div className='container-fluid' >
  <div align='right' style={{height:'0px'}} className='pip'><img src={pip} alt="" /></div>
           <div align='center' style={{justifyContent:'center'}} >
           <div  align='center'   className='card' id='cardpurchase'>
                <div id='orderpack'>
                <div style={{margin:'auto'}}>
                    <img src={product} alt="" />
                </div> 
                <div>
                    <div className='card' id='cardpro' style={{margin:'70px 40px 50px 40px' }}>
                     <div className='container' style={{padding:'50px 40px 40px 40px'}} >
                     <div  align='center'>Product name</div>
                       <div align='center'  style={{display:'flex',justifyContent:'space-between',padding:'20px'}}>
                       <div>Price</div>
                        <div>54.3</div>
                       </div>
                     </div>
                    </div>
                </div>
                </div>
               
                <hr />
                <div  id='comple'>
                <div>
                   <button className='orderComplete' onClick={MyAccount}>Order Completed</button>
                </div> 
                <div>
                    <button className='priceComplete'> <b>₹ 54.5</b> </button>
                </div>
                </div> 
            </div>
          
           </div>
           <div align='center' style={{marginTop:'50px'}} className='con'>
      <h4 style={{fontWeight:'500px'}}> <b>Your Order will be shipping on(timeline)</b> </h4>
    </div>
           <div align='left' class="bottomleft"><img style={{height:'300px'}} src={jump} alt="" /></div>  
           <div className='bootomright'><img src={gikk} alt="" /></div> 

         
    </div>
    
    <div align='right' className='jil'><img src={jil} alt="" /></div>

   
    </>
   
  )

}

export default PageThree
