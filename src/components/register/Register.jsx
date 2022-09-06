import "./register.css"
import amigos from "../../../src/amigospic.png"
import { useState } from "react"
import { useFormik } from "formik"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { config } from "../../config/Config"
function Register() {
const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            address: '',
        },
        validate:(values)=>{
          const errors={};
          if(!values.email){
            errors.email = "please enter Email Address"
          }
          if(!values.password ){
            errors.password = "please enter a password of min-8 characters"
          }
          if(!values.firstname ){
            errors.firstname="please enter name"
          }
          if(!values.lastname){
            errors.lastname="please enter name"
          }
          if(!values.address){
            errors.address = "please enter your residential address"
          }
          return errors;
        },
       
        onSubmit:async(values)=>{
         try{
          const  register = await axios.post(`${config().api}/server/users/register`,values)
          console.log(register.data);
         }
         catch(error){
          console.log(error);
         }
    navigate("/login")
        }
    })


  return (
<div className="registerWrapper">
<div className="register">
<div className="register-left">
<img className="register-icon" src="https://centromallkerala.com//uploads/brands/logo.png" alt=""/>
</div>
<div className="register-right">
    <form className="login-register" onSubmit={formik.handleSubmit}>
    <div className="register-name">
<input type="text" name="firstname" onChange={formik.handleChange} value={formik.values.firstname} className={formik.values.firstname ?"FirstName accept":"FirstName error"} placeholder="First Name"/>
<input type="text" name="lastname" onChange={formik.handleChange} value={formik.values.lastname} className={formik.values.lastname ?"lastName accept":"lastName error"} placeholder="Last Name"/>

</div>
{formik.errors.lastname?<div className="warning">{formik.errors.lastname}</div>:null}
<input type="text" name="address" onChange={formik.handleChange} value={formik.values.address} className={formik.values.address ?"addresses accept":"addresses error"} placeholder="Address"/>
{formik.errors.address?<p className="warning">{formik.errors.address}</p>:null}
<input type="email" name="email" onChange={formik.handleChange} value={formik.values.email} className={formik.values.email ?"Email accept":"Email error"} placeholder="Email"/>
{formik.errors.email?<p className="warning">{formik.errors.email}</p>:null}
<input type="password" name="password" onChange={formik.handleChange} value={formik.values.password} className={formik.values.password ?"Password accept":"Password error"} placeholder="Password"/>
{formik.errors.password?<p className="warning">{formik.errors.password}</p>:null}
<button>Submit</button>
</form>
<p className="login-redirect">Already an user | <Link className="link" to="/login">Login</Link></p>
</div>

    </div>
    </div>

  )
}

export default Register