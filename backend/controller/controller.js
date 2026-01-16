import { getFood } from "../services/services.js";

export async function nutritionController(req, res) {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Query obrigatória" });
  }

  try {
    const data = await getFood(query);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar dados nutricionais" });
  }
}
