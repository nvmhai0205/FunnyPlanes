import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../components/header/header.component";
import Home from "./home/home.page";
import Project from "./project/project.page";

function Client() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<Project />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
}

export default Client;
