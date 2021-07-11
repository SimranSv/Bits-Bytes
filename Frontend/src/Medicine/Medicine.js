import React, { useState, useEffect } from 'react'
import axios from "axios";



export default function Medicine({
    match: {
      params: { id },
    },
  }) {

    //
    const [doctor, setDoctor] = useState("");
    const [medicines, setMedicines] = useState("");
    const [time, setTime] = useState("");
    
    

    useEffect(() => {
    axios({
        method: "GET",
        url: "https://ph7apharmahelp.herokuapp.com/api/chemistprescription/"+id,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          let data = response.data;
          //data.doctor, .time, .
            setDoctor(data.doctor)
            setMedicines(data.medicines)
            setTime(data.time)
        })
        .catch((err) => {
          alert("Something went wrong!");
          
        });
    }, []);



    return (
        <> 
            



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
                                            <h5 className="mx-3 my-2" > {doctor}</h5> 
                                            
                                        </div>
                                        <div className="input-group mb-3 border border-primary rounded">
                                            <span className="input-group-text px-4" id="inputGroup-sizing-default">Medicine</span>
                                            <div className="form-group col-md-9 ">
                                            <h5 className="mx-3 my-2" >{medicines}</h5>
                                               
                                            </div>
                                        </div>
                                       
                                        <div className="input-group mb-3 border border-primary rounded">
                                            <span className="input-group-text" id="inputGroup-sizing-default">Time</span>
                                            <h5 className="mx-3 my-2" >{time}</h5>
                                
                                        </div>
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


//doctor username - h2
//medicines text area
//time - h5

