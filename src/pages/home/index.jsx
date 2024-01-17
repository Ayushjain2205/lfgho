import React from "react";
import Layout from "../../components/Layout/Layout";
import Link from "next/link";

const index = () => {
  return (
    <Layout>
      <Link href="/home/points">Points</Link>
      <Link href="/home/rewards">Rewards</Link>
      <Link href="/home/liquidity">Liquidity</Link>
      <Link href="/home">View all</Link>
    </Layout>
  );
};

export default index;
