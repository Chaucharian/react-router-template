import { Button, Content } from "@adobe/react-spectrum";
import { useAuth } from "context/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location: any = useLocation();

  let from = location.state?.from?.pathname || "/dasboard";

  console.log("EEEE", auth);

  const onSubmit = () => {
    // Send them back to the page they tried to visit when they were
    // redirected to the login page. Use { replace: true } so we don't create
    // another entry in the history stack for the login page.  This means that
    // when they get to the protected page and click the back button, they
    // won't end up back on the login page, which is also really nice for the
    // user experience.
    auth.saveSession("test");
    navigate(from, { replace: true });
  };

  return (
    <Content>
      Content is king
      {/* <Link to="/dashboard">Protected Page</Link> */}
      <Button variant="primary" onPress={() => onSubmit()}>
        Login
      </Button>
    </Content>
  );
};

export default Login;
