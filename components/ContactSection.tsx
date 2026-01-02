import React from 'react';
import { Mail, Instagram, Twitter, Linkedin, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  const categories = [
    "Youtube Videos",
    "Short Form Reels",
    "Motion Graphics",
    "Product Videos",
    "Documentary",
    "AI Ads",
    "UI Animation",
    "Color Grading",
    "Teasers",
    "Shape Morph",
    "Other"
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-950 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">LET'S CREATE <br/>SOMETHING EPIC</h2>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              Ready to take your visuals to the next level? I'm currently accepting new projects. 
              Whether it's a Talking Head video, commercial, or ai ads, drop me a line.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              {/* Email */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-blue-900/20 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Mail className="text-blue-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Email Me</p>
                  <p className="text-white font-medium">digitaledit543@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-blue-900/20 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Phone className="text-blue-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Call Me</p>
                  <p className="text-white font-medium">+91 7905091771</p>
                </div>
              </div>
            </div>

            {/* Social Icons - Static Logos */}
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 cursor-default hover:text-gray-300 transition-colors">
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Name</label>
                  <input 
                    type="text" 
                    className="bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors" 
                    placeholder="Abhishek" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    className="bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors" 
                    placeholder="client@example.com" 
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Project Type</label>
                <select className="bg-black/50 border border-white/10 rounded-lg p-3 text-gray-300 focus:outline-none focus:border-blue-500 transition-colors">
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Message</label>
                <textarea rows={4} className="bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Tell me about your vision..."></textarea>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all transform hover:-translate-y-1">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;