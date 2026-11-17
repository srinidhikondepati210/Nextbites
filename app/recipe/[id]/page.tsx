import Link from "next/link";
import { notFound } from "next/navigation";
import { recipes, getRecipe } from "../../data/recipes";

// Pre-build one page per recipe id (needed for static export).
export function generateStaticParams() {
  return recipes.map((recipe) => ({ id: recipe.id }));
}

import { notFound } from "next/navigation";

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
    // Keep your existing JSX here
  );
}