import { useRef, useCallback } from 'react';

// Import sound assets
import soundCorrect  from '../../../assets/audio/aciertos.mp3';
import soundError    from '../../../assets/audio/equivocado.mp3';
import soundGameOver from '../../../assets/audio/juego-finalizado-perdido.mp3';
import soundWin      from '../../../assets/audio/juego-finalizado-ganado.mp3';

/**
 * Hook that provides game sound effects.
 * Each audio instance is independent so overlapping calls are handled gracefully.
 */
export const useSound = () => {
  const audioRef = useRef({});

  const play = useCallback((src, volume = 0.7) => {
    try {
      // Reuse cached Audio objects to avoid repeated allocations
      if (!audioRef.current[src]) {
        audioRef.current[src] = new Audio(src);
      }
      const audio = audioRef.current[src];
      audio.volume = volume;
      // Reset so it always plays from the start even if called rapidly
      audio.currentTime = 0;
      audio.play().catch(() => {
        // Browser may block autoplay before user interaction — silently ignore
      });
    } catch {
      // Silently ignore any audio errors
    }
  }, []);

  return {
    playCorrect:  () => play(soundCorrect,  0.7),
    playError:    () => play(soundError,    0.6),
    playGameOver: () => play(soundGameOver, 0.7),
    playWin:      () => play(soundWin,      0.8),
  };
};
