import React from "react";

import { Link } from 'gatsby';
import styled from '@emotion/styled';

import { blogTitle, menu } from '../../__fixture__/__fixture__';

const LogoLink = styled(Link)`
    display: flex;
    align-items: center;
`;

const Header = () => {

    return (
        <header className="blog-header-wrapper">
            <LogoLink to="/">
                <span>
                    {blogTitle}
                </span>
                <span className='gray-color' style={{ marginLeft: '5px', fontSize: '15px' }}>
                    블로그
                </span>
            </LogoLink>
            <div className="blog-header-menu">
                {menu.map((item, i) =>
                    <Link
                        className='gray-color'
                        to={item.link} key={'menu' + i}
                        activeStyle={{ color: '#000' }}
                        partiallyActive={true} >
                        {item.name}
                    </Link>
                )}
            </div>
        </header>
    )
}

export default Header;