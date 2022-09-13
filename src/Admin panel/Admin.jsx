import "./admin.css"
import Adminnavbar from "./Adminnavbar"
import {AddShoppingCart, DiningOutlined, Home, LogoutOutlined, Sell, ShoppingCart} from "@mui/icons-material"
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import { IconButton } from "@mui/material";
import Homecards from "./Homecards";
import { Link, useNavigate,  } from "react-router-dom";




function Admin() {

    const data = [
        {
          name: 'Jan',
          uv: 4000,
          
          amt: 2400,
        },
        {
          name: 'Feb',
          uv: 3000,
          
          amt: 2210,
        },
        {
          name: 'Mar',
          uv: 2000,
          
          amt: 2290,
        },
        {
          name: 'Apr',
          uv: 2780,
          
          amt: 2000,
        },
        {
          name: 'May',
          uv: 1890,
          
          amt: 2181,
        },
        {
          name: 'Jun',
          uv: 2390,
          
          amt: 2500,
        },
        {
          name: 'July',
          uv: 3490,
         
          amt: 2100,
        },
        {
          name: 'Aug',
          uv: 3000,
         
          amt: 2100,
        },
        {
          name: 'Sep',
          uv: 5000,
          
          amt: 2100,
        },
        {
          name: 'Oct',
          uv: 5500,
         
          amt: 2100,
        },
        {
          name: 'Nov',
          uv: 3300,
          
          amt: 2100,
        },
        {
          name: 'Dec',
          uv: 4000,
          
          amt: 2100,
        },
      ];
      

const id = localStorage.getItem("user");
const navigate = useNavigate();
const logout = ()=>{
  localStorage.removeItem("user");
localStorage.removeItem("token");
navigate("/admin/login");
}


  return (
    <>
    <Adminnavbar/>
    <div className="admin">

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
<div className='charts'>
    
<h1>Dashboard</h1>
<div className="cards"><Homecards data="Revenue" color="yellow" rate={600}  />
<Homecards data="Expenses" color="green" rate={100}/>
<Homecards data="Target" color="blue"  rate={700}/>

</div>
<div className="linechart">
    <h3>Monthly Sales</h3>
<ResponsiveContainer width="100%" aspect={4/1}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left:30,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
         
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
</div>
    </div>
    <div>
    

    </div>

    </div>
    </>
  )
}

export default Admin