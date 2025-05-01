import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";

const recipes = [
  {
    id: 1,
    title: "Simple Spaghetti",
    ingredients: ["200g spaghetti", "1 can crushed tomatoes", "2 cloves garlic", "Salt", "Olive oil"],
    steps: [
      "Boil water and cook spaghetti until al dente.",
      "In a pan, heat olive oil and sauté garlic.",
      "Add tomatoes, simmer for 10 mins, add salt to taste.",
      "Drain pasta, combine with sauce, serve hot."
    ]
  },
  {
    id: 2,
    title: "Basic Pancakes",
    ingredients: ["1 cup flour", "1 cup milk", "1 egg", "2 tbsp sugar", "1 tsp baking powder", "Pinch of salt"],
    steps: [
      "Mix dry ingredients in a bowl.",
      "Whisk in milk and egg until smooth.",
      "Heat pan, pour batter, cook both sides until golden.",
      "Serve with syrup or toppings of choice."
    ]
  }
];

function RecipeList() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Recipes</h1>
      <ul className="space-y-2">
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`} className="text-blue-600 hover:underline">
              {recipe.title}
            </Link>
          </li>
        ))}
      </ul>
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
