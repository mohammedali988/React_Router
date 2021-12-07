import FirstEmployeePage from '../page/employee/firstEmployeePage'
import SecondEmployeePage from '../page/employee/secondEmployeePage'
import ThirdEmployeePage from '../page/employee/thirdEmployeePage'
import React from 'react';
import { Route, Routes } from 'react-router';



const AdminRoutes = () => {
    return (
    <>
        <Route index element={<FirstEmployeePage/>}/>
        <Route path="second" element={<SecondEmployeePage/>} />
        <Route  element={<ThirdEmployeePage/>} path="third"/>
    </>
    )
}

export default AdminRoutes