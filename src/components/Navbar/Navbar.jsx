import React from 'react'
import user from '../../assets/user.png'
import shopingcart from '../../assets/shopingcart.png'
import logo from '../../assets/logo.png'
import { useNavigate }  from 'react-router-dom';
import './Navbar.css'
const navbar={
 
}


function Navbar() {
  const navigate = useNavigate();

  function handleClick(event) {

    navigate('/Signin');
  }

 

 
  function handleLogin(event){
    navigate('/Login');
  }
  return (
    <div className='desktopnavbar' style={{margin:'10px'}}>
    
      <nav id='navbar' className="navbar navbar-expand-lg navbar-light"  >
        <a    className="navbar-brand" ><img src={logo} onClick={()=>{
          navigate("/")
        }} alt="" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul id='liskmit'  className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a   className="nav-link dropdown-toggle" data-toggle="collapse" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dogs
              </a>
              <div className="dropdown-menu"  aria-labelledby="navbarDropdown">
                <a className="dropdown-item" >Food </a>
                <a className="dropdown-item" >Treats</a>
                <a className="dropdown-item" >Toys </a>
                <a className="dropdown-item" >Treats</a>
                <a className="dropdown-item" >Apparels</a>
                <a className="dropdown-item" >Accessories</a>
                <a className="dropdown-item" >Medicine </a>
                <a className="dropdown-item" >Bed And Mats</a>
                <a className="dropdown-item" >Gromming </a>
                <a className="dropdown-item" >Health and Hygiene</a>
              
                
              </div>
            </li>
            <li  className="nav-item dropdown">
              <a  className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Cats
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" >Food </a>
                <a className="dropdown-item" >Treats</a>
                <a className="dropdown-item" >Toys </a>
                <a className="dropdown-item" >Treats</a>
                <a className="dropdown-item" >Apparels</a>
                <a className="dropdown-item" >Accessories</a>
                <a className="dropdown-item" >Medicine </a>
                <a className="dropdown-item" >Bed And Mats</a>
                <a className="dropdown-item" >Gromming </a>
                <a className="dropdown-item" >Health and Hygiene</a>
               
              
              </div>
            </li>
            <li  className="nav-item dropdown">
              <a  className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Other Animals
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" >Food </a>
                <a className="dropdown-item" >Treats</a>
                <a className="dropdown-item" >Toys </a>
                
                <a className="dropdown-item" >Apparels</a>
                <a className="dropdown-item" >Accessories</a>
                <a className="dropdown-item" >Medicine </a>
                <a className="dropdown-item" >Bed And Mats</a>
                <a className="dropdown-item" >Gromming </a>
                <a className="dropdown-item" >Health and Hygiene</a>
               
              
              </div>
            </li>
            <li   className="nav-item">
              <a  id="navlinka" className="nav-link active" href="/AboutUS">About US</a>
            </li>
            <li   className="nav-item">
              <a  id="navlinka" className="nav-link active" href="">Our Services</a>
            </li>
            <li   className="nav-item">
              <a  id="navlinka" className="nav-link active" href="/ContactUS">Contact US</a>
            </li>
           
       
           
            
          </ul>
          <form id='serachbar' className="form-inline my-2 my-lg-0">
            <input style={{width:'240px',padding:'20px',backgroundColor:'white',fontSize:'15px'}} className="form-control mr-sm-2" type="search" placeholder="Search your query here" aria-label="Search" /><span><button type="submit" style={{backgroundColor:'transparent',borderColor:'transparent'}}><i class="fa fa-search" aria-hidden="true"></i></button></span>

          </form>
          <ul  className='liskmin'>
          <li   className="nav-item">
              <a  id="navlinka" className="nav-link active" > <img onClick={()=>{
                navigate("/cart")
              }} src={shopingcart} style={{width:"20px"}} alt="" /></a>
            </li>
            <li   className="nav-item">
              <a  id="navlinka" className="nav-link active" href="#"> <i className="fa fa-heart"></i></a>
            </li>
            <li  className="nav-item dropdown">
              <a  className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src={user} alt="" />
              </a>
              <div className="dropdown-menu" style={{marginLeft:'-80px'}} aria-labelledby="navbarDropdown">
              <a className="dropdown-item" > <button style={{backgroundColor:'transparent',borderColor:'transparent',fontSize:'15px',fontWeight:'650'}} onClick={handleClick}> Sign Up </button> </a>
                <a className="dropdown-item" > <button style={{backgroundColor:'transparent',borderColor:'transparent',fontSize:'15px',fontWeight:'650'}}  onClick={handleLogin} >Login</button> </a>

              </div>
            </li>
           
          
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
