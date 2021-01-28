import React from 'react';
import styled from "styled-components";
import { AiOutlineMenu, AiOutlineArrowLeft } from "react-icons/ai";

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
                    <h1 className="logo">SeaFood</h1>
                </div>
            </Nav>
        </React.Fragment>
    )
}

export default Navbar;