import { NavLink } from 'react-router-dom';



import values3 from '../assets/img/values3.png'
import doctorremovebgpreview from "../assets/img/doctorremovebgpreview.png";
import TEamremovebgpreview from "../assets/img/TEamremovebgpreview.png";
import idearemovebgpreview from "../assets/img/idearemovebgpreview.png";
import prescriptionremovebgpreview from "../assets/img/prescriptionremovebgpreview.png";

import Ritesh from "../assets/img/Ritesh.jpg";
import Vaishnavi from "../assets/img/Vaishnavi.jpg";
import Saurabh from "../assets/img/Saurabh.jpg";

import Simran from "../assets/img/Simran.jpg";
import Devangdada2 from "../assets/img/Devangdada2.jpg";
import SayedDada from "../assets/img/SayedDada.jpg";






const middlecontent = () => {


    const member1mail = () => {
        window.open("mailto:riteshwanave@gmail.com", '_blank').focus();
    };
    const member1github = () => {
        window.open("https://github.com/RiteshWanave", '_blank').focus();
    };
    const member1linkdin = () => {
        window.open("https://www.linkedin.com/in/ritesh-wanave-68b723212/", '_blank').focus(); 
    };


    const member2mail = () => {
        window.open("mailto:simransv1402@gmail.com", '_blank').focus(); 
    };
    const member2github = () => {
        window.open("https://github.com/SimranSv", '_blank').focus(); 
    };
    const member2linkdin = () => {
        window.open("https://www.linkedin.com/in/simran-vedpathak-b4a291207", '_blank').focus(); 
    };


    const member3mail = () => {
        window.open("mailto:kulkarnivaishnavi499@gmail.com", '_blank').focus(); 
    };
    const member3github = () => {
        window.open("https://github.com/vaishnavi802", '_blank').focus(); 
    };
    const member3linkdin = () => {
        window.open("https://www.linkedin.com/in/vaishnavi-kulkarni-b0489a210", '_blank').focus(); 
    };


    const member4mail = () => {
        window.open("mailto:saurabhkhadsang2018@gmail.com", '_blank').focus(); 
    };
    const member4github = () => {
        window.open("https://github.com/saurabhkhadsang", '_blank').focus(); 
    };
    const member4linkdin = () => {
        window.open("https://www.linkedin.com/in/saurabh-khadsang-7b0150217", '_blank').focus(); 
    };


    const mentor1mail = () => {
        window.open("devangkamble20@gmail.com" , '_blank').focus();
    };
    const mentor1github = () => {
        window.open("https://github.com/rising-entropy" , '_blank').focus();
    };
    const mentor1linkdin = () => {
        window.open("https://www.linkedin.com/in/devang-kamble" , '_blank').focus();
    };


    const mentor2mail = () => {
        window.open("fahadshah2411@gmail.com"  , '_blank').focus();
    };
    const mentor2github = () => {
        window.open("http://www.github.com/alfhad" , '_blank').focus();
    };
    const mentor2linkdin = () => {
        window.open("https://www.linkedin.com/in/sayed-alfhad-s-b04bbb132" , '_blank').focus();
    };


    const githubprojectrepo = () => {
        window.open("https://github.com/RiteshWanave/Bits-Bytes.git", '_blank').focus(); 
    };





    return (

        <>

            <section id="hero" className="hero d-flex align-items-center">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <h1 >Bits&Bytes Presents</h1>
                            <h2 >Is Technological aspect lacking to have a connection between Doctors , Patient and Chemist ?
                                Don't worry Ph7 a Pharmahelp is Here !
                            </h2>
                            <div >
                                <div className="text-center text-lg-start">
                                    <NavLink to="/aboutus" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                                        <span>Read More</span>
                                        <i className="bi bi-arrow-right"></i>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 hero-img" >
                            <img src={doctorremovebgpreview} className="img-fluid" alt="." />
                        </div>
                    </div>
                </div>
            </section>







            <main id="main">


                {/* <!-- ======= About Section ======= --> */}
                <section id="about" className="about">

                    <div className="container" >
                        <div className="row gx-0">

                            <div className="col-lg-6 d-flex flex-column justify-content-center"  >
                                <div className="content">
                                    <h3>Who We Are</h3>
                                    <h2>We are First year enthusiast Engineering Students having ignited minds creating our first ever site that will help alot of people
                                    </h2>
                                    <p>
                                        Hola Peeps! You are at right place !This site takes up the patient's information and
                                        prescription provided by the doctor and converts it into a Qr code this code is provided to
                                        patient through mail so that the chemist can scan it and provide him/her the respective medicines

                                    </p>

                                </div>
                            </div>

                            <div className="col-lg-6 d-flex align-items-center"  >
                                <img src={TEamremovebgpreview} className="img-fluid" alt="." />
                            </div>

                        </div>
                    </div>

                </section>
                {/* <!-- End About Section --> */}




                {/* <!-- ======= Values Section ======= --> */}
                <section id="values" className="values">

                    <div className="container" >

                        <header className="section-header">
                            <h2>Our Values</h2>
                            <p>So ! What Problems does it solve and what makes it different?</p>
                        </header>

                        <div className="row">

                            <div className="col-lg-4">
                                <div className="box"  >
                                    <img src={idearemovebgpreview} className="img-fluid" alt="." />
                                    <h3>A unique thought.</h3>
                                    <p>The thought process behind this actually differentiates it from all other apps / sites


                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 mt-4 mt-lg-0">
                                <div className="box"  >
                                    <img src={prescriptionremovebgpreview} className="img-fluid" alt="" />
                                    <h3>The prescription list</h3>
                                    <p>Since it involves technological attributes the chances of loosing this list is very less</p>
                                </div>
                            </div>

                            <div className="col-lg-4 mt-4 mt-lg-0">
                                <div className="box" >
                                    <img src={values3} className="img-fluid" alt="." />
                                    <h3>Time Saving.</h3>
                                    <p>Technology has evolved so far inorder to solve this problem so does this site does .</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>
                {/* <!-- End Values Section --> */}







                {/* <!--  Team Section --> */}
                <section id="team" className="team">

                    <div className="container" >

                        <header className="section-header">
                            <h2>Team</h2>
                            <p>Our hard working team</p>
                        </header>

                        <div className="row gy-4">

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" >
                                <div className="member">
                                    <div className="member-img">
                                        <img src={Ritesh} className="img-fluid" alt="." />
                                        <div className="social">
                                            <NavLink to="" onClick={member1mail}><i className="bi bi-envelope"></i></NavLink>
                                            <NavLink to="" onClick={member1github}><i className="bi bi-github"></i></NavLink>
                                            <NavLink to="" onClick={member1linkdin}><i className="bi bi-linkedin"></i></NavLink>

                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Ritesh Wanave </h4>
                                        <span>Team Leader </span>
                                        <span>Back-end </span>
                                        <p></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" >
                                <div className="member">
                                    <div className="member-img">
                                        <img src={Simran} className="img-fluid" alt="." />
                                        <div className="social">
                                            <NavLink to="" onClick={member2mail}><i className="bi bi-envelope"></i></NavLink>
                                            <NavLink to="" onClick={member2github}><i className="bi bi-github"></i></NavLink>
                                            <NavLink to="" onClick={member2linkdin}><i className="bi bi-linkedin"></i></NavLink>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Simran Vedpathak</h4>
                                        <span>Front-end </span>
                                        <p></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" >
                                <div className="member">
                                    <div className="member-img">
                                        <img src={Vaishnavi} className="img-fluid" alt="." />
                                        <div className="social">
                                            <NavLink to="" onClick={member3mail}><i className="bi bi-envelope"></i></NavLink>
                                            <NavLink to="" onClick={member3github}><i className="bi bi-github"></i></NavLink>
                                            <NavLink to="" onClick={member2linkdin}><i className="bi bi-linkedin"></i></NavLink>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Vaishnavi Kulkarni </h4>
                                        <span>Back-end </span>
                                        <p></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" >
                                <div className="member">
                                    <div className="member-img">
                                        <img src={Saurabh} className="img-fluid" alt="." />
                                        <div className="social">
                                            <NavLink to="" onClick={member4mail}><i className="bi bi-envelope"></i></NavLink>
                                            <NavLink to="" onClick={member4github}><i className="bi bi-github"></i></NavLink>
                                            <NavLink to="" onClick={member4linkdin}><i className="bi bi-linkedin"></i></NavLink>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Saurabh Khadsang</h4>
                                        <span>Front-end </span>
                                        <p></p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>
                {/* <!-- End Team Section --> */}



                {/* <!-- Mentor--> */}

                <section id="team" className="team">

                    <div className="container" >

                        <header className="section-header">
                            <h2>Mentor</h2>
                            <p>Our hard working Mentor</p>
                        </header>

                        <div className="row gy-4 mentorbox align-items-center justify-content-center ">

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" >
                                <div className="member">
                                    <div className="member-img">
                                        <img src={Devangdada2} className="img-fluid" alt="." />
                                        <div className="social">
                                            <NavLink to="/"><i className="bi bi-twitter"></i></NavLink>
                                            <NavLink to="/"><i className="bi bi-envelope"></i></NavLink>
                                            <NavLink to="/"><i className="bi bi-github"></i></NavLink>
                                            <NavLink to="/"><i className="bi bi-linkedin"></i></NavLink>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Devang kamble </h4>
                                        <span>Senior developer</span>
                                        <p></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" >
                                <div className="member">
                                    <div className="member-img">
                                        <img src={SayedDada} className="img-fluid" alt="." />
                                        <div className="social">
                                            <NavLink to="/"><i className="bi bi-twitter"></i></NavLink>
                                            <NavLink to="/"><i className="bi bi-envelope"></i></NavLink>
                                            <NavLink to="/"><i className="bi bi-github"></i></NavLink>
                                            <NavLink to="/"><i className="bi bi-linkedin"></i></NavLink>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Sayed Alfhad Shah</h4>
                                        <span>Senior developer</span>
                                        <p></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </section>

                {/* <!-- end Mentor--> */}





                {/* <!-- ======= Contact Section ======= --> */}
                <section id="contact" className="contact">

                    <div className="container" >

                        <header className="section-header">
                            <h2>Contact</h2>
                            <p>Contact Us</p>
                        </header>

                        <div className="row gy-4">

                            <div className="col-lg-12">

                                <div className="row gy-4">
                                    <div className="col-md-3">
                                        <div className="info-box">
                                            <i className="bi bi-geo-alt"></i>
                                            <h3>Address</h3>
                                            <p>---------,<br />---------------------</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="info-box">
                                            <i className="bi bi-telephone"></i>
                                            <h3>Call Us</h3>
                                            <p>+91 85509 60012<br />+91 91754 86500</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="info-box">
                                            <i className="bi bi-envelope"></i>
                                            <h3>Email Us</h3>
                                            <p>help@pharmahelp.com<br />ph7apharmahelp@pharmahelp.com</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="info-box">
                                            <i className="bi bi-github"></i>
                                            <h3>Github</h3>
                                            {/* <!-- <p>Monday - Friday<br>9:00AM - 05:00PM</p> --> */}
                                            <NavLink to="" onClick={githubprojectrepo}>Bits-Bytes</NavLink>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* <div className="col-lg-6">
                                <form action="forms/contact.php" method="post" className="php-email-form">
                                    <div className="row gy-4">

                                        <div className="col-md-6">
                                            <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                                        </div>

                                        <div className="col-md-6 ">
                                            <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                                        </div>

                                        <div className="col-md-12">
                                            <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                                        </div>

                                        <div className="col-md-12">
                                            <textarea className="form-control" name="message" rows="6" placeholder="Message" required />
                                        </div>

                                        <div className="col-md-12 text-center">
                                            <div className="loading">Loading</div>
                                            <div className="error-message"></div>
                                            <div className="sent-message">Your message has been sent. Thank you!</div>

                                            <button type="submit">Send Message</button>
                                        </div>

                                    </div>
                                </form>

                            </div> */}

                        </div>

                    </div>

                </section>
                {/* <!-- End Contact Section --> */}

            </main>

        </>

    );
};

export default middlecontent;
