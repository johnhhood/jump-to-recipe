import React, { useState } from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/graphy.png")',
        fontFamily: '"Comic Sans MS", cursive, sans-serif',
        color: "#000080",
      }}
    >
     {/* Under Construction GIF at the top */}
      <div className="text-center mt-4">
        <img
          src="https://www.cameronsworld.net/img/under-construction/14.gif"
          alt="Under Construction"
          style={{ width: "100px", marginTop: "10px" }}
        />
      </div>
      
      <main className="flex-grow">
        <Outlet />
      </main>

      <footer
        className="w-full text-center border-t py-4 sticky bottom-0 z-50"
        style={{
          backgroundColor: "#ffffcc",
          borderTop: "2px dashed #ff69b4",
          boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <marquee behavior="scroll" direction="left" scrollamount="6">
          ✨ Welcome to Jump To Recipe — No Life Stories, Just Recipes ✨
        </marquee>
       <div style={{ marginTop: "8px" }}>
    <a
      href="https://www.freevisitorcounters.com"
      target="_blank"
      rel="noreferrer"
      style={{ color: "#000080", textDecoration: "underline" }}
    >
      click here
    </a>
    <script
      type="text/javascript"
      src="https://www.freevisitorcounters.com/auth.php?id=cd60322bb37f40095b5f584a92d0a76b20ece004"
    ></script>
    <script
      type="text/javascript"
      src="https://www.freevisitorcounters.com/en/home/counter/1334926/t/13"
    ></script>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
