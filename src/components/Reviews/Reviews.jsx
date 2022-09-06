import "./reviews.css"
import { Person,KeyboardArrowDown, CalendarToday, PhoneAndroid,  AccessTime, Email, West, FacebookOutlined, Twitter, Instagram, LinkedIn, ArrowRight, SendOutlined} from "@mui/icons-material"
import woman from "../../../src/woman.png"
import React from 'react'
import { Link } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';
import salad1 from "../../../src/salad1.png"
import salad2 from "../../../src/salad2.png"
import salad3 from "../../../src/salad3.png"
import salad4 from "../../../src/salad4.png"
import salad5 from "../../../src/salad5.png"
import logogreen from "../../../src/logogreen.png"




function Reviews() {

const notify = ()=>{
   toast.success("Your table has been Booked")
    
}
    
const id = localStorage.getItem("user");
  return (
    <div className="reviewwrapper">
<div className="reviewtop">
    <div className="imagewrapper">
    <img src="https://pngimage.net/wp-content/uploads/2018/06/mexican-food-png-7.png" className="reviewsdish" alt=""/>
    </div>
    <div className="reviewstopcontent">
        <h1 className="reviewstopheader">Book your table and taste our food</h1>
        <ul className="reviewtopothers">
<li><Person/>2 persons<KeyboardArrowDown/></li>
<li><CalendarToday/>dd / mm / yyyy<KeyboardArrowDown/></li>
<li><AccessTime/>Time<KeyboardArrowDown/></li>
<li className="withoutarrow"><PhoneAndroid/>Phone no.</li>
<li className="withoutarrow"><Email/>Email</li>

        </ul>
        <div className="button-container">
        <Link className="link" to={`/home/${id}`}><button className="backbutton"><West/> Back</button></Link><button onClick={()=>{notify()}} className="booknow">Book now</button>
        <ToastContainer/>
        </div>
    </div>
   
  
</div>

<div className="reviewsmid">
    <div>
<div className="customer-background"></div>
        <img src={woman} className="customer-pic"></img>
        </div>
        <div className="customerreview">
            <h3 className="testimonialheading">Testimonial</h3>
            <h1>Our customer loves our restaurant</h1>
            <p className="testimony">" One of my favourite mexical food restaurant. I can assure you this food
                is authentic !!! Wonderful service and atmosphere. I really like their
                food taste." 
            </p>
            <h3 className="testimonialname">Borris Jhonson</h3>
            <p className="testimonialcity">Mexico city, Mexico</p>

            </div>
    </div>
    <div className="reviewbottomtop">
        <p className="reviewbottomtopheader">Social</p>
        <h1 className="followoninsta">Follow us on Instagram <span>#Amigosfood</span> </h1>
        <div className="fooditems"><img className="salad1" src={salad1} alt=""/>
        <img className="salad2" src={salad2} alt=""/>
        <img className="salad3" src={salad3} alt=""/>
        <img className="salad4" src={salad4} alt=""/>
        <img className="salad4" src={salad5} alt=""/>
        </div>

        
    </div>
    <div className="footer">
        <div className="hoteladdress">
           <img className="logogreen" src={logogreen}/>
           <p>St Fossilaa, 20 forst street , 4th Mexico city, Mexico 200014 </p>
            <div className="socialmediaicons">
                <div><FacebookOutlined/></div><div> <Twitter/></div> <div><Instagram/>
                 </div><div><LinkedIn/></div>
            </div>
        </div>
        <div className="footer-categories">
            <h3>Categories</h3>
            <p>Vegetarian</p>
            <p>Food products</p>
            <p>Package foods</p>
            <p>Drinks and beverage</p>
        </div>
        <div className="footer-categories">
            <h3>Useful Links</h3>
            <p>Payment & tax</p>
            <p>Terms of service</p>
            <p>Your account</p>
            <p>Privacy policy</p>
        </div>
        <div className="contactus">
            <form className="footerform">
          <input className="footeremail" placeholder="Email Address" type="email"></input>
          <button className="emailbutton"><SendOutlined/></button>
          </form>
          <div className="tollfreenumber">Call 1 (500) 250-3698</div>
          <div className="hotelmail">Support@amigofoods.net</div>
        </div>
    </div>
    



    </div>
  )
}

export default Reviews