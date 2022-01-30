import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
const HomePage = () => {
  return (
    <main>
      <Navbar />
      <Sidebar></Sidebar>
      <h1>home page</h1>
    </main>
  );
};

export default HomePage;
