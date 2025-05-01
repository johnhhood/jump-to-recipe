import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";

const recipes = [
  {
    id: 1,
    title: "Spaghetti",
    ingredients: ["200g spaghetti", "1 can crushed tomatoes", "2 cloves garlic", "Salt", "Olive oil"],
    steps: [
      "Boil water and cook spaghetti until al dente.",
      "In a pan, heat olive oil and sauté garlic.",
      "Add tomatoes, simmer for 10 mins, add salt to taste.",
      "Drain pasta, combine with sauce, serve hot."
    ],
    time: "20 minutes",
    servings: 2,
    tags: ["Quick", "Vegan"]
  },
  {
    id: 2,
    title: "Pancakes",
    ingredients: ["1 cup flour", "1 cup milk", "1 egg", "2 tbsp sugar", "1 tsp baking powder", "Pinch of salt"],
    steps: [
      "Mix dry ingredients in a bowl.",
      "Whisk in milk and egg until smooth.",
      "Heat pan, pour batter, cook both sides until golden.",
      "Serve with syrup or toppings of choice."
    ],
    time: "35 minutes",
    servings: 6,
    tags: ["Hearty", "Saturday"]
  },
  // Other recipes...
];

function RecipeList() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
     <div className="p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">Recipes</h1>
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search recipes..."
          className="p-2 border rounded-lg w-3/4 sm:w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <h2 className="text-2xl font-semibold mb-4">Featured Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.slice(0, 6).map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
            <Link to={`/recipe/${recipe.id}`} className="block">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{recipe.title}</h2>
              <ul className="list-none mb-4">
                {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
                  <li key={index} className="text-gray-600 text-sm">{ingredient}</li>
                ))}
              </ul>
              <p className="text-blue-600 text-sm font-semibold">View Full Recipe →</p>
            </Link>
          </div>
        ))}
      </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredRecipes.slice(0, 6).map((recipe) => (
    <div key={recipe.id} className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
      <Link to={`/recipe/${recipe.id}`} className="block">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{recipe.title}</h2>
        <ul className="list-none mb-4">
          {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
            <li key={index} className="text-gray-600 text-sm">{ingredient}</li>
          ))}
        </ul>
        <p className="text-blue-600 text-sm font-semibold">View Full Recipe →</p>
      </Link>
    </div>
  ))}
</div>
    </a>
  </div>
</footer>

    </div>
  );
}


function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));
  if (!recipe) return <p className="p-6">Recipe not found.</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mb-2">Steps</h2>
      <ol className="list-decimal list-inside">
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
