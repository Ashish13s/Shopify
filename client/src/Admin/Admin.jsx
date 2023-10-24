import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
  useMediaQuery,
  CssBaseline,
  Drawer,
  ListItemText,
  useTheme,
} from "@mui/material";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {
    Inbox as InboxIcon,
    Email as EmailIcon,
    Dashboard as DashboardIcon,
    AccountCircle as AccountCircleIcon,
} from "@mui/icons-material";

const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <DashboardIcon /> },
  { name: "Customers", path: "/admin/customers", icon: <DashboardIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <DashboardIcon /> },
  { name: "AddProduct", path: "/admin/product/create", icon: <DashboardIcon /> },
  // {name: "Dashboard", path: "/admin"},
];
const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {isLargeScreen && <Toolbar />}
      <List>
        {menu.map((item, index) => (
          <ListItem
            key={item.name}
            disablePadding
            onClick={() => {
              navigate(item.path);
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText>
                {item.name}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List>
          <ListItem
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText>
                Account
              </ListItemText>
            </ListItemButton>
          </ListItem>
      </List>

    </Box>
  );

  return (
  <div>
    <Box sx ={{display: `${isLargeScreen} ? "flex": "block"`}}>
        <CssBaseline />
        <Drawer
        sx={{
            height:"100vh",
            width: 240,
            flexShrink: 0
        }}
        variant="permanent"
        >
            {drawer}
        </Drawer>

    </Box>
  </div>);
};

export default Admin;
