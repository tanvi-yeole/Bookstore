import React from "react";
import Banner from "../pages/Banner";
import Footer from "../components/Footer";
import Freebook from "../components/Freebook";
import Navbar from "../components/Navbar";
function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Freebook />
      <Footer />
    </>
  );
}

export default Home;
