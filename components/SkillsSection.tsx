import React from 'react';

interface SkillCircleProps {
  percentage: number;
  logo: React.ReactNode;
  name: string;
  color: string;
}

const SkillCircle: React.FC<SkillCircleProps> = ({ percentage, logo, name, color }) => {
  const radius = 58; 
  const center = 64; 
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-6 group">
      {/* Container for Circle and Logo */}
      <div className="relative w-36 h-36 flex items-center justify-center">
        
        {/* Animated Rotating SVG Ring - Slow Loop (20s) */}
        <svg 
          className="w-full h-full animate-[spin_20s_linear_infinite]" 
          viewBox="0 0 128 128"
          style={{ transformOrigin: 'center' }}
        >
          {/* Background Track */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            stroke="#1e293b" // Slate-800
            strokeWidth="6"
            fill="transparent"
          />
          {/* Progress Indicator */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            stroke={color}
            strokeWidth="6"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{ filter: `drop-shadow(0 0 4px ${color})` }}
          />
        </svg>
        
        {/* Logo Container - Absolute Centered & Static (Does not rotate) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="transform transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
            {logo}
          </div>
        </div>
      </div>
      
      {/* Label */}
      <div className="text-center">
        <h3 className="font-bold text-lg text-white mb-1 group-hover:text-blue-400 transition-colors">{name}</h3>
        <p className="text-sm font-bold font-mono" style={{ color: color }}>{percentage}%</p>
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 border-b border-white/5 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header - Unified */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-glow tracking-wide uppercase">
            SKILLS AND TOOLS
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full opacity-80"></div>
        </div>
          
        {/* Unified Grid for all Skills & Tools */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 justify-items-center mb-8">
            {/* Premiere Pro */}
            <SkillCircle 
              name="Premiere Pro" 
              percentage={70} 
              color="#9999FF"
              logo={
                <div className="w-16 h-16 bg-[#00005b] border border-[#9999FF]/30 rounded-xl flex items-center justify-center text-[#9999FF] font-bold text-2xl shadow-[0_0_20px_rgba(153,153,255,0.2)]">
                  Pr
                </div>
              }
            />
            {/* After Effects */}
            <SkillCircle 
              name="After Effects" 
              percentage={90} 
              color="#D291FF"
              logo={
                <div className="w-16 h-16 bg-[#00005b] border border-[#D291FF]/30 rounded-xl flex items-center justify-center text-[#D291FF] font-bold text-2xl shadow-[0_0_20px_rgba(210,145,255,0.2)]">
                  Ae
                </div>
              }
            />
            {/* CapCut */}
            <SkillCircle 
              name="CapCut" 
              percentage={80} 
              color="#FFFFFF"
              logo={
                <div className="w-16 h-16 bg-black border border-white/30 rounded-xl flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.15)] p-3">
                   <img 
                    src="https://i.postimg.cc/SNMWFHZN/download.png" 
                    alt="CapCut" 
                    className="w-full h-full object-contain"
                   />
                </div>
              }
            />
            {/* Canva - Updated Image URL */}
            <SkillCircle 
              name="Canva" 
              percentage={60} 
              color="#00C4CC"
              logo={
                 <div className="w-16 h-16 bg-white border border-white/20 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,196,204,0.2)] overflow-hidden">
                  <img 
                    src="https://i.postimg.cc/WzkqycvB/download-(2).jpg" 
                    alt="Canva" 
                    className="w-full h-full object-cover scale-[1.5]"
                   />
                </div>
              }
            />

            {/* AI Tools */}
            
            {/* Runway */}
            <SkillCircle 
              name="Runway" 
              percentage={90} 
              color="#3b82f6"
              logo={
                <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                   <img 
                    src="https://i.postimg.cc/mDP0bb1B/download-(1).png"
                    alt="Runway"
                    className="w-full h-full object-cover"
                   />
                </div>
              }
            />

            {/* Veo 3 */}
            <SkillCircle 
              name="Veo 3" 
              percentage={85} 
              color="#22c55e"
              logo={
                <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                   <img 
                    src="https://i.postimg.cc/Xq47HHYB/download-(3).jpg"
                    alt="Veo 3"
                    className="w-full h-full object-cover"
                   />
                </div>
              }
            />

            {/* Nano Banana */}
            <SkillCircle 
              name="Nano Banana" 
              percentage={80} 
              color="#eab308"
              logo={
                <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                   <img 
                    src="https://i.postimg.cc/t4wRQCgT/download-(2).jpg"
                    alt="Nano Banana"
                    className="w-full h-full object-cover"
                   />
                </div>
              }
            />

            {/* Pixverse */}
            <SkillCircle 
              name="Pixverse" 
              percentage={85} 
              color="#ec4899"
              logo={
                <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(236,72,153,0.2)]">
                   <img 
                    src="https://i.postimg.cc/QtFRXXKr/download-(1).jpg"
                    alt="Pixverse"
                    className="w-full h-full object-cover"
                   />
                </div>
              }
            />
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;