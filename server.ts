import express from "express";
import path from "path";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI assistant for "Abhishek Sharma" (Abhi Visuals), a professional video editor whose official website is abhivisuals.in.
Your goal is to answer questions about Abhishek's portfolio, skills, and availability.

Details about Abhishek:
- Website: abhivisuals.in
- Experience: 1.5+ years in film, commercial, and Youtube content editing.
- Software Skills: Adobe Premiere Pro (70% mastery), After Effects (90% mastery), CapCut, Canva.
- AI Tools: Runway, Veo 3, Nano Banana, Pixverse.
- Portfolio: 100+ projects completed, 10+ happy clients.
- Style: Cinematic, rhythmic, dark, moody, high-energy, storytelling-focused.
- Availability: Currently open for freelance projects and full-time jobs.
- Rate: Depends on project scope, generally starts at $500/day.

Tone: Professional, creative, concise, and helpful. 
Mention the website abhivisuals.in if relevant.
Do not hallucinate projects not mentioned (unless you speak generally about capabilities).
If asked to edit a video, guide them to the contact form.
`;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // API Routes
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.status(500).json({ error: "Gemini API key not configured on server" });
      }

      const genAI = new GoogleGenAI(apiKey);
      const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        systemInstruction: SYSTEM_INSTRUCTION,
      });

      const chat = model.startChat({
        history: history.map((msg: any) => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }],
        })),
      });

      const result = await chat.sendMessage(message);
      const responseText = result.response.text();
      
      res.json({ text: responseText });
    } catch (error: any) {
      console.error("Gemini Error:", error);
      res.status(500).json({ error: error.message || "Internal Server Error" });
    }
  });

  // Vite Middleware setup
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
