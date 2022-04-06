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
      <Button variant="primary" onPress={() => removeSession()}>
        Logout
      </Button>
    </>
  );
}

export default Dashboard;
