import EarthLogo from '../../../components/EarthLogo';

export const LandingFooter = () => (
  <footer className="w-full py-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-slate-500 text-sm font-medium">
      <div className="flex items-center gap-2">
        <EarthLogo size={22} withOrbit={false} />
        <span className="text-slate-300 font-bold">MundoCosmico</span>
      </div>
      <span className="hidden sm:block">·</span>
      <span>Vocabulary Adventure</span>
      <span className="hidden sm:block">·</span>
      <span>© 2026</span>
    </div>
  </footer>
);