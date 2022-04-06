import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Button, defaultTheme, Provider } from "@adobe/react-spectrum";
import { RequireAuth } from "../navigation";
import { Login } from "../screens";
import { Dashboard } from "screens/Dashboard";
import { AuthProvider } from "context/auth";
import { Home, Loans, Tools, Admin } from "screens/Dashboard/screens";

function App() {
  return (
    <Provider theme={defaultTheme}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route element={<Login />} path="/login" />
            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            >
              <Route element={<Home />} index />
              <Route element={<Loans />} path="loans" />
              <Route element={<Tools />} path="tools" />
              <Route element={<Admin />} path="admin" />
            </Route>
            <Route path="*" element={<h1>No matches found</h1>} />
          </Routes>
        </AuthProvider>
      </Router>
    </Provider>
  );
}

export default App;
