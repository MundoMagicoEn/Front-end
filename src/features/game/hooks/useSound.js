import { useRef, useCallback } from 'react';

// Import sound assets
import soundLevelComplete from '../../../assets/audio/siguiente-nivel.mp3';
import soundSelectCorrect from '../../../assets/audio/seleccion-correcta.mp3';
import soundError    from '../../../assets/audio/equivocado.mp3';
import soundGameOver from '../../../assets/audio/juego-finalizado-perdido.mp3';
import soundWin      from '../../../assets/audio/juego-finalizado-ganado.mp3';
import soundAplausos from '../../../assets/audio/aplausos.mp3';
import soundButton   from '../../../assets/audio/botones.mp3';

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

  // Plays the win fanfare, then chains the applause sound once it ends
  const playWin = useCallback(() => {
    try {
      if (!audioRef.current[soundWin]) {
        audioRef.current[soundWin] = new Audio(soundWin);
      }
      if (!audioRef.current[soundAplausos]) {
        audioRef.current[soundAplausos] = new Audio(soundAplausos);
      }
      const winAudio = audioRef.current[soundWin];
      const aplausosAudio = audioRef.current[soundAplausos];

      // Reset both
      winAudio.currentTime = 0;
      aplausosAudio.currentTime = 0;
      winAudio.volume = 0.8;
      aplausosAudio.volume = 0.75;

      // Remove any previous onended to avoid stale listeners
      winAudio.onended = null;

      winAudio.play().catch(() => {});

      // After 3 seconds, stop the win sound and play applause
      setTimeout(() => {
        winAudio.pause();
        winAudio.currentTime = 0;
        aplausosAudio.play().catch(() => {});
      }, 3000);
    } catch {
      // Silently ignore
    }
  }, []);

  return {
    playLevelComplete: () => play(soundLevelComplete, 0.7),
    playSelectCorrect: () => play(soundSelectCorrect, 0.7),
    playError:         () => play(soundError,         0.6),
    playGameOver:      () => play(soundGameOver,      0.7),
    playWin,
    playButton:        () => play(soundButton,        0.5),
  };
};
