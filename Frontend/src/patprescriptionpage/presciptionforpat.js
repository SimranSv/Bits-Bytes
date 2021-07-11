import React, { useState, useEffect } from 'react'
import Header from "../landingpage/header";
import axios from 'axios';
import { NavLink } from 'react-router-dom';



const Presciptionforpat = () => {


    if(localStorage.getItem("type") != "Patient")
    {
        alert("Access Denied")
        window.location ="/";
    }

    const [data, setData] = useState([]);

    console.log(localStorage.getItem("token"))


    //api/doctorsprescriptions/<str:username>

    useEffect(() => {
        axios({
            method: "GET",
            url: "https://ph7apharmahelp.herokuapp.com/api/patientsprescriptions/" + localStorage.getItem("username"),
            headers: {
                "Content-Type": "application/json",
                'Authorization': localStorage.getItem("token")
            },
        })
            .then((response) => {
                let data2 = response.data;
                setData(data2)
                console.log(data2)
                //data.doctor, .time, .

            })
            .catch((err) => {
                alert("Something went wrong!");
            });
    }, []);





    return (
        <>
            <Header />
            <div className=" mx-5" style={{ marginTop: "7%" }}>
                <div className="mx-5 grid">
                    <div className="col-md-12 border rounded border-primary ">
                        <h4 className="my-4 fw-bold mx-4 " >Patient Username :  <span>{localStorage.getItem("username")}</span> </h4>

                    </div>









                    <div>
                        {
                            data.map((curele) => {
                                return (
                                    <div className="row shadow p-3 mb-5 rounded my-3" >
                                        <div className="col-md-9">
                                            <div className=" ">
                                                <h5 style={{ textDecoration: 'underline', color: '#4154f1' }} className="fw-bold">Medicine List</h5>
                                                <h5>{curele.medicines}</h5>

                                                <hr className="dropdown-divider" />
                                            </div>
                                            <div className=" ">
                                                <h5 style={{ textDecoration: 'underline', color: '#4154f1' }} className="fw-bold">Diagnosic</h5>

                                                <h5>{curele.diagnosis}</h5>
                                                <hr className="dropdown-divider" />
                                            </div>
                                            <div className=" ">
                                                <h5 style={{ textDecoration: 'underline', color: '#4154f1' }} className="fw-bold">remark</h5>
                                                <h5>{curele.remarks}</h5>
                                            </div>
                                        </div>



                                        <div className="col-md-3">
                                            <div className=" ">
                                                <h5 style={{ textDecoration: 'underline', color: '#4154f1' }} className="fw-bold">Date</h5>
                                                <h5>{curele.dateTime} </h5>
                                            </div>
                                            <div className=" ">
                                                <h5 style={{ textDecoration: 'underline', color: '#4154f1' }} className="fw-bold">Patient</h5>
                                                <h5>{curele.patient} </h5>
                                            </div>

                                            <div className="d-grid  col-3 mx-auto mt-3"  >
                                                <NavLink exact to='/createprescription'>
                                                    <button className="btn btn-primary "> <h5 className="fw-bold my-1">  More </h5> </button>
                                                </NavLink>
                                            </div>




                                        </div>
                                    </div>
                                )

                            })
                        }
                    </div>




                </div>
            </div>


        </>

    );
};

export default Presciptionforpat;
