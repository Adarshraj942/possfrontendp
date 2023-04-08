import React ,{useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './ProductPage.css'

import { useEffect } from "react";
import { getAllProducts } from "../../Api/ProductRequest.js";

import 'bootstrap/dist/css/bootstrap.css';

import {Footer} from '../../components/Footer/Footer'
import { useNavigate }  from 'react-router-dom';
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar';

import MediaFooter from '../../components/Footer/MediaFooter';


const ProductPage = () => {
  
    const [category, setCategory] = useState("");
    // const [products, setProduct] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  
    const handelSetCategories = (cat) => {
      console.log("hare", cat);
      setCategory(cat);
      // api call
      
    };

    const navigate =useNavigate()
    function handleProductPurchase(event){
      navigate('/ProductPurchase');
    }

  
    const [products,setProduct]=useState([])
    const Productpage = () => {
        navigate(`/ProductPage/${products._id}`)
    } 

    const userData =localStorage.getItem("userId")
    const userInfo =localStorage.getItem("userInfo")

    useEffect(() => {
      async function fetchData() {
        // You can await here
        const {data}=await getAllProducts()
        setProduct(data)
        console.log(data);
        // ...
      }
      fetchData();
    }, []); // Or [] if effect doesn't need props or state

    const value = 3.5;
    const[users,setUsers]=useState([]);
    const [search,setSearch]=useState("");
    const [filterUsers,setFilteredUsers]=useState([]);

    // useEffect(() => {
    //   async function fetchData() {
    //     // You can await here
    //     const beta={userId:userData}
    //     const {data}=await getWishlist(beta)
    //     setUsers(data)
    //     setFilteredUsers(data.Wishlist.products)
    //     console.log(userData);
    //     console.log(data.Wishlist.products);
    //     // ...
    //   }
    //   fetchData();
    // }, []);
    const src=(data)=>{
    
      const images=[]
      var str_array =data.split(',');
console.log("str",str_array);
for(var i = 0; i < str_array.length; i++) {
// Trim the excess whitespace.
str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
// Add additional code here, such as:

if(str_array[i]!==""){
const url=new URL(str_array[i])  



images.push(url.searchParams.get('id'))


return `https://drive.google.com/uc?id=${images[0]}`
}else{
  return `https://drive.google.com/uc?id=${"10uk_BvFXN-tHCfAQNYeNDUg4cNaM5SaX"}`
}

}   
;



}
  return (
    <>
    <div>
   < MediaNavbar/>
      <Navbar />
  <div className='container-fluid'>

  <div className='flexco'>
    <div className='flexit1'>
      <div style={{display:'flex'}}>
      <div><select className='selectbox' name="" id="">
        <option value="">Pet </option>
        <option value=""></option>
         <option value=""></option>
         <option value=""></option>
        </select></div>
      <div style={{marginLeft:'10px'}}><select  className='selectbox' name="" id="">
      <option value="">Food Type</option>
       <option value=""></option>
       <option value=""></option>
        </select></div>
      </div>
    </div>

    <div className='flexit2'>
    <div style={{display:'flex'}}>
      <div style={{marginTop:'10px'}}><h6 >Sort by</h6></div>
      <div class='um'><select  className='selectbox' name="" id="">
      <option value="">Age</option>
      <option value="">Price</option>
        </select></div>
      </div>
    </div>

  </div>

  </div>
  <div className='container-fluid'>

        <div  id='rowlock' className='row'>
            <div id='tabsubmenu' align='center'  className='col-md-2'>


            <article className="filter-group">

<header className="card-header" style={{backgroundColor:'transparent'}}>
  <a
    href
    data-toggle="collapse"
    data-target="#collapse_11"
    aria-expanded="false"
    className="anchor"

  >
    <h6 className="title"><span>Filters</span> <i className="icon-control fa fa-chevron-down" /></h6>
 
  </a>
</header>

<div className="filter-content collapse " id="collapse_11" >
  <div className="card-body">
  <article className="filter-group">

<header className="card-header" style={{backgroundColor:'transparent'}}>
  <a
    href
    data-toggle="collapse"
    data-target="#collapse_9"
    aria-expanded="false"
    className="anchor"
  >
    <h6 className="title"><span>Catogrory</span> <i className="icon-control fa fa-chevron-down" /></h6>
 
  </a>
</header>

<div className="filter-content collapse show" id="collapse_9" >
  <div className="card-body">
    <form className="pb-3">
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Search" />
        <div className="input-group-append">
          <button className="btn btn-light" type="button">
            <i className="fa fa-search" />
          </button>
        </div>
      </div>
    </form>
    <ul align='left' className="list-menu">
      <li>
        <a href>Dogs</a>
      </li>
      <li>
        <a href>Cats </a>
      </li>
      <li>
        <a href>Small Animals</a>
      </li>
      <li>
        <a href>Grooming</a>
      </li>
     
    </ul>
  </div>{" "}
  {/* card-body.// */}
</div>
</article>{" "}
<article className="filter-group">
        
        <header className="card-header" style={{backgroundColor:'transparent'}}>
          <a
            href
            data-toggle="collapse"
            data-target="#collapse_1"
            aria-expanded="false"
            className="anchor"
          >
            <h6 className="title"><span>Product type</span> <i className="icon-control fa fa-chevron-down" /></h6>
         
          </a>
        </header>
        <div className="filter-content collapse show" id="collapse_1" >
          <div className="card-body">
            <form className="pb-3">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search" />
                <div className="input-group-append">
                  <button className="btn btn-light" type="button">
                    <i className="fa fa-search" />
                  </button>
                </div>
              </div>
            </form>
          
      {/* filter-group  .// */}
      <article className="filter-group">
        <header className="card-header" style={{backgroundColor:'transparent'}}>
          <a
            href
            data-toggle="collapse"
            data-target="#collapse_2"
            aria-expanded="false"
            className="anchor"
          >
        
            <h6 className="title"><span>Brands</span> <i className="icon-control fa fa-chevron-down" /></h6>
            
          </a>
        </header>
        <div className="filter-content collapse show" id="collapse_2" style={{}}>
          <div className="card-body">
            <label className="custom-control custom-checkbox">
              <input
                type="checkbox"
                defaultChecked=""
                className="custom-control-input"
              />
              <div className="custom-control-label">
              Pedigree
                <b className="badge badge-pill badge-light float-right">120</b>
              </div>
            </label>
            <label className="custom-control custom-checkbox">
              <input
                type="checkbox"
                defaultChecked=""
                className="custom-control-input"
              />
              <div className="custom-control-label">
               Royal Canin
                <b className="badge badge-pill badge-light float-right">15</b>
              </div>
            </label>
            <label className="custom-control custom-checkbox">
              <input
                type="checkbox"
                defaultChecked=""
                className="custom-control-input"
              />
              <div className="custom-control-label">
                Orijen
                <b className="badge badge-pill badge-light float-right">35</b>{" "}
              </div>
            </label>
            <label className="custom-control custom-checkbox">
              <input
                type="checkbox"
                defaultChecked=""
                className="custom-control-input"
              />
              <div className="custom-control-label">
               Wiskas
                <b className="badge badge-pill badge-light float-right">89</b>{" "}
              </div>
            </label>
            <label className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" />
              <div className="custom-control-label">
               Farmina
                <b className="badge badge-pill badge-light float-right">30</b>
              </div>
            </label>
          </div>{" "}
          {/* card-body.// */}
        </div>
      </article>{" "}
      {/* filter-group .// */}
      <article className="filter-group">
        <header className="card-header" style={{backgroundColor:'transparent'}}>
          <a
            href
            data-toggle="collapse"
            data-target="#collapse_3"
            aria-expanded="false"
            className="anchor"
          >
          
            <h6 className="title"><span>Price range </span> <i className="icon-control fa fa-chevron-down" /></h6>
           
          </a>
        </header>
        <div className="filter-content collapse show" id="collapse_3" style={{}}>
          <div className="card-body">
            <input
              type="range"
              className="custom-range"
              min={0}
              max={100}
              name=""
            />
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Min</label>
                <input className="form-control" placeholder="$0" type="number" />
              </div>
              <div className="form-group text-right col-md-6">
                <label>Max</label>
                <input
                  className="form-control"
                  placeholder="$1,0000"
                  type="number"
                />
              </div>
            </div>{" "}
            {/* form-row.// */}
            <button className="btn btn-block btn-primary">Apply</button>
          </div>
          {/* card-body.// */}
        </div>
      </article>{" "}
      {/* filter-group .// */}
      <article className="filter-group">
        <header className="card-header" style={{backgroundColor:'transparent'}}>
          <a
            href
            data-toggle="collapse"
            data-target="#collapse_4"
            aria-expanded="false"
            className="anchor"
          >
           
            <h6 className="title"><span>Breed Type </span> <i className="icon-control fa fa-chevron-down" /></h6>
          </a>
        </header>
        <div className="filter-content collapse show" id="collapse_4" style={{}}>
          <div className="card-body">
            <label className="checkbox-btn">
              <input type="checkbox" />
              <span className="btn btn-light"> Dog </span>
            </label>
            <label className="checkbox-btn">
              <input type="checkbox" />
              <span className="btn btn-light"> Cat </span>
            </label>
            <label className="checkbox-btn">
              <input type="checkbox" />
              <span className="btn btn-light"> Small Animals </span>
            </label>
            <label className="checkbox-btn">
              <input type="checkbox" />
              <span className="btn btn-light"> Other Animals </span>
            </label>
          </div>
          {/* card-body.// */}
        </div>
      </article>
      <article className="filter-group">
        <header className="card-header" style={{backgroundColor:'transparent'}} >
          <a
            href
            data-toggle="collapse"
            data-target="#collapse_5"
            aria-expanded="false"
            className="anchor"
          >
          
            <h6 className="title"><span>Non Veg /Veg </span> <i className="icon-control fa fa-chevron-down" /></h6>
           
          </a>
        </header>
        <div className="filter-content collapse show" id="collapse_5" style={{}}>
          <div className="card-body">
            <input
              type="range"
              className="custom-range"
              min={0}
              max={100}
              name=""
            />
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Min</label>
                <input className="form-control" placeholder="$0" type="number" />
              </div>
              <div className="form-group text-right col-md-6">
                <label>Max</label>
                <input
                  className="form-control"
                  placeholder="$1,0000"
                  type="number"
                />
              </div>
            </div>{" "}
            {/* form-row.// */}
            <button className="btn btn-block btn-primary">Apply</button>
          </div>
          {/* card-body.// */}
        </div>
      </article>{" "}
      <article className="filter-group">
        <header className="card-header" style={{backgroundColor:'transparent'}}>
          <a
            href
            data-toggle="collapse"
            data-target="#collapse_6"
            aria-expanded="false"
            className="anchor"
          >
        
            <h6 className="title"><span> Accessories</span> <i className="icon-control fa fa-chevron-down" /></h6>
            
          </a>
        </header>
        <div className="filter-content collapse show" id="collapse_6" style={{}}>
          <div className="card-body">
            <label className="custom-control custom-checkbox">
              <input
                type="checkbox"
                defaultChecked=""
                className="custom-control-input"
              />
              <div className="custom-control-label">
               FRONT RANGE HARNESS 
                <b className="badge badge-pill badge-light float-right">120</b>
              </div>
            </label>
            <label className="custom-control custom-checkbox">
              <input
                type="checkbox"
                defaultChecked=""
                className="custom-control-input"
              />
              <div className="custom-control-label">
               BOTTOM PADDED HARNESS 
                <b className="badge badge-pill badge-light float-right">15</b>
              </div>
            </label>
            <label className="custom-control custom-checkbox">
              <input
                type="checkbox"
                defaultChecked=""
                className="custom-control-input"
              />
              <div className="custom-control-label">
              WALKING STICK
                <b className="badge badge-pill badge-light float-right">35</b>{" "}
              </div>
            </label>
            <label className="custom-control custom-checkbox">
              <input
                type="checkbox"
                defaultChecked=""
                className="custom-control-input"
              />
              <div className="custom-control-label">
           SCISSOR CLAW 
                <b className="badge badge-pill badge-light float-right">89</b>{" "}
              </div>
            </label>
            <label className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" />
              <div className="custom-control-label">
              LINT ROLLER 
                <b className="badge badge-pill badge-light float-right">30</b>
              </div>
            </label>
          </div>{" "}
          {/* card-body.// */}
        </div>
      </article>{" "}
      <article className="filter-group">
        <header className="card-header" style={{backgroundColor:'transparent'}}>
          <a
            href
            data-toggle="collapse"
            data-target="#collapse_7"
            aria-expanded="false"
            className="anchor"
          >
        
            <h6 className="title"><span>Special Diet</span> <i className="icon-control fa fa-chevron-down" /></h6>
            
          </a>
        </header>
        <div className="filter-content collapse show" id="collapse_7" style={{}}>
          <div className="card-body">
            <label className="custom-control custom-checkbox">
              <input
                type="checkbox"
                defaultChecked=""
                className="custom-control-input"
              />
              <div className="custom-control-label">
              TWISTIX CANISTER VANILLA
                <b className="badge badge-pill badge-light float-right">120</b>
              </div>
            </label>
            <label className="custom-control custom-checkbox">
              <input
                type="checkbox"
                defaultChecked=""
                className="custom-control-input"
              />
              <div className="custom-control-label">
              TWISTIX PEANUT
                <b className="badge badge-pill badge-light float-right">15</b>
              </div>
            </label>
            <label className="custom-control custom-checkbox">
              <input
                type="checkbox"
                defaultChecked=""
                className="custom-control-input"
              />
              <div className="custom-control-label">
              TWISTIX PUMPKIN 
                <b className="badge badge-pill badge-light float-right">35</b>{" "}
              </div>
            </label>
            <label className="custom-control custom-checkbox">
              <input
                type="checkbox"
                defaultChecked=""
                className="custom-control-input"
              />
              <div className="custom-control-label">
              BRAIDED MUNCHY 
                <b className="badge badge-pill badge-light float-right">89</b>{" "}
              </div>
            </label>
            <label className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" />
              <div className="custom-control-label">
               PET BONE 
    
                <b className="badge badge-pill badge-light float-right">30</b>
              </div>
            </label>
          </div>{" "}
          {/* card-body.// */}
        </div>
      </article>{" "}
      <article className="filter-group">
        <header className="card-header" style={{backgroundColor:'transparent'}}>
          <a
            href
            data-toggle="collapse"
            data-target="#collapse_8"
            aria-expanded="false"
            className="anchor"
          >
        
            <h6 className="title"><span>Health Condition</span> <i className="icon-control fa fa-chevron-down" /></h6>
            
          </a>
        </header>
        <div className="filter-content collapse show" id="collapse_8" style={{}}>
          <div className="card-body">
            <label className="custom-control custom-checkbox">
              <input
                type="checkbox"
                defaultChecked=""
                className="custom-control-input"
              />
              <div className="custom-control-label">
              RIDD
                <b className="badge badge-pill badge-light float-right">120</b>
              </div>
            </label>
            <label className="custom-control custom-checkbox">
              <input
                type="checkbox"
                defaultChecked=""
                className="custom-control-input"
              />
              <div className="custom-control-label">
              POMISOL EAR DROP
                <b className="badge badge-pill badge-light float-right">15</b>
              </div>
            </label>
            <label className="custom-control custom-checkbox">
              <input
                type="checkbox"
                defaultChecked=""
                className="custom-control-input"
              />
              <div className="custom-control-label">
              LIXEN 600MG TAB
                <b className="badge badge-pill badge-light float-right">35</b>{" "}
              </div>
            </label>
            <label className="custom-control custom-checkbox">
              <input
                type="checkbox"
                defaultChecked=""
                className="custom-control-input"
              />
              <div className="custom-control-label">
              LIXEN 300MG TAB
                <b className="badge badge-pill badge-light float-right">89</b>{" "}
              </div>
            </label>
            <label className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" />
              <div className="custom-control-label">
              KIWOF PLUS FOR DOG
                <b className="badge badge-pill badge-light float-right">30</b>
              </div>
            </label>
          </div>{" "}
          {/* card-body.// */}
        </div>
      </article>{" "}
             
        
          </div>{" "}
          {/* card-body.// */}
        </div>
      </article>{" "}
   
  </div>{" "}
  {/* card-body.// */}
</div>
</article>{" "}


            </div>
            <div className='col-md-9'>
          <div className='container' id='productcontainer' >
          <div align='center' id='procardlw'  className='row'>
            {products &&
            products.length > 0 &&
            products.map((ele) => (
              
                <div  className='col-md-3'  id='kil'   >
                <div  id="Productcard30" className='card'  onClick={()=>{
                      navigate(`/ProductPurchase/${ele._id}`)
                    }} >
                    <div className='Productimg' style={{borderRadius:'20px'}} align="center"><img src={src(ele.uploadImages)} alt=""  /></div>
                    
                    <div  style={{paddingTop:'20px'}} align="center" >
                        <b >{ele.name.slice(0,10)+'....'}</b>
                        <h6 style={{paddingTop:'10px',fontSize:'15px'}}><s>₹ {ele.maxPrice} </s>  - <b>  ₹{ele.price}</b> </h6>
                    </div>
                    <div style={{paddingTop:'10px',borderRadius:'20px'}} align="center">
                    <button  onClick={handleProductPurchase} className='button30'><img style={{backgroundColor:'#FFFFFF',margin:'5px',}} src={ele.uploadImages} alt="" /><span style={{backgroundColor:'#FFFFFF'}}>Add to cart</span></button></div>
                    <div style={{borderRadius:'20px',paddingTop:'10px',paddingBottom:'5px'}} align="center">
                    <button   className='button30' style={{backgroundColor:'#F2C879',color:'black'}}><span >Buy Now</span></button></div>
                    </div>
                    
                </div>
               ))}

               
            </div>
          </div>
        </div>


        </div>

    </div>
    </div>
    <Footer />
    
    <MediaFooter />
  </>
  )
}

export default ProductPage
