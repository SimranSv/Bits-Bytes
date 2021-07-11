import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import axios from "axios";



import Doctorloginimage from '../assets/img/doctorlogin.png'
import './doctorlogin.css'
import Header from "../landingpage/header";
import Footer from "../landingpage/footer";



const Doctorlogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // if(localStorage.getItem("username") != null)
    // {
    //     alert("You're already Logged In")
    //     window.location ="/";
    // }



    const submitHandler = (e) => {
        e.preventDefault();


        const body = {
            username: username,
            password: password,
        };

        const url = "https://ph7apharmahelp.herokuapp.com/api/login";

        axios
            .post(url, body, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                if (response.status === 200) {
                    const data = response.data;
                    if (data.status === "400 Bad Request") {
                        alert("something went wrong . Try Again")
                        //window.location = "/login";
                        return 0;
                    }
                    localStorage.setItem("username", data.username);
                    localStorage.setItem("token", data.token);
                    localStorage.setItem('type', data.type);
                    if(data.type==="Doctor"){
                    }
                    window.location = "/patient";

                }
            })
            .catch((err) => {
                console.log(err);
                alert("Some Error Occurred")
                window.location = "/doctorlogin";
            });
    }

    return (
        <>
            <Header />
            <div className="doctormaindiv">


                <div className="doctorcontainer doctordiv" id="doctorcontainer">

                    <div className="form-doctorcontainer sign-in-doctorcontainer doctordiv">
                        <form className="doctorform" onSubmit={submitHandler}>

                            <h1 className="doctorh1" >Sign in</h1>


                            <input className="doctorinput" type="text" placeholder="Username" value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                            <input className="doctorinput" type="password" placeholder="Password" value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />

                            <button className="doctorbutton" >Sign In</button>

                            <h6>New User ?  <NavLink exact to="/patientsignup">Sign Up</NavLink></h6>



                        </form>
                    </div>
                    <div className="doctoroverlay-doctorcontainer doctordiv">
                        <div className="doctoroverlay doctordiv ">

                            <div className="doctorimagediv">
                                <img className="doctorimagecontainer float-right" src={Doctorloginimage} alt="." />
                            </div>



                        </div>



                    </div>
                </div>




            </div>
            <Footer />
        </>
    )
}


export default Doctorlogin;
