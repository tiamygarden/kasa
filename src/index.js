import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {BrowserRouter} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import routesPath from "./router/router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Navbar/>
            {routesPath}
            <Footer/>
        </BrowserRouter>
    </React.StrictMode>
);


