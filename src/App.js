import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<RecipeList />} />
          <Route path="recipe/:id" element={<RecipeDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
