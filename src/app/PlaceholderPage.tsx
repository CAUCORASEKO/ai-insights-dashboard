const PlaceholderPage = ({ title }: { title: string }) => {
  return (
    <div className="rounded-2xl border border-dashed border-ink-200 bg-white/70 p-10 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
        Coming soon
      </p>
      <h2 className="mt-3 font-display text-2xl text-ink-900">{title}</h2>
      <p className="mt-2 text-sm text-ink-500">
        This space is reserved for future iterations of the product roadmap.
      </p>
    </div>
  );
};

export default PlaceholderPage;
