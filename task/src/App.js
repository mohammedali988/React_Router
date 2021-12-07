import './App.css';
import React from 'react';
import { useState } from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Route, Routes } from "react-router";
import FourthEmployeePage from './page/employee/fourthEmployeePage';
import AdminRoutes from './routes/adminRoutes';
import EmployeeRoutes from './routes/employeeRoutes';
import TalantRoutes from './routes/talentRoutes'
import Home from "./page/home"


function App() {
  const [role, setRole] = useState('employee');

  return (
    <div className="App">

      <BrowserRouter>
        { role === 'admin' || 'employee' ?
          <Routes>
            <Route element={<FourthEmployeePage />} path="/SharedBtwAdminEmoployee">
            </Route>
          </Routes>
           : role === 'admin' ?
             <Routes>
                <Route path="/admin" >
                  {AdminRoutes()}
                </Route> 
             </Routes> : role === 'employee' ? 
             <Routes path = "/employee" >
               {EmployeeRoutes()}
             </Routes>
             : role === 'talant' ? 
             <Routes path = "/talent">
               <TalantRoutes />
             </Routes> :
              <Routes>
                <Route element={< Home />} path="/"/>
              </Routes>
           }
          
      </BrowserRouter>

    </div>
  );
}

export default App;
