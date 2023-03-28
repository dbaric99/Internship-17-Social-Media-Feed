import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Navigation.module.css";
import { styleConstants } from "constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState('');

  const handleSubmitSearch = () => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("search", search);
    navigate({ search: queryParams.toString() });
  }

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  }

  return (
    <Box sx={{ flexGrow: 1 }} className={styles.navigationWrapper}>
      <AppBar position="static" className={styles.barWrapper}>
        <Toolbar className={styles.navigationBar}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link className={styles.logo} to="posts">
              Social Feed
            </Link>
          </Typography>
          <styleConstants.Search onChange={(e) => handleInputChange(e)}>
            <styleConstants.SearchIconWrapper>
              <SearchIcon />
            </styleConstants.SearchIconWrapper>
            <styleConstants.StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </styleConstants.Search>
          <Button variant="contained" className={styles.submitButton} onClick={() => handleSubmitSearch()}>
            submit
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export { Navigation };
