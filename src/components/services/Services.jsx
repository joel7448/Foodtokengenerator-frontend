import "./services.css"
import {LineAxisOutlined, LocalDining} from "@mui/icons-material"
import Topbar from "../topbar/Topbar"
import Servicecards from "./servicecards/Servicecards"
import { ToastContainer, toast } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import axios from "axios"
import Mobilenavbar from "../topbar/mobile-navbar/Mobilenavbar";
import Secondarynavbar from "../topbar/secondary navbar/Secondarynavbar";

function Services() {

const notify = ()=>{
  toast.success("Sucessfully logged in !");
}


useEffect(()=>{
notify();

},[])

  return (
    <>

    <Topbar></Topbar>
  
    <div className="services-wrapper">
      <div className="headservices"><LocalDining className="localdining"/>  <p className="servicesHeading">Our Services</p><LocalDining className="localdining"/></div>
        <h2> We offer people best way to eat good food</h2>
    </div>
    
    <Servicecards/>
    <ToastContainer/>
    </>
  )
}

export default Services