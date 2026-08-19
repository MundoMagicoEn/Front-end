import { ArrowDown, Sparkles } from 'lucide-react';
import { useSound } from '../../../hooks/useSound';
import EarthLogo from '../../../components/EarthLogo';
import { DEMO_LEVELS_COUNT, TOTAL_LEVELS } from '../../../utils/config';
import { DemoNotice } from './DemoNotice';
import { PlayButton } from './PlayButton';
import { useStartGame } from '../hooks/useStartGame';

export const Hero = () => {
  const startGame = useStartGame();
  const { playButton } = useSound();

  return (
    <section className="w-full flex flex-col items-center text-center py-10 md:py-16">
      <DemoNotice />

      <div className="relative mb-10">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(56,189,248,0.25) 0%, rgba(99,102,241,0.12) 45%, transparent 70%)',
            transform: 'scale(1.8)',
          }}
        />
        <div className="relative animate-float">
          <EarthLogo size={150} />
        </div>
      </div>

      <div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6"
        style={{
          background: 'linear-gradient(135deg, rgba(99,102,241,0.25), rgba(168,85,247,0.25))',
          border: '1px solid rgba(99,102,241,0.4)',
          color: '#a5b4fc',
        }}
      >
        <Sparkles className="w-4 h-4" />
        Juego educativo gratuito
      </div>

      <p className="text-slate-400 font-semibold tracking-[0.3em] uppercase text-sm mb-3">
        Bienvenido a
      </p>

      <h1
        className="text-5xl md:text-7xl font-black text-white tracking-tight mb-4"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Mundo
        <span
          className="block md:inline md:ml-3"
          style={{
            background: 'linear-gradient(90deg, #6366f1, #a855f7, #22d3ee)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Cosmico
        </span>
      </h1>

      <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-xl font-medium mb-10">
        Aprende inglés explorando escenarios y encontrando objetos
        con asociación visual. Sin registro, directo a jugar.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
        <PlayButton onClick={startGame}>JUGAR AHORA</PlayButton>
        <a
          href="#como-jugar"
          onClick={() => playButton()}
          className="inline-flex items-center gap-2 text-slate-200 font-bold text-base px-6 py-4 rounded-2xl transition-all duration-200 hover:bg-white/5"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          Cómo se juega <ArrowDown className="w-4 h-4" />
        </a>
      </div>

      <p className="text-slate-500 text-sm font-medium">
        Versión demo · {DEMO_LEVELS_COUNT} de {TOTAL_LEVELS} niveles · 60 segundos por nivel · 3 vidas
      </p>
    </section>
  );
};