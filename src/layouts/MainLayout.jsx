

export const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/3 translate-y-1/3 pointer-events-none" />
      
      <header className="bg-white border-b border-slate-200 py-4 shadow-sm z-10">
        <div className="container mx-auto px-4 max-w-5xl flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-inner">
            EQ
          </div>
          <h1 className="text-2xl font-black text-slate-800 tracking-tight">
            English <span className="text-primary">Quest</span>
          </h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 max-w-5xl py-8 flex flex-col z-10">
        {children}
      </main>
    </div>
  );
};
