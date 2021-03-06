import React from 'react';
import styled from "styled-components";
import { AiOutlineMenu, AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Nav = styled.nav`
    background-color: #6200ea;
    color: white;
    height: 64px;
    display: flex;
    align-items: center;
    user-select: none;
    .container {
        display: flex;
        align-items: center;
        .icon {
            margin-right: 24px;
            width: 24px;
            height: 24px;
            cursor: pointer;
        }
        .logo {
            color: white;
            font-size: 24px;
            font-weight: bold;
            text-decoration: none;
            display: flex;
            align-items: center;
            img {
                height: 32px;
                width: 32px;
                margin-right: 6px;
            }
        }
    }
`;

const Navbar = ({ handleSidebar, sidebar }) => {
    return (
        <React.Fragment>
            <Nav>
                <div className="container">
                    {!sidebar ? 
                        <AiOutlineMenu onClick={handleSidebar} className="icon" /> : 
                        <AiOutlineArrowLeft onClick={handleSidebar} className="icon" 
                    />}
                    <Link to="/" className="logo"><img src="/images/icons/icon-512x512.png" alt="SeaFood Logo"/>SeaFood</Link>
                </div>
            </Nav>
        </React.Fragment>
    )
}

export default Navbar;