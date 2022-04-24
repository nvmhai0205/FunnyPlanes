import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../components/header/header.component";
import Home from "./home/home.page";
import MyCollections from "./mycollections/mycollections.page";

const Client = ({data}) => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mycollections" element={<MyCollections collections = {data.collections}/>} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
}

export default Client;
