import React, { useState } from 'react'



import Header from "../landingpage/header";
import Footer from "../landingpage/footer";



const Aboutus = () => {

    return (

        <>
            <Header />
            <div className="mx-5 " style={{marginTop: "7%"}}>
            <div className="mx-5 mt-5 " >
                <div class="main mainboxabout">
                    <h1 class="text-center">Bits & Bytes</h1>
                    <div>
                        <h3>Team Leader : <span>Ritesh Wanave</span></h3>
                        <h3>Members : Simran Vedpathak </h3>
                        <h3> &emsp;&emsp;&emsp;&emsp;&ensp;&nbsp; Saurabh Khadsang</h3>
                        <h3>&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp; Vaishnavi Kulkarni</h3>
                    </div>

                    <h2 class="text-center font-weight-bold "> <br /> Ph7 A PHARMA HELP</h2>
                    <ul>
                        <li>So first name of the patient would be entered</li>
                        <li>A Doctor has to select  medicines from the list which would be displayed</li>
                        <li>A Qr code of this Medicine List would be generated which the doctor has
                            entered for the patient</li>
                        <li>This Qr code can be scanned by the chemist / any other person and the
                            list of medicines would appear on his screen.</li>
                        <li>One major Advantage of this project is that the List of medicines would
                            be present with the patient even for years and probability of loosing this
                            list would be around 0.01%.</li>

                    </ul>




                    <h2 class="text-center font-weight-bold "> <br /> What problem does it solve?</h2>
                    <ul>
                        <li>As Modern methods / technology are getting involved in various field .
                            .so it is an attempt from our side to help the doctors and the chemist
                            to solve some issues which includes Medicines Selections ,Paper wastage ,
                            the storage of information regarding medicines with patient and some handwriting issues if any.</li>
                    </ul>




                    <h2 class="text-center font-weight-bold "> <br /> Market Research</h2>
                    <ul>
                        <h5>As per our Research the 2 major problems that we got to know was about </h5>
                        <li>Keeping up with old tech
                            So change is the only constant as it is said we thought
                            of adding a bit help to the pharma background through this app </li>
                        <li>Need of some user Friendly interface</li>
                    </ul>


                    <h2 class="text-center font-weight-bold "> <br /> Technology Stack</h2>
                    <h6>Front end :React ,Css and html is used</h6>
                    <h6>For program logic Python language and Django is used.</h6>


                </div>
            </div>
            </div>
            <Footer />
        </>

    );
};

export default Aboutus;
