import React from "react";

import { Link } from 'gatsby';
import styled from '@emotion/styled';

import { blogTitle, menu } from '../../__fixture__/__fixture__';

const LogoLink = styled(Link)`
    display: flex;
    align-items: center;
`;

const MenuLink = styled(Link)`
    color : #7e8686;
`;


const Header = () => {

    return (
        <header className="blog-header-wrapper">
            <LogoLink to="/">
                <span>
                    {blogTitle}
                </span>
                <span style={{ marginLeft: '5px', fontSize: '15px', color: '#7e8686' }}>
                    블로그
                </span>
            </LogoLink>
            <div className="blog-header-menu">
                {menu.map((item, i) =>
                    <MenuLink
                        to={item.link} key={'menu' + i}
                        activeStyle={{ color: '#000' }}
                        partiallyActive={true} >
                        {item.name}
                    </MenuLink>
                )}
            </div>
        </header>
    )
}

export default Header;