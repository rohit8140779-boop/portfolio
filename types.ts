export interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl?: string; // Optional real video URL
  description: string;
  client?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum Section {
  HOME = 'home',
  WORK = 'work',
  ABOUT = 'about',
  CONTACT = 'contact',
}