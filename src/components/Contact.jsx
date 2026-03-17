import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, User, MessageSquare, Send, Check } from 'lucide-react';
import { PROFILE } from '../constants/data';
import { TiltCard } from './ui/TiltCard';

export const Contact = ({ isDark, textMuted, cardClass, inputClass, formData, handleInputChange, handleFormSubmit, formStatus }) => {
  return (
    <>
      {/* CONTACT SECTION */}
      <section id="contact" className={`py-24 relative overflow-hidden ${isDark ? 'bg-slate-900/20' : 'bg-slate-50/80'}`}>
         {/* Ambient background glows */}
         <div className={`absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none ${isDark ? 'bg-primary/[0.03]' : 'bg-primary/[0.03]'}`} />
         <div className={`absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none ${isDark ? 'bg-accent-pink/[0.02]' : 'bg-accent-pink/[0.02]'}`} />

         {/* Subtle dot pattern */}
         <div className={`absolute inset-0 pointer-events-none z-0 ${isDark ? 'opacity-5' : 'opacity-[0.03]'}`}
           style={{
             backgroundImage: isDark 
               ? 'radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)'
               : 'radial-gradient(rgba(0,0,0,0.5) 1px, transparent 1px)',
             backgroundSize: '24px 24px'
           }}
         />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
            <p className={`mt-4 ${textMuted}`}>Open to internships and software engineering opportunities.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Direct Contact Info */}
            <TiltCard className={`p-8 rounded-3xl border flex flex-col justify-center space-y-8 backdrop-blur-xl transition-all duration-300 ${
              isDark 
                ? 'hover:border-primary/40 bg-slate-900/80 border-slate-800 shadow-xl shadow-black/20' 
                : 'hover:border-primary/40 bg-white/95 border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(126,91,240,0.12)] hover:-translate-y-1'
            }`}>
              <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-pink">Direct Channels</h3>
              
              <a href={`mailto:${PROFILE.socials.email}`} className={`flex items-center space-x-4 group p-4 rounded-2xl border transition-all duration-300 ${isDark ? 'border-slate-800 hover:border-primary/50 hover:bg-slate-800/80 hover:shadow-[0_0_15px_rgba(126,91,240,0.1)]' : 'border-slate-200/60 hover:border-primary/30 hover:bg-slate-50 hover:shadow-lg hover:-translate-y-0.5'}`}>
                <div className={`p-3 rounded-xl ${isDark ? 'bg-gradient-to-br from-primary/30 to-primary/10 text-primary-light shadow-[inset_0_0_10px_rgba(126,91,240,0.2)]' : 'bg-primary/10 text-primary'} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  <Mail size={24} />
                </div>
                <div>
                  <p className={`text-sm ${textMuted} font-medium tracking-wide uppercase text-[10px]`}>Email</p>
                  <span className={`font-semibold text-base group-hover:text-primary transition-colors ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{PROFILE.socials.email}</span>
                </div>
              </a>
              
              <a href={`https://${PROFILE.socials.linkedin}`} target="_blank" rel="noreferrer" className={`flex items-center space-x-4 group p-4 rounded-2xl border transition-all duration-300 ${isDark ? 'border-slate-800 hover:border-primary/50 hover:bg-slate-800/80 hover:shadow-[0_0_15px_rgba(126,91,240,0.1)]' : 'border-slate-200/60 hover:border-primary/30 hover:bg-slate-50 hover:shadow-lg hover:-translate-y-0.5'}`}>
                <div className={`p-3 rounded-xl ${isDark ? 'bg-gradient-to-br from-primary/30 to-primary/10 text-primary-light shadow-[inset_0_0_10px_rgba(126,91,240,0.2)]' : 'bg-primary/10 text-primary'} group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className={`text-sm ${textMuted} font-medium tracking-wide uppercase text-[10px]`}>LinkedIn</p>
                  <span className={`font-semibold text-base group-hover:text-primary transition-colors ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>Connect Profile</span>
                </div>
              </a>
              
              <div className={`flex items-center space-x-4 group p-4 rounded-2xl border transition-all duration-300 ${isDark ? 'border-slate-800 hover:border-primary/50 hover:bg-slate-800/80 hover:shadow-[0_0_15px_rgba(126,91,240,0.1)]' : 'border-slate-200/60 hover:border-primary/30 hover:bg-slate-50 hover:shadow-lg hover:-translate-y-0.5'}`}>
                <div className={`p-3 rounded-xl ${isDark ? 'bg-gradient-to-br from-primary/30 to-primary/10 text-primary-light shadow-[inset_0_0_10px_rgba(126,91,240,0.2)]' : 'bg-primary/10 text-primary'} group-hover:scale-110 transition-transform duration-300`}>
                  <MapPin size={24} />
                </div>
                <div>
                  <p className={`text-sm ${textMuted} font-medium tracking-wide uppercase text-[10px]`}>Location</p>
                  <span className={`font-semibold text-base ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{PROFILE.socials.location}</span>
                </div>
              </div>
            </TiltCard>

            {/* Contact Form */}
            <TiltCard className={`p-8 rounded-3xl border backdrop-blur-xl transition-all duration-300 ${
              isDark 
                ? 'hover:border-primary/40 bg-slate-900/80 border-slate-800 shadow-xl shadow-black/20' 
                : 'hover:border-primary/40 bg-white/95 border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(126,91,240,0.12)] hover:-translate-y-1'
            }`}>
              <form className="space-y-5" onSubmit={handleFormSubmit}>
                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Name</label>
                  <div className="relative group">
                    <User className={`absolute left-4 top-3.5 transition-colors ${isDark ? 'text-slate-500 group-focus-within:text-primary' : 'text-gray-400 group-focus-within:text-primary'}`} size={18} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full pl-12 pr-4 py-3 rounded-xl outline-none border transition-all duration-300 ${inputClass} ${isDark ? 'bg-slate-950/50 hover:bg-slate-800/80 focus:bg-slate-900/90 shadow-inner' : 'bg-white hover:bg-slate-50 focus:bg-white focus:shadow-[0_0_0_3px_rgba(126,91,240,0.1)] focus:border-primary'}`}
                      placeholder="Jane Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Email</label>
                  <div className="relative group">
                    <Mail className={`absolute left-4 top-3.5 transition-colors ${isDark ? 'text-slate-500 group-focus-within:text-primary' : 'text-gray-400 group-focus-within:text-primary'}`} size={18} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full pl-12 pr-4 py-3 rounded-xl outline-none border transition-all duration-300 ${inputClass} ${isDark ? 'bg-slate-950/50 hover:bg-slate-800/80 focus:bg-slate-900/90 shadow-inner' : 'bg-white hover:bg-slate-50 focus:bg-white focus:shadow-[0_0_0_3px_rgba(126,91,240,0.1)] focus:border-primary'}`}
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Message</label>
                  <div className="relative group">
                    <MessageSquare className={`absolute left-4 top-3.5 transition-colors ${isDark ? 'text-slate-500 group-focus-within:text-primary' : 'text-gray-400 group-focus-within:text-primary'}`} size={18} />
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className={`w-full pl-12 pr-4 py-3 rounded-xl outline-none border transition-all duration-300 resize-none ${inputClass} ${isDark ? 'bg-slate-950/50 hover:bg-slate-800/80 focus:bg-slate-900/90 shadow-inner' : 'bg-white hover:bg-slate-50 focus:bg-white focus:shadow-[0_0_0_3px_rgba(126,91,240,0.1)] focus:border-primary'}`}
                      placeholder="Project details..."
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className={`w-full py-4 rounded-xl text-white font-bold transition-all duration-300 flex justify-center items-center gap-2 shadow-lg ${formStatus === "sending" ? 'bg-slate-600 cursor-wait' : formStatus === "success" ? 'bg-emerald-500 shadow-emerald-500/25' : 'bg-primary hover:bg-primary-dark hover:shadow-primary/40 hover:-translate-y-1'}`}
                >
                  {formStatus === "sending" ? (
                    <span className="flex items-center gap-2">
                       <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                       </svg>
                       Establishing Link...
                    </span>
                  ) : formStatus === "success" ? (
                    <>
                      <Check size={20} className="animate-in zoom-in" /> Transmission Sent
                    </>
                  ) : (
                    <>
                      <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Send Message
                    </>
                  )}
                </button>
              </form>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 transition-colors duration-500 ${isDark ? 'bg-slate-950' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-extrabold text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-pink">HM.</span>
            <p className={`text-xs mt-2 font-medium ${textMuted}`}>&copy; {new Date().getFullYear()} Harshil Modh. All rights reserved.</p>
          </div>
          <div className="flex gap-8">
            <a href={`mailto:${PROFILE.socials.email}`} className={`text-sm font-semibold transition-colors duration-300 hover:text-primary ${textMuted}`}>Email</a>
            <a href={`https://${PROFILE.socials.github}`} target="_blank" rel="noreferrer" className={`text-sm font-semibold transition-colors duration-300 hover:text-primary ${textMuted}`}>GitHub</a>
            <a href={`https://${PROFILE.socials.linkedin}`} target="_blank" rel="noreferrer" className={`text-sm font-semibold transition-colors duration-300 hover:text-primary ${textMuted}`}>LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  );
};
