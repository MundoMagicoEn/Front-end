import { Info } from 'lucide-react';
import { DEMO_LEVELS_COUNT, TOTAL_LEVELS } from '../../../utils/config';

export const DemoNotice = () => (
  <div
    className="flex items-start gap-3 max-w-2xl w-full text-left rounded-2xl p-4 mb-10"
    style={{
      background: 'rgba(245,158,11,0.08)',
      border: '1px solid rgba(245,158,11,0.25)',
    }}
  >
    <Info className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#fbbf24' }} />
    <p className="text-sm text-amber-200/90 leading-relaxed font-medium">
      <strong className="text-amber-300">Versión de prueba.</strong> Esta página es solo una demo básica del juego
      con {DEMO_LEVELS_COUNT} de los {TOTAL_LEVELS} escenarios, para que pruebes cómo se juega.
    </p>
  </div>
);