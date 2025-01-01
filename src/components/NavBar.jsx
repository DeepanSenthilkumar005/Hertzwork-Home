import React from 'react';
import './NavBar.css';
import logo from '../assets/logo.jpg'

function NavBar(){
    return(
        <div className='navbar'>
            <img src={logo} alt='Logo' className='logo'/>
            <ul className='list'>
                <li>Home</li>
                <li>Services</li>
                <li>Products</li>
                <li>Career</li>
                <li>Contact Us</li>
            </ul>

            <div className='enquiry'>
                <p>Enquire Now</p>
            </div>

        </div>
    )
}

export default NavBar;