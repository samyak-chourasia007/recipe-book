import React, { useState } from "react";
import "./RecipeFinder.css"; // We'll create this for extra styling

export default function RecipeFinder() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  // Example recipe database
  const recipes = [
    {
      name: "Chicken Fried Rice",
      ingredients: ["chicken", "rice", "egg", "soy sauce"],
      instructions: "Cook chicken, add rice and soy sauce, mix with scrambled eggs."
    },
    {
      name: "Pasta with Tomato Sauce",
      ingredients: ["pasta", "tomato", "garlic", "olive oil"],
      instructions: "Boil pasta, cook tomatoes with garlic and olive oil, mix together."
    },
    {
      name: "Omelette",
      ingredients: ["egg", "milk", "cheese"],
      instructions: "Whisk eggs with milk, cook in pan, add cheese before folding."
    },
    {
      name: "Grilled Cheese Sandwich",
      ingredients: ["bread", "cheese", "butter"],
      instructions: "Butter bread, add cheese, grill until golden brown."
    }
  ];

  function findRecipes() {
    const ingredients = input.toLowerCase().split(",").map(i => i.trim());
    const found = recipes.filter(recipe =>
      ingredients.every(ing => recipe.ingredients.includes(ing))
    );
    setResults(found);
  }

  function clearInput() {
    setInput("");
    setResults([]);
  }

  return (
    <div className="recipe-app">
      <header className="header">
        <h1>🍳 Recipe Finder</h1>
        <p>Type ingredients you have and find matching recipes!</p>
      </header>

      <div className="input-area">
        <input
          type="text"
          placeholder="e.g. chicken, rice"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button onClick={findRecipes}>Find Recipes</button>
        <button onClick={clearInput} className="clear-btn">Clear</button>
      </div>

      <div className="results">
        {results.length === 0 && input && <p className="no-results">No recipes found. Try different ingredients!</p>}
        {results.map((r, i) => (
          <div key={i} className="recipe-card">
            <h2>{r.name}</h2>
            <p>
              <strong>Ingredients:</strong>{" "}
              {r.ingredients.map(ing => (
                <span
                  key={ing}
                  className={input.toLowerCase().includes(ing) ? "highlight" : ""}
                >
                  {ing}
                </span>
              )).reduce((prev, curr) => [prev, ", ", curr])}
            </p>
            <p><strong>Instructions:</strong> {r.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
