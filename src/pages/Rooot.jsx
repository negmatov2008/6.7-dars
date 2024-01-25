import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Navbar />
      <main className="flex ">
        <Sidebar />
        <Outlet />
      </main>
    </>
  );
}

export default Root;
