import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import './AllProducts.css'
import { Footer } from '../../components/Footer/Footer'


function AllProducts() {
  return (
    <>
     <Navbar />
        <div className='container-fluid'>
       
        <div className='row'>
            <div className='col-2'>
                <Sidebar />
            </div>
            <div className='col-10'>
                <div className='container' id='container'>
                    
                    <h4 className='productlabel'>Add Product</h4>
                    <hr />
                    <form action="">
                        <div>
                            <div className='formlabel'> <label htmlFor="">Title</label> </div>
                            <div><input className='inputbox' type="text" /></div>
                        </div>
                        <div>
                            <div className='formlabel'> <label htmlFor="">Price</label> </div>
                            <div><input className='inputbox' type="text" /></div>
                        </div>
                        <div>
                            <div className='formlabel'> <label htmlFor="">Discount Price</label> </div>
                            <div><input className='inputbox' type="text" /></div>
                        </div>
                        <div>
                        <div className='formlabel'> <label htmlFor="">Add Image</label> </div>
                        <div><input type="file" /></div>
                            
                        </div>
                        <div>
                            <div className='formlabel'> <label htmlFor="">Catogory</label> </div>
                            <div>
                                <select  className='inputbox' name="" id="">
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </div>
                        </div>

                      

                        <div className='Addressbutton'>
                        <button style={{width:'150px'}} > Submit </button>
                        </div>
                        
                       
                    </form>
                </div>
            </div>
        </div>

    </div>
    <br />
    <br />
    <Footer />
    </>

  )
}

export default AllProducts