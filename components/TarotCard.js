import React from 'react';
import {Card} from "antd";
import PropTypes from "prop-types";
import AppLayout from "./AppLayout";
import styled from "@emotion/styled";
import {TheFool} from "../commons/cardImages";

const {Meta} = Card;

const CardWrapper = styled(Card)`
    width: 240px;
`;

const TarotCard = ({card}) => {
    return(
        <CardWrapper hoverable
              cover={<img alt={card.nameKr} src={TheFool}
              />}>
            <Meta title={card.nameKr} description={card.nameEn}  />
        </CardWrapper>
    )
}

AppLayout.protoTypes = {
    card : PropTypes.object.isRequired,
}

export default TarotCard;