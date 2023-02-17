import React from "react";
import { Link } from "react-router-dom";
const Nav = ()=>{ 
    return(
   
    <ul className="nav-bar">
        <li><Link to = '/' >Home</Link></li>
        <li><Link to = '/OverView'>OverView</Link></li>
        <li><Link to = '/Customer'>Customer</Link></li>
        <li><Link to = '/Support'>Support</Link></li>
        <li><Link to = '/Internal'>Internal</Link></li>
        <li><Link to = '/Utility'>Utility</Link></li>
    </ul>

    );
}
export default Nav;