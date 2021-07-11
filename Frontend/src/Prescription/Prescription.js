import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Header from '../landingpage/header';


export default function Prescription({
  match: {
    params: { id },
  },
}) {
  if (localStorage.getItem("username") === null)
  {
    alert("Invalid User")
    window.location = "/"
  }




  const [patient, setPatient] = useState("");
  const [doctor, setDoctor] = useState("");
  const [medicines, setMedicines] = useState("");
  const [remarks, setRemarks] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [time, setTime] = useState("");
  const [imagelink, setImageLink] = useState("");

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://ph7apharmahelp.herokuapp.com/api/prescription/" + id,
      headers: {
        "Content-Type": "application/json",
        'Authorization': localStorage.getItem("token")
      },
    })
      .then((response) => {
        let data = response.data;
        console.log(data);
        setDiagnosis(data.diagnosis)
        setPatient(data.patient)
        setMedicines(data.medicines)
        setDoctor(data.doctor)
        setRemarks(data.remarks)
        setTime(data.time)
        setImageLink(data.imagelink)
      })
      .catch((err) => {
        alert("Something went wrong!");
      });
  }, []);

  console.log(imagelink)


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
                    <h5 style={{ textDecoration: 'underline', color: '#4154f1' }} className="fw-bold">Medicines </h5>
                    <hr className="dropdown-divider" />
                  </div>


                  <div className="input-group mb-3 border border-primary rounded ">
                    <span className="input-group-text" id="inputGroup-sizing-default">Doctor Username</span>
                    <h5 className="mx-3 my-2" > {patient}</h5>

                  </div>

                  <div className="input-group mb-3 border border-primary rounded ">
                    <span className="input-group-text" id="inputGroup-sizing-default">Doctor Username</span>
                    <h5 className="mx-3 my-2" > {doctor}</h5>

                  </div>
                  <div className="input-group mb-3 border border-primary rounded">
                    <span className="input-group-text px-4" id="inputGroup-sizing-default">Medicine</span>
                    <div className="form-group col-md-9 ">
                      <h5 className="mx-3 my-2" >{medicines}</h5>

                    </div>
                  </div>
                  <div className="input-group mb-3 border border-primary rounded">
                    <span className="input-group-text px-4" id="inputGroup-sizing-default">Remark</span>
                    <div className="form-group col-md-9 ">
                      <h5 className="mx-3 my-2" >{remarks}</h5>

                    </div>
                  </div>
                  <div className="input-group mb-3 border border-primary rounded">
                    <span className="input-group-text px-4" id="inputGroup-sizing-default">Diagnosis</span>
                    <div className="form-group col-md-9 ">
                      <h5 className="mx-3 my-2" >{diagnosis}</h5>

                    </div>
                  </div>
                  <div className="input-group mb-3 border border-primary rounded">
                    <span className="input-group-text px-4" id="inputGroup-sizing-default">Time</span>
                    <div className="form-group col-md-9 ">
                      <h5 className="mx-3 my-2" >{time}</h5>

                    </div>
                  </div>
                  <img src={imagelink} alt="barcoad " />

                  <hr className="dropdown-divider" />






                </div>




              </div>
            </div>
          </div>



        </div>
      </div>



    </>
  )
}


/*
{"status": "200 OK", "id":id,
"patient": thatPrescription.patient.User.username,
 "doctor": thatPrescription.doctor.User.username,
 "medicines": thatPrescription.medicines,
  "remarks": thatPrescription.remarks,
  "diagnosis": thatPrescription.diagnosis,
  "time": thatPrescription.dateTime.strftime("%m/%d/%Y, %H:%M:%S"),
"imageLink":thatPrescription.imageLink}
*/

//api/patientsprescriptions/<str:username>