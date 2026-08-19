export const StepCard = ({ num, title, desc }) => (
  <div className="relative rounded-2xl p-8">
    <div
      className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity"
      style={{
        background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(168,85,247,0.08))',
      }}
    />
    <div className="relative">
      <div
        className="text-5xl font-black mb-4"
        style={{
          background: 'linear-gradient(90deg, #6366f1, #a855f7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {num}
      </div>
      <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);