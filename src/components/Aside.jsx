import React from 'react';
import styled from 'styled-components';

const AsideDOM = styled.aside`
    border-right: 1px solid #dedede;
    transition: all .2s ease-in-out;
`;

const Aside = ({ sidebar }) => {
    return (
        <AsideDOM style={{transform: sidebar ? 'translateX(0%)' : 'translateX(-100%)'}}>
            <ul>
                <ListItem />
                <ListItem />
                <ListItem />
            </ul>
        </AsideDOM>
    )
}

export default Aside;

const Li = styled.li`
    display: flex;
    margin: 20px auto;
    height: 80px;
    padding-inline: 16px;
    overflow: hidden;
    cursor: pointer;
    img {
        width: 80px;
        height: 80px;
    }
    .info {
        margin-left: 6px;
        .title {
            margin-bottom: 6px;
        }
        .des {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 250px;
        }
    }
    :first-child {
        margin-top: 14px;
    }
`;

const ListItem = () => {
    return (
        <Li>
            <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6723522.jpg" alt="Octopus"/>
            <div className="info">
                <h3 className="title">Grilled Octopus</h3>
                <p className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aspernatur eos reiciendis quos illum eveniet earum tenetur voluptas est ipsam debitis ea expedita quaerat doloribus ipsum dolore totam nostrum. Perspiciatis.</p>
            </div>
        </Li>
    )
}