import Link from "next/link";
import type { Recipe } from "../data/recipes";

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link
      href={`/recipe/${recipe.id}`}
      className="block rounded-xl border border-gray-200 p-5 transition hover:shadow-md"
    >
      <article>
        <span className="text-xs font-semibold uppercase tracking-wide text-orange-600">
          {recipe.cuisine}
        </span>
        <h2 className="mt-1 text-lg font-bold">{recipe.title}</h2>
      </article>
    </Link>
  );
}