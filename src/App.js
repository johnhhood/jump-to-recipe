import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import About from "./components/About";
import Home from "./components/Home";


function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipes" element={<RecipeList />} />
          <Route path="recipe/:id" element={<RecipeDetail />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
