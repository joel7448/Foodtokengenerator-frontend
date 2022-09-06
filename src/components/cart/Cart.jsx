import "./cart.css"
import Secondarynavbar from "../topbar/secondary navbar/Secondarynavbar"
import { Tooltip, IconButton} from "@mui/material"
import { Delete} from '@mui/icons-material'
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import Mobilenavbar from "../topbar/mobile-navbar/Mobilenavbar"
import { config } from "../../config/Config"
import { toast, ToastContainer } from "react-toastify"
import { Link } from "react-router-dom"
function Cart() {
const [items,setitems] = useState([]);
const [total,settotal] = useState(0);
const [amount,setamount]=useState();
const id = localStorage.getItem("email");
const user = localStorage.getItem("user");
const cartitems = async()=>{

  let item = await axios.get(`${config().api}/server/addtocart/cart/${id}`,
    {
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  });
  
  setitems(item.data.cart);
  const amt= Math.floor(item.data.pipeline[0].Amount);
setamount(amt);  


 
  


}



useEffect(()=>{
  cartitems();
},[])


const handledelete =async(products)=>{
  try{
    
  let item = await axios.delete(`${config().api}/server/addtocart/cart/${products._id}`,{
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    }
  });
  
  console.log(products);
  }
  catch(err){
    console.log(err);
  }

}

const addquantity = async(id)=>{
try{

  
let increase = await axios.put(`${config().api}/server/addtocart/cart/increase/${id}`,{
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    }
  });
  
  
}
catch(err){
  console.log(err);
}
}

const decreasequantity = async(id)=>{
  try{
  
 
  let decrease = await axios.put(`${config().api}/server/addtocart/cart/decrease/${id}`,{
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    }
  });
 
  }
  catch(err){
    console.log(err);
  }
}

const buy = async(carts,amount)=>{

  try{

    if(carts.length!=0){
carts[0].amt = amount

console.log(carts[0]);
const email = carts[0].customer;

console.log(email);
await axios.post(`${config().api}/sever/nodemailer/token/${email}`,carts[0]);

toast.success("Order token has been mailed");
  }
}
  catch(err){
    console.log(err);
  }
}

  return (<>
  <Secondarynavbar/>
  <Mobilenavbar/>
    <div className='cart-wrapper'>
        <div className='cart-header'>
            
<h1>Shopping Cart</h1>
<hr/>
            </div>
            <div className="cart-category">
                <h4>Product Details</h4>
                <div className="sub-category">
                <h4>Price</h4>
                <h4>Quantity</h4>
                <h4>Sub Total</h4>
                </div>
            </div>
            <hr/>
        <div className="cart">
          {items.map((item)=>{
            return(<>
            <div className="cart-items">
            <div className="image-wrapper">
                <img className="image" src={item.image} alt=""/>
            <div className="image-desc">
                <p style={{"width":"200px"}}>{item.Productname}</p>
                <p className="subcategory">{item.category}</p>

             <Tooltip title="Remove">
  <IconButton>
    <Delete onClick={()=>{handledelete(item)}} />
  </IconButton>
</Tooltip>
                </div>
            </div>
            <div className="cart-itemsdescription">
                <p>$ {item.price}</p>
                <div className="itemquantity"><button onClick={()=>{addquantity(item._id)}}>+</button><p>{item.quantity}</p>
                <button onClick={()=>{decreasequantity(item._id)}}>-</button></div>
                <p>$ {item.total}</p>
            </div>
            
            </div>
            <hr/>
            </>)


          })}
            
           
        </div>
    </div>
   <h3 className="totalamount"><Link className="ordertokenbtn link" to={`/ordertoken/${user}`}>Your Ordertoken</Link>Total : $ {amount}</h3>
    <button className="buynow" onClick={()=>buy(items,amount)}>Check Out</button>
    <ToastContainer/>
    </>
  )
}

export default Cart