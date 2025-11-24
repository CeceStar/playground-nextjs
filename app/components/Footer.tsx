import { Box, Container, Typography, Link as MuiLink } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "#263238", color: "white", mt: 8, py: 4 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
            gap: 3,
            mb: 3,
          }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              MyApp
            </Typography>
            <Typography variant="body2" sx={{ color: "#b0bec5" }}>
              Your go-to platform for amazing features and seamless experiences.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              Quick Links
            </Typography>
            <MuiLink
              href="/"
              color="inherit"
              underline="hover"
              sx={{ display: "block", mb: 0.5 }}>
              Landing
            </MuiLink>
            <MuiLink
              href="/home"
              color="inherit"
              underline="hover"
              sx={{ display: "block" }}>
              Home
            </MuiLink>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ color: "#b0bec5" }}>
              Email: info@myapp.com
            </Typography>
            <Typography variant="body2" sx={{ color: "#b0bec5" }}>
              Phone: +1 (555) 123-4567
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{ borderTop: "1px solid #455a64", pt: 2, textAlign: "center" }}>
          <Typography variant="body2" sx={{ color: "#90a4ae" }}>
            &copy; 2025 MyApp. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
