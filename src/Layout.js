import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div
      className="min-h-screen flex"
      style={{
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/graphy.png")',
        fontFamily: '"Comic Sans MS", cursive, sans-serif',
        color: "#000080",
      }}
    >
      {/* Sidebar Navigation */}
      <aside
        className="w-64 p-4 border-r border-blue-300 bg-yellow-100"
        style={{
          minHeight: "100vh",
        }}
      >
        <h2 className="text-xl font-bold mb-6 text-center">Jump To Recipe</h2>
        <nav className="flex flex-col space-y-4">
          <Link to="/" className="hover:underline text-blue-800">
            🏠 Home
          </Link>
          <Link to="/recipes" className="hover:underline text-blue-800">
            📋 Recipes
          </Link>
          <Link to="/about" className="hover:underline text-blue-800">
            📖 About
          </Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col">
        {/* Under Construction GIF at the top */}
        <div className="text-center mt-4">
          <img
            src="http://www.infraredheatingscotland.com/wp-content/uploads/2021/01/construction_8.gif"
            alt="Under Construction"
            style={{ width: "600px", marginTop: "10px" }}
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
        </footer>
      </div>
    </div>
  );
}

export default Layout;
