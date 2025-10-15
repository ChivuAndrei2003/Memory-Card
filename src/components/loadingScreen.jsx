export const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl bg-slate-900/70 px-8 py-10 text-slate-100 shadow-lg backdrop-blur">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-400 border-t-transparent" />
      <p className="text-sm uppercase tracking-[0.3em] text-slate-300">
        Loading Pokemons
      </p>
    </div>
  );
};
