import { PlayCircle } from 'lucide-react';

const SIZES = {
  md: { text: 'text-lg', padding: 'py-4 px-10', icon: 'w-6 h-6' },
  lg: { text: 'text-xl', padding: 'py-5 px-12', icon: 'w-7 h-7' },
};

export const PlayButton = ({ onClick, children, size = 'md' }) => {
  const s = SIZES[size];

  return (
    <button
      onClick={onClick}
      className={`group inline-flex items-center justify-center gap-3 text-white font-black ${s.text} ${s.padding} rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95`}
      style={{
        background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
        boxShadow: '0 0 30px rgba(99,102,241,0.5), 0 10px 40px rgba(0,0,0,0.3)',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <PlayCircle className={`${s.icon} group-hover:rotate-[360deg] transition-transform duration-500`} />
      {children}
    </button>
  );
};