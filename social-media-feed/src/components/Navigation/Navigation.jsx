import { Button } from "@mui/material";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Navigation.module.css";
import { styleConstants } from "constants";

function Navigation() {
  return (
    <Box sx={{ flexGrow: 1 }} className={styles.navigationWrapper}>
      <AppBar position="static" className={styles.barWrapper}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Social Feed
          </Typography>
          <styleConstants.Search>
            <styleConstants.SearchIconWrapper>
              <SearchIcon />
            </styleConstants.SearchIconWrapper>
            <styleConstants.StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </styleConstants.Search>
          <Button variant="contained">submit</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export { Navigation };
