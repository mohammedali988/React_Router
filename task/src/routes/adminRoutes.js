import FirstAdminPage from '../page/admin/firstAdminPage'
import SecondAdminPage from '../page/admin/secondAdminPage'
import ThirdAdminPage from '../page/admin/thirdAdminPage'
import React from 'react';
import { Route, Routes } from 'react-router';



const AdminRoutes = () => {
    return (
    <>
        <Route index element={<FirstAdminPage/>}/>
        <Route path="second" element={<SecondAdminPage/>} />
        <Route  element={<ThirdAdminPage/>} path="third"/>
    </>
    )
}

export default AdminRoutes