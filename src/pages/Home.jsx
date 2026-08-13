import { useNavigate } from 'react-router-dom';
import { PlayCircle, BookOpen, Star, Zap, Target } from 'lucide-react';
import { useSound } from '../features/game/hooks/useSound';

const FEATURES = [
  { icon: <BookOpen className="w-5 h-5" />, label: 'Many levels', desc: 'Progressive difficulty' },
  { icon: <Target className="w-5 h-5" />, label: 'Visual Match', desc: 'Click on the scene' },
  { icon: <Zap className="w-5 h-5" />, label: 'Instant Feedback', desc: 'Learn from mistakes' },
];

export const Home = () => {
  const navigate = useNavigate();
  const { playButton } = useSound();

  return (
    <div className="flex-grow flex flex-col items-center justify-center animate-fade-in-up">
      {/* Hero Card */}
      <div
        className="w-full max-w-2xl rounded-3xl p-8 md:p-12 relative overflow-hidden"
        style={{
          background: 'rgba(255,255,255,0.05)',
          backdropFilter: 'blur(30px)',
          border: '1px solid rgba(255,255,255,0.12)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15)',
        }}
      >
        {/* Decorative glow corner */}
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle at top right, rgba(99,102,241,0.3) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-40 h-40 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle at bottom left, rgba(168,85,247,0.2) 0%, transparent 70%)',
          }}
        />

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold"
            style={{
              background: 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(168,85,247,0.3))',
              border: '1px solid rgba(99,102,241,0.5)',
              color: '#a5b4fc',
            }}
          >
            <Star className="w-4 h-4 fill-current" />
            Free Educational Game
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-4">
          <div
            className="text-6xl md:text-7xl mb-2 animate-float"
            style={{ lineHeight: '1' }}
          >
            🌍
          </div>
          <h2
            className="text-4xl md:text-5xl font-black text-white tracking-tight mt-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Learn English
          </h2>
          <div className="flex items-center justify-center gap-3 mt-2">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-indigo-500" />
            <span
              className="text-lg font-bold"
              style={{ background: 'linear-gradient(90deg, #6366f1, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Through Visual Association
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-500" />
          </div>
        </div>

        {/* Description */}
        <p className="text-center text-slate-300 text-lg leading-relaxed mb-8 font-medium max-w-md mx-auto">
          Select a word, then find the matching object in the scene. Progress through exciting locations!
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.1)',
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <span className="text-indigo-400">{f.icon}</span>
              <div>
                <div className="text-white font-bold text-sm leading-none">{f.label}</div>
                <div className="text-slate-400 text-xs">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button
            id="start-game-btn"
            onClick={() => { playButton(); navigate('/game'); }}
            className="group relative inline-flex items-center justify-center gap-3 text-white font-black text-xl py-5 px-12 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
              boxShadow: '0 0 30px rgba(99,102,241,0.5), 0 10px 40px rgba(0,0,0,0.3)',
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            {/* Shine sweep */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                transform: 'skewX(-15deg)',
              }}
            />
            <PlayCircle className="w-7 h-7 group-hover:rotate-[360deg] transition-transform duration-500" />
            <span>START GAME</span>
          </button>
        </div>

        {/* Instructions hint */}
        <p className="text-center text-slate-500 text-sm mt-6 font-medium">
          No registration required · Progress saved in session
        </p>
      </div>
    </div>
  );
};
