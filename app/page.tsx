
import { recipes } from "./data/recipes";
import RecipeGrid from "./components/RecipeGrid";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-4">
        NextBites 🍕
      </h1>

      <p className="text-center mb-8">
        Discover delicious recipes!
      </p>

      <RecipeGrid recipes={recipes} />
    </main>
  );
}
