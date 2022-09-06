import { HomeOutlined, LogoutOutlined, RateReviewOutlined, RestaurantMenu, ShoppingBasketOutlined } from '@mui/icons-material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./mobilenavbar.css"
function Mobilenavbar() {
const id = localStorage.getItem("user");
const navigate = useNavigate();
const logout = ()=>{
localStorage.removeItem("user");
localStorage.removeItem("token");
localStorage.removeItem("email");
navigate("/login");

}

  return (
    <div className='mobile'>
        <ul>
            <li><Link className='link' to={`/home/${id}`}><HomeOutlined/></Link></li>
            <li><Link className='link' to={`/menu/${id}`}> <RateReviewOutlined/></Link></li>
            <li><Link className='link' to={`/cart`}><ShoppingBasketOutlined/></Link> </li>
            <li onClick={()=>{logout()}}><LogoutOutlined/></li>
        </ul>

    </div>
  )
}

export default Mobilenavbar