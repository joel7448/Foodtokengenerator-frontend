import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { config } from '../../config/Config';
import "./order_token.css"
function Order_token() {

const email = localStorage.getItem('email');    
const [token,gettoken]=useState([]);
const ordertoken = async()=>{
    try{
const order = await axios.get(`${config().api}/sever/nodemailer/token/${email}`,{
    headers: {
        Authorization: `${localStorage.getItem("token")}`,
      }
});
console.log(order.data)
gettoken(order.data);

    }
    catch(err){
        console.log(err);
    }
}


              
useEffect(()=>{
    ordertoken();
    
    },[])


  return (<>
  <h1 className='tokenheader'>Order Token</h1>
  <div className = "ordertoken">
 
  {token.map((x)=>{
    return(<div className={`orders ${x.status}`}><p>Order token: {x.order_token}</p>
    <p>Order Status: {x.status}</p>
    <p>Total Amount : {x.Amount}</p></div>)
  })}
    
    </div>
    </>
  )
}

export default Order_token