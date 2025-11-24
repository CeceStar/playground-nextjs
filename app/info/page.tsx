"use client";

import { useState, useEffect } from "react";
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

export default function InfoPage() {
  const [value, setValue] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabs: TabPanel[] = [
    {
      label: "Features",
      heading: "Amazing Features",
      description:
        "Owning a dog comes with some truly top-tier features. You get a built-in doorbell that barks at absolutely nothing, a personal trainer who insists you go outside even when it’s raining, and a living vacuum cleaner that specializes in cleaning up any food you drop—instantly. You’ll also enjoy daily reminders that socks are chew toys, not clothing, and a loyal companion who thinks you’re a superhero simply for coming home from the grocery store. In short, a dog gives you endless laughs, unconditional love, and a little chaos to keep life interesting.",
      buttonText: "Learn More",
    },
    {
      label: "Pricing",
      heading: "Simple Pricing",
      description:
        "Getting a dog comes with a very transparent pricing model. First, there’s the “Starter Pack,” which includes food, bowls, toys, and a bed—none of which your dog will actually use as intended. Then you have the “Subscription Fees,” like treats, replacement toys, and the occasional shoe your dog helpfully redesigns. Add in the “Surprise Charges,” such as emergency zoomies that knock over your lamp or the mysterious disappearance of every sock you own. But in return, you get unlimited cuddles, constant entertainment, and a best friend who pays you back in tail wags—making the whole package absolutely worth the investment.",
      buttonText: "View Plans",
    },
    {
      label: "Contact",
      heading: "Get in Touch",
      description:
        "Need more reasons to get a dog—or want to share your own canine chaos stories? Get in touch with us anytime. Our team is always ready to answer questions, give totally unbiased dog recommendations, or simply admire pictures of your furry friend. Just reach out, and we’ll happily fetch whatever info you need.",
      buttonText: "Contact Us",
    },
  ];

  if (!isMounted) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #ebca79ff 0%, #e9dec2ff 100%)",
          py: 4,
        }}>
        <Container maxWidth="md">
          <Card elevation={3} sx={{ borderRadius: 2, overflow: "hidden" }}>
            <Box sx={{ p: 4, textAlign: "center" }}>
              <Typography>Loading...</Typography>
            </Box>
          </Card>
        </Container>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ebca79ff 0%, #e9dec2ff 100%)",
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
                  color: "#1f2022ff",
                  fontWeight: 600,
                },
              },
              "& .MuiTabs-indicator": {
                backgroundColor: "#616161",
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
                        backgroundColor: "#616161",
                        "&:hover": {
                          backgroundColor: "#616161",
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
