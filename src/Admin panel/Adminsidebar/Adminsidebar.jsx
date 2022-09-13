import { AddShoppingCart, DiningOutlined, Home, LogoutOutlined, Sell } from "@mui/icons-material"
import { Link, useNavigate } from "react-router-dom"
import "./adminsidebar.css"

function Adminsidebar() {


    const id = localStorage.getItem("user");
    const navigate = useNavigate();
    const logout = ()=>{
      localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/admin/login");
    }

  return (
    <div className="adminsidebar">
      <ul className="sidebarul">
        <li className="sidebarlist">
       
          <Link className="link" to={`/admin/${id}`}><Home/></Link>
          
        </li>
        <li className="sidebarlist"> <Link className="link" to={`/admin/products/${id}`}><DiningOutlined/></Link></li>
        <li className="sidebarlist"><Link className='link' to={`/admin/menuupdate/${id}`}><AddShoppingCart/></Link></li>
        <li className="sidebarlist"><Link className='link' to={`/admin/orders/${id}`}><Sell/></Link></li>
        <li onClick={()=>{logout()}} className="sidebarlist"><LogoutOutlined /></li>
      </ul>
    </div>
  )
}

export default Adminsidebar