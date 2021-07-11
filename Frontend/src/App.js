import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Landingmain from "./landingpage/landingmain";
import Doctorlogin from "./loginandsignup/doctorlogin.js";
import Doctorsignup from "./loginandsignup/doctorsignup.js";
import Aboutus from "./aboutus/about";

import Presciptionforpat from "./patprescriptionpage/presciptionforpat";
import Doctor from "./patprescriptionpage/patpresciptionwithadd";
import Createprescription from "./createprescriptionpage/createprescription";
import Medicine from "./Medicine/Medicine";
import Prescription from "./Prescription/Prescription";




function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landingmain}></Route>
          <Route exact path="/login" component={Doctorlogin}></Route>
          <Route exact path="/patientsignup" component={Doctorsignup}></Route>
          <Route exact path="/aboutus" component={Aboutus}></Route>
          <Route exact path="/patient" component={Presciptionforpat}></Route>
          <Route exact path="/createprescription" component={Createprescription}></Route>
          <Route exact path="/doctor" component={Doctor}></Route>
          <Route exact path="/medicine/:id" component={Medicine}></Route>     
          <Route exact path="/prescription/:id" component={Prescription}></Route>        
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
