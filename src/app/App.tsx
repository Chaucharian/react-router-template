import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Button, defaultTheme, Provider } from "@adobe/react-spectrum";
import { Route, ROUTES } from "@/navigation";

function App() {
  return (
    <Provider theme={defaultTheme}>
      <Router>
        <Switch>
          {ROUTES.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
