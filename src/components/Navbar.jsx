import React, { useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useNavigate, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const drawerWidth = 240;

function Navbar(props) {
  const navigate = useNavigate();
  const location = useLocation();
  let repoName = location.pathname;

  useEffect(() => {
    console.log("deploy size");
  }, []);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <div
          className="navbar-header"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <LocalOfferIcon />
          <div>PRICE TAG MAKER</div>
        </div>
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton component="button" sx={{ textAlign: "center" }}>
            {repoName === "/" && (
              <ListItemText
                primary={"VIEW"}
                onClick={() => navigate("/pricetag")}
              />
            )}
            {repoName === "/pricetag" && (
              <ListItemText primary={"HOME"} onClick={() => navigate("/")} />
            )}
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="navbar-container">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <div
                className="desktop-navbar"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/")}
              >
                <LocalOfferIcon />
                <div>PRICE TAG MAKER</div>
              </div>
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {repoName === "/" && (
                <Button
                  key={"VIEW"}
                  sx={{ color: "#fff" }}
                  onClick={() => navigate("/pricetag")}
                  startIcon={<LocalOfferIcon />}
                >
                  VIEW
                </Button>
              )}
              {repoName === "/pricetag" && (
                <Button
                  key={"HOME"}
                  sx={{ color: "#fff" }}
                  onClick={() => navigate("/")}
                  startIcon={<HomeIcon />}
                >
                  HOME
                </Button>
              )}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    </div>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
