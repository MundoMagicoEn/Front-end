
import { useNavigate } from 'react-router-dom';
import { PlayCircle } from 'lucide-react';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-grow flex flex-col items-center justify-center text-center">
      <div className="bg-white p-12 rounded-3xl shadow-xl max-w-2xl w-full border border-slate-100 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-bl-full opacity-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary rounded-tr-full opacity-20 pointer-events-none" />
        
        <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 tracking-tight">
          Welcome to <span className="text-primary block mt-2">English Quest!</span>
        </h2>
        
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-lg mx-auto leading-relaxed font-medium">
          Learn English vocabulary through visual association. Look at the scene, select a word, and find the corresponding object in the image.
        </p>
        
        <button
          onClick={() => navigate('/game')}
          className="group relative inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white font-black text-xl py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md"
        >
          <PlayCircle className="w-8 h-8 group-hover:animate-spin" />
          <span>START GAME</span>
        </button>
      </div>
    </div>
  );
};
