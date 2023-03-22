import React from 'react'
import home from '../../assets/home.png'
import bottomcart from '../../assets/cart.png'
import account from '../../assets/account.png'
import services from '../../assets/services.png'
import './MobileFoot.css'

const MobileFoot = () => {
  return (
    <div id="mobilefott">
            
            <nav className="mobile-nav">
        <a href="#" className="bloc-icon">
          <div align="center"><img src={home} alt="" />
          <div align="center"><button className="btnFooter" >Home</button> </div></div>
        </a>
        <a href="#" className="bloc-icon">
         <div align="center"> <img src={bottomcart} alt="" />
         <div align="center"><button className="btnFooter">Wishlist</button> </div></div>
        </a>
        <a href="#" className="bloc-icon">
         <div align="center"><img src={account} alt="" />
         <div align="center"><button className="btnFooter">Sourcing</button></div></div> 
        </a>
       
        <a href="#" className="bloc-icon">
        <div align="center"><img src={services}alt="" />
        <div align="center"> <button className="btnFooter" >My Account</button></div></div>
        </a>
      </nav>
    </div>
  )
}

export default MobileFoot
