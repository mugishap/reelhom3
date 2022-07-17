import React, { useEffect } from 'react'
import Account from './Pages/Account'
import Explore from './Pages/Explore'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import NotFound from './Pages/NotFound'
import { deleteAllCookies, getCookie } from './Context/RequireAuth'
import { getUserById } from './Context/AuthContext'
import { useState } from 'react'


function Pages(props) {

    const [user, setUser] = useState({})

    const getUser = async () => {
        const data = await getUserById(getCookie('userID'))
        if (!data) return deleteAllCookies()
        setUser(data)
    }
    useEffect(()=>{
        if (getCookie('userID')) {
            getUser()
        }
        else{console.log("Undefined")}
    },[])

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={user !== null ? <Home mode={props.mode} user={user} /> : <Navigate replace to="/explore" />} />
                    <Route path={'/home'} element={user !== null ? <Home mode={props.mode} user={user} /> : <Navigate replace to="/explore" />} />
                    <Route path={'/login'} element={<Login mode={props.mode} />} />
                    <Route path={'/signup'} element={<Signup mode={props.mode} />} />
                    <Route path={`/account/:userID`} element={user !== null ? <Account mode={props.mode} user={user} /> : <Navigate replace to="/login" />} />
                    <Route path={'/explore'} element={<Explore mode={props.mode} />} />
                    <Route path={'*'} element={<NotFound mode={props.mode} />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Pages
