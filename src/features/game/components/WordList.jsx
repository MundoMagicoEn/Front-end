
import clsx from 'clsx';
import { Check } from 'lucide-react';

export const WordList = ({ words, foundObjects, selectedWord, onWordSelect }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full md:w-64 flex-shrink-0">
      <h3 className="text-xl font-bold text-slate-800 mb-4 text-center tracking-wide uppercase">
        Words
      </h3>
      <div className="flex flex-col gap-3">
        {words.map((obj) => {
          const isFound = foundObjects.includes(obj.id);
          const isSelected = selectedWord === obj.id;

          return (
            <button
              key={obj.id}
              onClick={() => onWordSelect(obj.id)}
              disabled={isFound}
              className={clsx(
                "relative w-full py-3 px-4 rounded-lg font-bold text-lg transition-all duration-200 flex items-center justify-between overflow-hidden",
                {
                  "bg-green-100 text-green-700 border-2 border-green-400 opacity-60 cursor-not-allowed": isFound,
                  "bg-primary text-white border-2 border-primary-dark shadow-md scale-105": isSelected && !isFound,
                  "bg-slate-100 text-slate-700 border-2 border-slate-200 hover:bg-slate-200 hover:border-slate-300": !isSelected && !isFound
                }
              )}
            >
              <span className="z-10">{obj.word}</span>
              {isFound && <Check className="w-5 h-5 text-green-600 z-10" />}
            </button>
          );
        })}
      </div>
    </div>
  );
};
