import React, { useState } from 'react'
import Header from "../landingpage/header";
import axios from 'axios';


const Addprescription = () => {

    const [patientUsername, setPatientUsername] = useState("");
    const [medicines, setMedicines] = useState("");
    const [diagnosis, setDiagnosis] = useState("");
    const [remarks, setRemarks] = useState("");

    if(localStorage.getItem("type") != "Doctor")
    {
        alert("Access Denied")
        window.location ="/";
    }


    const submitHandler = (e) => {
        e.preventDefault();

        const body = {
            PatientUsername: patientUsername,
            DoctorUsername: localStorage.getItem("username"),
            medicines: medicines,
            remarks: remarks,
            diagnosis: diagnosis,
        };

        const url = "https://ph7apharmahelp.herokuapp.com/api/createprescription";

        axios.post(
            url,
            body,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem("token")
                }
            }
        ).then(
            response => {
                if (response.status === 200) {

                    const data = response.data;
                    if (data.status === "201 Created") {
                        alert("Prescription added successfully")
                        window.location="/doctor"
                        return 0;
                    }
                    
                    alert("Something Went Wrong . Please Check Username")
                    window.location = '/createPrescription'
                }
                
            }
        )
            .catch(
                err => {
                    console.log(err)
                    ///
                    window.location = "/createPrescription"
                }
            );
    }




    return (
        <>
            <Header />

            <div className=" mx-5" style={{ marginTop: "7%" }}>
                <div className="mx-5 grid">


                    <div className="row justify-content-center">

                        <div className="col-md-6 my-3">

                            <div className="row shadow p-3 mb-5 rounded"  >
                                <div className="">
                                    <div className=" text-center my-4 ">
                                        <h5 style={{ textDecoration: 'underline', color: '#4154f1' }} className="fw-bold">Add Prescription</h5>
                                        <hr className="dropdown-divider" />
                                    </div>



                                    <form onSubmit={submitHandler}>

                                        <div className="input-group mb-3 ">
                                            <span className="input-group-text" id="inputGroup-sizing-default">Patient Username</span>
                                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-defaul"
                                                required
                                                value={patientUsername}
                                                onChange={(event) => setPatientUsername(event.target.value)}
                                            />
                                        </div>
                                        <div className="input-group mb-3 ">
                                            <span className="input-group-text px-4" id="inputGroup-sizing-default">  Medicine </span>
                                            <div className="form-group col-md-9 ">
                                                <textarea className="form-control rounded-0 " id="exampleFormControlTextarea2" rows="3"
                                                    required
                                                    value={medicines}
                                                    onChange={(event) => setMedicines(event.target.value)}
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="inputGroup-sizing-default"> &ensp; Diagnosis &ensp;</span>
                                            {/* <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                                                value={diagnosis}
                                                onChange={(event) => setDiagnosis(event.target.value)}
                                            /> */}
                                            <div className="form-group col-md-9 ">
                                                <textarea className="form-control rounded-0 " id="" rows="3"
                                                required
                                                    value={diagnosis}
                                                    onChange={(event) => setDiagnosis(event.target.value)}
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="inputGroup-sizing-default"> &ensp;   Remark  &ensp;  &nbsp;</span>
                                            {/* <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                                                value={remarks}
                                                onChange={(event) => setRemarks(event.target.value)}
                                            /> */}

                                             <div className="form-group col-md-9 ">
                                                <textarea className="form-control rounded-0 " id="" rows="3" 
                                                required
                                                    value={remarks}
                                                    onChange={(event) => setRemarks(event.target.value)}
                                                ></textarea>
                                            </div>
                                        </div>
                                        <hr className="dropdown-divider" />


                                        <div className="d-grid gap-2 col-4 mx-auto my-4">
                                            <button className="btn btn-primary">Add</button>
                                        </div>


                                    </form>
                                </div>




                            </div>
                        </div>
                    </div>



                </div>
            </div>

        </>

    );
};

export default Addprescription;
