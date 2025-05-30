import express from "express";
import { geminiTextHandler, openAITextHandler } from "../routehandler";

const router = express.Router();

// this route should serve a home page with a form input taking in the spotify playlist id and a selector button if we want the youtube links or just spotify data
router.get("/", async (req, res) => {
  res.json({ message: "here" }); // Ensure the path is correct
});

/**
 * ___________________________________________________________
 * OpenAI API Routes
 * ___________________________________________________________
 */
router.post("/openai/text", async (req, res) => {
  const body = req.body;
  console.log("body", body);
  try {
    const response = await openAITextHandler(body.message);

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: "Error", error });
  }
});

router.post("/openai/speech", async (req, res) => {
  const body = req.body;
  try {
    const response = await openAITextHandler(body.message);

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: "Error", error });
  }
});

/**
 * ___________________________________________________________
 * Gemini API Routes
 * ___________________________________________________________
 */
router.post("/gemini/text", async (req, res) => {
  const body = req.body;
  const model = body.model || "";

  try {
    const response = await geminiTextHandler(body.message, model);

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: "Error", error });
  }
});

export default router; // Use ES module export
