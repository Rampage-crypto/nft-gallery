import type { NextPage } from "next";
import Head from "next/head";
import { GalleryView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana NFT Gallery</title>
        <meta name="description" content="View and download Solana NFTs" />
      </Head>
      <GalleryView />
    </div>
  );
};

export default Home;
