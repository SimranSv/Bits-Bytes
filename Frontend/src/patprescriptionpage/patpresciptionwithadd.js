import React, { useState, useEffect } from 'react'
import Header from "../landingpage/header";
import axios from 'axios';
import { NavLink } from 'react-router-dom';


const Patpresciptionwithadd = () => {
    const [data, setData] = useState([]);
   
    if(localStorage.getItem("type") != "Doctor")
    {
        alert("Access Denied")
        window.location ="/";
    }
    
  


    //api/doctorsprescriptions/<str:username>

    useEffect(() => {
        axios({
            method: "GET",
            url: "https://ph7apharmahelp.herokuapp.com/api/doctorsprescriptions/"+localStorage.getItem("username"),
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

        //data

        // const theList = data.map((instance) => {
            
        // })

        // let theList = []

        // for(let i=0; i<data.length; i++)
        // {
        //     theList.push(<div className="row shadow p-3 mb-5 rounded" >
        //         <div className="col-md-9">
        //             <div className=" ">
        //                 <h5 style={{ textDecoration: 'underline', color: '#4154f1' }} className="fw-bold">Medicine List</h5>
        //                 <h5>{data[i].medicines}</h5>
        //                 <hr className="dropdown-divider" />
        //             </div>
        //             <div className=" ">
        //                 <h5 style={{ textDecoration: 'underline', color: '#4154f1' }} className="fw-bold">Diagnosic</h5>

        //                 <h5>{data[i].diagnosis}</h5>
        //                 <hr className="dropdown-divider" />
        //             </div>
        //             <div className=" ">
        //                 <h5 style={{ textDecoration: 'underline', color: '#4154f1' }} className="fw-bold">remark</h5>
        //                 <h5>{data[i].remarks}</h5>
        //             </div>
        //         </div>
        //         <div className="col-md-3">
        //             <div className=" ">
        //                 <h5 style={{ textDecoration: 'underline', color: '#4154f1' }} className="fw-bold">Date</h5>
        //                 <h5>{data[i].dateTime} </h5>
        //             </div>
        //             <div className=" ">
        //                 <h5 style={{ textDecoration: 'underline', color: '#4154f1' }} className="fw-bold">Patient</h5>
        //                 <h5>{data[i].patient} </h5>
        //             </div>
        //         </div>
        //     </div>)
        // }

    
    return (
        <>
            <Header />
            <div className=" mx-5" style={{ marginTop: "7%" }}>
                <div className="mx-5 grid">
                    <div className="col-md-12 border rounded border-primary  ">
                        <h4 className="my-4 fw-bold mx-4" >Doctor Username :  <span>{localStorage.getItem("username")}</span> </h4>

                    </div>

                    <div className="d-grid  col-3 mx-auto mt-3 "  >
                        <NavLink exact to='/createprescription'>
                            <button className="btn btn-primary mt-4 "> <h5 className="fw-bold my-1">  Add Presciption </h5> </button>
                        </NavLink>
                    </div>



                    {/* <div className="col-md-12 my-3">

                        <div className="row shadow p-3 mb-5 rounded"  >
                            <div className="col-md-9">
                                <div className=" ">
                                    <h5 style={{ textDecoration: 'underline', color: '#4154f1' }} className="fw-bold">Medicine List</h5>
                                    <h5>this is medicin</h5>
                                    <hr className="dropdown-divider" />
                                </div>
                                <div className=" ">
                                    <h5 style={{ textDecoration: 'underline', color: '#4154f1' }} className="fw-bold">Diagnosics</h5>

                                    <h5>this is Diagnosis</h5>
                                    <hr className="dropdown-divider" />
                                </div>
                                <div className=" ">
                                    <h5 style={{ textDecoration: 'underline', color: '#4154f1' }} className="fw-bold">remark</h5>
                                    <h5>this is remark</h5>
                                </div>
                        </div>



                    <div className="col-md-3">
                                <div className=" ">
                                    <h5 style={{ textDecoration: 'underline', color: '#4154f1' }} className="fw-bold" >Date</h5>
                                    <h5>21/12/1212</h5>
                                </div>
                            </div>
                        </div>

                    </div> */}




                    {/* <div>
                        {
                            theList.map((item, index) => (item))
                        }
                    </div> */}


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
                                             <NavLink exact to="'/prescription/'+{curele.id}" >
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

export default Patpresciptionwithadd;
