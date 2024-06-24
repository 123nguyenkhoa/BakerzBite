import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
const Layout = () => {
    return (
        <div className="about-page">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
