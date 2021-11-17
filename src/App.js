import React from "react";
import Hero from "./Hero";
import Submenu from "./Submenu";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Submenu />
      <Hero />
    </div>
  );
}

export default App;
