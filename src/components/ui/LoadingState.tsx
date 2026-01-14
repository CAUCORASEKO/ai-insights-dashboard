const LoadingState = () => {
  return (
    <div
      className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-ink-200 bg-white/60"
      role="status"
      aria-live="polite"
    >
      <div className="text-center">
        <div className="mx-auto mb-3 h-10 w-10 animate-pulse rounded-full bg-ink-200" />
        <p className="text-sm font-semibold text-ink-500">Loading insights...</p>
      </div>
    </div>
  );
};

export default LoadingState;
