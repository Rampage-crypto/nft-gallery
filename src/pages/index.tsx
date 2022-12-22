import type { NextPage } from "next";
import Head from "next/head";
import { GalleryView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>SOL Prints</title>
        <meta
          name="description"
          content="View and download your NFT images"
        />
      </Head>
      <GalleryView />
    </div>
  );
};

export default Home;
