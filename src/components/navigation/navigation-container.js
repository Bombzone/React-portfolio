import React from 'react';
import { NavLink } from 'react-router-dom';
const NavigationComponent = (props) => {
    const dynamicLink = (route, linkText)=> {
        return(
        <div className="nav-link-wrapper">
            <NavLink to="/blog" className="nav-link-inactive" activeClassName="nav-link-active">Blog</NavLink>
        </div>      
        )}
        return (
            <div className="nav-wrapper">
                <div className="left-side">
                    <div className="nav-link-wrapper">
                    <NavLink exact to="/" className="nav-link-inactive" activeClassName="nav-link-active">Home</NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                    <NavLink to="/about-me" className="nav-link-inactive" activeClassName="nav-link-active">About</NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                    <NavLink to="/contact" className="nav-link-inactive" activeClassName="nav-link-active">Contact</NavLink>
                    </div>
                    {props.loggedInStatus === "LOGGED_IN" ?   (dynamicLink("/blog", "Blog")) : ""}
                </div>
                <div className="right-side">
                    Ryan Posey
                </div>
            </div>
        )
    }
export default NavigationComponent