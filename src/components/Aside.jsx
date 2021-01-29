import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const AsideDOM = styled.aside`
    border-right: 1px solid #dedede;
    transition: all .2s ease-in-out;
`;

const Aside = ({ sidebar, recipes }) => {
    const dynamicStyle = {
        transform: sidebar ? 'translateX(0%)' : 'translateX(-100%)'
    }

    return (
        <AsideDOM style={dynamicStyle}>
            <ul>
                {recipes && recipes.map((recipe, i) => {
                    return <ListItem recipe={recipe} key={i} />
                })}
            </ul>
        </AsideDOM>
    )
}

export default Aside;

const Li = styled.li`
    a {
        display: flex;
        margin: 20px auto;
        height: 80px;
        padding-inline: 16px;
        overflow: hidden;
        cursor: pointer;
        text-decoration: none;
        img {
            width: 80px;
            height: 80px;
        }
        .info {
            margin-left: 10px;
            width: 240px;
            .title {
                display: block;
                margin-bottom: 6px;
                font-size: 18px;
                font-weight: bold;
                color: #222;
                text-decoration: none;
            }
            .title:hover {
                text-decoration: underline;
            }
            .des,
            .ing,
            .title {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .des {
                color: #444;
            }
            .ing {
                color: #555;
                font-weight: 300;
            }
        }
        :first-child {
            margin-top: 14px;
        }
    }
`;

const ListItem = ({ recipe }) => {
    return (
        <Li>
            <Link to={recipe.name}>
                <img src={recipe.image.url} alt={recipe.name} />
                <div className="info">
                    <p className="title">{recipe.name}</p>
                    <p className="des">{recipe.description}</p>
                    <div className="ing">{recipe.recipeIngredient[0]}</div>
                </div>
            </Link>
        </Li>
    )
}