import FirstTalentPage from '../page/talent/firstTalentPage'
import SecondTalentPage from '../page/talent/secondTalentPage'
import ThirdTalentPage from '../page/talent/thirdTalentPage'
import React from 'react';
import { Route, Routes } from 'react-router';



const AdminRoutes = () => {
    return (
    <>
        <Route index element={<FirstTalentPage/>}/>
        <Route path="second" element={<SecondTalentPage/>} />
        <Route  element={<ThirdTalentPage/>} path="third"/>
    </>
    )
}

export default AdminRoutes