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
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newMessage, history }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to get AI response");
    }

    const data = await response.json();
    
    // Simulating a stream response to avoid breaking existing UI that might expect it
    // Note: The backend returns full text, but we can wrap it in a pseudo-stream interface if needed
    return {
      stream: (async function* () {
        yield { text: () => data.text };
      })(),
      response: { text: () => data.text }
    };
  } catch (error: any) {
    console.error("Chat Error:", error);
    throw error;
  }
};