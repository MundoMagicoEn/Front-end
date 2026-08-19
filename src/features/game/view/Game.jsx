import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameState } from '../hooks/useGameState';
import { useSound } from '../../../hooks/useSound';
import { GameBoard } from '../components/GameBoard';
import { WordList } from '../components/WordList';
import { GameStatus } from '../components/GameStatus';
import { GameFeedback } from '../components/GameFeedback';
import { GameTimer } from '../components/GameTimer';
import { InstructionsModal } from '../components/InstructionsModal';
import { ArrowRight, RotateCcw, Home as HomeIcon, Trophy, Star, Frown } from 'lucide-react';

const OVERLAY_STYLES = {
  position: 'absolute',
  inset: 0,
  background: 'rgba(10,10,20,0.88)',
  backdropFilter: 'blur(12px)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 20,
  borderRadius: '1rem',
  padding: '2rem',
  textAlign: 'center',
  animation: 'fadeInUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
};

export const Game = () => {
  const navigate = useNavigate();
  const { playButton } = useSound();
  const [showNextLevelBtn, setShowNextLevelBtn] = useState(false);
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
    isGameOver,
    timeLeft,
    isPlaying,
    startGame,
    handleWordSelect,
    handleObjectSelect,
    nextLevel,
    restartGame
  } = useGameState();

  if (!currentLevel) return null;

  useEffect(() => {
    if (isLevelComplete && !isGameComplete) {
      const timer = setTimeout(() => {
        setShowNextLevelBtn(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setShowNextLevelBtn(false);
    }
  }, [isLevelComplete, isGameComplete]);

  const progress = (foundObjects.length / currentLevel.objects.length) * 100;

  return (
    <div className="flex flex-col h-full w-full animate-fade-in-up">
      <GameStatus
        levelName={currentLevel.name}
        levelIndex={currentLevelIndex}
        totalLevels={totalLevels}
        errors={errors}
        progress={progress}
        difficulty={currentLevel.difficulty}
      />

      <div className="flex flex-col md:flex-row gap-5 items-start justify-center flex-grow w-full max-w-6xl mx-auto">
        {/* Left: Scene */}
        <div className="flex-grow w-full md:w-auto relative flex flex-col items-center justify-center max-w-[70vh] mx-auto md:max-w-[60vh] xl:max-w-[70vh]">

          <GameTimer timeLeft={timeLeft} maxTime={60} />


          <GameBoard
            level={currentLevel}
            foundObjects={foundObjects}
            selectedWord={selectedWord}
            onObjectSelect={handleObjectSelect}
          />

          {/* Level Complete Overlay */}
          {isLevelComplete && !isGameComplete && (
            <div style={OVERLAY_STYLES}>
              {/* Stars decoration */}
              <div className="flex gap-2 mb-4">
                {[...Array(3)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-8 h-8 fill-yellow-400 text-yellow-400"
                    style={{
                      animation: `fadeInUp 0.4s ease-out forwards`,
                      animationDelay: `${i * 0.15}s`,
                      opacity: 0,
                      filter: 'drop-shadow(0 0 8px rgba(251,191,36,0.8))',
                    }}
                  />
                ))}
              </div>

              <h3
                className="text-4xl font-black text-white mb-2"
                style={{ fontFamily: "'Poppins', sans-serif", textShadow: '0 0 30px rgba(99,102,241,0.8)' }}
              >
                Level Complete! 🎉
              </h3>
              <p className="text-slate-300 text-lg font-semibold mb-8">
                Great job! You found all the objects.
              </p>

              {showNextLevelBtn && (
                <button
                  onClick={() => { playButton(); nextLevel(); }}
                  className="inline-flex items-center gap-3 text-white font-black text-xl py-4 px-10 rounded-2xl transition-all duration-200 hover:scale-105 active:scale-95"
                  style={{
                    background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                    boxShadow: '0 0 30px rgba(99,102,241,0.5), 0 10px 40px rgba(0,0,0,0.3)',
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Next Level <ArrowRight className="w-6 h-6" />
                </button>
              )}
            </div>
          )}

          {/* Game Complete Overlay */}
          {isGameComplete && (
            <div style={OVERLAY_STYLES}>
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-5 animate-float"
                style={{
                  background: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
                  boxShadow: '0 0 40px rgba(251,191,36,0.6)',
                }}
              >
                <Trophy className="w-10 h-10 text-white" />
              </div>

              <h3
                className="text-5xl font-black text-white mb-2"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                You Won! 🏆
              </h3>
              <p className="text-slate-300 text-lg font-semibold mb-2">
                ¡Completaste los {totalLevels} niveles de la demo!
              </p>
              <p className="text-slate-500 text-sm mb-8">
                Esta web es una versión de prueba, con solo {totalLevels} de los 15 escenarios del juego.
              </p>

              <div className="flex gap-3 flex-wrap justify-center">
                <button
                  onClick={() => { playButton(); restartGame(); }}
                  className="inline-flex items-center gap-2 text-white font-bold text-base py-3 px-8 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
                  style={{
                    background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                    boxShadow: '0 0 20px rgba(99,102,241,0.4)',
                  }}
                >
                  <RotateCcw className="w-5 h-5" /> Jugar de nuevo
                </button>
                <button
                  onClick={() => { playButton(); restartGame(); navigate('/'); }}
                  className="inline-flex items-center gap-2 font-bold text-base py-3 px-8 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#e2e8f0',
                  }}
                >
                  <HomeIcon className="w-5 h-5" /> Inicio
                </button>
              </div>
            </div>
          )}

          {/* Game Over Overlay */}
          {isGameOver && (
            <div style={OVERLAY_STYLES}>
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-5 animate-pulse"
                style={{
                  background: 'linear-gradient(135deg, #ef4444, #b91c1c)',
                  boxShadow: '0 0 40px rgba(239,68,68,0.6)',
                }}
              >
                <Frown className="w-10 h-10 text-white" />
              </div>

              <h3
                className="text-5xl font-black text-white mb-2"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  background: 'linear-gradient(135deg, #fca5a5, #ef4444)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Juego Terminado
              </h3>
              <p className="text-slate-300 text-lg font-semibold mb-8">
                {errors >= 3 ? 'Has perdido todas tus vidas.' : '¡Se agotó el tiempo!'}
              </p>

              <div className="flex gap-3 flex-wrap justify-center">
                <button
                  onClick={() => { playButton(); restartGame(); }}
                  className="inline-flex items-center gap-2 text-white font-bold text-base py-3 px-8 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
                  style={{
                    background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                    boxShadow: '0 0 20px rgba(99,102,241,0.4)',
                  }}
                >
                  <RotateCcw className="w-5 h-5" /> Reintentar
                </button>
                <button
                  onClick={() => { playButton(); navigate('/'); }}
                  className="inline-flex items-center gap-2 font-bold text-base py-3 px-8 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#e2e8f0',
                  }}
                >
                  <HomeIcon className="w-5 h-5" /> Salir
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right: Words */}
        <WordList
          words={currentLevel.objects}
          foundObjects={foundObjects}
          selectedWord={selectedWord}
          onWordSelect={handleWordSelect}
        />
      </div>

      <GameFeedback feedback={feedback} />

      {/* Instructions Modal at the very beginning or when resuming */}
      {!isPlaying && (
        <InstructionsModal onStart={startGame} />
      )}
    </div>
  );
};