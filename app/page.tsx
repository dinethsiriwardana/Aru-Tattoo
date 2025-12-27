"use client";

import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Menu, 
  X, 
  ChevronRight,
  Sparkles,
  MessageCircle,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { NAV_ITEMS, SERVICES, IMAGES, GALLERY } from '../constants';
import { getTattooIdea } from '../geminiService';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={IMAGES.LOGO} alt="Logo" className="w-10 h-10 rounded-full border border-amber-500/50 object-cover" />
          <span className="font-serif text-xl tracking-[0.2em] text-amber-500 font-bold hidden sm:block">ARU TATTOO</span>
        </div>
        
        <div className="hidden md:flex gap-10">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-white/80 hover:text-amber-500 transition-colors uppercase text-xs tracking-[0.3em] font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button 
          className="md:hidden text-white p-2" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 origin-top overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="glass p-6 text-center space-y-4 shadow-2xl">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={() => setIsOpen(false)}
              className="block text-white/90 hover:text-amber-500 transition-colors uppercase text-sm tracking-[0.2em] font-medium py-2"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};


const SectionHeader = ({ subtitle, title, centered = true }: { subtitle: string, title: string, centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    <h2 className="text-amber-500 font-serif mb-3 tracking-[0.4em] uppercase text-xs sm:text-sm">{subtitle}</h2>
    <h3 className="text-4xl md:text-5xl font-serif text-white tracking-tight">{title}</h3>
  </div>
);

export default function Page() {
  const [bookingName, setBookingName] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
    setTimeout(() => setIsBooked(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-amber-500/30 scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 scale-105"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.95)), url(${IMAGES.HERO_BG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative z-10 text-center px-6 max-w-5xl">
          
          <h1 className="text-6xl sm:text-8xl md:text-[10rem] font-serif mb-8 leading-[0.9] text-white mix-blend-difference animate-in fade-in slide-in-from-bottom-20 duration-1000">
            INK WITH <br />
            <span className="text-amber-500">IDENTITY.</span>
          </h1>
          <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-30 duration-1000 uppercase tracking-widest leading-relaxed">
            Welcome to ARU TATTOO, Dambadeniya's sanctuary of precision. Where art meets skin in a safe, creative, and professional environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in fade-in slide-in-from-bottom-40 duration-1000">
            <a href="#contact" className="px-10 py-5 bg-amber-600 hover:bg-amber-500 text-black font-bold uppercase tracking-[0.2em] text-xs transition-all active:scale-95">
              Secure Your Session
            </a>
            <a href="#gallery" className="px-10 py-5 glass text-white hover:text-amber-500 font-bold uppercase tracking-[0.2em] text-xs transition-all border border-white/10 active:scale-95">
              Explore Our Portfolio
            </a>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-amber-500 to-transparent" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t border-l border-amber-500/50" />
            <img 
              src={IMAGES.STUDIO} 
              alt="Studio Interior" 
              className="w-full h-auto rounded-sm shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000 border border-white/5" 
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b border-r border-amber-500/50" />
            <div className="absolute inset-0 bg-amber-500/5 group-hover:bg-transparent transition-colors duration-1000" />
          </div>
          <div>
            <SectionHeader subtitle="The Legacy" title="Art with Attitude" centered={false} />
            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                Located in the heart of <span className="text-white font-medium border-b border-amber-500/30">දඹදෙණිය (Dambadeniya)</span>, ARU TATTOO has built a reputation for excellence, creativity, and sterile precision.
              </p>
              <p>
                Our philosophy is simple: Your body is a canvas, and your story deserves the highest level of craftsmanship. From bold custom pieces to minimal geometric art, we treat every session with obsessive attention to detail.
              </p>
              <p className="text-sm uppercase tracking-widest text-amber-500/80">
                Originality • Precision • Hygiene • Passion
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="glass p-6 border-l-2 border-amber-500">
                <h4 className="font-serif text-white text-2xl mb-1">Creative</h4>
                <p className="text-[10px] text-white/40 uppercase tracking-widest">Driven approach</p>
              </div>
              <div className="glass p-6 border-l-2 border-amber-500">
                <h4 className="font-serif text-white text-2xl mb-1">Sterile</h4>
                <p className="text-[10px] text-white/40 uppercase tracking-widest">Medical standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <SectionHeader subtitle="Expertise" title="Our Services" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div key={index} className="glass p-10 group hover:border-amber-500/50 transition-all duration-500 cursor-default relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 -mr-12 -mt-12 rounded-full group-hover:scale-150 transition-transform duration-700" />
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center mb-8 group-hover:border-amber-500/50 transition-colors">
                  <span className="text-amber-500 font-serif text-xl">0{index + 1}</span>
                </div>
                <h4 className="text-2xl font-serif mb-4 group-hover:text-amber-500 transition-colors tracking-tight">{service.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/80 transition-colors">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
            <SectionHeader subtitle="Visual Proof" title="Masterpieces" centered={false} />
            <p className="text-white/40 max-w-sm text-sm uppercase tracking-widest leading-relaxed mb-4">
              A curated selection of our finest work, highlighting precision line-work, vibrant colors, and custom concepts.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY.map((img, idx) => (
              <div key={idx} className="relative group overflow-hidden aspect-[4/5] rounded-sm glass border-white/5">
                <img 
                  src={img.url} 
                  alt={img.caption} 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-amber-500 font-serif text-xs tracking-[0.3em] uppercase block mb-2">Ink Work</span>
                    <h5 className="text-white font-serif text-lg">{img.caption}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <a href="https://youtube.com/@channel/UC5QVwx95PUfmMo0snWi71Ag" target="_blank" className="inline-flex items-center gap-2 text-white/50 hover:text-amber-500 transition-colors uppercase text-xs tracking-[0.4em]">
              See more on YouTube <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Artist Section */}
      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
            <SectionHeader subtitle="The Artist" title="Aruna Madushan" centered={false} />
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              With a deep passion for artistry and an unyielding commitment to precision, Aruna brings over years of dedicated craft to ARU TATTOO. Every needle stroke is intentional, every design is a collaboration.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-12">
              Specializing in custom blackwork and realistic detailing, Aruna ensures that your session at ARU TATTOO is not just an appointment, but an artistic journey.
            </p>
            <div className="flex gap-6">
              <a href="https://youtube.com/channel/UC5QVwx95PUfmMo0snWi71Ag" target="_blank" className="w-14 h-14 rounded-full glass flex items-center justify-center text-white/50 hover:text-red-500 hover:border-red-500/50 transition-all group">
                <Youtube className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-14 h-14 rounded-full glass flex items-center justify-center text-white/50 hover:text-amber-500 hover:border-amber-500/50 transition-all group">
                <Instagram className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative px-4">
            <div className="relative z-10">
              <img 
                src={IMAGES.ARTIST} 
                alt="Aruna Madushan" 
                className="w-full rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border border-white/10" 
              />
              <div className="absolute -bottom-8 -left-8 glass p-8 rounded-sm border-amber-500/30 border hidden sm:block backdrop-blur-2xl">
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-8 h-[1px] bg-amber-500" />
                   <span className="text-[10px] text-amber-500 uppercase tracking-[0.4em]">Master Artist</span>
                </div>
                <h4 className="text-3xl font-serif text-white tracking-tighter">Passion First</h4>
              </div>
            </div>
            <div className="absolute inset-0 bg-amber-500/10 blur-[100px] -z-10 rounded-full" />
          </div>
        </div>
      </section>

      {/* Studio Location */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader subtitle="Experience" title="Visit the Studio" />
          <div className="glass overflow-hidden rounded-sm border-white/5 grid lg:grid-cols-5 h-auto lg:h-[600px]">
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 p-12 border-b lg:border-b-0 lg:border-r border-white/5 bg-white/[0.01]">
              <div className="space-y-12">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-amber-500 border-amber-500/20 group-hover:border-amber-500 transition-colors">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-serif uppercase tracking-[0.2em] text-sm mb-2">Location</h4>
                    <p className="text-white/50 leading-relaxed">දඹදෙණිය, Dambadeniya,<br />Sri Lanka</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-amber-500 border-amber-500/20 group-hover:border-amber-500 transition-colors">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-serif uppercase tracking-[0.2em] text-sm mb-2">Voice</h4>
                    <p className="text-white/50 leading-relaxed">076 092 1293<br />+94 76 092 1293</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-amber-500 border-amber-500/20 group-hover:border-amber-500 transition-colors">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-serif uppercase tracking-[0.2em] text-sm mb-2">Email</h4>
                    <p className="text-white/50 leading-relaxed truncate">arunamadushan1013@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-amber-500 border-amber-500/20 group-hover:border-amber-500 transition-colors">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-serif uppercase tracking-[0.2em] text-sm mb-2">Availability</h4>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-amber-500 font-bold uppercase tracking-widest text-xs">Always Open</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="lg:col-span-3 p-12 bg-black/20 flex flex-col justify-center relative">
               {isBooked ? (
                 <div className="text-center animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-500/50">
                      <CheckCircle2 size={40} className="text-amber-500" />
                    </div>
                    <h4 className="text-3xl font-serif text-white mb-2 tracking-tight">Booking Requested</h4>
                    <p className="text-white/50 uppercase tracking-widest text-xs">We'll reach out to you shortly, {bookingName}.</p>
                 </div>
               ) : (
                 <form onSubmit={handleBooking} className="space-y-6">
                    <h4 className="text-2xl font-serif text-white mb-8 tracking-tight">Express Inquiry</h4>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.3em] text-white/40">Full Name</label>
                        <input 
                          required
                          value={bookingName}
                          onChange={(e) => setBookingName(e.target.value)}
                          type="text" 
                          className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-amber-500/50 transition-all text-sm rounded-sm"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.3em] text-white/40">Mobile Number</label>
                        <input 
                          required
                          type="tel" 
                          className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-amber-500/50 transition-all text-sm rounded-sm"
                          placeholder="07X XXX XXXX"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.3em] text-white/40">Idea Description</label>
                      <textarea 
                        required
                        className="w-full bg-white/5 border border-white/10 p-4 h-32 text-white focus:outline-none focus:border-amber-500/50 transition-all text-sm resize-none rounded-sm"
                        placeholder="Briefly describe your dream tattoo or piercing idea..."
                      />
                    </div>
                    <button type="submit" className="w-full py-5 bg-amber-600 hover:bg-amber-500 text-black font-bold uppercase tracking-[0.3em] text-xs transition-all active:scale-[0.98] shadow-lg shadow-amber-900/10">
                      Submit Your Request
                    </button>
                 </form>
               )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-32 pb-12 px-6 bg-black relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12">
            <img src={IMAGES.LOGO} alt="Logo" className="w-20 h-20 rounded-full mx-auto mb-6 border border-amber-500/30 grayscale hover:grayscale-0 transition-all duration-700" />
            <h2 className="font-serif text-3xl tracking-[0.6em] text-white uppercase">ARU TATTOO</h2>
            <p className="text-amber-500/40 text-[10px] mt-2 tracking-[0.8em] uppercase italic">The Mark of Identity</p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-10 mb-20 border-y border-white/5 py-12">
             <div className="text-center px-8">
                <span className="block text-white/20 text-[10px] uppercase tracking-[0.4em] mb-4">Location</span>
                <span className="text-white/80 font-serif tracking-widest">Dambadeniya, SL</span>
             </div>
             <div className="w-[1px] h-10 bg-white/5 hidden sm:block" />
             <div className="text-center px-8">
                <span className="block text-white/20 text-[10px] uppercase tracking-[0.4em] mb-4">Follow</span>
                <div className="flex gap-4">
                  <a href="https://youtube.com/@channel/UC5QVwx95PUfmMo0snWi71Ag" target="_blank" className="text-white/60 hover:text-amber-500 transition-colors uppercase text-[10px] tracking-[0.2em]">YT</a>
                  <a href="#" className="text-white/60 hover:text-amber-500 transition-colors uppercase text-[10px] tracking-[0.2em]">IG</a>
                </div>
             </div>
             <div className="w-[1px] h-10 bg-white/5 hidden sm:block" />
             <div className="text-center px-8">
                <span className="block text-white/20 text-[10px] uppercase tracking-[0.4em] mb-4">Inquiries</span>
                <span className="text-white/80 font-serif tracking-widest">+94 76 092 1293</span>
             </div>
          </div>

          <p className="text-white/20 text-[9px] uppercase tracking-[0.5em] mt-12">
            &copy; {new Date().getFullYear()} ARU TATTOO Studio. Designed for Excellence.
          </p>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      </footer>
    </div>
  );
}