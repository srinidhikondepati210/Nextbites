"use client";

import { useState } from "react";
import type { Recipe } from "../data/recipes";
import RecipeCard from "./RecipeCard";

interface RecipeGridProps {
  recipes: Recipe[];
}

export default function RecipeGrid({ recipes }: RecipeGridProps) {
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(normalizedQuery) ||
      recipe.cuisine.toLowerCase().includes(normalizedQuery)
  );

  return (
    <section>
      <div className="mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search recipes by title or cuisine..."
          aria-label="Search recipes"
          className="w-full rounded-lg border border-gray-300 px-4 py-2"
        />
      </div>

      {filteredRecipes.length === 0 ? (
        <p className="text-gray-600">
          No recipes match &ldquo;{query}&rdquo;. Try another title or cuisine.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </section>
  );
}