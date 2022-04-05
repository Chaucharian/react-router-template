import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Button, defaultTheme, Provider } from "@adobe/react-spectrum";
import { RequireAuth } from "../navigation";
import { Login } from "../screens";
import { Dashboard } from "screens/Dashboard";

function App() {
  return (
    <Provider theme={defaultTheme}>
      <Router>
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          ></Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
