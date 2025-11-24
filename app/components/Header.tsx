"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";

export default function Header() {
  return (
    <AppBar
      position="static"
      elevation={2}
      sx={{ backgroundColor: "#f7edd7ff" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 4,
              fontWeight: 700,
              color: "#222121e6",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
            onClick={() => (window.location.href = "/")}>
            Doggos
          </Typography>
          <Box sx={{ ml: "auto", display: "flex", gap: 2 }}>
            <Button
              color="inherit"
              href="/"
              sx={{ fontSize: "1rem", color: "#222121e6" }}>
              Landing
            </Button>
            <Button
              color="inherit"
              href="/home"
              sx={{ fontSize: "1rem", color: "#222121e6" }}>
              Home
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
