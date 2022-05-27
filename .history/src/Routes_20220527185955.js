import App from './App';
import React from 'react';
import Dashboard from '../src/pages/admin/Dashboard'
import Cars from './pages/cars'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const RouteApp = () => {

    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<h1 style={{ fontSize: "48px", textAlign: "center", paddingTop: "250px" }}>Error 404</h1>} />
                <Route path='/cars' element={<Cars />}></Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default RouteApp;