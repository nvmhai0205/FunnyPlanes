import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../components/header/header.component";
import Home from "./home/home.page";
import Project from "./project/project.page";
import MyCollections from "./mycollections/mycollections.page";
import Ranking from "../components/ranking/ranking.component";
function Client() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<Project />} />
                <Route path="/rank" element={<Ranking />} />
                <Route path="/mycollections" element={<MyCollections />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            
        </>
    );
}

export default Client;
