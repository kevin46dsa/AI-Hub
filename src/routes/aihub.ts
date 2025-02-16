import express from "express";
import { openAITextHandler } from "../routehandler";

const router = express.Router();

// this route should serve a home page with a form input taking in the spotify playlist id and a selector button if we want the youtube links or just spotify data
router.get("/", async (req, res) => {
  res.json({ message: "here" }); // Ensure the path is correct
});

router.post("/openai/text", async (req, res) => {
  const body = req.body;
  try {
    const response = await openAITextHandler(body.message);

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: "Error", error });
  }
});

export default router; // Use ES module export
