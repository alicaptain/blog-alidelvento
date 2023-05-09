import React from "react";
import Header from "../components/Header";
import Tales from "../components/tales/Tales";

export default function Home() {
  return (
    <>
      <main className="home-page main">
        <Header />
        Home Page
        <Tales />
      </main>
    </>
  );
}
