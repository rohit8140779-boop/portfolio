import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;

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

export const getChatResponseStream = async (
  history: { role: string; text: string }[],
  newMessage: string
) => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found");
  }

  const ai = new GoogleGenAI({ apiKey });

  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }

  const result = await chatSession.sendMessageStream({ message: newMessage });
  return result;
};