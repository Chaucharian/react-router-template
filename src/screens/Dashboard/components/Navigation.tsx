import { Button } from "@adobe/react-spectrum";
import { useAuth } from "context/auth";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const { removeSession } = useAuth();

  return (
    <nav>
      <NavLink to="home">Home</NavLink>
      <NavLink to="admin">User Administration</NavLink>
      <NavLink to="loans">View Loans</NavLink>
      <NavLink to="tools">Developer Tools</NavLink>
      <Button variant="primary" onPress={() => removeSession()}>
        Logout
      </Button>
    </nav>
  );
};
export default Navigation;
