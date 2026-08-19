import { Hero } from '../components/Hero';
import { People } from '../components/People';
import { Features } from '../components/Features';
import { HowToPlay } from '../components/HowToPlay';
import { FinalCta } from '../components/FinalCta';
import { LandingFooter } from '../components/LandingFooter';

export const Landing = () => (
  <div className="flex flex-col items-center w-full flex-1 animate-fade-in-up">
    <Hero />
    <People />
    <Features />
    <HowToPlay />
    <FinalCta />
    <LandingFooter />
  </div>
);