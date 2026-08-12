import { CheckCircle2 } from 'lucide-react';
import clsx from 'clsx';

export const GameBoard = ({ level, foundObjects, selectedWord, onObjectSelect }) => {
  if (!level) return null;

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden"
      style={{
        boxShadow: '0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)',
      }}
    >
      {/* Image */}
      <img
        src={level.image}
        alt={level.name}
        className="w-full h-auto object-cover block"
        style={{ display: 'block', minHeight: '300px', objectFit: 'cover' }}
      />

      {/* Top overlay gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)' }}
      />

      {/* Bottom overlay gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' }}
      />

      {/* Scene label */}
      <div
        className="absolute top-3 left-3 px-3 py-1.5 rounded-xl text-sm font-black text-white pointer-events-none"
        style={{
          background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.15)',
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        📍 {level.name}
      </div>

      {/* Word indicator when a word is selected */}
      {selectedWord && (
        <div
          className="absolute top-3 right-3 px-3 py-1.5 rounded-xl text-sm font-black text-white animate-pulse pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(99,102,241,0.8), rgba(168,85,247,0.8))',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(99,102,241,0.5)',
            boxShadow: '0 0 15px rgba(99,102,241,0.4)',
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Find: {selectedWord.toUpperCase()} →
        </div>
      )}

      {/* Hotspots */}
      {level.objects.map((obj) => {
        const isFound = foundObjects.includes(obj.id);

        return (
          <button
            key={obj.id}
            onClick={() => onObjectSelect(obj.id)}
            disabled={isFound}
            title={obj.translation}
            className={clsx(
              'absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300',
              isFound ? 'cursor-default' : 'cursor-pointer group'
            )}
            style={{ top: `${obj.top}%`, left: `${obj.left}%` }}
          >
            {isFound ? (
              /* Found state */
              <div
                className="relative w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background: 'rgba(34,197,94,0.9)',
                  border: '2px solid rgba(255,255,255,0.8)',
                  boxShadow: '0 0 20px rgba(34,197,94,0.7), 0 0 40px rgba(34,197,94,0.3)',
                }}
              >
                <CheckCircle2 className="w-7 h-7 text-white" />
                {/* Ripple */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: '2px solid rgba(34,197,94,0.5)',
                    animation: 'pulseRing 1.5s ease-out infinite',
                  }}
                />
              </div>
            ) : (
              /* Undiscovered state (Invisible to increase difficulty but larger hitbox) */
              <div className="relative w-28 h-28 md:w-36 md:h-36 flex items-center justify-center opacity-0 hover:opacity-10 transition-opacity duration-300">
                <div
                  className="w-full h-full rounded-full"
                  style={{ background: 'white' }}
                />
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
};
