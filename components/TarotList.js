import React from 'react';
import {List} from 'antd';
import {useSelector} from 'react-redux';

const cards = useSelector((state) => state.tarot)

const TarotList = () => {

    return (
        <List
            grid={{
                gutter: 16,
                xs: 4,
                md: 1,
            }}
            // dataSource={cards}
            renderItem={item => (
                <List.Item>
                   {/*<TarotCard card={item}/>*/}
                </List.Item>
            )}
        />
    )
}

export default TarotList;