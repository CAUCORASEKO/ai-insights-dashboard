import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Insights", path: "/insights" },
  { label: "Reports", path: "/reports" }
];

const Sidebar = () => {
  return (
    <aside className="hidden min-h-screen w-64 flex-col border-r border-ink-100 bg-white/80 px-6 py-8 backdrop-blur lg:flex">
      <div className="mb-10">
        <p className="font-display text-lg uppercase tracking-[0.2em] text-ink-400">
          AI Insights
        </p>
        <h1 className="font-display text-2xl text-ink-900">Dashboard</h1>
      </div>

      <nav className="flex flex-1 flex-col gap-2" aria-label="Primary">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              [
                "rounded-xl px-4 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-400",
                isActive
                  ? "bg-ink-900 text-white shadow-soft"
                  : "text-ink-500 hover:bg-ink-50 hover:text-ink-800"
              ].join(" ")
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="rounded-2xl border border-ink-100 bg-ink-50 px-4 py-4 text-sm text-ink-500">
        <p className="font-semibold text-ink-700">Next review</p>
        <p className="mt-1">Thu, 18 Apr · 2:00 PM</p>
      </div>
    </aside>
  );
};

export default Sidebar;
