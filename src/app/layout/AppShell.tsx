import { Outlet } from "react-router-dom";
import Sidebar from "@/app/layout/Sidebar";
import Topbar from "@/app/layout/Topbar";

const AppShell = () => {
  return (
    <div className="min-h-screen w-full">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <div className="flex">
        <Sidebar />
        <div className="flex min-h-screen flex-1 flex-col">
          <Topbar />
          <main id="main-content" className="flex-1 px-6 pb-10 pt-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AppShell;
