import React, { useState , useEffect } from 'react'
import Topbar from '../topbar/Topbar'
import axios from "axios"
import { ShoppingBag,Star,Add } from "@mui/icons-material"
import "./pricecard.css"
import Secondarynavbar from '../topbar/secondary navbar/Secondarynavbar'
import Mobilenavbar from '../topbar/mobile-navbar/Mobilenavbar'
import  { config } from "../../config/Config"

function Pricecard() {
        const [menu,setmenu] = useState([]);

        const Menu = async()=>{
                const products = await axios.get(`${config().api}/server/products/menu`,{
                  headers: {
                    Authorization: `${localStorage.getItem("token")}`,
                  }
                });
                setmenu(products.data);
        }
                
const id = localStorage.getItem("user");
              const addtocart = async(products)=>{
                try{
                  products.quantity = 1;
                  products.email = localStorage.getItem("email");
           const cart = await axios.post(`${config().api}/server/addtocart/cart`,products,{
            headers: {
              Authorization: `${localStorage.getItem("token")}`,
            },
           });
                }
                catch(error){
                  console.log(error);
                  
                }

                
              }
              
useEffect(()=>{
        Menu();
        
        },[])
      

  return (
    <>
    <Mobilenavbar/>
    <Secondarynavbar/>

    <div className='pricecardWrapper'>
        
        
        { menu.map((x)=>{return(<div className="pricecard">
<img className='fooditem' src={x.image}/>
<div className="titleanddesc">
<h2 className="titlename">{x.Productname}</h2>
<div className='rating-wrapper'>
<Star className='ratings'/>

<p className='ratingnumber' >{x.ratings}</p> <p>(216)</p></div>
<p className='desc'>{x.description} 
   
     </p>
</div>
<hr className='divider'/>
<div className='pricetag'><p>$ {x.price}</p><button className='add' onClick={()=>{addtocart(x)}}><Add/></button></div>
        </div>)})

  }
      
     
    </div>
    </>
  )
}

export default Pricecard