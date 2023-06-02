import React from "react";

import { Link } from 'gatsby';

import { menu } from '../../__fixture__/__fixture__';

const Header = () => {
    return (
        <header className="blog-header-wrapper">
            <div className="blog-header-logo">
                <Link to="/" className="link">SONG JI HUN</Link>
            </div>
            <div className="blog-header-menu">
                {menu.map((item) => {
                    return (<Link to={item.link} className="link">{item.name}</Link>)
                })}
            </div>
        </header>
    )
}

export default Header;