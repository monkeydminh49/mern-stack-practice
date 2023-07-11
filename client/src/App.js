// import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div>Hello</div>}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </BrowserRouter>
    )

}

export default App;