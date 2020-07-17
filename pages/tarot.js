import React from "react";
import AppLayout from "../components/AppLayout";

import TarotList from "../components/TarotList";
import Head from "next/head";

const Tarot = () => {
  return (
    <>
      <Head>
        <title>타로카드 | 타로하는 사자처럼</title>
      </Head>
      <AppLayout>
        <TarotList header="타로카드 리스트" />
      </AppLayout>
    </>
  );
};

export default Tarot;
