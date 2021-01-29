import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ArticleContainer = styled.div`
    padding: 14px;
    header {
        display: flex;
        flex-wrap: wrap;
        column-gap: 24px;
        img {
            width: 300px;
            margin-bottom: 2rem;
        }
        .info {
            max-width: 500px;
            h1 {
                font-size: 2rem;
                margin-bottom: 8px;
            }
        }
    }
    @media (max-width: 768px) {
        header > img {
            width: 70%;
        }    
    }
    .ing,
    .steps {
        h1 {
            margin-top: 1.5rem;
            font-size: 1.5rem;
        }
        ul,
        ol {
            margin-top: 1rem;
            li {
                margin: .5rem 2rem;
            }
        }
    }
`;

const Article = ({ match, recipes }) => {
    const [recipe, setRecipe] = useState(recipes[0]);
    useEffect(() => {
        const name = match.params.name;
        for (let i = 0; i < recipes.length; i++) {
            if (recipes[i].name === name) {
                setRecipe(recipes[i]);
                break;
            };
        };
    }, [match.params.name, recipes]);

    return (
        <ArticleContainer>
            <header>
                <img src={recipe?.image.url} alt={recipe?.name} />
                <section className="info">
                    <h1>{recipe?.name}</h1>
                    <p>{recipe?.description}</p>
                </section>
            </header>
            <section className="ing">
                <h1>Ingredients</h1>
                <ul>
                    {recipe?.recipeIngredient.map((ing, i) => {
                        return <li key={i}>{ing}</li>
                    })}
                </ul>
            </section>
            <section className="steps">
                <h1>Steps</h1>
                <ol>
                    {recipe?.recipeInstructions.map((step, i) => {
                        return <li key={i}>{step.text}</li>
                    })}
                </ol>
            </section>
        </ArticleContainer>
    )
}

export default Article;