import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import router from "@routes";
import { ToolBarStyles, Logo } from "./Styles";
import { Profile as ProfileMenu } from "./Menus/Profile";
import { List as PagesList } from "./List";

export const pages = [
  {
    id: "dashboard",
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    id: "login",
    name: "Login",
    path: "/login",
  },
  {
    id: "register",
    name: "Register",
    path: "/register",
  },
];

export const settings = ["Profile", "Logout"];

function Header() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSelectPage = (page = {}) => {
    const { path = "" } = page;
    router.navigate(path);
  };

  return (
    <AppBar position="static">
      <Toolbar disableGutters sx={ToolBarStyles}>
        <Logo />
        <PagesList data={pages} onSelect={handleSelectPage} />
        <ProfileMenu
          anchor={anchorElUser}
          onOpen={handleOpenUserMenu}
          onClose={handleCloseUserMenu}
        />
      </Toolbar>
    </AppBar>
  );
}
export default Header;
