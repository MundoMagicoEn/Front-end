import { Timer } from 'lucide-react';
import clsx from 'clsx';

export const GameTimer = ({ timeLeft, maxTime = 20 }) => {
  const percentage = (timeLeft / maxTime) * 100;
  const isDanger = timeLeft <= 5;

  return (
    <div className="flex flex-col items-center gap-2 mb-4 w-full">
      <div className="flex items-center gap-2 text-white font-bold text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <Timer className={clsx("w-6 h-6", isDanger ? "text-red-500 animate-pulse" : "text-white")} />
        <span className={isDanger ? "text-red-400" : "text-white"}>
          {timeLeft}s
        </span>
      </div>
      <div className="w-full max-w-md h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-600">
        <div
          className="h-full transition-all duration-1000 ease-linear"
          style={{
            width: `${percentage}%`,
            background: isDanger ? 'linear-gradient(90deg, #ef4444, #b91c1c)' : 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
          }}
        />
      </div>
    </div>
  );
};
