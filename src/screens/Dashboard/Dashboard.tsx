import { Button } from "@react-spectrum/button";
import { useAuth } from "context/auth";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components";
import { Home, Loans, Tools, Admin } from "./screens";

function Dashboard() {
  const { removeSession } = useAuth();
  return (
    <>
      <Navigation />
      <Routes>
        <Route element={<Home />} index />
        <Route element={<Loans />} path="loans" />
        <Route element={<Tools />} path="tools" />
        <Route element={<Admin />} path="admin" />
      </Routes>
      <Button variant="primary" onPress={() => removeSession()}>
        Logout
      </Button>
    </>
  );
}

export default Dashboard;
