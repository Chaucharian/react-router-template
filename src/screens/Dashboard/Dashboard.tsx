import { Route, Routes } from "react-router-dom";
import { Home, Loans, Tools, Admin } from "./screens";

function Dashboard() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Loans />} path="/loans" />
      <Route element={<Tools />} path="/tools" />
      <Route element={<Admin />} path="/admin" />
    </Routes>
  );
}

export default Dashboard;
