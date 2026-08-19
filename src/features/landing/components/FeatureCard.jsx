export const FeatureCard = ({ icon: Icon, label, desc }) => (
  <div
    className="rounded-2xl p-6 text-center transition-all duration-200 hover:-translate-y-1"
    style={{
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.08)',
    }}
  >
    <div
      className="w-11 h-11 mx-auto mb-4 rounded-xl flex items-center justify-center text-indigo-300"
      style={{
        background: 'linear-gradient(135deg, rgba(99,102,241,0.25), rgba(168,85,247,0.25))',
        border: '1px solid rgba(99,102,241,0.3)',
      }}
    >
      {<Icon className="w-5 h-5" />}
    </div>
    <h3 className="text-white font-bold text-lg mb-1">{label}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);