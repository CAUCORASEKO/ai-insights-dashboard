const EmptyState = () => {
  return (
    <div
      className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-ink-200 bg-white/60"
      role="status"
      aria-live="polite"
    >
      <div className="text-center">
        <p className="text-sm font-semibold text-ink-600">No data yet</p>
        <p className="mt-1 text-xs text-ink-400">
          Adjust filters to load insights.
        </p>
      </div>
    </div>
  );
};

export default EmptyState;
