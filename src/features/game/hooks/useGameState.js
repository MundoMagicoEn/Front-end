import { useState, useEffect } from 'react';
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
    }
  };

  const restartLevel = () => {
    setErrors(0);
    setFoundObjects([]);
    setSelectedWord(null);
  };

  const restartGame = () => {
    clearProgress();
    setCurrentLevelIndex(0);
    setErrors(0);
    setFoundObjects([]);
    setSelectedWord(null);
    setFeedback({ message: '', type: '' });
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
    handleWordSelect,
    handleObjectSelect,
    nextLevel,
    restartLevel,
    restartGame
  };
};
