import React from 'react'
import Account from './Account'
import './AccountSidebar.css'

const AccountSidebar = () => {
  return (
   
<div> 
<div  id='siplay'>
   
   <a href="/Account"> Manage Account</a>
   <a href="/AddressBook">Address Book</a>
   <a href="/">Wishlist</a>
   <a href="/">Store Order</a>
   <a href="/ChangePassword">Change Password</a>
  
 </div>
</div>
 
  )
}

export default AccountSidebar
