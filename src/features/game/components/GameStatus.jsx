
import { Heart } from 'lucide-react';

export const GameStatus = ({ levelName, levelIndex, totalLevels, errors, progress }) => {
  const maxErrors = 3;
  const remainingHearts = maxErrors - errors;

  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full mb-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t-4 border-primary">
      <div className="flex items-center gap-4">
        <div className="bg-primary/10 text-primary-dark px-4 py-2 rounded-lg font-bold text-lg">
          Level {levelIndex + 1} / {totalLevels}
        </div>
        <h2 className="text-2xl font-black text-slate-800">{levelName}</h2>
      </div>

      <div className="flex items-center gap-6">
        {/* Progress */}
        <div className="flex flex-col gap-1 w-32 md:w-48">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex justify-between">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-500 transition-all duration-500 rounded-full" 
              style={{ width: `${progress}%` }} 
            />
          </div>
        </div>

        {/* Errors (Hearts) */}
        <div className="flex flex-col items-center gap-1">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Attempts
          </div>
          <div className="flex gap-1">
            {[...Array(maxErrors)].map((_, i) => (
              <Heart 
                key={i} 
                className={`w-6 h-6 transition-all duration-300 ${
                  i < remainingHearts 
                    ? "fill-red-500 text-red-500 scale-100 drop-shadow-sm" 
                    : "fill-slate-200 text-slate-300 scale-90"
                }`} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
