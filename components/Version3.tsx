import React from 'react';
import VibeOracle from './VibeOracle';
import { BusModel } from '../types';
import { AlertTriangle, Zap, Radio, BatteryCharging } from 'lucide-react';

interface Props {
  data: BusModel[];
}

const Version3: React.FC<Props> = ({ data }) => {
  return (
    <div className="min-h-screen bg-[#ccff00] text-black font-mono-jb selection:bg-black selection:text-[#ccff00]">
      
      {/* Brutal Header */}
      <header className="border-b-4 border-black bg-white p-4 sticky top-0 z-50 flex justify-between items-center">
        <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-red-600 rounded-full animate-pulse"></div>
            <span className="font-bold text-xl tracking-tighter">MIDNIGHT_MADNESS_V3.0</span>
        </div>
        <button className="bg-black text-white px-4 py-1 font-bold hover:bg-blue-600 uppercase">
            [BOOK_NOW]
        </button>
      </header>

      {/* Scrolling Marquee */}
      <div className="bg-black text-white overflow-hidden py-2 border-b-4 border-black">
        <div className="whitespace-nowrap animate-marquee font-anton text-4xl uppercase">
          LOUD NOISES /// FAST BUSES /// BAD DECISIONS /// LOUD NOISES /// FAST BUSES /// BAD DECISIONS ///
        </div>
      </div>

      {/* Hero Grid */}
      <section className="grid md:grid-cols-2 min-h-[80vh] border-b-4 border-black">
        <div className="p-8 md:p-16 flex flex-col justify-center border-b-4 md:border-b-0 md:border-r-4 border-black bg-[#ff00ff]">
            <h1 className="font-anton text-[15vw] md:text-[8vw] leading-[0.85] uppercase break-words text-white drop-shadow-[5px_5px_0px_rgba(0,0,0,1)]">
                PARTY<br/>HARD<br/>OR<br/>DIE
            </h1>
        </div>
        <div className="bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] bg-white p-8 md:p-16 flex flex-col justify-center gap-8 relative overflow-hidden">
             <div className="absolute top-10 right-10 rotate-12">
                <Zap size={120} className="text-yellow-400 drop-shadow-[4px_4px_0px_black]" />
             </div>
             <p className="font-bold text-2xl md:text-4xl uppercase leading-tight bg-white inline-block border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-10">
                Warning: This service contains flashing lights, heavy bass, and questionable morals.
             </p>
             <div className="flex gap-4">
                <BatteryCharging size={48} />
                <Radio size={48} />
                <AlertTriangle size={48} />
             </div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="p-4 md:p-8 bg-white">
        <h2 className="font-anton text-8xl mb-8 uppercase text-black underline decoration-wavy decoration-4 decoration-[#ff00ff]">The Hardware</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.map((bus) => (
                <div key={bus.id} className="border-4 border-black bg-gray-100 hover:bg-[#ccff00] transition-colors p-4 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group">
                    <div className="h-64 overflow-hidden border-2 border-black mb-4 bg-black relative">
                        <img src={bus.image} className="w-full h-full object-cover grayscale contrast-150 group-hover:grayscale-0 transition-all" />
                        <div className="absolute bottom-0 left-0 bg-[#ff00ff] text-white px-2 font-bold font-mono-jb">
                            ID: {bus.id}
                        </div>
                    </div>
                    <h3 className="font-anton text-4xl mb-2 uppercase">{bus.name}</h3>
                    <ul className="list-disc list-inside font-bold uppercase text-sm mb-4">
                        {bus.features.map(f => <li key={f}>{f}</li>)}
                    </ul>
                    <div className="bg-black text-white p-2 text-center font-bold uppercase group-hover:bg-white group-hover:text-black border-2 border-transparent group-hover:border-black transition-all cursor-pointer">
                        Select Unit
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Oracle */}
      <section className="border-t-4 border-black py-20 bg-[url('https://www.transparenttextures.com/patterns/cross-stripes.png')] bg-blue-600">
         <div className="px-4">
             <VibeOracle theme="acid" />
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-[#ccff00] p-12 font-mono-jb text-center border-t-4 border-white">
        <div className="text-4xl md:text-6xl font-anton uppercase mb-8 animate-pulse">
            Call +1-666-MADNESS
        </div>
        <div className="flex justify-center gap-4 text-sm uppercase">
            <a href="#" className="hover:underline">Legal</a>
            <span>//</span>
            <a href="#" className="hover:underline">Waiver</a>
            <span>//</span>
            <a href="#" className="hover:underline">Bribes</a>
        </div>
      </footer>
    </div>
  );
};

export default Version3;