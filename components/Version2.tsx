import React from 'react';
import VibeOracle from './VibeOracle';
import { BusModel } from '../types';
import { ArrowDown, Wine, Crown, Star } from 'lucide-react';

interface Props {
  data: BusModel[];
}

const Version2: React.FC<Props> = ({ data }) => {
  return (
    <div className="min-h-screen bg-[#0a0505] text-[#e0c090] font-inter selection:bg-red-900 selection:text-white overflow-x-hidden">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-red-900/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] bg-purple-900/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] bg-orange-900/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full p-8 z-50 flex justify-between items-center mix-blend-overlay">
         <div className="font-playfair font-bold text-xl tracking-widest border-b border-[#e0c090]/50 pb-1">M / M</div>
         <div className="flex gap-8 text-xs font-bold tracking-[0.2em] uppercase">
            <a href="#fleet" className="hover:text-red-500 transition-colors">Fleet</a>
            <a href="#society" className="hover:text-red-500 transition-colors">Society</a>
            <a href="#oracle" className="hover:text-red-500 transition-colors">Oracle</a>
         </div>
      </nav>

      {/* Hero */}
      <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 z-10">
        <p className="text-red-500 tracking-[0.5em] text-xs font-bold uppercase mb-6 animate-fadeIn">Invitation Only</p>
        <h1 className="font-playfair text-6xl md:text-9xl italic leading-none mb-8 bg-clip-text text-transparent bg-gradient-to-b from-[#e0c090] to-[#7c5e40]">
          Midnight<br/>Madness
        </h1>
        <p className="max-w-md text-[#e0c090]/60 font-inter font-light leading-relaxed mb-12">
          Beyond the velvet rope lies a world in motion. Luxury is not just comfort; it is the freedom to lose control in style.
        </p>
        <div className="animate-bounce text-[#e0c090]/30">
          <ArrowDown size={32} />
        </div>
      </header>

      {/* Fleet Showcase - Asymmetrical */}
      <section id="fleet" className="py-32 px-6 md:px-20 relative z-10">
        <div className="flex flex-col gap-32">
          {data.map((bus, index) => (
            <div 
              key={bus.id} 
              className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute -inset-4 border border-[#e0c090]/20 rounded-full scale-95 group-hover:scale-100 transition-transform duration-700 ease-out"></div>
                <div className="aspect-[4/5] overflow-hidden rounded-[100px_0_100px_0] filter sepia-[0.5] contrast-125 brightness-75 group-hover:filter-none transition-all duration-1000">
                  <img src={bus.image} alt={bus.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
              </div>
              
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="font-playfair text-4xl md:text-6xl mb-4 italic text-red-500">{bus.name}</h3>
                <p className="text-[#e0c090]/60 tracking-widest uppercase text-xs mb-8">
                  {bus.vibe}
                </p>
                <div className="flex flex-col gap-4 font-playfair text-xl text-[#e0c090]">
                  {bus.features.map(f => (
                    <span key={f} className="border-b border-[#e0c090]/10 pb-2">{f}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Oracle */}
      <section id="oracle" className="py-32 bg-gradient-to-b from-transparent to-[#1a0505] relative z-10">
        <VibeOracle theme="luxury" />
      </section>

      {/* Manifesto / Footer */}
      <section id="society" className="py-32 px-6 text-center relative z-10">
        <div className="max-w-2xl mx-auto border p-12 border-[#e0c090]/20 bg-[#0a0505]/80 backdrop-blur-md">
           <Crown className="mx-auto w-12 h-12 text-red-800 mb-8" />
           <h2 className="font-playfair text-4xl mb-8">Join the Congregation</h2>
           <p className="text-[#e0c090]/60 mb-8 leading-loose">
             We do not sell tickets. We curate experiences for those who find the daylight unbearable.
             Contact our concierge for access.
           </p>
           <a href="mailto:concierge@midnightmadness.com" className="inline-block px-8 py-4 bg-[#e0c090] text-[#0a0505] font-bold tracking-widest uppercase hover:bg-white transition-colors">
             Request Audience
           </a>
        </div>
        <footer className="mt-20 text-[#e0c090]/20 text-xs tracking-[0.3em] uppercase">
          Est. MMXXV &bull; Sine Somno
        </footer>
      </section>
    </div>
  );
};

export default Version2;