import './App.css';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import { Fragment } from 'react';

// Pages
import Home from "./pages/home";
import Love from "./pages/love";
import Hu from "./pages/hu";

function App() {
    const location = useLocation();

    return (
        <Fragment>
            {
                (location.pathname === "/" ||
                location.pathname === "/love" ||
                location.pathname === "/poule-hu") ? null : <Navigate to="/" />
            }
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/love" element={<Love />} />
                <Route path="/poule-hu" element={<Hu />} />
            </Routes>
        </Fragment>
    );
};

export default App;
