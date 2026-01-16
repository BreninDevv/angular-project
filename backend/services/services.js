import dotenv from "dotenv";

dotenv.config();

export async function getFood(query) {
  const API_KEY = process.env.API_KEY;
  const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${API_KEY}&query=${query}&pageSize=1`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Erro ao consumir API do USDA");
  }

  const result = await response.json();

  if (!result.foods || result.foods.length === 0) {
    return [];
  }

  const food = result.foods[0];

  const getNutrient = (id) => {
    const nutrient = food.foodNutrients.find((n) => n.nutrientId === id);
    return nutrient ? nutrient.value : 0;
  };

  return [
    {
      name: food.description,
      calories: getNutrient(1008),
      protein: getNutrient(1003),
      carbs: getNutrient(1005),
      fat: getNutrient(1004),
    },
  ];
}
