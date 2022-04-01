import { Route as NativeRoute } from "react-router-dom";

export interface RouteProps {
  path: string;
  name: string;
  component: any;
  routes: typeof Route[];
}

function Route(route: RouteProps) {
  //   const roles = useRoles(route.roles);

  return (
    <NativeRoute
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default Route;
