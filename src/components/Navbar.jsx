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
            margin-right: 14px;
            width: 24px;
            height: 24px;
            cursor: pointer;
        }
        .logo {
            color: white;
            font-size: 24px;
            font-weight: bold;
            text-decoration: none;
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
                    <Link to="/" className="logo">SeaFood</Link>
                </div>
            </Nav>
        </React.Fragment>
    )
}

export default Navbar;