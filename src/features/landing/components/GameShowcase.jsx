import { gameScenes } from '../data/images';
import { Clock, Heart, Map } from 'lucide-react';

const BADGES = [
  { icon: Clock, label: '60 segundos por nivel', color: '#22d3ee' },
  { icon: Heart, label: '3 vidas', color: '#f43f5e' },
  { icon: Map, label: '15 escenarios', color: '#a5b4fc' },
];

export const GameShowcase = () => {
  const [main, floatingA, floatingB] = gameScenes;

  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-none">
      <div
        className="rounded-3xl overflow-hidden relative"
        style={{ border: '1px solid rgba(255,255,255,0.15)', boxShadow: '0 30px 80px rgba(0,0,0,0.6)' }}
      >
        <div
          className="flex items-center gap-1.5 px-4 py-3"
          style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}
        >
          <span className="w-3 h-3 rounded-full" style={{ background: '#f43f5e' }} />
          <span className="w-3 h-3 rounded-full" style={{ background: '#f59e0b' }} />
          <span className="w-3 h-3 rounded-full" style={{ background: '#22c55e' }} />
          <span className="ml-3 text-xs text-slate-300 font-semibold">MundoCosmico · {main.label}</span>
        </div>
        <img src={main.src} alt={main.label} className="w-full aspect-[4/3] object-cover" loading="lazy" />
      </div>

      <div
        className="absolute -bottom-6 -left-4 sm:-left-8 w-36 sm:w-44 rounded-2xl overflow-hidden shadow-2xl -rotate-6 hidden sm:block"
        style={{ border: '1px solid rgba(255,255,255,0.2)' }}
      >
        <img src={floatingA.src} alt={floatingA.label} className="w-full aspect-square object-cover" loading="lazy" />
      </div>

      <div
        className="absolute -top-6 -right-2 sm:-right-6 w-36 sm:w-44 rounded-2xl overflow-hidden shadow-2xl rotate-6 hidden md:block"
        style={{ border: '1px solid rgba(255,255,255,0.2)' }}
      >
        <img src={floatingB.src} alt={floatingB.label} className="w-full aspect-square object-cover" loading="lazy" />
      </div>

      <div className="flex flex-wrap justify-center gap-2 mt-10 lg:mt-8">
        {BADGES.map((badge) => (
          <span
            key={badge.label}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
            style={{ background: 'rgba(0,0,0,0.4)', border: `1px solid ${badge.color}55`, color: badge.color }}
          >
            <badge.icon className="w-3.5 h-3.5" />
            {badge.label}
          </span>
        ))}
      </div>
    </div>
  );
};