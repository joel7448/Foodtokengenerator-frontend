import { AddShoppingCart, Delete, DiningOutlined, Edit, Home, LogoutOutlined, RateReview, Sell, Star } from '@mui/icons-material'
import { IconButton, Rating, Tooltip } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { config } from '../config/Config'
import SearchAppBar from './Adminnavbar'
import "./productpage.css"


function Productpage() {
const navigate = useNavigate();
const [menu,setmenu] = useState([]);
  const Menu = async()=>{
    const products = await axios.get(`${config().api}/server/products/menu`,{
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      }
    });
    setmenu(products.data);
    
   
}
const handledelete = async(id)=>{
 let a = window.prompt("Type 'delete' to delete product");
 if(a=="delete"){
  await axios.delete(`${config().api}/server/products/menu/${id}`,{
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    }
  })
  toast.success("successfully deleted");
 }
 else{
  toast.error("Deletion unsuccessfull")
 }
}

const logout = ()=>{
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  navigate("/admin/login");
}

useEffect(()=>{
  Menu();
  console.log(menu)
},[])
const id = localStorage.getItem("user");

const handleedit=(product_id)=>{
navigate( `/admin/edit/${product_id}`);
}

  return (<>
  <SearchAppBar/>
  <div className="productpage-wrapper">
  <div className="adminsidebar">
      <ul className="sidebarul">
        <li className="sidebarlist">
       
          <Link className="link" to={`/admin/${id}`}><Home/></Link>
          
        </li>
        
        <li className="sidebarlist"> <Link className="link" to={`/admin/products/${id}`}><DiningOutlined/></Link></li>
        <li className="sidebarlist"><Link className='link' to={`/admin/menuupdate/${id}`}><AddShoppingCart/></Link></li>
        <li className="sidebarlist"><Link className='link' to={`/admin/orders/${id}`}><Sell/></Link></li>
        <li onClick={()=>{logout()}} className="sidebarlist"><LogoutOutlined/></li>
      </ul>
    </div>
    <div className='product-container'>

{menu.map((x)=>{
  return(<div className='product'>
  <img className='adminproductimages' src={x.image}/>
  <div><h1>{x.Productname}</h1>
  <p>{x.description} </p>
  <p className='ratingsadmin'><Star/><span> {x.ratings} (216)</span></p>
  <div className="crudsection">
   <p>$ {x.price}</p><div className='editanddelete'>
  <Tooltip title="Delete">
   <IconButton>
  <Delete onClick={()=>{handledelete(x._id)}}/>
  </IconButton>
  </Tooltip>
     
  
  <Tooltip title="Edit">
   <IconButton>
  <  Edit onClick={()=>{handleedit(x._id)}} />
  </IconButton>
  </Tooltip></div></div>
  
  </div>
  
 </div>)
})}
<ToastContainer/>







    </div>
    </div>
    </>
  )
}

export default Productpage