import "./secondarynavbar.css"
import { useState } from "react";
import logo from "../../../../src/logo.png"
import { ShoppingBag } from "@mui/icons-material"
import {Link, useNavigate} from "react-router-dom"
import Mobilenavbar from "../mobile-navbar/Mobilenavbar";
function Secondarynavbar() {

    const [menu,setmenu] = useState(false);
    const [review,setreview] = useState(false);
    const[home,sethome]=useState(false);


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
const navigate = useNavigate()
const logout=()=>{
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("email");
  navigate("/login")
  
}

const id = localStorage.getItem('user');

  return (<>


    <div className="pricecardContainer">
     <ul className='pricecardTopbar'>
            <li onClick={()=>{handlehome()}} className={home ? "active" : "disable"}><Link className="link" to={`/home/${id}`}>Home</Link></li>
            <li onClick={()=>{handlemenu()}} className={menu ? "active" : "disable"}><Link className="link" to={`/menu/${id}`}>Menu</Link> </li>
            <li onClick={()=>{handlereview()}} className={review ? "active" : "disable"}><Link className="link" to={`/reviews`}>Reviews</Link></li>
           
        </ul>
        <div className="pricecarttopbarlogo">
          <img className="pricecardlogopic" src={logo}></img>
        </div>

        <ul className="pricecardtopbarRight">

<li className="shopping"><Link className="link" to="/cart"><span className="quantity">1</span><ShoppingBag/></Link></li>
<li ><span onClick={()=>{logout()}}>Logout</span></li>
        </ul>
        </div></>
  )
}

export default Secondarynavbar