import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mark Stevenson",
      role: "Creative Director, NYC",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Abhishek's editing style is exactly what we needed for our international campaign. The pacing, sound design, and attention to detail are world-class. A true professional who understands global standards.",
      stars: 5,
    },
    {
      id: 2,
      name: "Rahul Verma",
      role: "YouTuber (30k+ Subs), Mumbai",
      image: "https://randomuser.me/api/portraits/men/86.jpg",
      text: "Bhai ka kaam next level hai! He turned my raw vlog footage into a cinematic experience. My audience retention went up by 40% after he started editing my videos. Highly recommended!",
      stars: 5,
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Brand Manager, Bangalore",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
      text: "I was looking for a clean, aesthetic edit for our fashion brand, and Abhishek delivered perfection. He understood the mood board instantly and the motion graphics were the cherry on top.",
      stars: 5,
    }
  ];

  return (
    <section className="py-24 bg-black relative border-t border-white/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-blue-500 font-bold tracking-widest text-xs md:text-sm uppercase mb-3 px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">Client Reviews</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 text-glow">
            WHAT PEOPLE SAY
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-blue-600 to-transparent rounded-full opacity-80"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div 
              key={t.id} 
              className="bg-slate-900/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl relative hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] group flex flex-col"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-white/5 group-hover:text-blue-500/20 transition-colors duration-500">
                <Quote size={48} fill="currentColor" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 leading-relaxed mb-8 italic relative z-10 flex-grow text-sm md:text-base">
                "{t.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-6">
                <div className="relative">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-blue-500 transition-colors duration-300">
                        <img src={t.image} alt={t.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm group-hover:text-blue-400 transition-colors">{t.name}</h4>
                  <p className="text-xs text-gray-500 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;