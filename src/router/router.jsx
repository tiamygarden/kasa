import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Housing from "../pages/Housing";
import Error404 from "../pages/Error404";

const routesPath = (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing/:id" element={<Housing />}></Route>
        <Route path="*" element={<Error404 />} />
    </Routes>
);

export default routesPath;
