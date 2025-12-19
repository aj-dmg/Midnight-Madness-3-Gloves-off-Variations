import React, { useState } from 'react';
import Version1 from './components/Version1';
import Version2 from './components/Version2';
import Version3 from './components/Version3';
import { BusModel } from './types';
import { Monitor, Moon, Zap } from 'lucide-react';

// Shared Data
const FLEET_DATA: BusModel[] = [
  {
    id: '01',
    name: 'THE VOID RUNNER',
    capacity: 45,
    vibe: 'INTERSTELLAR NIGHTMARE',
    features: ['4000W BASS', 'FOG MACHINE', 'LASER GRID'],
    image: 'https://picsum.photos/800/600?grayscale&blur=2' 
  },
  {
    id: '02',
    name: 'NEON DEMON',
    capacity: 30,
    vibe: 'TOKYO DRIFT',
    features: ['POLE', 'LED CEILING', 'BLACKOUT TINT'],
    image: 'https://picsum.photos/800/601?grayscale&blur=2'
  },
  {
    id: '03',
    name: 'GRAVE RAVER',
    capacity: 60,
    vibe: 'INDUSTRIAL GOTH',
    features: ['CAGE', 'STROBE ARRAY', 'SUBWOOFER FLOOR'],
    image: 'https://picsum.photos/800/602?grayscale&blur=2'
  }
];

const App: React.FC = () => {
  const [version, setVersion] = useState<1 | 2 | 3>(1);
  const [showSwitcher, setShowSwitcher] = useState(true);

  return (
    <div>
      {/* Universal Version Switcher */}
      <div 
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] transition-opacity duration-300 ${showSwitcher ? 'opacity-100' : 'opacity-0 hover:opacity-100'}`}
      >
        <div className="flex items-center gap-2 bg-black/90 backdrop-blur border border-white/20 p-2 rounded-full shadow-2xl">
          <button 
            onClick={() => setVersion(1)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase transition-all ${version === 1 ? 'bg-cyan-500 text-black' : 'text-zinc-400 hover:text-white'}`}
          >
            <Monitor size={14} /> Cyber
          </button>
          <button 
            onClick={() => setVersion(2)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase transition-all ${version === 2 ? 'bg-red-900 text-white' : 'text-zinc-400 hover:text-white'}`}
          >
            <Moon size={14} /> Noir
          </button>
          <button 
            onClick={() => setVersion(3)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase transition-all ${version === 3 ? 'bg-[#ccff00] text-black' : 'text-zinc-400 hover:text-white'}`}
          >
            <Zap size={14} /> Acid
          </button>
        </div>
      </div>

      {/* Render Active Version */}
      <div className="transition-opacity duration-500 ease-in-out">
        {version === 1 && <Version1 data={FLEET_DATA} />}
        {version === 2 && <Version2 data={FLEET_DATA} />}
        {version === 3 && <Version3 data={FLEET_DATA} />}
      </div>
    </div>
  );
};

export default App;