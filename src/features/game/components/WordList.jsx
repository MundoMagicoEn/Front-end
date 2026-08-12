import { Check, Sparkles } from 'lucide-react';
import clsx from 'clsx';
import { useSound } from '../hooks/useSound';

export const WordList = ({ words, foundObjects, selectedWord, onWordSelect }) => {
  const { playButton } = useSound();
  return (
    <div
      className="rounded-2xl p-5 w-full md:w-64 flex-shrink-0 flex flex-col"
      style={{
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}
        >
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <h3
          className="text-base font-black text-white tracking-wider uppercase"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Words
        </h3>
        <div className="ml-auto text-xs font-bold text-slate-400">
          {foundObjects.length}/{words.length}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px mb-4" style={{ background: 'rgba(255,255,255,0.08)' }} />

      {/* Word buttons */}
      {/* Word buttons */}
      <div className="grid grid-cols-2 md:flex md:flex-col gap-2.5 flex-grow">
        {words.map((obj, i) => {
          const isFound = foundObjects.includes(obj.id);
          const isSelected = selectedWord === obj.id;

          return (
            <button
              key={obj.id}
              onClick={() => { playButton(); onWordSelect(obj.id); }}
              disabled={isFound}
              className={clsx(
                'relative w-full py-3 px-3 md:py-3.5 md:px-4 rounded-xl font-black text-sm md:text-base transition-all duration-200 flex items-center justify-between overflow-hidden group',
                'animate-slide-in-right'
              )}
              style={{
                animationDelay: `${i * 0.08}s`,
                animationFillMode: 'both',
                ...(isFound
                  ? {
                      background: 'rgba(34,197,94,0.15)',
                      border: '1px solid rgba(34,197,94,0.35)',
                      color: '#4ade80',
                      cursor: 'not-allowed',
                      opacity: 0.7,
                    }
                  : isSelected
                  ? {
                      background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                      border: '1px solid rgba(99,102,241,0.8)',
                      color: 'white',
                      boxShadow: '0 0 20px rgba(99,102,241,0.5), 0 4px 15px rgba(0,0,0,0.3)',
                      transform: 'scale(1.03)',
                    }
                  : {
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: '#e2e8f0',
                    }),
              }}
              onMouseEnter={(e) => {
                if (!isFound && !isSelected) {
                  e.currentTarget.style.background = 'rgba(99,102,241,0.2)';
                  e.currentTarget.style.border = '1px solid rgba(99,102,241,0.4)';
                  e.currentTarget.style.transform = 'scale(1.02)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isFound && !isSelected) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.border = '1px solid rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'scale(1)';
                }
              }}
            >
              {/* Number pill */}
              <span
                className="w-5 h-5 md:w-6 md:h-6 rounded-md md:rounded-lg flex items-center justify-center text-[10px] md:text-xs font-black mr-2 flex-shrink-0"
                style={{
                  background: isFound
                    ? 'rgba(34,197,94,0.3)'
                    : isSelected
                    ? 'rgba(255,255,255,0.2)'
                    : 'rgba(255,255,255,0.08)',
                  color: isFound ? '#4ade80' : isSelected ? 'white' : '#64748b',
                }}
              >
                {i + 1}
              </span>

              <span className="flex-grow text-left font-black tracking-wide truncate" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.85rem' }}>
                {obj.word}
              </span>

              {isFound && (
                <div
                  className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(34,197,94,0.3)' }}
                >
                  <Check className="w-3 h-3 md:w-3.5 md:h-3.5 text-green-400" />
                </div>
              )}

              {isSelected && !isFound && (
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-white animate-pulse" />
              )}
            </button>
          );
        })}
      </div>

      {/* Hint */}
      <div
        className="mt-4 p-3 rounded-xl text-center text-xs font-semibold text-slate-400"
        style={{ background: 'rgba(255,255,255,0.03)', border: '1px dashed rgba(255,255,255,0.08)' }}
      >
        Select a word, then click the object in the scene
      </div>
    </div>
  );
};
