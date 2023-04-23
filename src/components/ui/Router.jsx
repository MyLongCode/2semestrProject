import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Main from '../Main/Main'
import Registration from "../Registration/Registration";
import Login from '../Login/Login';
import { useState } from 'react';
import Profile from '../Profile/Profile';

const Router = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);  

    return <BrowserRouter>
        <Routes>
            <Route element={<Registration/>} path='/registration' />
            <Route path='/login'
            element={<Login/>}/>
            <Route element={<Profile/>} path='/profile/:id' />
            <Route element={<Main/>} path='/' />
            <Route path='*' element={<div>Not Found</div>}/>
        </Routes>
    </BrowserRouter>
}

export default Router