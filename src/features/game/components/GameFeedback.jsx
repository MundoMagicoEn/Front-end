import { CheckCircle, XCircle, Info, PartyPopper } from 'lucide-react';

const CONFIG = {
  success: {
    icon: <CheckCircle className="w-6 h-6" />,
    style: {
      background: 'linear-gradient(135deg, rgba(22,163,74,0.95), rgba(16,185,129,0.95))',
      border: '1px solid rgba(74,222,128,0.4)',
      boxShadow: '0 0 30px rgba(34,197,94,0.4), 0 10px 40px rgba(0,0,0,0.4)',
      color: 'white',
    },
  },
  error: {
    icon: <XCircle className="w-6 h-6" />,
    style: {
      background: 'linear-gradient(135deg, rgba(190,18,60,0.95), rgba(239,68,68,0.95))',
      border: '1px solid rgba(248,113,113,0.4)',
      boxShadow: '0 0 30px rgba(244,63,94,0.4), 0 10px 40px rgba(0,0,0,0.4)',
      color: 'white',
    },
  },
  info: {
    icon: <Info className="w-6 h-6" />,
    style: {
      background: 'linear-gradient(135deg, rgba(37,99,235,0.95), rgba(99,102,241,0.95))',
      border: '1px solid rgba(165,180,252,0.4)',
      boxShadow: '0 0 30px rgba(99,102,241,0.4), 0 10px 40px rgba(0,0,0,0.4)',
      color: 'white',
    },
  },
  celebrate: {
    icon: <PartyPopper className="w-6 h-6" />,
    style: {
      background: 'linear-gradient(135deg, rgba(124,58,237,0.95), rgba(168,85,247,0.95))',
      border: '1px solid rgba(196,181,253,0.4)',
      boxShadow: '0 0 30px rgba(168,85,247,0.4), 0 10px 40px rgba(0,0,0,0.4)',
      color: 'white',
    },
  },
};

export const GameFeedback = ({ feedback }) => {
  if (!feedback.message) return null;

  const conf = CONFIG[feedback.type] || CONFIG.info;

  return (
    <div
      className="fixed left-1/2 z-50 flex items-center gap-2 px-4 py-3 md:px-6 md:py-4 rounded-2xl font-bold text-base md:text-lg"
      style={{
        ...conf.style,
        top: 'var(--feedback-top, 1rem)',
        bottom: 'var(--feedback-bottom, auto)',
        transform: 'translateX(-50%)',
        backdropFilter: 'blur(20px)',
        fontFamily: "'Poppins', sans-serif",
        animation: 'fadeInUp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        minWidth: '180px',
        justifyContent: 'center',
      }}
    >
      <span>{conf.icon}</span>
      <span>{feedback.message}</span>
      <style>{`
        @media (min-width: 768px) {
          :root { --feedback-top: auto; --feedback-bottom: 2rem; }
        }
        @media (max-width: 767px) {
          :root { --feedback-top: 13rem; --feedback-bottom: auto; }
        }
      `}</style>
    </div>
  );
};
