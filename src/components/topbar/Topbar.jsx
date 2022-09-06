
import "./topbar.css"
import pizza1 from '../../pizza1.png'
import pizza2 from '../../pizza2.png'
import pizza3 from '../../pizza3.png'
import logo from "../../logo.png"
import { ShoppingBag,Reviews, MenuBook,Menu } from "@mui/icons-material"
import { useState } from "react"
import { Link } from "react-router-dom"

function Topbar() {

    const [menu,setmenu] = useState(false);
    const [review,setreview] = useState(false);
    const[home,sethome]=useState(false);
    const [hamburger,sethamburger]=useState(false);
const handlehamburger=()=>{
  const burger = document.querySelector(".topbarLeft");
if(hamburger){
  sethamburger(false);
  burger.setAttribute("style", "display:flex");
  
}
else{
 
  sethamburger(true);
burger.setAttribute("style", "display:none");
}
}
let handlehome = ()=>{
  setmenu(false);
  setreview(false);
  sethome(true);
}
let handlemenu = ()=>{
  setmenu(true);
  setreview(false);
  sethome(false);
}
let handlereview = ()=>{
  setmenu(false);
  setreview(true);
  sethome(false);

}
const id = localStorage.getItem('user');
  return (
   <div className="topbar-wrapper">
    <div className='topbar'>
   
    <div className="hamburgericon"> < Menu onClick={()=>{handlehamburger()}}   /></div>
    
        <ul className='topbarLeft'>
    
            <li onClick={()=>{handlehome()}} className={home ? "active" : "disable"}>Home</li>
            <li onClick={()=>{handlemenu()}} className={menu ? "active" : "disable"}><Link className="link" to={`/menu/${id}`}>Menu</Link></li>
           <li onClick={()=>{handlereview()}} className={review ? "active" : "disable"}> <Link to="/reviews" className="link">Reviews</Link></li>
           
        </ul>
        <div className="logo">
          <img className="logopic" src={logo}></img>
        </div>
        <ul className="topbarRight">
<li>Login</li>
<li className="shopping"><span className="quantity">1</span><ShoppingBag/></li>
        </ul>
      

        

    </div>
    

    <div className="topbarCenter">
    <p className="bestdeals">Best deals</p>
<h1>Fresh Mexican Food In Your Town</h1>
<p>A popular mexican restaurant in your nearby places. We prepares and serves quality food and drinks to our customers </p>
<div className="orderbutton-wrapper"><Link to={`/menu/${id}`} className="ordernow link "><p>Order now</p></Link>
<Link to="/reviews" className="reviews link"><Reviews/>Reviews</Link></div>
</div>

    
    <img className="pizza1" src={pizza1} alt="" />
    <img className="pizza2" src={pizza2} alt="" />
    <img className="pizza3" src={pizza3} alt="" />

</div>
   
  )
}

export default Topbar