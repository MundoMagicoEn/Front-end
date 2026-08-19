import { steps } from '../data/steps';
import { StepCard } from './StepCard';

export const HowToPlay = () => (
  <section id="como-jugar" className="w-full py-12 md:py-16">
    <h2
      className="text-3xl md:text-4xl font-black text-white text-center mb-2"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      ¿Cómo se juega?
    </h2>
    <p className="text-slate-400 text-center font-medium mb-10 max-w-lg mx-auto">
      Tres pasos sencillos para empezar a aprender.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {steps.map((s) => (
        <StepCard key={s.num} {...s} />
      ))}
    </div>
  </section>
);