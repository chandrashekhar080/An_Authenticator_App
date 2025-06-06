// src/pages/Home/Home.jsx
import React from "react";
import Sidebar from "../../components/Layout/Sidebar";
import Rightbar from "../../components/Layout/Rightbar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Sidebar />
      <Rightbar />
      {/* Main content area */}
      <main className="ml-56 mr-64 p-8 min-h-screen bg-white">
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
