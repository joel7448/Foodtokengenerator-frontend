import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Adminsidebar from '../Adminsidebar/Adminsidebar';
import Adminnavbar from "../Adminnavbar"
import "./order.css"
import axios from "axios"
import { useFormik } from "formik"
import { Link } from 'react-router-dom';
import { CheckCircleOutlined, Delete, Edit, SelectAll } from '@mui/icons-material';
import { toast, ToastContainer } from 'react-toastify';
import { config } from '../../config/Config';
function Order() {
  const [orders,setorders] = useState([]);
  const formik = useFormik({
    initialValues : {
      order :"",
    },
    onSubmit: async (values) => {
      try{
      const order = await axios.get(`${config().api}/sever/nodemailer/token/filter/${values.order}`,{
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      });
setorders([order.data]);
      }
catch(error){
  console.log(error);
}
    }
  })
  

const handledelete=async(orderid)=>{
const deletion = prompt("Enter 'delete' to delete");

if(deletion=="delete"){
 await axios.delete(`${config().api}/sever/nodemailer/token/${orderid}`);
 toast.success("Deleted!");
}
else{
  toast.error("This order is not deleted");
}


}

const orderready = async(orderid)=>{
  try{
const ready = await axios.put(`${config().api}/sever/nodemailer/token/${orderid}`,{
  headers: {
    Authorization: `${localStorage.getItem("token")}`,
  },
});
toast.success("Order status updated");
    }
  catch(error){
    console.log(error);
  }
}

    const columns = [
      { field: '_id', headerName: '_id', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
       { field: 'order_token', headerName: 'Order_token', width: 130 },
        {
          field: 'action',
          headerName: 'Action',
         
          
          width: 160,
          renderCell : (params)=>{
            return(<div className='CRUDS'>
            
          

                <CheckCircleOutlined onClick={()=>{orderready(params.row.order_token)}} className="user-admin-edit"/>

                
                <Delete className="userlistdelete" onClick={()=>{handledelete(params.row.order_token)}}/>
                </div>
            )
        }
         
        },
        { field: 'status', headerName: 'Order Status', width: 130 }


      ];
 
      const fetchorders =async()=>{
        const result = await axios.get(`${config().api}/sever/nodemailer/token`,{
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        });
        
        setorders(result.data);
        console.log(result.data);
      } 
      useEffect(()=>{
       fetchorders();
      },[]);
      
      const rows =orders;


  return (<>
   <Adminnavbar/>

    <div className="orderpage-wrapper">
    <Adminsidebar className="sidebar-admin"/>
   
    <div className='table-user' style={{ height: 400, width: '100%' }}>
    <form className="tokensearch" onSubmit={formik.handleSubmit}>
    <input type="text" name="order" onChange={formik.handleChange} value={formik.values.order} className="form-search" placeholder='Order token'/>
    <button  className="btn-search">Search</button>
    </form>
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      disableSelectionOnClick 
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
    
  </div>
  </div>
  <ToastContainer/>
  </>
  )
}

export default Order