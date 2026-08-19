import EarthLogo from '../../../components/EarthLogo';
import { PlayButton } from './PlayButton';
import { useStartGame } from '../hooks/useStartGame';

export const FinalCta = () => {
  const startGame = useStartGame();

  return (
    <section className="w-full py-12 md:py-20 flex justify-center">
      <div
        className="w-full max-w-2xl rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
        style={{
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)',
          }}
        />
        <div className="relative flex flex-col items-center gap-2">
          <div className="animate-float mb-2">
            <EarthLogo size={72} withOrbit={false} />
          </div>
          <h2
            className="text-3xl md:text-4xl font-black text-white"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            ¿Listo para explorar?
          </h2>
          <p className="text-slate-400 font-medium mb-8 max-w-md">
            Empieza tu aventura espacial por el vocabulario en inglés ahora mismo.
          </p>
          <PlayButton onClick={startGame} size="lg">
            COMENZAR
          </PlayButton>
        </div>
      </div>
    </section>
  );
};