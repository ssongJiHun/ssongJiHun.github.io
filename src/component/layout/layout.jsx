import React from "react";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
    return (
        <div className="blog-wrapper">
            <Header />
            <main className="blog-content-wrapper">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;
