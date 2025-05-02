import React, { useState } from "react";
import { Link } from "react-router-dom";
import recipes from '../data/recipes';

function RecipeList() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">Jump to Recipe</h1>
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search recipes..."
          className="p-2 border rounded-lg w-3/4 sm:w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
            <Link to={`/recipe/${recipe.id}`} className="block">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{recipe.title}</h2>
              <ul className="list-none mb-4">
                {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
                  <li key={index} className="text-gray-600 text-sm">
                    {ingredient}
                  </li>
                ))}
              </ul>
              <p className="text-blue-600 text-sm font-semibold">View Full Recipe →</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
