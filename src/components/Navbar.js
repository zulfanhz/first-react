import React from 'react'
import HeaderCSS from './Header.module.css'
import Logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <nav>
            <img src={Logo} className={HeaderCSS.logo} />
            <ul>
                <li><a href="#">Discover</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">UI8</a></li>
            </ul>
            <div>
                {/* <a href="#" class="login-btn">Log In</a> */}
                <a href="#" className={HeaderCSS.btn}>BUY NOW</a>
            </div>
        </nav>
    )
}

export default Navbar