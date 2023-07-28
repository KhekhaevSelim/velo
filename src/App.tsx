import React, {useState} from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Login from "./UI/Components/Auth/Login/Login";
import VeloSite from "./UI/Components/VeloSite/VeloSite";
import Register from "./UI/Components/Auth/Register/Register";
import Cabinet from "./UI/Components/Cabinet/Cabinet";



function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<VeloSite/>}/>
                <Route path={"/velo"} element={<VeloSite/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/register"} element={<Register/>}/>
                <Route path={"/cabinet"} element={<Cabinet/>}/>
            </Routes>
        </div>

    );
}

export default App;
