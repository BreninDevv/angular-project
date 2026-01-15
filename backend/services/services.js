import dotenv from "dotenv";

dotenv.config();

export async function getFood(query) {
  const response = await fetch(
    `https://api.api-ninjas.com/v1/nutrition?query=${query}`,
    {
      headers: {
        "X-Api-Key": process.env.API_KEY,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Erro ao consumir API externa");
  }

  const data = await response.json();

  return data.map((item) => ({
    name: item.name,
    calories: item.calories,
    protein: item.protein_g,
    carbs: item.carbohydrates_total_g,
    fat: item.fat_total_g,
  }));
}
