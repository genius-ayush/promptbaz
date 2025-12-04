const Separator = () => {
  return (
    <div className="h-full w-8 relative overflow-hidden bg-white dark:bg-[#0a0a0a] border-x border-neutral-200 dark:border-white/5 border-t border-b border-neutral-200 dark:border-white/10">
      {/* Light mode stripes */}
      <div
        className="absolute inset-0 block dark:hidden"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(0,0,0,0.12) 10px, rgba(0,0,0,0.12) 11px)",
        }}
      />
      {/* Dark mode stripes */}
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(255,255,255,0.12) 10px, rgba(255,255,255,0.12) 11px)",
        }}
      />
    </div>
  );
};

export default Separator;
