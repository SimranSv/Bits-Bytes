import { NavLink } from 'react-router-dom';
import mainlogo from "../assets/img/mainlogo.png";
import {useState} from 'react'

const header = () => {

     const logoutHandler =()=>{
         localStorage.setItem("token",null);
         localStorage.setItem("username",null);
         localStorage.setItem("type",null);
     }

    return (
        <>
            <header id="header" className="header fixed-top">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">



                    <NavLink to="/" className="logo d-flex align-items-center">

                        <img src={mainlogo} alt="logo" />
                        <span>Ph7aPharmaHelp</span>
                    </NavLink>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><NavLink className="nav-link scrollto active" exact to="/">Home</NavLink></li>
                            <li><NavLink className="nav-link scrollto" exact to="/aboutus">About</NavLink></li>
                            <li className="dropdown"><a to="/"><span>Sign in & Sign up</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><NavLink to="/login">Sign In</NavLink></li>
                                    <li><NavLink to="/patientsignup">Sign Up</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                </div>
            </header>
        </>

    );
};

export default header;
