import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { HowToPlay } from '../components/HowToPlay';
import { FinalCta } from '../components/FinalCta';
import { LandingFooter } from '../components/LandingFooter';

export const Landing = () => (
  <div className="flex flex-col items-center w-full animate-fade-in-up">
    <Hero />
    <Features />
    <HowToPlay />
    <FinalCta />
    <LandingFooter />
  </div>
);