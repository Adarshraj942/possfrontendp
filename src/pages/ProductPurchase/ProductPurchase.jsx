import React ,{useEffect, useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import instant from '../../assets/instant.png'
import certified from '../../assets/certified.png'
import shipping from '../../assets/shipping.png'
import chat from '../../assets/chat.png'
import hey from '../../assets/hey.png'
import product from '../../assets/product.png'
import downarrow from '../../assets/downarrow.png'
import back from '../../assets/back.png'
import './ProductPurchase.css'
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import cart from '../../assets/cart.png';
import dogproduct from '../../assets/dogproduct.png'
import purchase from '../../assets/purchase.png'
import { useNavigate, useParams }  from 'react-router-dom';
import { Footer } from '../../components/Footer/Footer';
import MobileFoot from '../../components/MobileFoot/MobileFoot'
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar'
import MediaFooter from '../../components/Footer/MediaFooter'
import chears from '../../assets/chears.png'
import sidk from '../../assets/sidk.png'
import po from '../../assets/po.png'
import lo from '../../assets/lo.png'
import { getProduct } from '../../Api/ProductRequest'

import swal from "sweetalert"
import { addToWishlist } from '../../Api/WishlistRoute'


function ProductPurchase() {
    const userData =localStorage.getItem("userId")
    const userInfo =localStorage.getItem("userInfo")

    const navigate = useNavigate();

    
    const [post ,setPost]=useState({})
    const params =useParams()
    const value = 3.5;
    const [category, setCategory] = useState("");
    const [products, setProduct] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [images,setimages]=useState(["1ADhSsnjla2m9Ru6cb3Kmu6PFsm3NZEKp"])

    const fn=(data)=>{
        var str_array =data.uploadImages.split(',');

for(var i = 0; i < str_array.length; i++) {
   // Trim the excess whitespace.
   str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
   // Add additional code here, such as:

   const url=new URL(str_array[i])  
 
   const arrz=images

   arrz.push(url.searchParams.get('id'))
   setimages(arrz)

}
    }
    useEffect(() => {
        async function fetchData() {
          // You can await here
          const {data}= await getProduct(params.id)
     
          setPost(data)

          console.log(data.uploadImages
            )
            

          console.log(data);
          fn(data)
          // ...
        }
        fetchData();
         
      }, [images,fn]);
      function InstantPurchase(event) {
  
        navigate(`/InstantPurchase/${post._id}`);
      }
     
  
      // Or [] if effect doesn't need props or state
    // const handelSetCategories = (cat) => {
    //   console.log("hare", cat);
    //   setCategory(cat);
    //   // api call
      
    // };

    const wishlist=async(data)=>{
        if(userData && userInfo){
         const ata={
           productId:data,
           userId:userData,
           quantity:1
         }
         const tata= await addToWishlist(ata)
         if(tata){
          swal("Added to Cart")
          navigate("/cart")
          
         }
        }else{
         swal("Login first")
         navigate('/login')
        }
        
          
       }
  
  
  return (
    <>
    <div>
    <MediaNavbar />
     <Navbar />
     <div className='container-fluid' id='yhio'>
       <div align='right' className='chears'> <img src={chears} alt="" /></div>
        <div className='flex-containenr' style={{}}>
            <div className='flex-item-left'>
                <div ><button className='backbtnpurchase'><span style={{paddingRight:'5px'}}><img src={back} alt="" /></span>Back</button></div>
               <div className='desktoprow'>
               <div id='itemrows' className='row' >
                    <div  align="center" className='col-3'>
                    
                            <div ><img src={instant} alt="" /></div>
                            <div><p >Speedy Deliveries</p></div>
                        </div>
                        <div align="center" className='col-3'>
                        
                            <div ><img src={certified} alt="" /></div>
                            <div><p>Amazing Value</p></div>
                    </div>
                        <div align="center" className='col-3'>
                                <div><img src={shipping} alt="" /></div>
                                <div><p>Free Shipping </p></div>
                        </div>
                        <div align="center" className='col-3'>
                        <div><img src={chat} alt="" /></div>
                        <div><p>Chat with us</p></div></div>
                    </div>
               </div>
                </div>
                <div className='flex-item-right'  >
                    <img src={hey} alt="" />
                </div>

        </div>
        
        <div  className='row' id='yhirow'>
           <div className='col-md-6'>
           <div className='container' id='productconta'>
                
                <div className='card' id='purchasecard' >
                     <div align='center' className='image'>
                        
                         <img  style={{height:"16rem", }} src={
                            images.length>0 ?
                            
                            
                            "https://drive.google.com/uc?id="+ images[1]:"no image"} alt="" />
                     </div>
                  <div className='ulcard' align='center'>
                  <ul align='center' class="preview-thumbnail nav nav-tabs" >
                           <li class="active"><a data-target="#pic-1" data-toggle="tab"><div className='card' style={{padding:'20px'}}><img src={`https://drive.google.com/uc?id=${images[2]}`} /></div></a></li>
                           <li><a data-target="#pic-2" data-toggle="tab"> <div className='card' style={{padding:'20px'}}><img src={`https://drive.google.com/uc?id=${images[3]}`} /></div> </a></li>
                           <li><a data-target="#pic-3" data-toggle="tab"><div className='card' style={{padding:'20px'}}><img src={`https://drive.google.com/uc?id=${images[4]}`} /></div></a></li>
                           <li className='onelistotem' ><a data-target="#pic-4" data-toggle="tab"><div className='card' style={{padding:'20px'}}><img src={`https://drive.google.com/uc?id=${images[5]}`} /></div></a></li>
                         
                 </ul>
                  </div>
                 </div>
               
                </div>
           </div>
           <div className='col-md-6'>
           <div className='container' id='container6'>
         
         <h4 align='center' className='producthead'>{post.name}</h4>
               <h4 align='center' className='pricehead'>₹{post.price}</h4>
               <div align='center' className='wrapbox' >
               <div align='center' className='wrapper' style={{marginTop:'30px',marginBottom:'20px'}}>
                       <span className='minus'>-</span>
                       <span className='num'>1</span>
                       <span className='plus'>+</span>
                   </div>
               </div>
               

                   <hr className='titlem' />
                   <div style={{display:'flex',margin:'5px'}}>
                   <div className='Addtocart'>
                   <button  onClick={()=>{
                                wishlist(post._id)
                    }} >
                       Add to cart</button>
                   </div>
                   <div className='Purchasebtn'>
                       <button onClick={InstantPurchase}>Buy Now</button>

                   </div>
                   
                   </div>
            
                  <div style={{marginTop:'40px'}}> 
                  <div>
                    <button className='togglebtn' data-toggle="collapse" data-target="#demo">Description <span> <p  style={{float:'right'}}> <img src={downarrow} alt="" /></p></span></button>

                       <div  id="demo" class="collapse">
                      {post.desc}
                       </div>
                   </div>
                   <hr className='titlem'  />
                   <div>

                   <button className='togglebtn' data-toggle="collapse" data-target="#submenu1">Addition information <span> <p  style={{float:'right'}}> <img src={downarrow} alt="" /></p></span></button>

                       <div id="submenu1" class="collapse">
                       {post.typeCatagory}
                       {post.brandCategory}
                      {post.variantType}
                     
                       </div>
                       
                   </div>
               

                   
                  </div>
               
         </div>
           </div>
           
            </div>
            <div  align='right'   className='sidk' >
          
        </div>
    
     </div>
     <div id='itemrowsformobile'>
     <div  className='row' >
                    <div  align="center" className='col-3'>
                    
                            <div ><img src={instant} alt="" /></div>
                            <div><p style={{fontSize:'12px'}}>Speedy Deliveries</p></div>
                        </div>
                        <div align="center" className='col-3'>
                        
                            <div ><img src={certified} alt="" /></div>
                            <div><p  style={{fontSize:'12px'}}>Amazing Value</p></div>
                    </div>
                        <div align="center" className='col-3'>
                                <div><img src={shipping} alt="" /></div>
                                <div><p  style={{fontSize:'12px'}}>Free Shipping </p></div>
                        </div>
                        <div align="center" className='col-3'>
                        <div><img src={chat} alt="" /></div>
                        <div><p  style={{fontSize:'12px'}}>Chat with us</p></div></div>
                    </div>
     </div>
     

     <div className='flexd' style={{height:'0px'}}>
        <div className='fleg'><img src={lo} alt="" /></div>
        <div className='fleh'><img src={po} alt="" /></div>
     </div>

      <div className='container-fluid'>
      <div align="center" style={{marginTop:'20px'}} ><h4 style={{fontWeight:'800',fontSize:'25px',color:'black',marginTop:'20px',paddingBottom:'40px'}}>People also brought</h4></div>
      <div className="col-md-14" style={{margin:'20px'}}>
      <div align='center' className='row' id='colmine2'    >
            {products &&
            products.length > 0 &&
            products.map((ele) => (
                <div align='center' id='colmine'  className="col-sm-2" >
                <div id="Productcard50" className='card'  >
                    <div className='cardimg' style={{borderRadius:'20px'}} align="center"><img src={dogproduct} alt="" /></div>
                   
                    <div style={{paddingTop:'20px'}} align="center">
                        <b >{ post.name}</b>
                        <h6 style={{paddingTop:'10px'}}>{post.price} <b>Discount</b> </h6>
                    </div>
                    <div style={{paddingTop:'10px',borderRadius:'20px'}} align="center">
                    <button   className='button30'><img style={{backgroundColor:'#FFFFFF',margin:'5px',}} src={cart} alt="" /><span style={{backgroundColor:'#FFFFFF'}}>Add to cart</span></button></div>
                    <div style={{borderRadius:'20px',paddingTop:'10px',height:'40px',paddingBottom:'40px'}} align="center">
                    <button   className='button30' style={{backgroundColor:'#F2C879',color:'black',}}><span >Buy Now</span></button></div>
                    </div>
  
                  
                </div>
               ))}

               
            </div>
      </div>
      </div>
      <Footer />
     <MediaFooter />
    </div>
    </>
  )
}

export default ProductPurchase
