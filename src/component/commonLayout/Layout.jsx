import React from "react";

import Header from "./Header";
import Footer from "./Footer";

import "./layout.css"


const Layout = ({ children }) => {
    return (
        <div className="blog-layout">
            <Header />
            <main className="blog-main">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;

export const Head = () => <title>asdasdasdasd</title>
