"use client";

import Link from "next/link";
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
    <AppBar position="static" elevation={2} sx={{ backgroundColor: "#1976d2" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 4,
              fontWeight: 700,
              color: "inherit",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
            onClick={() => (window.location.href = "/")}>
            MyApp
          </Typography>
          <Box sx={{ ml: "auto", display: "flex", gap: 2 }}>
            <Button color="inherit" href="/" sx={{ fontSize: "1rem" }}>
              Landing
            </Button>
            <Button color="inherit" href="/home" sx={{ fontSize: "1rem" }}>
              Home
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
