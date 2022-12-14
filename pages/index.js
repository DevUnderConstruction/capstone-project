import Head from "next/head";
import Header from "../components/Header";
import Usercard from "../components/Usercard";

export default function Home() {
  return (
    <>
      <Head>
        <title>BillyBob.io🥂</title>
      </Head>
      <Header />
      <Usercard />
    </>
  );
}
