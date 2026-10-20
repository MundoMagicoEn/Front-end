import { ArrowDown, Sparkles } from 'lucide-react';
import { useSound } from '../../../hooks/useSound';
import EarthLogo from '../../../components/EarthLogo';
import { DEMO_LEVELS_COUNT, TOTAL_LEVELS } from '../../../utils/config';
import { PlayButton } from './PlayButton';
import { GameShowcase } from './GameShowcase';
import { useStartGame } from '../hooks/useStartGame';

export const Hero = () => {
  const startGame = useStartGame();
  const { playButton } = useSound();

  return (
    <section className="grid lg:grid-cols-2 gap-12 p-15 lg:gap-16 items-center min-h-[calc(100vh-110px)] py-12 md:py-16">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

        <p className="text-slate-100 font-bold tracking-[0.3em] uppercase text-sm mb-3">
          Bienvenido a
        </p>

        <h1
          className="text-5xl md:text-6xl xl:text-7xl font-black text-white tracking-tight mb-5"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Mundo
          <span
            className="block lg:inline lg:ml-3"
            style={{
              background: 'linear-gradient(90deg, #6366f1, #a855f7, #22d3ee)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Cosmico
          </span>
        </h1>

        <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-xl font-medium mb-8">
          Aprende inglés explorando escenarios reales y encontrando objetos
          con asociación visual. Sin registro, directo a jugar.
        </p>

        <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-6">
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
          Versión demo · {DEMO_LEVELS_COUNT} de {TOTAL_LEVELS} escenarios · 60 segundos · 3 vidas
        </p>
      </div>

      <GameShowcase />
    </section>
  );
};