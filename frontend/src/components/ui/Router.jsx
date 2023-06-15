import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Main from '../Main/Main'
import Registration from "../Registration/Registration";
import Login from '../Login/Login';
import { useState } from 'react';
import Profile from '../Profile/Profile';
import Player from '../Player/player';
import Chat from '../Chat/chat';


const Router = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);  

    return <BrowserRouter>
        <Routes>
            <Route element={<Registration/>} path='/registration' />
            <Route element={<Player/>} path='/player' />
            <Route path='/login'
            element={<Login/>}/>
            <Route element={<Profile/>} path='/profile/:id' />
            <Route element={<Main/>} path='/' />
            <Route path='*' element={<div>Not Found</div>}/>
            <Route element={<Chat/>} path='/chat' />
        </Routes>
    </BrowserRouter>
}

export default Router