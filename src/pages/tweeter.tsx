import type { NextPage } from "next";
import Head from "next/head";
import { SolanaTweeterView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana Tweeter!</title>
        <meta name="description" content="Solana Tweeter" />
      </Head>
      <SolanaTweeterView />
    </div>
  );
};

export default Home;
