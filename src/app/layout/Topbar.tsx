import Button from "@/components/ui/Button";

const Topbar = () => {
  return (
    <header className="flex items-center justify-between border-b border-ink-100 bg-white/70 px-6 py-4 backdrop-blur">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
          AI Insights Dashboard
        </p>
        <h2 className="font-display text-xl text-ink-900">
          Executive Overview
        </h2>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="ghost">Share</Button>
        <Button variant="primary">Generate Brief</Button>
      </div>
    </header>
  );
};

export default Topbar;
