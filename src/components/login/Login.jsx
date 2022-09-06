import "./login.css"
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from "formik"
import axios from "axios";
import { config } from "../../config/Config";


function Login() {

  const navigate = useNavigate();  
const formik = useFormik({
    initialValues: {
        email: '',
        password: '',
    },
    validate:(values)=>{
      const errors={};
      if(!values.email){
        errors.email = "please enter Email Address"
      }
      if(!values.password ){
        errors.password = "please enter a password of min-8 characters"
      }
     
      return errors;
    },
   
    onSubmit:async(values)=>{
      try{
      const login =await axios.post(`${config().api}/server/users/signin`,values);
      localStorage.setItem("token",login.data.token);
      localStorage.setItem("user",login.data.userid);
      localStorage.setItem("email",login.data.email)
      const id = localStorage.getItem("user");
        navigate(`/home/${id}`);
      }
      catch(err){
        console.log(err);
      }
 
      

    }
})



  return (
    <div className="loginWrapper">
<div className="login">
<div className="login-left">
<img className="login-icon" src="https://centromallkerala.com//uploads/brands/logo.png" alt=""/>
</div>
<div className="login-right">
    <form className="login-form" onSubmit={formik.handleSubmit}>
<input type="text" name="email" onChange={formik.handleChange} value={formik.values.email} className={formik.values.email ? "Email accept":"Email error"} placeholder="Email"/>
{formik.values.email?null:<p className="warning">{formik.errors.email}</p>}
<input type="password" name="password" onChange={formik.handleChange} value={formik.values.password} className={formik.values.password ? "Password accept":"Password error"} placeholder="Password"/>
{formik.values.password?null:<p className="warning">{formik.errors.password}</p>}
<button  >Submit</button>

</form>


<p>New to Amigos | <Link className='link' to="/">Signup</Link></p>
<p>Click on admin portal to open<Link className="link" to="/admin/login"> admin portal</Link></p>
</div>


    </div>
    </div>
  )
}

export default Login