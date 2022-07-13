import React from 'react'
import Account from './Pages/Account'
import Explore from './Pages/Explore'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function Pages() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/home'} element={<Home />} />
                    <Route path={'/login'} element={<Login />} />
                    <Route path={'/signup'} element={<Signup />} />
                    <Route path={`/account/:userID`} element={<Account />} />
                    <Route path={'/explore'} element={<Explore />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Pages
