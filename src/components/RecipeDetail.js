import React from "react";
import { useParams } from "react-router-dom";
import recipes from '../data/recipes';

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

export default RecipeDetail;
