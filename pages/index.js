import Head from "next/head";
import Navbar from "../components/Navbar";
import Timeline from "../components/Timeline";
import Trending from "../components/Trending";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
        <title>Home / Twitter</title>
        <link rel="icon" type="image/x-icon" href="/twitter.ico" />
      </Head>
      <div className="flex flex-row relative justify-center w-full min-h-screen h-full">
        <Navbar />
        <Timeline />
        <Trending />
      </div>
    </>
  );
}
