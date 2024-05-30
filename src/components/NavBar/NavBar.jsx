import React from 'react'
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="site-main-menu">
            <ul>
                
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/home-one"}><span className="menu-text">Home</span></NavLink>
                </li>
               
                <li className="has-children">
                    <NavLink to={process.env.PUBLIC_URL + "/Solutions"}><span className="menu-text">Solutions</span></NavLink>
                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                    <ul className="sub-menu">
                    <li><NavLink to={process.env.PUBLIC_URL + "/solution-details/1"}><span className="menu-text">Marketing Qualified Leads</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/solution-details/2"}><span className="menu-text">Highly Qualified Leads</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/solution-details/3"}><span className="menu-text">Account Based Marketing</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/solution-details/4"}><span className="menu-text">Highly Qualified Leads</span></NavLink></li>
                    </ul>
                </li>
               
                <li className="has-children">
                    <NavLink to={process.env.PUBLIC_URL + "/service"}><span className="menu-text">Services</span></NavLink>
                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                    <ul className="sub-menu">
                    <li><NavLink to={process.env.PUBLIC_URL + "/service"}><span className="menu-text">Groundwork</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/generate"}><span className="menu-text">Generate</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/nurture"}><span className="menu-text">Nurture</span></NavLink></li>
                    </ul>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/about"}><span className="menu-text">About Us</span></NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/work"}><span className="menu-text">Careers</span></NavLink>
                </li>
              
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/globaldata"}><span className="menu-text">Audience Data</span></NavLink>
                </li>
            
             
                
               
            </ul>
        </nav>
    )
}

export default NavBar
