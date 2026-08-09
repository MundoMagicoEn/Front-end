
import { CheckCircle2 } from 'lucide-react';
import clsx from 'clsx';

export const GameBoard = ({ level, foundObjects, onObjectSelect }) => {
  if (!level) return null;

  return (
    <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
      <img 
        src={level.image} 
        alt={level.name} 
        className="w-full h-auto object-cover block"
      />
      
      {/* Hotspots */}
      {level.objects.map((obj) => {
        const isFound = foundObjects.includes(obj.id);
        
        return (
          <button
            key={obj.id}
            onClick={() => onObjectSelect(obj.id)}
            className={clsx(
              "absolute transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full transition-all duration-300 flex items-center justify-center",
              isFound 
                ? "bg-green-500/80 scale-110 shadow-[0_0_15px_rgba(34,197,94,0.6)] border-2 border-white" 
                : "bg-white/20 hover:bg-white/40 hover:scale-110 border-2 border-white/50 cursor-pointer animate-pulse"
            )}
            style={{ 
              top: `${obj.top}%`, 
              left: `${obj.left}%` 
            }}
            disabled={isFound}
            title={obj.translation}
          >
            {isFound && <CheckCircle2 className="w-8 h-8 text-white drop-shadow-md" />}
          </button>
        );
      })}
    </div>
  );
};
