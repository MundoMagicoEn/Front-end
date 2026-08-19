import { features } from '../data/features';
import { FeatureCard } from './FeatureCard';

export const Features = () => (
  <section className="w-full py-8 md:py-12">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
      {features.map((f) => (
        <FeatureCard key={f.label} {...f} />
      ))}
    </div>
  </section>
);