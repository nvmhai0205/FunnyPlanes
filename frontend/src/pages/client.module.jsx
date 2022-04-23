import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/header.component";
import Home from "./home/home.page";

function Client() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="*" element={<Navigate to="/" replace/>}/>
            </Routes>
        </>
    );
}

export default Client;
