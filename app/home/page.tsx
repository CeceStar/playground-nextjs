"use client";

import { useState } from "react";
import {
  Container,
  Box,
  Tabs,
  Tab,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";

interface TabPanel {
  label: string;
  heading: string;
  description: string;
  buttonText: string;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}>
      {value === index && <Box sx={{ p: 4 }}>{children}</Box>}
    </div>
  );
}

export default function HomePage() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabs: TabPanel[] = [
    {
      label: "Features",
      heading: "Amazing Features",
      description:
        "Discover the powerful features that make our platform the best choice for your needs. Built with cutting-edge technology and designed with you in mind.",
      buttonText: "Learn More",
    },
    {
      label: "Pricing",
      heading: "Simple Pricing",
      description:
        "Choose a plan that fits your budget and scale as you grow. Our transparent pricing ensures you only pay for what you use.",
      buttonText: "View Plans",
    },
    {
      label: "Contact",
      heading: "Get in Touch",
      description:
        "Have questions? Our dedicated support team is ready to help you succeed. Reach out to us anytime.",
      buttonText: "Contact Us",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 200px)",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        py: 4,
      }}>
      <Container maxWidth="md">
        <Card elevation={3} sx={{ borderRadius: 2, overflow: "hidden" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="navigation tabs"
            sx={{
              backgroundColor: "#f5f5f5",
              borderBottom: 1,
              borderColor: "divider",
              "& .MuiTab-root": {
                fontSize: "1rem",
                fontWeight: 500,
                textTransform: "capitalize",
                color: "#616161",
                "&.Mui-selected": {
                  color: "#1976d2",
                  fontWeight: 600,
                },
              },
              "& .MuiTabs-indicator": {
                backgroundColor: "#1976d2",
                height: 3,
              },
            }}>
            {tabs.map((tab, index) => (
              <Tab key={index} label={tab.label} id={`tab-${index}`} />
            ))}
          </Tabs>

          <CardContent sx={{ background: "white" }}>
            {tabs.map((tab, index) => (
              <TabPanel key={index} value={value} index={index}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: "#1a1a1a",
                    }}>
                    {tab.heading}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#666666",
                      lineHeight: 1.8,
                      fontSize: "1.1rem",
                    }}>
                    {tab.description}
                  </Typography>
                  <Box>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        backgroundColor: "#1976d2",
                        "&:hover": {
                          backgroundColor: "#1565c0",
                        },
                        textTransform: "capitalize",
                        fontSize: "1rem",
                        padding: "10px 32px",
                      }}>
                      {tab.buttonText}
                    </Button>
                  </Box>
                </Box>
              </TabPanel>
            ))}
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
