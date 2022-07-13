import React from 'react'
import Account from './Pages/Account'
import Explore from './Pages/Explore'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import NotFound from './Pages/NotFound'


function Pages(props) {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home mode={props.mode} />} />
                    <Route path={'/home'} element={<Home mode={props.mode} />} />
                    <Route path={'/login'} element={<Login mode={props.mode} />} />
                    <Route path={'/signup'} element={<Signup mode={props.mode} />} />
                    <Route path={`/account/:userID`} element={<Account mode={props.mode} />} />
                    <Route path={'/explore'} element={<Explore mode={props.mode} />} />
                    <Route path={'*'} element={<NotFound mode={props.mode} />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Pages
