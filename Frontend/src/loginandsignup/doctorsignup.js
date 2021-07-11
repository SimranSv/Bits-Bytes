import React, { useState } from 'react'
import axios from "axios";



import Doctorsiginimage from '../assets/img/privacy.png'
import Header from "../landingpage/header";
import Footer from "../landingpage/footer";
import { NavLink } from 'react-router-dom';



const Doctorsignup = () => {


    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    // if(localStorage.getItem("username") != null)
    // {
    //     alert("You're already Logged In")
    //     window.location ="/";
    // }





    const submitHandler = (e) => {
        e.preventDefault();

        const body = {
            "username": username,
            "fname": fname,
            "lname": lname,
            "email": email,
            "password": password
        }

        const url = "https://ph7apharmahelp.herokuapp.com/api/signup"

        axios.post(
            url,
            body,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(
            response => {
                if (response.status === 200) {

                    const data = response.data;
                    if (data.status === "400 Bad Request") {
                        alert("something went wrong . Try Again")
                        window.location = "patientsignup"
                        return 0;
                    }
                    if (data.status === "403 User already exists") {
                        alert("User Already Exist")
                        window.location = "patientsignup"
                        return 0;
                    }
                    localStorage.setItem('username', data.username);
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('type', data.type);
                    alert("Account Created Sucessful")
                    window.location = '/createprescription'
                }
            }
        )
            .catch(
                err => {
                    console.log(err)
                    window.location = "patientsignup"
                }
            );

    }



    return (
        <>
            <Header />
            <div className="doctormaindiv">


                <div className="doctorcontainer doctordiv" id="doctorcontainer">

                    <div className="form-doctorcontainer sign-in-doctorcontainer doctordiv">
                        <form className="doctorform" onSubmit={submitHandler}>

                            <h3 className="doctorh1" >Sign UP</h3>

                            <input className="doctorinput" type="text" placeholder="First Name" value={fname} onChange={(event) => setFname(event.target.value)} />
                            <input className="doctorinput" type="text" placeholder="Last Name" value={lname} onChange={(e) => setLname(e.target.value)} />
                            <input className="doctorinput" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            <input className="doctorinput" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input className="doctorinput" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

                            <button className="doctorbutton" >Sign Up</button>
                            <h6>Already User ?  <NavLink exact to="/login">Sign In</NavLink></h6>

                        </form>
                    </div>
                    <div className="doctoroverlay-doctorcontainer doctordiv">
                        <div className="doctoroverlay doctordiv ">

                            <div className="doctoroverlay-panel doctoroverlay-right doctordiv">
                                <h4 className="doctorh1 signupprivacy">There won't be leakage of sensitive data and It would be completely secure</h4>


                            </div>

                            <div className="doctorimagediv">
                                <img className="doctorimagecontainersignup float-right" src={Doctorsiginimage} alt="." />
                            </div>



                        </div>



                    </div>
                </div>




            </div>
            <Footer />
        </>
    )
}


export default Doctorsignup;
