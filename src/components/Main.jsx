import React from 'react';
import styled from "styled-components";
import Aside from './Aside';

const sidebarWidth = '360px';

const MainDOM = styled.main`
    display: grid;
    grid-template-columns: ${sidebarWidth} auto;
    min-height: calc(100vh - 64px);
`;

const ArticleDOM = styled.article`
    transition: all .2s ease-in-out;
`;

const Main = ({ sidebar }) => {
    return (
        <MainDOM>
            <Aside 
                sidebar={sidebar}
            />
            <ArticleDOM style={{width: !sidebar ? `calc(100% + ${sidebarWidth})` : `100%`, transform: sidebar ? `translateX(0px)` : `translateX(-${sidebarWidth})`}}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti dolorem dolore quos provident eveniet repudiandae culpa, ipsa cum non obcaecati voluptatem dicta fugit quia, atque nemo reiciendis quasi deleniti iusto!</p>
            </ArticleDOM>
        </MainDOM>
    )
}

export default Main;