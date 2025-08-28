import React, { useState } from "react";
import "./RecipeFinder.css";

export default function RecipeFinder() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
const [recipes] = useState([
  {
    name: "Chicken Fried Rice",
    ingredients: ["chicken", "rice", "egg", "soy sauce"],
    instructions: "Cook chicken, add rice and soy sauce, mix with scrambled eggs.",
    prepTime: "10 mins",
    cookTime: "15 mins"
  },
  {
    name: "Pasta with Tomato Sauce",
    ingredients: ["pasta", "tomato", "garlic", "olive oil"],
    instructions: "Boil pasta, cook tomatoes with garlic and olive oil, mix together.",
    prepTime: "5 mins",
    cookTime: "15 mins"
  },
  {
    name: "Omelette",
    ingredients: ["egg", "milk", "cheese"],
    instructions: "Whisk eggs with milk, cook in pan, add cheese before folding.",
    prepTime: "5 mins",
    cookTime: "10 mins"
  },
  {
    name: "Grilled Cheese Sandwich",
    ingredients: ["bread", "cheese", "butter"],
    instructions: "Butter bread, add cheese, grill until golden brown.",
    prepTime: "2 mins",
    cookTime: "5 mins"
  },
  {
    name: "Spaghetti Bolognese",
    ingredients: ["spaghetti", "ground beef", "tomato sauce", "onion", "garlic"],
    instructions: "Cook spaghetti. Brown ground beef with chopped onion and garlic, add tomato sauce, simmer. Serve over pasta.",
    prepTime: "10 mins",
    cookTime: "20 mins"
  },
  {
    name: "Caesar Salad",
    ingredients: ["romaine lettuce", "croutons", "parmesan cheese", "Caesar dressing"],
    instructions: "Toss lettuce with croutons and parmesan, drizzle with dressing.",
    prepTime: "5 mins",
    cookTime: "0 mins"
  },
  {
    name: "Grilled Chicken Salad",
    ingredients: ["chicken breast", "mixed greens", "tomatoes", "cucumber", "vinaigrette"],
    instructions: "Grill chicken, slice and serve over mixed greens with veggies, drizzle with vinaigrette.",
    prepTime: "10 mins",
    cookTime: "15 mins"
  },
  {
    name: "Beef Tacos",
    ingredients: ["ground beef", "taco shells", "lettuce", "cheese", "sour cream"],
    instructions: "Cook ground beef, fill taco shells with beef and toppings.",
    prepTime: "5 mins",
    cookTime: "10 mins"
  },
  {
    name: "Vegetable Stir-Fry",
    ingredients: ["mixed vegetables", "soy sauce", "ginger", "garlic", "rice"],
    instructions: "Stir-fry vegetables with garlic and ginger, add soy sauce, serve over rice.",
    prepTime: "5 mins",
    cookTime: "10 mins"
  },
  {
    name: "Chicken Alfredo",
    ingredients: ["chicken breast", "fettuccine", "cream", "parmesan cheese", "garlic"],
    instructions: "Cook fettuccine, sauté chicken with garlic, add cream and cheese to make sauce, combine.",
    prepTime: "10 mins",
    cookTime: "15 mins"
  },
  {
    name: "Vegetable Soup",
    ingredients: ["carrots", "celery", "potatoes", "onion", "vegetable broth"],
    instructions: "Simmer chopped vegetables in broth until tender.",
    prepTime: "10 mins",
    cookTime: "30 mins"
  },
  {
    name: "Chicken Curry",
    ingredients: ["chicken breast", "curry powder", "coconut milk", "rice", "onion"],
    instructions: "Cook chicken with onion, add curry powder and coconut milk, simmer. Serve over rice.",
    prepTime: "10 mins",
    cookTime: "20 mins"
  },
  {
    name: "Beef Stew",
    ingredients: ["beef stew meat", "potatoes", "carrots", "onion", "beef broth"],
    instructions: "Brown beef, add vegetables and broth, simmer until tender.",
    prepTime: "15 mins",
    cookTime: "1 hr"
  },
  {
    name: "Chicken Parmesan",
    ingredients: ["chicken breast", "bread crumbs", "tomato sauce", "mozzarella cheese", "parmesan cheese"],
    instructions: "Bread and fry chicken, top with sauce and cheeses, bake until bubbly.",
    prepTime: "15 mins",
    cookTime: "25 mins"
  },
  {
    name: "Fish Tacos",
    ingredients: ["white fish fillets", "taco shells", "cabbage slaw", "lime", "sour cream"],
    instructions: "Cook fish, assemble tacos with slaw and toppings.",
    prepTime: "10 mins",
    cookTime: "10 mins"
  },
  {
    name: "Pulled Pork Sandwiches",
    ingredients: ["pork shoulder", "bbq sauce", "buns", "coleslaw"],
    instructions: "Slow cook pork with bbq sauce, shred and serve on buns with slaw.",
    prepTime: "15 mins",
    cookTime: "6 hrs"
  },
  {
    name: "Eggplant Parmesan",
    ingredients: ["eggplant", "bread crumbs", "tomato sauce", "mozzarella cheese", "parmesan cheese"],
    instructions: "Bread and fry eggplant slices, layer with sauce and cheeses, bake until bubbly.",
    prepTime: "15 mins",
    cookTime: "30 mins"
  },
  {
    name: "Chicken Quesadillas",
    ingredients: ["chicken breast", "flour tortillas", "cheese", "salsa", "sour cream"],
    instructions: "Cook chicken, assemble quesadillas with cheese, cook until golden, serve with salsa and sour cream.",
    prepTime: "10 mins",
    cookTime: "10 mins"
  },
  {
    name: "Beef Burritos",
    ingredients: ["ground beef", "flour tortillas", "cheese", "lettuce", "sour cream"],
    instructions: "Cook beef, assemble burritos with toppings.",
    prepTime: "5 mins",
    cookTime: "10 mins"
  },
  {
    name: "Chicken Fajitas",
    ingredients: ["chicken breast", "bell peppers", "onion", "tortillas", "fajita seasoning"],
    instructions: "Sauté chicken with peppers and onion, serve with tortillas and toppings.",
    prepTime: "10 mins",
    cookTime: "15 mins"
  },
  {
    name: "Pork Chops with Apples",
    ingredients: ["pork chops", "apples", "onion", "cinnamon", "olive oil"],
    instructions: "Sear pork chops, cook apples and onions with cinnamon, serve together.",
    prepTime: "10 mins",
    cookTime: "20 mins"
  },
  {
    name: "Chicken Stir-Fry",
    ingredients: ["chicken breast", "mixed vegetables", "soy sauce", "ginger", "rice"],
    instructions: "Stir-fry chicken and vegetables with soy sauce and ginger, serve over rice.",
    prepTime: "10 mins",
    cookTime: "15 mins"
  },
  {
    name: "Vegetable Lasagna",
    ingredients: ["lasagna noodles", "ricotta cheese", "spinach", "tomato sauce", "mozzarella cheese"],
    instructions: "Layer noodles with cheeses, spinach, and sauce, bake until bubbly.",
    prepTime: "15 mins",
    cookTime: "45 mins"
  },
  {
    name: "Chicken Tenders",
    ingredients: ["chicken breast", "bread crumbs", "egg", "flour", "oil"],
    instructions: "Bread and fry chicken strips until golden.",
    prepTime: "10 mins",
    cookTime: "10 mins"
  },
  {
    name: "Beef and Broccoli",
    ingredients: ["beef strips", "broccoli", "soy sauce", "garlic", "ginger"],
    instructions: "Stir-fry beef and broccoli with garlic and ginger, add soy sauce.",
    prepTime: "10 mins",
    cookTime: "15 mins"
  },
  {
    name: "Chicken and Rice Casserole",
    ingredients: ["chicken breast", "rice", "cream of mushroom soup", "cheese", "onion"],
    instructions: "Combine ingredients, bake until bubbly.",
    prepTime: "10 mins",
    cookTime: "45 mins"
  },
  {
    name: "Baked Ziti",
    ingredients: ["ziti pasta", "tomato sauce", "ricotta cheese", "mozzarella cheese", "parmesan cheese"],
    instructions: "Combine pasta with sauce and cheeses, bake until bubbly.",
    prepTime: "10 mins",
    cookTime: "30 mins"
  },
  {
    name: "Chicken Piccata",
    ingredients: ["chicken breast", "lemon", "capers", "butter", "parsley"],
    instructions: "Sauté chicken, make sauce with lemon, capers, and butter, serve with chicken.",
    prepTime: "10 mins",
    cookTime: "15 mins"
  },
  {
    name: "Pasta Primavera",
    ingredients: ["pasta", "mixed vegetables", "olive oil", "garlic", "parmesan cheese"],
    instructions: "Cook pasta, sauté vegetables with garlic, combine with pasta, top with cheese.",
    prepTime: "10 mins",
    cookTime: "15 mins"
  },
  {
    name: "Chicken Marsala",
    ingredients: ["chicken breast", "marsala wine", "mushrooms", "butter", "parsley"],
    instructions: "Sauté chicken, make sauce with wine, mushrooms, and butter, serve with chicken.",
    prepTime: "10 mins",
    cookTime: "15 mins"
  },
  {
    name: "Beef Wellington",
    ingredients: ["beef tenderloin", "puff pastry", "mushrooms", "prosciutto", "egg yolk"],
    instructions: "Sear beef, wrap with mushrooms and prosciutto, encase in pastry, bake.",
    prepTime: "20 mins",
    cookTime: "40 mins"
  },
  {
    name: "Chicken Kiev",
    ingredients: ["chicken breast", "butter", "garlic", "parsley", "breadcrumbs"],
    instructions: "Flatten chicken, stuff with garlic butter, bread, and fry until golden.",
    prepTime: "15 mins",
    cookTime: "20 mins"
  },
  {
    name: "Shrimp Scampi",
    ingredients: ["shrimp", "garlic", "butter", "lemon", "pasta"],
    instructions: "Sauté shrimp in garlic butter, add lemon juice, serve over pasta.",
    prepTime: "5 mins",
    cookTime: "10 mins"
  },
  {
    name: "Stuffed Peppers",
    ingredients: ["bell peppers", "ground beef", "rice", "tomato sauce", "cheese"],
    instructions: "Stuff peppers with beef, rice, and sauce, top with cheese, bake until tender.",
    prepTime: "15 mins",
    cookTime: "25 mins"
  },
  {
    name: "Lasagna",
    ingredients: ["lasagna noodles", "ground beef", "tomato sauce", "ricotta cheese", "mozzarella cheese"],
    instructions: "Layer noodles with beef, sauce, and cheeses, bake until bubbly.",
    prepTime: "20 mins",
    cookTime: "45 mins"
  },
  {
    name: "Vegetarian Chili",
    ingredients: ["beans", "tomatoes", "onion", "bell pepper", "chili powder"],
    instructions: "Cook vegetables and beans with spices until thickened.",
    prepTime: "10 mins",
    cookTime: "30 mins"
  },
  {
    name: "Pork Stir-Fry",
    ingredients: ["pork strips", "broccoli", "carrot", "soy sauce", "garlic"],
    instructions: "Stir-fry pork with vegetables and soy sauce.",
    prepTime: "10 mins",
    cookTime: "15 mins"
  },
  {
    name: "Shepherd’s Pie",
    ingredients: ["ground beef", "mashed potatoes", "carrots", "peas", "onion"],
    instructions: "Cook beef with veggies, top with mashed potatoes, bake until golden.",
    prepTime: "15 mins",
    cookTime: "30 mins"
  },
  {
    name: "Beef Stroganoff",
    ingredients: ["beef strips", "mushrooms", "onion", "sour cream", "egg noodles"],
    instructions: "Cook beef and mushrooms, stir in sour cream, serve over noodles.",
    prepTime: "10 mins",
    cookTime: "20 mins"
  },
  {
    name: "Chicken Pad Thai",
    ingredients: ["rice noodles", "chicken", "egg", "bean sprouts", "peanuts", "pad thai sauce"],
    instructions: "Cook noodles, stir-fry chicken and egg, add noodles and sauce, garnish with peanuts.",
    prepTime: "10 mins",
    cookTime: "15 mins"
  },
  {
    name: "Fettuccine Alfredo",
    ingredients: ["fettuccine", "cream", "butter", "parmesan cheese", "garlic"],
    instructions: "Cook pasta, make sauce with cream, butter, and cheese, combine.",
    prepTime: "5 mins",
    cookTime: "15 mins"
  },
  {
    name: "BBQ Ribs",
    ingredients: ["pork ribs", "bbq sauce", "spices"],
    instructions: "Season ribs, slow cook or bake, brush with BBQ sauce.",
    prepTime: "10 mins",
    cookTime: "2 hrs"
  },
  {
    name: "Caprese Salad",
    ingredients: ["tomato", "mozzarella", "basil", "olive oil", "balsamic vinegar"],
    instructions: "Layer tomato and mozzarella, top with basil and drizzle oil and vinegar.",
    prepTime: "5 mins",
    cookTime: "0 mins"
  },
  {
    name: "Pasta Puttanesca",
    ingredients: ["spaghetti", "tomato sauce", "anchovies", "olives", "capers", "garlic"],
    instructions: "Cook pasta, prepare sauce with ingredients, combine and serve.",
    prepTime: "5 mins",
    cookTime: "15 mins"
  },
  {
    name: "Chicken Enchiladas",
    ingredients: ["chicken", "tortillas", "cheese", "enchilada sauce", "onion"],
    instructions: "Fill tortillas with chicken, roll, cover with sauce and cheese, bake until bubbly.",
    prepTime: "10 mins",
    cookTime: "20 mins"
  },
  {
    name: "Egg Salad Sandwich",
    ingredients: ["egg", "mayonnaise", "mustard", "bread", "lettuce"],
    instructions: "Mix boiled eggs with mayo and mustard, assemble sandwich with lettuce.",
    prepTime: "10 mins",
    cookTime: "10 mins"
  },
  {
    name: "Shrimp Tacos",
    ingredients: ["shrimp", "tortillas", "cabbage slaw", "lime", "sour cream"],
    instructions: "Cook shrimp, assemble tacos with slaw and toppings.",
    prepTime: "10 mins",
    cookTime: "10 mins"
  },
  {
    name: "Beef Enchiladas",
    ingredients: ["ground beef", "tortillas", "cheese", "enchilada sauce", "onion"],
    instructions: "Fill tortillas with beef, cover with sauce and cheese, bake.",
    prepTime: "10 mins",
    cookTime: "20 mins"
  },
  {
    name: "Chicken Parmesan Sandwich",
    ingredients: ["chicken breast", "bread", "tomato sauce", "mozzarella cheese", "parmesan cheese"],
    instructions: "Bread and fry chicken, add sauce and cheese, serve on sandwich bread.",
    prepTime: "10 mins",
    cookTime: "15 mins"
  },
  {
    name: "Pork Carnitas",
    ingredients: ["pork shoulder", "orange juice", "garlic", "cumin", "tortillas"],
    instructions: "Slow cook pork with spices and orange juice, shred, serve in tortillas.",
    prepTime: "10 mins",
    cookTime: "4 hrs"
  },
  {
    name: "Lemon Garlic Salmon",
    ingredients: ["salmon fillet", "lemon", "garlic", "butter", "parsley"],
    instructions: "Bake salmon with lemon, garlic, and butter.",
    prepTime: "5 mins",
    cookTime: "15 mins"
  },
  {
    name: "Teriyaki Chicken",
    ingredients: ["chicken breast", "soy sauce", "sugar", "ginger", "garlic"],
    instructions: "Cook chicken, add teriyaki sauce, simmer until glazed.",
    prepTime: "5 mins",
    cookTime: "15 mins"
  },
  {
    name: "Baked Mac and Cheese",
    ingredients: ["pasta", "cheddar cheese", "milk", "butter", "breadcrumbs"],
      instructions: "Cook pasta, make cheese sauce, combine, top with breadcrumbs, bake.",
      prepTime: "10 mins",
      cookTime: "20 mins"
    }
  ]);
    function findRecipes() {
    const searchTerms = input.toLowerCase().split(",").map(i => i.trim());
    const found = recipes.filter(recipe =>
      searchTerms.some(term =>
        recipe.name.toLowerCase().includes(term) ||
        recipe.ingredients.some(ing => ing.includes(term))
      )
    );
    setResults(found);
  }

  function clearInput() {
    setInput("");
    setResults([]);
  }

  const handleShare = (recipe) => {
    navigator.clipboard.writeText(JSON.stringify(recipe))
      .then(() => alert("Recipe copied to clipboard!"))
      .catch(() => alert("Failed to copy recipe."));
  };

  return (
    <div className="recipe-app">
      <div className="wave-layer"></div>

      <header className="header">
        <h1>🍳 Recipe Finder</h1>
        <p>Type ingredients or dish names to find matching recipes!</p>
      </header>

      <div className="input-area">
        <input
          type="text"
          placeholder="e.g. chicken, rice or Pancakes"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter") findRecipes(); }}
          style={{ width: "500px", fontSize: "1.2rem", padding: "12px" }}
        />
        <button onClick={findRecipes}>Find Recipes</button>
        <button onClick={clearInput} className="clear-btn">Clear</button>
      </div>

      {input && (
        <div className="results" style={{ marginTop: "20px" }}>
          {results.length === 0 ? (
            <p className="no-results">No recipes found!</p>
          ) : (
            results.map((r, i) => (
              <div key={i} className="recipe-card" style={{ cursor: "pointer" }}>
                <h2>{r.name}</h2>
                <p><strong>Ingredients:</strong> {r.ingredients.join(", ")}</p>
                <p><strong>Instructions:</strong> {r.instructions}</p>
                <p><strong>Prep Time:</strong> {r.prepTime}</p>
                <p><strong>Cook Time:</strong> {r.cookTime}</p>
                <button onClick={() => handleShare(r)}>Share</button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
