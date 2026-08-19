import EarthLogo from '../components/EarthLogo';

const STARS = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: (((i * 7) % 3) + 1) + 'px',
  top: ((i * 53) % 100) + '%',
  left: ((i * 37) % 100) + '%',
  duration: (3 + (i % 4)) + 's',
  delay: (i % 2) + 's',
}));

export const MainLayout = ({ children }) => {
  return (
    <div
      className="min-h-screen flex flex-col relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 40%, #16213e 70%, #0f3460 100%)',
        fontFamily: "'Nunito', sans-serif"
      }}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 animate-float"
          style={{
            background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)',
            top: '-200px',
            left: '-200px',
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)',
            top: '40%',
            right: '-100px',
            animation: 'float 4s ease-in-out infinite reverse',
          }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)',
            bottom: '-100px',
            left: '30%',
            animation: 'float 5s ease-in-out infinite 1s',
          }}
        />
        {/* Stars */}
        {STARS.map((s) => (
          <div
            key={s.id}
            className="absolute rounded-full bg-white opacity-30"
            style={{
              width: s.size,
              height: s.size,
              top: s.top,
              left: s.left,
              animation: `float ${s.duration} ease-in-out infinite ${s.delay}`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header
        className="relative z-10 py-4 px-4"
        style={{
          background: 'rgba(255,255,255,0.03)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div
              className="w-11 h-11 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                boxShadow: '0 0 20px rgba(99,102,241,0.4)',
              }}
            >
              <EarthLogo size={30} withOrbit={false} />
            </div>
            <div>
              <h1 className="text-2xl font-black text-white tracking-tight leading-none" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Mundo <span style={{ background: 'linear-gradient(90deg, #6366f1, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Cosmico</span>
              </h1>
              <p className="text-xs text-slate-400 font-semibold tracking-widest uppercase">Vocabulary Adventure</p>
            </div>
          </div>

          <div
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-slate-300 text-sm font-semibold"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <span>🎮</span>
            <span>Aprende jugando</span>
          </div>
        </div>
      </header>

      <main className="flex-grow w-full px-4 sm:px-6 lg:px-10 py-8 flex flex-col relative z-10">
        {children}
      </main>
    </div>
  );
};
