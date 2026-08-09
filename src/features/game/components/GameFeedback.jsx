
import clsx from 'clsx';
import { AlertCircle, CheckCircle, Info } from 'lucide-react';

export const GameFeedback = ({ feedback }) => {
  if (!feedback.message) return null;

  const icons = {
    success: <CheckCircle className="w-6 h-6" />,
    error: <AlertCircle className="w-6 h-6" />,
    info: <Info className="w-6 h-6" />
  };

  return (
    <div 
      className={clsx(
        "fixed bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full shadow-xl flex items-center gap-3 animate-bounce z-50 transition-all duration-300 font-bold text-lg",
        {
          "bg-green-500 text-white": feedback.type === 'success',
          "bg-red-500 text-white": feedback.type === 'error',
          "bg-blue-500 text-white": feedback.type === 'info',
        }
      )}
    >
      {icons[feedback.type]}
      <span>{feedback.message}</span>
    </div>
  );
};
