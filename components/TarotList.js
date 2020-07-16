import React from 'react';
import {List, Card} from 'antd';
import {useSelector} from 'react-redux';

import TarotCard from "./TarotCard";

const TarotList = () => {
const {cards} = useSelector((state) => state.tarot)

    return (
        <>
        <List
            grid={{
                gutter: 16,
                xs: 4,
                md: 1,
            }}
            dataSource={cards}
            renderItem={item => (
                <List.Item>
                   <TarotCard card={item}/>
                </List.Item>
            )}
        />
        </>
    )
}

export default TarotList;