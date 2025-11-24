"use client";

import { useRouter } from "next/navigation";
import { Container, Box, Typography, Button } from "@mui/material";

export default function Home() {
  const router = useRouter();

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 200px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", color: "white" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
            }}>
            Welcome to Your App
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              fontSize: { xs: "1rem", sm: "1.25rem" },
              fontWeight: 300,
            }}>
            Explore amazing features, view our pricing, and get in touch with
            our team.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => router.push("/home")}
            sx={{
              backgroundColor: "white",
              color: "#667eea",
              fontWeight: 600,
              padding: "12px 32px",
              fontSize: "1.1rem",
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
            }}>
            Go to Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
