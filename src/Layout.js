import React from "react";
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
          >
            <img
              src="https://www.freevisitorcounters.com/en/home/counter/YOUR-COUNTER-ID/t/0"
              alt="Visitor counter"
              style={{ margin: "0 auto" }}
            />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
