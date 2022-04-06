import { Button, Item, TabList, TabPanels, Tabs } from "@adobe/react-spectrum";
import { useAuth } from "context/auth";
import { NavLink, useNavigate } from "react-router-dom";

const Navigation = () => {
  const { removeSession } = useAuth();
  const navigate = useNavigate();

  return (
    <Tabs onSelectionChange={(key) => navigate(String(key))}>
      <TabList>
        <Item key=".">Home</Item>
        <Item key="admin">Admin Panel</Item>
        <Item key="loans">View Loans</Item>
        <Item key="tools">Developer Tools</Item>
      </TabList>
    </Tabs>
  );
};
export default Navigation;
