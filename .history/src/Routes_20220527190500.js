import App from './App';
import React from 'react';
import Dashboard from '../src/pages/admin/Dashboard'
import CarList from '../src/pages/admin/CarsList'
import Cars from './pages/cars'
import { Routes, Route } from 'react-router-dom';

const RouteApp = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<h1 style={{ fontSize: "48px", textAlign: "center", paddingTop: "250px" }}>Error 404</h1>} />
                <Route path='/cars' element={<Cars />} />
                <Route path='/carlist' element={<CarList />} />
            </Routes>
        </>
    )
}

export default RouteApp;