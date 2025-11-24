"use client";

import { useRouter } from "next/navigation";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Link,
} from "@mui/material";

export default function Header() {
  const router = useRouter();

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
            onClick={() => router.push("/")}>
            Doggos
          </Typography>
          <Box sx={{ ml: "auto", display: "flex", gap: 2 }}>
            <Link
              href="/"
              color="inherit"
              underline="none"
              sx={{
                fontSize: "1rem",
                color: "#222121e6",
                px: 2,
                py: 1,
                borderRadius: 1,
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor: "rgba(34, 33, 33, 0.1)",
                },
              }}>
              Home
            </Link>
            <Link
              href="/info"
              color="inherit"
              underline="none"
              sx={{
                fontSize: "1rem",
                color: "#222121e6",
                px: 2,
                py: 1,
                borderRadius: 1,
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor: "rgba(34, 33, 33, 0.1)",
                },
              }}>
              Info
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
