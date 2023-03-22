import React, { useEffect, useState } from 'react'
import product from '../../assets/product.png'
import anime from '../../assets/anime.png'
import animeleg from '../../assets/animeleg.png'
import './PageOne.css'
import per from '../../assets/per.png'
import tup from '../../assets/tup.png'
import Button from "@mui/material/Button";
import pandit from '../../assets/pandit.png'
import mediay from '../../assets/mediay.png'
import footj from '../../assets/footj.png'
import { useNavigate, useParams } from 'react-router-dom'
import { getProduct } from '../../Api/ProductRequest'
import { createOrder } from '../../Api/OrderRequest'


const PageOne = () => {
  const navigate = useNavigate();
  const userData =localStorage.getItem("userId")
  const userInfo =localStorage.getItem("userInfo")
    
  const [post ,setPost]=useState({})
  const params =useParams()
  const [activeStep, setActiveStep] = React.useState(0);
  const [address, setAddress] =React.useState({
    firstName:"",

    email: "",

    lastName: "",
    mobile:"",
    DAddress:"",
    city:"",
    state:"",
    zip:"",
    

  });
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const {data}=await getProduct(params.id)
 
      setPost(data)
      console.log(data);
      // ...
    }
    fetchData();
  }, []);
  const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };
  const order=async(e)=>{
    e.preventDefault();
   
    if(userData && userInfo){
     const ata={
       productId:post._id,
       userId:userData,
       quantity:1,
       price:post.price,
       deliveryAddress:{
          firstName:address.firstName,
          lastName:address.lastName,
          mobile:address.mobile,
          email:address.email,
          state:address.state,
          city:address.city,
          post:address.zip,
          address1:address.DAddress

       },
       paymentMod:"COD",
       PaymentStatus:"PENDING",
       DeliveryStatus:"PENDING",
       OrderStatus:"ORDERED"
     }
     console.log(ata);
     const tata= await createOrder(ata)
     if(tata){
      swal("Ordered Successfully...!")
      
     }
    }else{
     swal("Login first")
     history.push('/signin')
    }
    
      
   }
  
  return (
    <>
   
    <div>
    <div className='per'><img src={per} alt="" /></div>
      <div className='flex-contianer' >
        <div className='flex-item-left' >
        <div align='center'><h4 className='header'>Contact Information</h4></div>
       <div align='left'  style={{height:'0px'}} className='mediay' ><img src={mediay} alt="" /></div>
  <div align='right' style={{height:'0px'}} className='imghim'><img src={pandit} alt="" /></div>
        <form action="" onSubmit={order}>
          <div className='poi'>
          <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">First Name</label></div>
              <div><input className='nameinput2'     onChange={handleChange} name='firstName' value={address.firstName} type="text" /></div>
        </div>
        <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">Last</label></div>
              <div><input name='lastName'     onChange={handleChange} value={address.lastName} className='nameinput2' type="text" /></div>
        </div>
          </div>
       
        <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">Mobile number</label></div>
              <div><input className='Mobiinput'     onChange={handleChange} name='mobile' value={address.mobile} type="text" /></div>
        </div>
        <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">Email</label></div>
              <div><input className='Mobiinput'     onChange={handleChange} name='email' value={address.email} type="text" /></div>
        </div>
        <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">Address</label></div>
              <div><input className='Mobiinput'     onChange={handleChange} name='DAddress' value={address.DAddress} type="text" /></div>
        </div>
        <div>
          <div>
   
        <div>
    <div className='poi' >
      <div >
      <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">State</label></div>
              <div> 
                 <select className='nameinput2'     onChange={handleChange} name="state" id="">
                <option value="Kerala">Kerala</option>
                <option value="Delhi">Delhi</option>
              </select>
             
            
              
              </div>
        </div> 
          </div>
          <div>
          <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">City</label></div>
              <div>
              <select  className='nameinput2'     onChange={handleChange} name="city" id="">
                <option value="Kongad">Kongad</option>
                <option value="Kadampazhipuram">Kadampazhipuram</option>
              </select>
              </div>
        </div> 
          </div>
          <div>
       
          </div>
          
      </div>

      <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">Zip</label></div>
              <div><input className='Mobiinput' name='zip' value={address.zip}     onChange={handleChange} type="text" /></div>
        </div> 
        </div>
          </div>
        </div>
      
           <button className=''>Checkout</button>
        
   </form>
       
      
      
        </div>

      
        <div className='flex-item-right' id='leftslide'>
            <div  className='card200'>
                <div style={{display:'flex'}}>
                <div className='imgpro'><img src={product} alt="" /></div>
                <div style={{marginTop:'50px'}}>
                   <div  className='card' id='cardid' >
                        <div align="center"><h6 style={{padding:'10px',fontSize:'15px',fontWeight:'700'}}>{post.name}</h6></div>
                        <div align="center"  style={{display:"flex",justifyContent:'space-between'}}>
                            <div style={{padding:'0px 20px 20px 20px'}}> <h6 style={{fontSize:'15px'}}>Price</h6> </div>
                            <div style={{padding:'0px 20px 20px 0px'}}> <h6 style={{fontSize:'15px'}}><s>  ₹{post.maxPrice}</s> {post.price}</h6></div>
                        </div>
                    </div>
                </div>
                </div>
                <hr />
                <div align="right" >
                    <div className='card' id='pro'><h4 style={{fontWeight:'bolder',color:'rgb(0,0,0,1)',fontSize:'25px'}}>₹{post.price}</h4></div>
                   </div>
              
                
            </div>
            
        </div>
       
      </div>

      <div className='flex-container' id='purdisplay'>
        
        <div className='flex-item-left' style={{justifyContent:'left',paddingLeft:'70px'}}>
        <div ><h4 style={{fontWeight:'bolder',color:'rgb(0,0,0,1)',fontSize:'25px',paddingLeft:'40px',paddingBottom:'20px'}}>Method of Shipping</h4></div>
            <p  style={{paddingLeft:'50px'}}><input type="checkbox" />
         <span style={{paddingLeft:'20px'}} >Shipping Charge fixed</span></p></div>
        <div className='flex-item-right' style={{justifyContent:'right',paddingRight:'40px',marginBottom:'100px'}}>
        <div className='card300'>
            <h4> <b> Total </b><span > ₹{ post.price}</span></h4>
            </div>
          
           
         
        </div>
      </div>

      <div className='container-fluid'  id='mobile'>
        
      <div className='mediacarf'  align='center'>
          <div className='card' id='cardfor'>
           <div style={{display:'inline'}}>
           <div align='center'><img src={product} alt="" /></div>
           <hr />
           <div className='card' id='carf' >
            <div>
             
            <div align="center"><h6 style={{padding:'10px',fontSize:'15px',fontWeight:'700'}}>Product Name</h6></div>
              <div align="center"  style={{display:"flex",justifyContent:'space-between'}}>
               <div style={{padding:'0px 20px 20px 20px'}}> <h6 style={{fontSize:'15px'}}>Price</h6> </div>
              <div style={{padding:'0px 20px 20px 0px'}}> <h6 style={{fontSize:'15px'}}> ₹54.12 /dis</h6></div>
             </div>
            </div>
           </div>
           </div>
          </div>
        </div>
        <div  style={{justifyContent:'center',display:'inline'}}>
        
        <div align='center'><button style={{padding:'15px',width:'220px',borderColor:'transparent',  borderRadius: '7px',   background:'#F4F4F4',marginTop:'20px'}} >
        
            <h4 ><b> Total </b><span > ₹{post.price}</span></h4>
           
          </button>
          </div>
        </div>
      </div>
      
      <div className='flexi' >
      <div className='flexi-left'>
     
      <img src={animeleg} alt="" />
      </div>
      <div className='flexi-right'> <img src={tup} alt="" /></div>
      </div>
    
    </div>
    
    
    <div >
    
   
    
    </div>
    
   </>
  )
}

export default PageOne
