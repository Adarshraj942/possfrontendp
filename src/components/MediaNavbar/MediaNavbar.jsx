import React ,{useState} from 'react'

import './MediaNavbar.css'

import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import shopingcart from '../../assets/shopingcart.png'


function MediaNavbar() {
const  [isMobile,setIsMobile] = useState(false);


  return (
    
    <div className='MediaNavbar'>



  <div style={{display:'flex',justifyContent:'space-between',width:'100%',padding:'5px'}}>
    <div style={{justifyContent:'left',paddingLeft:'7px'}}><img src={logo} alt="" /></div>
    <div align='center' style={{justifyContent:'center'}}>
    <form  className='search-container' >
     
      
      <p> <input  type="text" style={{width:'70%'}} placeholder="Search.." name="search" /> <span ><button><i className='fa fa-search'></i></button></span> </p>
      
    </form>
    </div>
    <div style={{justifyContent:'right'}}>
    <button className='mobile-menu-icon' 
  onClick={()=>setIsMobile(!isMobile)}
  >
    {
      isMobile ? (
        <i className='fas fa-times'></i>
      ):(
        <i className='fas fa-bars'></i>
      )
    }
  </button>
  <li className={isMobile?'nav-links-mobile':'nav-links'}  onClick={()=> setIsMobile(false)}>
        
       <ul  style={{display:'flex',textDecoration:'none',padding:'5px'}}>
        <li style={{listStyle:'none'}}><Link to="/login" className='home'><img src={shopingcart} style={{width:"20px"}} alt="" />
          </Link>
        </li>
   
        <li style={{ listStyle:'none'}}><Link to="/login" className='home'><i className="fa fa-heart"></i>
          </Link>
          </li>
    
       </ul>
        <li style={{margin:'0'}}>
        <button
    className="dropdown-toggle"
    type="button"
    id="menu1"
    data-toggle="dropdown"
  >
         Dogs
    <span className="caret" />
  </button>
  <ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
    <li role="presentation" id='listmo' >
      <a role="menuitem" tabIndex={-1} href="/">
      Food
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} href="/">
      Treats
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} href="/">
      Toys
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} href="/">
      Apparels
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} href="/">
      Accessories
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} href="/">
      Medicine 
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} href="/">
      Bed And Mats 
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} href="/">
      Gromming 
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} href="/">
      Health and Hygiene 
      </a>
    </li>


 
  </ul>
</li>
        
<li>
        <button
    className="dropdown-toggle"
    type="button"
    id="menu1"
    data-toggle="dropdown"
  >
         Cats
    <span className="caret" />
  </button>
  <ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} href='/'>
      Food
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} href='/'>
      Treats
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} href='/'>
      Toys
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} href='/'>
      Apparels
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} href='/'>
      Accessories
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} href='/'>
      Medicine 
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} href='/'>
      Bed And Mats 
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} href='/'>
      Gromming 
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} href='/'>
      Health and Hygiene 
      </a>
    </li>


 
  </ul>
</li>

<li>
        <button
    className="dropdown-toggle"
    type="button"
    id="menu1"
    data-toggle="dropdown"
    style={{margin:'0px 0px 0px 0px',textAlign:'center'}}

  >
         Other
         Animals
    <span className="caret" />
  </button>
  <ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
    <li role="presentation" id='listmo' >
      <a role="menuitem" tabIndex={-1} href='/'>
      Food
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} href='/'>
      Treats
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} href='/'>
      Toys
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} href='/'>
      Apparels
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} href='/'>
      Accessories
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} href='/'>
      Medicine 
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} href='/'>
      Bed And Mats 
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} href='/'>
      Gromming 
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} href='/'>
      Health and Hygiene 
      </a>
    </li>


 
  </ul>
</li>
     
        <li style={{ margin: '20px 10px'}}><Link to="/" className='home'>Contact
          </Link></li>
       
         
        <li style={{ margin: '20px 10px'}}>
        <Link to="/" className='home'>About </Link>
        </li>
        <li style={{ margin: '20px 10px'}}><Link to="/signin" className='home'>SignUp
          </Link></li>
          <li style={{ margin: '20px 10px'}}><Link to="/login" className='home'>Login
          </Link></li>
         
          
         
  </li>
    </div>
  </div>

 


  

   

    </div>
        
  )
}

export default MediaNavbar