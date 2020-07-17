import React from "react";
import { Card } from "antd";
import PropTypes from "prop-types";
import AppLayout from "./AppLayout";
import styled from "@emotion/styled";
import TarotCardImages from "../commons/cardImages";
import Link from "next/link";

const { Meta } = Card;

const CardWrapper = styled(Card)`
  width: 240px;
`;

const TarotCard = ({ card }) => {
  console.log(card);
  return (
    <Link href={`/tarot/${card.id}`} prefetch={false}>
      <a>
        <CardWrapper
          hoverable
          cover={
            <img
              alt={card.nameKr}
              src={card.images.frontSrc}
              // src={TarotCardImages[card.images.frontSrc]}
            />
          }
        >
          <Meta title={card.nameKr} description={card.nameEn} />
        </CardWrapper>
      </a>
    </Link>
  );
};

AppLayout.protoTypes = {
  card: PropTypes.object.isRequired,
};

export default TarotCard;
