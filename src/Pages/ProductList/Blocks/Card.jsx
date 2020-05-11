import React, {useState} from 'react'
import { Card as CardComponent } from 'antd';
import ReactCardFlip from "react-card-flip";
import {Link} from "react-router-dom";
import {TextBold} from './styles';

const { Meta } = CardComponent;

export const Card = ({el}) => {

    const [isFlipped, changeFlipped] = useState(false);
    const onChangeFlipped = () => changeFlipped(!isFlipped);

    return(
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <CardComponent
                key={el.id}
                hoverable
                cover={<img alt="example" src={el.image} style={{height: 300}} />}
                onClick={onChangeFlipped}
            >

                <Link to="/details"><Meta title={el.name} /></Link>
                <TextBold>Hello</TextBold>
            </CardComponent>

            <CardComponent
                key={el.id}
                hoverable
                cover={<img alt="example" src={el.image} style={{height: 300}} />}
                onClick={onChangeFlipped}
            >

                <Link to="/details"><Meta title="BACK" /></Link>
            </CardComponent>
        </ReactCardFlip>
    )
};