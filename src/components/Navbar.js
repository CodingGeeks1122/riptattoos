import React, { useState } from 'react';
import styled, { css } from 'styled-components/macro';
import {Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
// import { Button } from './Button';
import {FaBars} from 'react-icons/fa';


const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background-color: transparent;
`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height:100%;
    cursor: pointer;
    text-decoration: none;
`;

const Logo = styled(Link)`
    ${NavLink}
    color: #fff;
    font-style: italic;
    color: yellow;
    font-size: 30px;
    font-weight: bolder;
`;

const MenuBars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        height: 30px;
        width: 30px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        color: white;
        transform: translate(-50%, 50%);
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const Navbar = ({toggle}) => {
    const [colorBgChange, setBgColorchange] = useState(false);
    const changeNavbarBgColor = () =>{
        if(window.scrollY >= 80){
        setBgColorchange(true);
        }
        else{
        setBgColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarBgColor);
    return (
        <Nav className={colorBgChange ? 'navbar colorChange' : 'navbar'}>
            <Logo to="#">RIP Tattoos</Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item} key={index} >
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            {/* <NavBtn>
                <a class="mailto" color='red' href="mailto:riptattoos09@gmail.com">Contact Us</a>
            </NavBtn> */}
            <NavBtn> <p style={{fontSize:'20px', color:"yellow "}}>Contact Us &#xf095; 8527915558</p></NavBtn>
           
        </Nav>
    )
}

export default Navbar;
