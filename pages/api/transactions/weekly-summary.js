import { fetchWeeklyTransactionSummary } from "@/app/libs/data";

export default async function handler(req, res) {
  console.log("API request received"); // Ajoutez cette ligne
  try {
    const summary = await fetchWeeklyTransactionSummary();
    res.status(200).json(summary);
  } catch (error) {
    console.error("Error fetching weekly transaction summary:", error);
    res.status(500).json({ error: "Failed to fetch weekly transaction summary" });
  }
}
