"use client";

import { useRouter } from "next/navigation";
import { Container, Box, Typography, Button } from "@mui/material";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #ebca79ff 0%, #e9dec2ff 100%)",
        }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center", color: "#222121e6" }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
              }}>
              Trying to creat merge conflict
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
              }}>
              Welcome to Doggos
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                fontSize: { xs: "1rem", sm: "1.25rem" },
                fontWeight: 300,
              }}>
              Explore amazing features about owning a dog, view pricing, and get
              in touch with a dog shelter.
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => router.push("/info")}
              sx={{
                backgroundColor: "white",
                color: "rgba(34, 33, 33, 0.9)",
                fontWeight: 600,
                padding: "12px 32px",
                fontSize: "1.1rem",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}>
              Get more information
            </Button>
          </Box>
        </Container>
      </Box>
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 4,
            color: "rgba(34, 33, 33, 0.9)",
            textAlign: "center",
          }}>
          Arguments why dogs are truly man’s best friend
        </Typography>
        <Box>
          <Box
            component="img"
            src={"https://d2zp5xs5cp8zlg.cloudfront.net/image-59328-800.jpg"}
            alt="A very cute dog"
            sx={{
              float: "left",
              width: { xs: "100%", md: "50%" },
              height: "auto",
              minHeight: "300px",
              borderRadius: "12px",
              objectFit: "cover",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
              mr: 3,
              mb: 2,
            }}
          />
          <Typography
            variant="body1"
            sx={{
              color: "rgba(34, 33, 33, 0.9)",
              lineHeight: 1.8,
              fontSize: { xs: "0.95rem", sm: "1rem" },
            }}>
            Dogs are often called a man’s best friend because they form a bond
            with humans that is both loyal and deeply emotional. Throughout
            history, dogs have lived alongside people, offering companionship,
            protection, and unwavering affection. Their ability to sense human
            emotions makes them comforting in times of stress, and their playful
            energy brings joy into everyday moments. Whether they are greeting
            you excitedly at the door or resting quietly at your side, dogs
            create a sense of connection that feels genuine and constant. <br />
            <br />
            They do not judge or hold grudges; instead, they offer simple,
            honest companionship. Beyond emotional support, dogs also play
            meaningful roles in human life. They help guide those with
            disabilities, assist in search-and-rescue missions, and work with
            professionals to provide therapy in hospitals or schools. Even in an
            ordinary household, a dog encourages routine, responsibility, and
            outdoor activity, making life healthier and more structured. Their
            presence has been shown to reduce loneliness and bring comfort just
            by being near. In many ways, dogs remind us of the value of trust
            and unconditional love, proving time and again why they truly
            deserve the title of man’s best friend.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#616161",
                "&:hover": {
                  backgroundColor: "#616161",
                },
                textTransform: "capitalize",
                fontSize: "1rem",
                padding: "10px 32px",
              }}>
              Get a dog now
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
