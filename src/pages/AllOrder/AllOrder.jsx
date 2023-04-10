import React, { useEffect, useState } from 'react'
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar'
import Navbar from '../../components/Navbar/Navbar'
import DataTable from 'react-data-table-component';
import MediaFooter from '../../components/Footer/MediaFooter'

import Sidebar from '../Sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'
import { getOrder } from '../../Api/OrderRequest';
function AllOrder() {
    const[users,setUsers]=useState([]);
    const [search,setSearch]=useState("");
    const [filterUsers,setFilteredUsers]=useState([]);
      const userData=localStorage.getItem('userId')
    const navigate=useNavigate()
      useEffect(() => {
        async function fetchData() {
          // You can await here
          // alert()
          const beta={userId:userData}
          const {data}=await getOrder(beta)
          console.log(data); 
          setUsers(data)
          setFilteredUsers(data.orderlist)
          console.log(userData);
          console.log(data.orderlist);
          // ...
        }
        fetchData();
      }, []); // Or [] if effect doesn't need props or state
      useEffect(()=>{
        const result=users.filter((user)=>{
            return user.firstname.toLowerCase().match(search.toLowerCase());
            
        })
        setFilteredUsers(result)
      },[search]) 
    
     
      useEffect(() => {
      const userInfo = localStorage.getItem("userInfo");
       
        if (userInfo) {
       
          navigate("/AllOrder");
         
        } else {
          navigate("/login");
        }
      }, []);
      const coloumn=[
        {name:"Id",selector:(row)=>row._id,style: {
            color: "gray",
            }},
        {name:"Price",selector:(row)=>row.price,style: {
            color: "gray",
            }},
            {name:"Product",selector:(row)=>row.productId,style: {
                color: "gray",
                }},
                {name:"PaymentMod",selector:(row)=>row.paymentMod,style: {
                    color: "gray",
                    }},
        {name:"ACTION ",selector:(row)=>
        <div style={{display:"flex" }}>
      
          {<>
            <button className='button' style={{background:"blue",color:"white",marginLeft:"5px",padding:"10px"}}
            onClick={  ()=>{navigate(`/Productpurchase/${row.productId}`)}}
            >View </button>
          </>}
                  
                 
             </div>
           
            },
                  
      ]
  return (
    <>
    <div className='container-fluid' >
    <MediaNavbar />
    <Navbar />
    <div className='mediaview'>
        
    <div className='row' id='rowid'>
        <div className='col-2'  id='colid'>
            <Sidebar />
        </div>
        <div className='col-10' id='colid2'>
        <div className='container' id='container'>
            <div className='row' id='rowitem'>
                <h6> + Manage </h6> 
            </div>
        </div>
        <DataTable 
        
        columns={coloumn} 
      data={filterUsers} 
        pagination
        fixedHeader
        style={{color:"red"}}
        highlightOnHover
        subHeader
      
        subHeaderAlign="center"
        // data={data}
      />  
        </div>
    </div>
    </div>

</div>
<MediaFooter />
</>
  )
}

export default AllOrder
