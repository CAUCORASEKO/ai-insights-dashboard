import { Navigate, Route, Routes } from "react-router-dom";
import AppShell from "@/app/layout/AppShell";
import PlaceholderPage from "@/app/PlaceholderPage";
import DashboardPage from "@/features/dashboard/DashboardPage";

const App = () => {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/insights" element={<PlaceholderPage title="Insights Hub" />} />
        <Route path="/reports" element={<PlaceholderPage title="Reports Library" />} />
      </Route>
    </Routes>
  );
};

export default App;
