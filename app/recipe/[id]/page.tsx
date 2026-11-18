
import Link from "next/link";
import { notFound } from "next/navigation";
import { recipes, getRecipe } from "../../data/recipes";

// Generate a page for every recipe ID
export function generateStaticParams() {
  return recipes.map((recipe) => ({
    id: recipe.id,
  }));
}

// Recipe detail page
export default async function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const recipe = getRecipe(id);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="recipe-detail">
      <Link href="/">← Back to Home</Link>

      <h1>
        {recipe.emoji} {recipe.title}
      </h1>

      <p>{recipe.blurb}</p>

      <p>
        Cuisine: {recipe.cuisine} |
        Cooking Time: {recipe.minutes} minutes |
        Difficulty: {recipe.difficulty}
      </p>

      <h2>Ingredients</h2>

      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2>Cooking Steps</h2>

      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </main>
  );
}
