
import { useNavigate } from 'react-router-dom';
import { useGameState } from '../features/game/hooks/useGameState';
import { GameBoard } from '../features/game/components/GameBoard';
import { WordList } from '../features/game/components/WordList';
import { GameStatus } from '../features/game/components/GameStatus';
import { GameFeedback } from '../features/game/components/GameFeedback';
import { ArrowRight, RotateCcw } from 'lucide-react';

export const Game = () => {
  const navigate = useNavigate();
  const {
    currentLevel,
    currentLevelIndex,
    totalLevels,
    errors,
    foundObjects,
    selectedWord,
    feedback,
    isLevelComplete,
    isGameComplete,
    handleWordSelect,
    handleObjectSelect,
    nextLevel,
    restartGame
  } = useGameState();

  if (!currentLevel) return null;

  const progress = (foundObjects.length / currentLevel.objects.length) * 100;

  return (
    <div className="flex flex-col h-full w-full max-w-6xl mx-auto">
      <GameStatus 
        levelName={currentLevel.name}
        levelIndex={currentLevelIndex}
        totalLevels={totalLevels}
        errors={errors}
        progress={progress}
      />

      <div className="flex flex-col md:flex-row gap-8 items-start justify-center flex-grow">
        {/* Left side: Image and hotspots */}
        <div className="flex-grow w-full md:w-auto relative">
          <GameBoard 
            level={currentLevel}
            foundObjects={foundObjects}
            selectedWord={selectedWord}
            onObjectSelect={handleObjectSelect}
          />

          {/* Level Complete Overlay */}
          {isLevelComplete && !isGameComplete && (
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center rounded-xl z-20 animate-in fade-in zoom-in duration-300">
              <h3 className="text-4xl font-black text-green-600 mb-6 drop-shadow-sm">Level Complete!</h3>
              <button 
                onClick={nextLevel}
                className="bg-primary hover:bg-primary-dark text-white font-bold text-xl py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
              >
                Next Level <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          )}

          {/* Game Complete Overlay */}
          {isGameComplete && (
            <div className="absolute inset-0 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center rounded-xl z-20 animate-in fade-in zoom-in duration-300 p-8 text-center">
              <h3 className="text-5xl font-black text-primary mb-4 drop-shadow-sm">Congratulations!</h3>
              <p className="text-xl text-slate-700 font-bold mb-8 max-w-md">
                You have successfully completed all the levels in English Quest.
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={restartGame}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" /> Play Again
                </button>
                <button 
                  onClick={() => { restartGame(); navigate('/'); }}
                  className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-lg py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform"
                >
                  Home
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right side: Words list */}
        <WordList 
          words={currentLevel.objects}
          foundObjects={foundObjects}
          selectedWord={selectedWord}
          onWordSelect={handleWordSelect}
        />
      </div>

      <GameFeedback feedback={feedback} />
    </div>
  );
};
