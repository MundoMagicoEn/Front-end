import { useState } from 'react';
import { Play } from 'lucide-react';
import { useSound } from '../hooks/useSound';

export const InstructionsModal = ({ onStart }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { playButton } = useSound();

  const handleStart = () => {
    playButton();
    setIsOpen(false);
    onStart();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-slate-900 rounded-2xl p-8 max-w-lg w-full text-center relative overflow-hidden"
        style={{
          boxShadow: '0 0 40px rgba(99,102,241,0.3)',
          border: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

        <h2 className="text-3xl font-black text-white mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
          ¿Cómo jugar?
        </h2>

        <div className="space-y-4 text-slate-300 text-lg mb-8 text-left">
          <p>
            <strong className="text-indigo-400">1. Selecciona:</strong> Haz clic en una palabra de la lista de la derecha.
          </p>
          <p>
            <strong className="text-purple-400">2. Explora:</strong> Mueve el mouse sobre la imagen para encontrar el objeto oculto.
          </p>
          <p>
            <strong className="text-pink-400">3. Rápido y preciso:</strong> Tienes <strong>60 segundos</strong> y <strong>3 vidas</strong> por nivel. Si fallas 3 veces o el tiempo se acaba, ¡pierdes el juego!
          </p>
          <p className="text-center text-yellow-400 font-bold mt-4">
            ¡Tienes 3 vidas! ¿Podrás pasar los 13 niveles?
          </p>
        </div>

        <button
          onClick={handleStart}
          className="w-full inline-flex justify-center items-center gap-2 text-white font-bold text-xl py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #6366f1, #a855f7)',
            boxShadow: '0 0 20px rgba(99,102,241,0.4)',
          }}
        >
          <Play className="w-6 h-6 fill-current" /> ¡Entendido, a jugar!
        </button>
      </div>
    </div>
  );
};
