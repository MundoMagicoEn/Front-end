import { Heart } from 'lucide-react';

const DIFFICULTY_COLORS = {
  easy: { bg: 'rgba(34,197,94,0.2)', border: 'rgba(34,197,94,0.5)', text: '#4ade80', label: 'Easy' },
  medium: { bg: 'rgba(251,191,36,0.2)', border: 'rgba(251,191,36,0.5)', text: '#fbbf24', label: 'Medium' },
  hard: { bg: 'rgba(239,68,68,0.2)', border: 'rgba(239,68,68,0.5)', text: '#f87171', label: 'Hard' },
};

export const GameStatus = ({ levelName, levelIndex, totalLevels, errors, progress, difficulty }) => {
  const maxErrors = 3;
  const remainingHearts = maxErrors - errors;
  const diff = DIFFICULTY_COLORS[difficulty] || DIFFICULTY_COLORS.easy;

  return (
    <div
      className="w-full mb-5 rounded-2xl p-4"
      style={{
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
      }}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Level info */}
        <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
          {/* Level badge */}
          <div
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-sm font-black"
            style={{
              background: 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(168,85,247,0.3))',
              border: '1px solid rgba(99,102,241,0.4)',
              color: '#a5b4fc',
            }}
          >
            <span>LEVEL</span>
            <span className="text-white text-lg leading-none">{levelIndex + 1}</span>
            <span className="text-slate-400 font-semibold">/ {totalLevels}</span>
          </div>

          {/* Level name */}
          <h2
            className="text-2xl font-black text-white"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {levelName}
          </h2>

          {/* Difficulty */}
          <span
            className="text-xs font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider"
            style={{ background: diff.bg, border: `1px solid ${diff.border}`, color: diff.text }}
          >
            {diff.label}
          </span>
        </div>

        {/* Right: Hearts + Progress */}
        <div className="flex items-center gap-5">
          {/* Hearts */}
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Lives</span>
            <div className="flex gap-1">
              {[...Array(maxErrors)].map((_, i) => (
                <Heart
                  key={i}
                  className={`w-7 h-7 transition-all duration-500 ${
                    i < remainingHearts
                      ? 'fill-rose-500 text-rose-500 drop-shadow-[0_0_6px_rgba(244,63,94,0.7)]'
                      : 'fill-slate-700 text-slate-600'
                  }`}
                  style={i < remainingHearts ? { animation: 'heartBeat 2s ease-in-out infinite', animationDelay: `${i * 0.2}s` } : {}}
                />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-10 bg-white/10 hidden sm:block" />

          {/* Progress */}
          <div className="flex flex-col gap-1.5 min-w-[140px]">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Progress</span>
              <span className="text-xs font-black text-indigo-400">{Math.round(progress)}%</span>
            </div>
            <div
              className="h-2.5 w-full rounded-full overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.1)' }}
            >
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #6366f1, #a855f7)',
                  boxShadow: progress > 0 ? '0 0 10px rgba(99,102,241,0.6)' : 'none',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
