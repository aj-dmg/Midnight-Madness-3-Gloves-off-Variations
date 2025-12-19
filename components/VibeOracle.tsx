import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Terminal, Moon } from 'lucide-react';

interface VibeOracleProps {
  theme?: 'cyber' | 'luxury' | 'acid';
}

const VibeOracle: React.FC<VibeOracleProps> = ({ theme = 'cyber' }) => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setResponse(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const vibeMap = {
        cyber: "a chaotic, high-voltage party bus AI",
        luxury: "a mysterious, exclusive concierge for a secret society",
        acid: "a hyper-active, shouting, internet-brained party hype machine"
      };
      
      const prompt = `
        You are ${vibeMap[theme]}.
        The user inputs a vibe: "${input}".
        Output a short "Party Prophecy".
        1. Code Name for the night.
        2. Drink recommendation (bizarre).
        3. A survival or fun probability.
        4. A 2-sentence manifesto.
        Keep it under 100 words. Format with line breaks.
      `;

      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setResponse(result.text || "NO SIGNAL.");
    } catch (error) {
      console.error(error);
      setResponse("SYSTEM FAILURE.");
    } finally {
      setLoading(false);
    }
  };

  // --- THEME 1: CYBER (Original) ---
  if (theme === 'cyber') {
    return (
      <div className="w-full max-w-4xl mx-auto border border-zinc-800 bg-zinc-900/50 backdrop-blur-md p-8 md:p-12 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.8)] animate-scan"></div>
        <h3 className="text-3xl md:text-5xl font-bold mb-8 font-syncopate text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
          CONSULT THE ORACLE
        </h3>
        <p className="mb-8 text-zinc-400 font-mono text-sm uppercase tracking-widest">
          Feed the machine your vibe. Receive your destiny.
        </p>
        <form onSubmit={handleSubmit} className="relative z-10 mb-8">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="ENTER DESIRE..."
            className="w-full bg-black/80 border-b-2 border-zinc-700 p-4 text-xl md:text-2xl outline-none focus:border-cyan-500 transition-colors font-mono text-cyan-300 placeholder-zinc-700 interactive"
          />
          <button 
            type="submit" 
            disabled={loading}
            className="mt-6 interactive px-8 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-cyan-400 hover:text-white transition-all duration-300 disabled:opacity-50"
          >
            {loading ? 'CALCULATING...' : 'TRANSMIT'}
          </button>
        </form>
        {response && (
          <div className="border-l-4 border-purple-500 pl-6 py-2 animate-fadeIn">
            <pre className="whitespace-pre-wrap font-mono text-sm md:text-base text-purple-200 leading-relaxed">
              {response}
            </pre>
          </div>
        )}
      </div>
    );
  }

  // --- THEME 2: LUXURY (Velvet Noir) ---
  if (theme === 'luxury') {
    return (
      <div className="w-full max-w-3xl mx-auto bg-red-950/20 backdrop-blur-sm border border-red-900/30 p-12 md:p-16 relative text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 pointer-events-none"></div>
        <div className="relative z-10">
          <Moon className="w-8 h-8 mx-auto text-red-500 mb-6 opacity-80" />
          <h3 className="text-4xl md:text-6xl mb-6 font-playfair italic text-amber-50">
            Whisper to the Void
          </h3>
          <p className="mb-10 text-red-200/60 font-inter tracking-widest text-sm">
            What defines your evening?
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., A secret affair..."
              className="w-full bg-transparent border-b border-red-900/50 p-4 text-center text-2xl font-playfair text-amber-100 placeholder-red-900/40 focus:border-amber-500/50 outline-none transition-all"
            />
            <button 
              type="submit" 
              disabled={loading}
              className="px-10 py-3 border border-amber-900/50 text-amber-500 hover:bg-amber-900/20 hover:text-amber-200 transition-all duration-700 font-inter uppercase tracking-[0.3em] text-xs"
            >
              {loading ? 'Divining...' : 'Manifest'}
            </button>
          </form>
          {response && (
            <div className="mt-12 opacity-0 animate-[fadeIn_1.5s_ease-out_forwards]">
              <div className="w-1 h-12 bg-gradient-to-b from-transparent via-amber-500/50 to-transparent mx-auto mb-6"></div>
              <p className="font-playfair text-lg md:text-xl text-amber-100/90 leading-loose italic">
                {response}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // --- THEME 3: ACID (Brutalism) ---
  if (theme === 'acid') {
    return (
      <div className="w-full max-w-5xl mx-auto bg-white border-4 border-black p-2 md:p-8 relative shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
        <div className="bg-black text-lime-400 p-2 font-mono-jb text-sm flex justify-between items-center mb-6">
          <span>VIBE_GENERATOR.EXE</span>
          <Terminal size={16} />
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
                <h3 className="text-5xl md:text-7xl font-anton uppercase leading-[0.85] mb-6 text-black">
                  GENERATE<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-yellow-500">HYPE</span>
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <textarea
                    rows={3}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="TYPE THE OCCASION HERE RIGHT NOW"
                    className="w-full bg-zinc-100 border-2 border-black p-4 font-mono-jb text-xl uppercase text-black focus:bg-lime-200 outline-none placeholder-zinc-400 resize-none"
                  />
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full py-4 bg-black text-white hover:bg-lime-400 hover:text-black border-2 border-transparent hover:border-black font-anton text-2xl uppercase tracking-wider transition-colors"
                  >
                    {loading ? 'PROCESSING...' : 'GO GO GO'}
                  </button>
                </form>
            </div>
            
            <div className="flex-1 bg-zinc-100 border-2 border-black min-h-[200px] p-6 relative">
                {!response && <span className="text-zinc-300 font-anton text-8xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-50">?</span>}
                {response && (
                  <pre className="whitespace-pre-wrap font-mono-jb text-sm md:text-base text-black font-bold leading-tight">
                    {response}
                  </pre>
                )}
            </div>
        </div>
      </div>
    );
  }

  return null;
};

export default VibeOracle;