import React, { useState } from 'react';
import WarpTunnel from './WarpTunnel';
import CustomCursor from './CustomCursor';
import VibeOracle from './VibeOracle';
import { BusModel } from '../types';
import { Menu, X, ArrowRight, Zap, Skull, Speaker } from 'lucide-react';

interface Props {
  data: BusModel[];
}

const Version1: React.FC<Props> = ({ data }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-cyan-500 selection:text-black font-space cursor-none-v1 bg-black text-white">
      <CustomCursor />
      <WarpTunnel />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 p-6 md:p-10 flex justify-between items-center mix-blend-difference text-white">
        <div className="text-xl md:text-2xl font-bold tracking-tighter interactive cursor-pointer hover:scale-110 transition-transform font-syncopate">
          MIDNIGHT<span className="text-cyan-500">.</span>MADNESS
        </div>
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="interactive group flex items-center gap-2 uppercase text-sm tracking-[0.2em]"
        >
          <span className="group-hover:mr-4 transition-all duration-300 hidden md:block">
            {menuOpen ? 'Abort' : 'Initiate'}
          </span>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Full Screen Menu */}
      <div 
        className={`fixed inset-0 bg-black z-30 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] flex flex-col justify-center items-center ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {['FLEET', 'MANIFESTO', 'ORACLE', 'SUMMON'].map((item) => (
          <a 
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-800 hover:text-cyan-400 transition-colors duration-300 font-syncopate my-2 interactive glitch-text"
          >
            {item}
          </a>
        ))}
      </div>

      {/* HERO SECTION */}
      <header className="relative h-screen flex flex-col justify-center items-center px-4">
        <div className="relative z-10 text-center mix-blend-difference">
          <h1 className="text-[15vw] leading-[0.8] font-black tracking-tighter mix-blend-exclusion text-white animate-pulse font-syncopate">
            MIDNIGHT
          </h1>
          <h1 className="text-[15vw] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-t from-cyan-500 via-white to-transparent opacity-80 italic transform -skew-x-12 translate-x-4 md:translate-x-12 font-syncopate">
            MADNESS
          </h1>
        </div>
        
        <div className="absolute bottom-10 left-10 md:left-20 animate-bounce mix-blend-difference text-white">
          <p className="font-mono text-xs md:text-sm max-w-[200px]">
            SCROLL TO ENTER THE VOID <br/>
            CAUTION: HIGH VOLTAGE
          </p>
        </div>

        <div className="absolute bottom-10 right-10 md:right-20 mix-blend-difference text-white">
           <p className="font-mono text-xl">EST. 2025 // NO SLEEP</p>
        </div>
      </header>

      {/* MANIFESTO SECTION */}
      <section id="manifesto" className="min-h-screen bg-zinc-950 py-24 px-6 md:px-20 relative flex items-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-20 pointer-events-none"></div>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-12">
            <h2 className="text-4xl md:text-7xl font-bold uppercase leading-tight font-syncopate">
              This is not a <span className="line-through decoration-red-600 decoration-4 text-zinc-600">shuttle</span>. <br/>
              This is a <span className="text-cyan-400 italic">riot</span> on wheels.
            </h2>
            <div className="grid md:grid-cols-2 gap-12 font-mono text-lg md:text-xl text-zinc-400 leading-relaxed">
              <p>
                We don't do corporate retreats. We don't do polite sightseeing.
                We build moving nightclubs that tear through the city like a
                battering ram of bass and neon.
              </p>
              <p>
                When you step onto the asphalt at 4 AM, ears ringing,
                you won't remember the route. You'll remember the chaos.
                Welcome to the heavy industry of nightlife.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-12 border-t border-zinc-800 pt-12">
              {[
                { icon: Zap, label: "10,000 WATTS" },
                { icon: Skull, label: "NO RULES" },
                { icon: Speaker, label: "DEAFENING" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center gap-4 group interactive">
                  <stat.icon size={48} className="text-zinc-700 group-hover:text-cyan-400 transition-colors duration-300" />
                  <span className="font-mono text-xs md:text-sm tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FLEET SECTION */}
      <section id="fleet" className="py-24 bg-black relative overflow-hidden">
        <div className="px-6 md:px-12 mb-20">
           <h2 className="text-[10vw] leading-none text-zinc-800 font-black uppercase text-center md:text-left font-syncopate">
             The Vessels
           </h2>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-12 no-scrollbar">
          {data.map((bus) => (
            <div 
              key={bus.id} 
              className="snap-center shrink-0 w-[85vw] md:w-[40vw] relative group interactive border border-zinc-900 bg-zinc-950"
            >
              <div className="relative h-[50vh] overflow-hidden">
                <img 
                  src={bus.image} 
                  alt={bus.name}
                  className="w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-cyan-900/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-4 left-4 bg-black text-white px-2 py-1 font-mono text-xs border border-white">
                  UNIT_{bus.id}
                </div>
              </div>

              <div className="p-8 relative">
                <h3 className="text-3xl md:text-5xl font-bold mb-2 uppercase group-hover:text-cyan-400 transition-colors font-syncopate">{bus.name}</h3>
                <p className="text-zinc-500 font-mono text-sm mb-6 uppercase tracking-widest">
                  Capacity: {bus.capacity} // Vibe: {bus.vibe}
                </p>
                <div className="flex flex-wrap gap-2">
                  {bus.features.map(f => (
                    <span key={f} className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-xs font-mono uppercase text-zinc-400">
                      {f}
                    </span>
                  ))}
                </div>
                
                <button className="absolute bottom-8 right-8 w-12 h-12 border border-zinc-700 rounded-full flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black group-hover:border-cyan-500 transition-all duration-300">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ORACLE SECTION */}
      <section id="oracle" className="min-h-screen py-24 px-6 relative flex items-center justify-center bg-zinc-950">
         <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 blur-[100px] rounded-full animate-pulse"></div>
         </div>
         <div className="relative z-10 w-full">
            <VibeOracle theme="cyber" />
         </div>
      </section>

      {/* SUMMON / FOOTER */}
      <section id="summon" className="min-h-screen bg-cyan-950 flex flex-col justify-between py-24 px-6 md:px-20 text-black relative">
        <div className="absolute inset-0 bg-cyan-500 mix-blend-multiply opacity-80 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>

        <div className="relative z-10">
          <h2 className="text-[12vw] leading-[0.85] font-black uppercase tracking-tighter mb-12 font-syncopate break-all">
            Summon<br/>The<br/>Madness
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-end">
            <a href="mailto:chaos@midnightmadness.com" className="text-3xl md:text-5xl font-bold underline decoration-4 underline-offset-8 hover:text-white transition-colors interactive">
              chaos@midnightmadness.com
            </a>
            <div className="font-mono text-xl uppercase">
              +1 (666) 555-RIDE
            </div>
          </div>
        </div>

        <div className="relative z-10 flex justify-between items-end border-t-4 border-black pt-8">
           <div className="font-mono text-sm font-bold w-1/2">
             WARNING: WE ARE NOT RESPONSIBLE FOR LOST VOICES, SHOES, OR DIGNITY.
           </div>
           <div className="font-mono text-xl font-bold">
             ©2025
           </div>
        </div>
      </section>
    </div>
  );
};

export default Version1;