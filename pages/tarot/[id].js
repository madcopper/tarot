import React from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { Card, Typography, Space } from "antd";

import { getCard } from "../../reducers/tarot";
import AppLayout from "../../components/AppLayout";

const { Title, Paragraph, Text } = Typography;

const tarotDetail = () => {
  const { Meta } = Card;
  const router = useRouter();
  const { id } = router.query;
  const tarotCardArray = getCard(id);
  const tarotCard = tarotCardArray[0];

  return (
    <AppLayout>
      <Card cover={<img alt="example" src={tarotCard.images.frontSrc} />}>
        <Meta title={tarotCard.nameEn} description={tarotCard.nameKr} />
      </Card>
      <Title strong>이미지 묘사</Title>
      <Paragraph direction="vertical">
        {tarotCard.description.text.split("\n").map((text, idx) => (
          <Paragraph key={idx}>{text}</Paragraph>
        ))}
      </Paragraph>
      <Title strong>정방향</Title>
      <Title level={3}>이미지 해석</Title>
      <Paragraph direction="vertical">
        {tarotCard.description.forward.text.split("\n").map((text, idx) => (
          <Paragraph key={idx}>{text}</Paragraph>
        ))}
      </Paragraph>
      <Title level={3}>키워드</Title>
      <Space direction="vertical">
        <Paragraph>
          기본 키워드 : {tarotCard.description.forward.keyword.basic}
        </Paragraph>
        <Paragraph>
          애정 : {tarotCard.description.forward.keyword.love}
        </Paragraph>
        <Paragraph>
          금전 : {tarotCard.description.forward.keyword.money}
        </Paragraph>
        <Paragraph>
          건강 : {tarotCard.description.forward.keyword.health}
        </Paragraph>
        <Paragraph>
          직업 : {tarotCard.description.forward.keyword.job}
        </Paragraph>
      </Space>
      <Title level={4}>설명</Title>
      <Paragraph direction="vertical">
        {tarotCard.description.reversal.text.split("\n").map((text, idx) => (
          <Paragraph key={idx}>{text}</Paragraph>
        ))}
      </Paragraph>
      <Title strong>역방향</Title>
      <Title level={3}>이미지 해석</Title>
      <Paragraph direction="vertical">
        {tarotCard.description.reversal.text.split("\n").map((text, idx) => (
          <Paragraph key={idx}>{text}</Paragraph>
        ))}
      </Paragraph>
      <Title level={3}>키워드</Title>
      <Space direction="vertical">
        <Paragraph>
          기본 키워드 : {tarotCard.description.reversal.keyword.basic}
        </Paragraph>
        <Paragraph>
          애정 : {tarotCard.description.reversal.keyword.love}
        </Paragraph>
        <Paragraph>
          금전 : {tarotCard.description.reversal.keyword.money}
        </Paragraph>
        <Paragraph>
          건강 : {tarotCard.description.reversal.keyword.health}
        </Paragraph>
        <Paragraph>
          직업 : {tarotCard.description.reversal.keyword.job}
        </Paragraph>
      </Space>
      <Title level={4}>설명</Title>
      <Paragraph>
        {tarotCard.description.reversal.keyword.text
          .split("\n")
          .map((text, idx) => (
            <Paragraph key={idx}>{text}</Paragraph>
          ))}
      </Paragraph>
    </AppLayout>
  );
};

tarotDetail.protoTypes = {
  id: PropTypes.number,
};

export default tarotDetail;
