import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { SiFacebook } from "react-icons/si";
import { IoIosHeart } from "react-icons/io";

function Footer() {
  return (
    <div className="container-fluid text-center text-white p-5" style={{backgroundColor:'violet'}}>
        <h2>Contact With Us</h2>
        <h4><FaEnvelope /> resumebuilder@gmail.com</h4>
        <h4><FaPhoneAlt/> 9876543210</h4>
        <h4><IoLogoWhatsapp/> <FaInstagram/> < SiFacebook/></h4>
        <h4>Contact With Us</h4>
        <h4>Designed & built with using < IoIosHeart className='text-danger'/> React</h4>
    </div>
  )
}

export default Footer