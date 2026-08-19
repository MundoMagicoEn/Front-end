import { features } from '../data/features';
import { FeatureCard } from './FeatureCard';

export const Features = () => (
  <section className="w-full py-16 md:py-24 px-4 sm:px-6">
    <div className="max-w-7xl mx-auto mb-10 text-center">
      <h2
        className="text-3xl md:text-4xl font-black text-white mb-2"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Una forma distinta de aprender
      </h2>
      <p className="text-slate-400 font-medium max-w-lg mx-auto">
        Olvídate de las tarjetas aburridas: aquí cada palabra vive dentro de una escena.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
      {features.map((f) => (
        <FeatureCard key={f.label} {...f} />
      ))}
    </div>
  </section>
);