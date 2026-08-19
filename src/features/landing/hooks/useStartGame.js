import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSound } from '../../../hooks/useSound';

export const useStartGame = () => {
  const navigate = useNavigate();
  const { playButton } = useSound();

  return useCallback(() => {
    playButton();
    navigate('/game');
  }, [navigate, playButton]);
};