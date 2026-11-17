
import { recipes } from "./data/recipes";
import RecipeCard from "./components/RecipeCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-orange-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-3 text-4xl font-bold text-orange-950">
          Welcome to NextBites 🍽️
        </h1>

        <p className="mb-10 text-gray-600">
          Discover delicious recipes for every day.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </main>
  );
}
