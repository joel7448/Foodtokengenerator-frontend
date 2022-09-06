import { AddShoppingCart, Home, LogoutOutlined, Sell } from '@mui/icons-material'
import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import SearchAppBar from '../Adminnavbar'
import { useEffect } from "react"
import "./productedit.css"
import { config } from '../../config/Config'

function Productedit() {
const navigate = useNavigate()
const logout = ()=>{
    localStorage.removeItem("user");
    localStorage.removeItem("token");
navigate("/admin/login");

}
const {id} = useParams();

const fetchdata = async()=>{
  const productdata = await axios.get(`${config().api}/server/products/menu/${id}`,{
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  });
  console.log(productdata.data);
  formik.setValues(productdata.data);
 
}



const formik = useFormik({
    initialValues: {
        Productname: '',
        category: '',
        description:"",
        ratings:"",
        image:"",
        price:""

    },
    validate:(values)=>{
      const errors={};
      if(!values.Productname){
        errors.Productname = "Please enter productname"
      }
      if(!values.category ){
        errors.category = "Please enter category"
      }
      if(!values.description ){
        errors.description = "please enter description"
      }
      if(!values.ratings ){
        errors.ratings = "please enter ratings"
      }
      if(!values.image ){
        errors.image = "please enter image url"
      }
      if(!values.price ){
        errors.price = "please enter price"
      }
      return errors;
    },
   
    onSubmit: async(values)=>{
try{
const postitems = await axios.put(`${config().api}/server/products/menu/${id}`,values,{
    headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
})
toast.success("Sucessfully updated !");
}
catch(err){
    console.log(err);
    toast.error("Update unsuccessful")
}
     }
})
useEffect(()=>{

  fetchdata()
},[])


  return (<>
  <SearchAppBar/>
  
    <div className='menu-form-wrapper'>
    <div className="adminsidebar">
      <ul className="sidebarul">
        <li className="sidebarlist">
       
          <Link className="link" to={`/admin/${id}`}><Home/></Link>
          
        </li>
        <li className="sidebarlist"> <Link className="link" to={`/admin/products/${id}`}><Sell/></Link></li>
        <li className="sidebarlist"><Link className='link' to={`/admin/menuupdate/${id}`}><AddShoppingCart/></Link></li>
        <li onClick={()=>{logout()}} className="sidebarlist"><LogoutOutlined/></li>
      </ul>
    </div>
    <form onSubmit={formik.handleSubmit} className='menu-updateform'>
<div><input className='productname' name="Productname" onChange={formik.handleChange} value={formik.values.Productname} type='text' placeholder='Product name'/>
{formik.values.Productname ? null : <p>{formik.errors.Productname}</p>}</div>
<div><input className='productname' name="description" onChange={formik.handleChange} value={formik.values.description} type='text' placeholder='Description'/>
{formik.values.description ? null : <p>{formik.errors.description}</p>}</div>
<div>
    <input className='productname' name="category" onChange={formik.handleChange} value={formik.values.category} type='text' placeholder='Category'/>
    {formik.values.category ? null : <p>{formik.errors.category}</p>}
</div>
<div>
    <input className='productname' name="price" onChange={formik.handleChange} value={formik.values.price} type='text' placeholder='Price'/>
    {formik.values.price ? null : <p>{formik.errors.price}</p>}
</div>
<div>
    <input className='productname' name="ratings" onChange={formik.handleChange} value={formik.values.ratings} type='text' placeholder='Ratings'/>
    {formik.values.ratings ? null : <p>{formik.errors.ratings}</p>}
</div>
<div><input className='productname' name="image" onChange={formik.handleChange} value={formik.values.image} type='text' placeholder='Image URL'/>
{formik.values.image ? null : <p>{formik.errors.image}</p>}

</div>
<button className='btn'>SUBMIT</button>

    </form>
    <ToastContainer/>
    </div>
    </>
  )
}

export default Productedit