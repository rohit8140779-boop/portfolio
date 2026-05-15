import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { PlayCircle, X, Maximize2, Play } from 'lucide-react';

// Data Helper to create realistic looking projects
const createProjects = (category: string, startId: number): Project[] => {
  const descriptions: Record<string, string> = {
    "Youtube Videos": "High retention editing with engaging pacing and storytelling.",
    "Short Form Reels": "Fast-paced vertical content designed for maximum engagement on TikTok and Reels.",
    "Motion Graphics": "Custom after effects animations to bring static assets to life.",
    "Product Videos": "Commercial grade editing focused on product features and brand aesthetics.",
    "Documentary": "Narrative-driven editing focusing on emotion and factual storytelling.",
    "AI Ads": "Cutting edge AI-generated visuals combined with traditional editing.",
    "Teasers": "Short, punchy edits designed to build anticipation.",
    "Color Grading": "Professional color correction and grading to establish mood.",
    "UI Animation": "Smooth interface animations for software and app demonstrations.",
    "Shape Morph": "Complex vector animations and fluid shape transitions."
  };

  return [1, 2, 3].map((num, i) => ({
    id: `${category}-${i}`,
    title: `${category} ${num}`,
    category: category,
    thumbnail: `https://picsum.photos/id/${(startId + i) * 7 % 200}/800/450`,
    description: descriptions[category] || "Professional video editing showcase.",
    client: "" 
  }));
};

const CATEGORIES = [
  "Youtube Videos",
  "Short Form Reels",
  "Motion Graphics",
  "Product Videos",
  "Documentary",
  "AI Ads",
  "UI Animation",
  "Color Grading",
  "Teasers",
  "Shape Morph"
];

const ALL_PROJECTS: Record<string, Project[]> = {};
CATEGORIES.forEach((cat, index) => {
  let projects = createProjects(cat, index + 1);

  if (cat === "Youtube Videos") {
    projects[0] = {
      id: "yt-vimeo-1",
      title: "Educational Talking Head",
      category: "Youtube Videos",
      thumbnail: "https://vumbnail.com/1146945266.jpg",
      videoUrl: "https://vimeo.com/1146945266?fl=pl&fe=sh",
      description: "Professional talking head edit with engaging motion graphics, B-roll, and retention-focused pacing for business education.",
      client: "Educational Business Creator"
    };
    projects[1] = {
      id: "yt-vimeo-2",
      title: "Educational Explainer",
      category: "Youtube Videos",
      thumbnail: "https://vumbnail.com/1146945423.jpg",
      videoUrl: "https://vimeo.com/1146945423?fl=pl&fe=sh",
      description: "Clear and concise educational storytelling designed to simplify complex topics using visual aids and pacing.",
      client: "Educational Creator"
    };
    projects[2] = {
      id: "yt-vimeo-3",
      title: "Featured Video Edit",
      category: "Youtube Videos",
      thumbnail: "https://vumbnail.com/1146946437.jpg",
      videoUrl: "https://vimeo.com/1146946437?fl=pl&fe=sh",
      description: "A showcase of high-impact video editing techniques, pacing, and visual storytelling suitable for long-form content.",
      client: "Content Creator"
    };
  }

  if (cat === "Short Form Reels") {
    projects[0] = {
      id: "short-form-vimeo-1",
      title: "Dynamic Reel Edit",
      category: "Short Form Reels",
      thumbnail: "https://vumbnail.com/1146939089.jpg", 
      videoUrl: "https://vimeo.com/1146939089?fl=pl&fe=sh", 
      description: "Fast-paced vertical edit designed for high retention on social platforms.",
      client: "Instagram Brand"
    };
    // Updated as per user request
    projects[1] = {
      id: "short-form-vimeo-2",
      title: "Meta Ad",
      category: "Short Form Reels",
      thumbnail: "https://vumbnail.com/1158106844.jpg", 
      videoUrl: "https://vimeo.com/1158106844?share=copy&fl=sv&fe=ci", 
      description: "High-conversion direct response Meta Ad designed for maximum engagement and brand performance.",
      client: "Digital Advertiser"
    };
    projects[2] = {
      id: "short-form-vimeo-3",
      title: "Educational Short",
      category: "Short Form Reels",
      thumbnail: "https://vumbnail.com/1146939129.jpg", 
      videoUrl: "https://vimeo.com/1146939129?fl=pl&fe=sh", 
      description: "Condensing complex educational topics into digestible clips.",
      client: "EdTech Brand"
    };
  }

  if (cat === "AI Ads") {
    projects[0].videoUrl = "https://vimeo.com/1146938140?fl=tl&fe=ec";
    projects[1].videoUrl = "https://vimeo.com/1146937923?fl=tl&fe=ec";
    projects[2].videoUrl = "https://vimeo.com/1146937880?fl=tl&fe=ec";
    projects[0].thumbnail = "https://vumbnail.com/1146938140.jpg";
    projects[1].thumbnail = "https://vumbnail.com/1146937923.jpg";
    projects[2].thumbnail = "https://vumbnail.com/1146937880.jpg";
  }

  if (cat === "UI Animation") {
    projects[0].videoUrl = "https://vimeo.com/1146947125?fl=tl&fe=ec";
    projects[1].videoUrl = "https://vimeo.com/1146947070?fl=tl&fe=ec";
    projects[2].videoUrl = "https://vimeo.com/1146947008?fl=tl&fe=ec";
    projects[0].thumbnail = "https://vumbnail.com/1146947125.jpg";
    projects[1].thumbnail = "https://vumbnail.com/1146947070.jpg";
    projects[2].thumbnail = "https://vumbnail.com/1146947008.jpg";
  }

  if (cat === "Color Grading") {
    projects[0].videoUrl = "https://vimeo.com/1147036178?fl=tl&fe=ec";
    projects[1].videoUrl = "https://vimeo.com/1147038131?fl=tl&fe=ec";
    projects[2].videoUrl = "https://vimeo.com/1147003626?fl=tl&fe=ec";
    projects[0].thumbnail = "https://vumbnail.com/1147036178.jpg";
    projects[1].thumbnail = "https://vumbnail.com/1147038131.jpg";
    projects[2].thumbnail = "https://vumbnail.com/1147003626.jpg";
  }

  if (cat === "Teasers") {
    projects[0].videoUrl = "https://vimeo.com/1146936852?fl=tl&fe=ec";
    projects[1].videoUrl = "https://vimeo.com/1146937026?fl=tl&fe=ec";
    projects[0].thumbnail = "https://vumbnail.com/1146936852.jpg";
    projects[1].thumbnail = "https://vumbnail.com/1146937026.jpg";
    projects = projects.slice(0, 2);
  }

  if (cat === "Shape Morph") {
    projects[0].videoUrl = "https://vimeo.com/1147221137?fl=tl&fe=ec";
    projects[1].videoUrl = "https://vimeo.com/1147221137?fl=tl&fe=ec";
    projects[0].thumbnail = "https://vumbnail.com/1147221137.jpg";
    projects[1].thumbnail = "https://vumbnail.com/1147221137.jpg";
    projects = projects.slice(0, 2);
  }

  if (cat === "Documentary") {
    projects[0].videoUrl = "https://vimeo.com/1146851819?fl=tl&fe=ec";
    projects[1].videoUrl = "https://vimeo.com/1146942133?fl=tl&fe=ec";
    projects[2].videoUrl = "https://vimeo.com/1147075092?fl=tl&fe=ec";
    projects[0].thumbnail = "https://vumbnail.com/1146851819.jpg";
    projects[1].thumbnail = "https://vumbnail.com/1146942133.jpg";
    projects[2].thumbnail = "https://vumbnail.com/1147075092.jpg";
  }

  if (cat === "Motion Graphics") {
    projects[0].videoUrl = "https://vimeo.com/1146939989?fl=pl&fe=sh";
    projects[1].videoUrl = "https://vimeo.com/1146939761?fl=pl&fe=sh";
    projects[2].videoUrl = "https://vimeo.com/1146939950?fl=pl&fe=sh";
    projects[0].thumbnail = "https://vumbnail.com/1146939989.jpg";
    projects[1].thumbnail = "https://vumbnail.com/1146939761.jpg";
    projects[2].thumbnail = "https://vumbnail.com/1146939950.jpg";
  }

  if (cat === "Product Videos") {
    projects[0].videoUrl = "https://vimeo.com/1146950883?fl=tl&fe=ec";
    projects[1].videoUrl = "https://vimeo.com/1146950761?fl=tl&fe=ec";
    projects[2].videoUrl = "https://vimeo.com/1146950975?fl=tl&fe=ec";
    projects[0].thumbnail = "https://vumbnail.com/1146950883.jpg";
    projects[1].thumbnail = "https://vumbnail.com/1146950761.jpg";
    projects[2].thumbnail = "https://vumbnail.com/1146950975.jpg";
  }

  ALL_PROJECTS[cat] = projects;
});

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [origin, setOrigin] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOrigin(window.location.origin);
    }
  }, []);

  const getYouTubeId = (url: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const getVimeoId = (url: string) => {
    if (!url) return null;
    const match = url.match(/(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/);
    return match ? match[1] : null;
  };

  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    const ytId = getYouTubeId(url);
    if (ytId) {
      return `https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&origin=${origin}`;
    }
    const vimeoId = getVimeoId(url);
    if (vimeoId) {
      return `https://player.vimeo.com/video/${vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479&loop=1&autoplay=1`;
    }
    if (url.includes('drive.google.com')) {
      const idMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
      return idMatch ? `https://drive.google.com/file/d/${idMatch[1]}/preview` : url;
    }
    return url;
  };

  const shouldUseIframe = (url: string) => {
    if (!url) return false;
    return url.includes('drive.google.com') || getYouTubeId(url) !== null || getVimeoId(url) !== null;
  };

  return (
    <section id="work" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-24 relative">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 text-glow tracking-widest text-center uppercase">
            Showcase Work
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-transparent via-blue-600 to-transparent rounded-full shadow-[0_0_20px_rgba(37,99,235,0.8)]"></div>
        </div>

        <div className="space-y-20">
          {CATEGORIES.map((category) => {
            const projects = ALL_PROJECTS[category];
            return (
              <div key={category} className="animate-fade-in-up">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-8 w-1.5 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]"></div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide uppercase">
                    {category}
                  </h3>
                </div>
                <div className={`grid grid-cols-1 gap-6 ${projects.length === 2 ? 'md:grid-cols-2 max-w-5xl mx-auto' : 'md:grid-cols-3'}`}>
                  {projects.map((project) => (
                    <div 
                      key={project.id}
                      className="group relative cursor-pointer overflow-hidden rounded-xl bg-gray-900 aspect-video border border-white/5 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] hover:-translate-y-1"
                      onClick={() => setSelectedProject(project)}
                    >
                      <img 
                        src={project.thumbnail} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                        referrerPolicy="no-referrer"
                        onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/fallback/800/450"; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          {project.client && <span className="text-blue-400 text-[10px] font-bold tracking-widest uppercase mb-1 block">{project.client}</span>}
                          <h4 className="text-lg font-bold text-white leading-tight mb-2">{project.title}</h4>
                          <div className="flex items-center gap-2 text-xs text-gray-300">
                            <PlayCircle size={14} className="text-blue-400" />
                            <span>Watch Preview</span>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Maximize2 size={16} className="text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={() => setSelectedProject(null)}></div>
          <div className="relative bg-slate-900 border border-blue-500/20 rounded-2xl max-w-5xl w-full overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.2)] flex flex-col md:flex-row animate-float">
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-red-600 text-white rounded-full transition-colors border border-white/10"><X size={20} /></button>
            <div className="w-full md:w-2/3 bg-black flex items-center justify-center aspect-video relative group overflow-hidden">
              {selectedProject.videoUrl ? (
                shouldUseIframe(selectedProject.videoUrl) ? (
                  <iframe src={getEmbedUrl(selectedProject.videoUrl)} className="w-full h-full border-0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share; accelerometer; gyroscope" allowFullScreen title={selectedProject.title}></iframe>
                ) : (
                  <video src={selectedProject.videoUrl} controls autoPlay className="w-full h-full object-contain">Your browser does not support the video tag.</video>
                )
              ) : (
                <>
                  <img src={selectedProject.thumbnail} alt={selectedProject.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/fallback/800/450"; }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-lg group-hover:bg-blue-600 hover:scale-110 transition-all duration-300"><Play className="w-8 h-8 text-white fill-white ml-1" /></button>
                  </div>
                </>
              )}
            </div>
            <div className="w-full md:w-1/3 p-8 flex flex-col justify-between bg-gradient-to-b from-slate-900 to-black border-l border-white/5">
              <div>
                <span className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold rounded-full mb-6">{selectedProject.category.toUpperCase()}</span>
                <h3 className="text-3xl font-bold text-white mb-2 leading-tight">{selectedProject.title}</h3>
                {selectedProject.client && <p className="text-sm text-gray-500 mb-8 font-mono">Client: {selectedProject.client}</p>}
                <div className="w-10 h-1 bg-blue-600 rounded-full mb-6"></div>
                <p className="text-gray-300 leading-relaxed text-sm">{selectedProject.description}</p>
              </div>
              <div className="mt-8 pt-8 border-t border-white/5">
                <a href="#contact" onClick={() => setSelectedProject(null)} className="block w-full text-center py-3 bg-white text-black font-bold rounded hover:bg-blue-500 hover:text-white transition-colors">INQUIRE ABOUT THIS STYLE</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;