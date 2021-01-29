import React from 'react';
import styled from "styled-components";
import Article from './Article';
import Aside from './Aside';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const sidebarWidth = '360px';

const MainDOM = styled.main`
    display: grid;
    grid-template-columns: ${sidebarWidth} auto;
    min-height: calc(100vh - 64px);
    overflow: hidden;
`;

const ArticleDOM = styled.article`
    transition: all .2s ease-in-out;
`;

const Main = ({ sidebar, recipes }) => {
    const articleDynamicStyle = {
        width: !sidebar ? `100vw` : `100%`,
        transform: sidebar ? `translateX(0px)` : `translateX(-${sidebarWidth})`
    };
    return (
        <MainDOM>
            <Router>
                <Aside 
                    sidebar={sidebar}
                    recipes={recipes}
                />
                <ArticleDOM style={articleDynamicStyle}>
                    <Route path="/" exact component={(props) => <Article {...props} recipes={recipes} />} />
                    <Route path="/:name" component={(props) => <Article {...props} recipes={recipes} />} />
                </ArticleDOM>
            </Router>
        </MainDOM>
    )
}

export default Main;