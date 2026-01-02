import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Clock, Heart } from 'lucide-react';

const ImpactSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle visibility based on intersection to allow re-triggering animation
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px' // Slightly delayed trigger for better feel
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      label: "Audience Retention",
      value: "40%",
      suffix: "+",
      icon: Clock,
      desc: "Average view duration increase"
    },
    {
      label: "Engagement Rate",
      value: "3X",
      suffix: "",
      icon: Heart,
      desc: "Boost in likes & comments"
    },
    {
      label: "Subscriber Growth",
      value: "100",
      suffix: "K+",
      icon: Users,
      desc: "Total gained for clients"
    },
    {
      label: "Viral Reach",
      value: "10",
      suffix: "M+",
      icon: TrendingUp,
      desc: "Views across all platforms"
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 bg-slate-950 relative border-b border-white/5 overflow-hidden"
    >
      {/* Background Decorative Gradient */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Image Side - Animated and Colored */}
          <div className="order-1 md:order-1 relative group">
            <div 
              className={`transition-all duration-1000 ease-out transform ${
                isVisible 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-24 opacity-0 scale-95'
              }`}
            >
              {/* The outer box/card container */}
              <div className="relative bg-slate-900 p-3 rounded-[2rem] border border-blue-500/20 shadow-[0_0_50px_rgba(37,99,235,0.1)] transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(37,99,235,0.2)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                  <img 
                    src="https://i.postimg.cc/tCWVmWTT/Untitled-design-(4).png" 
                    alt="Abhishek Sharma" 
                    className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = "https://ui-avatars.com/api/?name=Abhishek+Visuals&background=1e293b&color=3b82f6&size=512&font-size=0.33";
                    }}
                  />
                  
                  {/* Overlay Name Tag */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/60 to-transparent">
                    <p className="text-white font-bold text-2xl tracking-tight">Abhishek Sharma</p>
                    <p className="text-blue-400 text-sm font-medium">Professional Video Editor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text & Stats Side - Animated */}
          <div className={`order-2 md:order-2 transition-all duration-1000 delay-200 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-blue-500"></div>
              <span className="text-blue-500 font-bold tracking-widest text-sm uppercase">Impact & Results</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              ELEVATING CONTENT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                WITH PROVEN RESULTS
              </span>
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-10 border-l-4 border-blue-500/30 pl-6">
              I help <span className="text-white font-bold">creators, influencers, and businesses</span> grow their brand with high-quality content that actually converts. My editing isn't just about cuts; it's about psychology, pacing, and retention.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all duration-700 group ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${400 + (index * 100)}ms` }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <stat.icon size={18} className="text-blue-400" />
                    <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{stat.label}</span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {stat.value}<span className="text-lg text-blue-500">{stat.suffix}</span>
                  </div>
                  <p className="text-[11px] text-gray-500 font-medium">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ImpactSection;