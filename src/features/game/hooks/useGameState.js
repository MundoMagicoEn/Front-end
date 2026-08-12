import { useState, useEffect, useCallback } from 'react';
import { levels } from '../data/levels';
import { saveProgress, loadProgress, clearProgress } from '../utils/storage';

export const useGameState = () => {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(() => {
    const saved = loadProgress();
    return saved?.currentLevelIndex ?? 0;
  });
  
  const [errors, setErrors] = useState(() => {
    const saved = loadProgress();
    return saved?.errors ?? 0;
  });
  
  const [foundObjects, setFoundObjects] = useState(() => {
    const saved = loadProgress();
    return saved?.foundObjects ?? [];
  });
  
  const [selectedWord, setSelectedWord] = useState(null);
  const [feedback, setFeedback] = useState({ message: '', type: '' });
  
  // Timer and Play state
  const [timeLeft, setTimeLeft] = useState(20);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentLevel = levels[currentLevelIndex];
  
  // Derived state to avoid effect
  const isLevelComplete = currentLevel && foundObjects.length === currentLevel.objects.length;
  const isGameComplete = isLevelComplete && currentLevelIndex === levels.length - 1;

  // Save state on change
  useEffect(() => {
    saveProgress({
      currentLevelIndex,
      errors,
      foundObjects,
    });
  }, [currentLevelIndex, errors, foundObjects]);

  const restartLevel = useCallback(() => {
    setErrors(0);
    setFoundObjects([]);
    setSelectedWord(null);
    setTimeLeft(20);
  }, []);

  // Timer logic
  useEffect(() => {
    if (!isPlaying || isLevelComplete || isGameComplete) return;
    
    if (timeLeft <= 0) {
      // Time's up penalty
      const newErrors = errors + 1;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setErrors(newErrors);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTimeLeft(20); // Reset timer
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFeedback({ message: '¡Se acabó el tiempo!', type: 'error' });
      
      if (newErrors >= 3) {
        setTimeout(() => {
          setFeedback({ message: 'Nivel Reiniciado', type: 'error' });
          restartLevel();
        }, 1500);
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isPlaying, isLevelComplete, isGameComplete, errors, restartLevel]);

  const startGame = () => {
    setIsPlaying(true);
  };

  const handleWordSelect = (wordId) => {
    if (isLevelComplete || isGameComplete) return;
    if (foundObjects.includes(wordId)) return;
    setSelectedWord(wordId);
    setFeedback({ message: '', type: '' });
  };

  const handleObjectSelect = (objectId) => {
    if (isLevelComplete || isGameComplete) return;
    if (!selectedWord) {
      setFeedback({ message: 'Select a word first!', type: 'info' });
      return;
    }
    
    if (foundObjects.includes(objectId)) return;

    if (selectedWord === objectId) {
      // Correct!
      const nextFound = [...foundObjects, objectId];
      setFoundObjects(nextFound);
      
      if (nextFound.length === currentLevel.objects.length) {
        setFeedback({ message: 'Level Complete!', type: 'success' });
        setSelectedWord(null);
      } else {
        setFeedback({ message: 'Correct!', type: 'success' });
        setSelectedWord(null);
      }
    } else {
      // Incorrect!
      const newErrors = errors + 1;
      setErrors(newErrors);
      setFeedback({ message: 'Try again!', type: 'error' });
      
      if (newErrors >= 3) {
        setTimeout(() => {
          setFeedback({ message: 'Level Restarted', type: 'error' });
          restartLevel();
        }, 1500);
      }
    }
  };

  const nextLevel = () => {
    if (currentLevelIndex < levels.length - 1) {
      setCurrentLevelIndex(prev => prev + 1);
      setErrors(0);
      setFoundObjects([]);
      setSelectedWord(null);
      setFeedback({ message: '', type: '' });
      setTimeLeft(20); // Reset timer for next level
    }
  };

  const restartGame = () => {
    clearProgress();
    setCurrentLevelIndex(0);
    setErrors(0);
    setFoundObjects([]);
    setSelectedWord(null);
    setFeedback({ message: '', type: '' });
    setTimeLeft(20);
    setIsPlaying(false); // Show modal again when restarting
  };

  return {
    currentLevel,
    currentLevelIndex,
    totalLevels: levels.length,
    errors,
    foundObjects,
    selectedWord,
    feedback,
    isLevelComplete,
    isGameComplete,
    timeLeft,
    isPlaying,
    startGame,
    handleWordSelect,
    handleObjectSelect,
    nextLevel,
    restartLevel,
    restartGame
  };
};
