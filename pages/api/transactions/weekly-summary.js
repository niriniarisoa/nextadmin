import { fetchAllTransactionSummary } from "@/app/libs/data";

export default async function handler(req, res) {
  console.log("API request received");
  try {
    const summary = await fetchAllTransactionSummary();
    res.status(200).json(summary);
  } catch (error) {
    console.error("Error fetching transaction summary:", error);
    res.status(500).json({ error: "Failed to fetch transaction summary" });
  }
}