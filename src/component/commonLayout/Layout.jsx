import React from "react";

import Header from "./header";
import Footer from "./footer";

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
