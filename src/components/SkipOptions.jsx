import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
  Button,
  Chip,
  Tooltip,
} from "@mui/material";
import { fetchSkips } from "../api/fetchSkips";

const IMAGE_URL =
  "https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800";

export default function SkipOptions() {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [focusedId, setFocusedId] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetchSkips()
      .then((data) => {
        setSkips(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch skips:", err);
        setLoading(false);
      });
  }, []);

  const getTotalPrice = (skip) => {
    const vat = skip.vat ?? 0;
    const priceWithVat = skip.price_before_vat * (1 + vat / 100);
    return Math.round(priceWithVat);
  };

  if (loading) {
    return (
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <CircularProgress />
        <Typography sx={{ mt: 2 }} color="text.primary">
          Loading skip options...
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 6 }}>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
      >
        Choose Your Skip Size
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{ color: "gray", textAlign: "center", mb: 4 }}
      >
        Select the skip size that best suits your needs
      </Typography>

      <Grid container spacing={3}>
        {skips.map((skip) => {
          const totalPrice = getTotalPrice(skip);
          const isFocused = focusedId === skip.id;
          const isSelected = selectedId === skip.id;

          return (
            <Grid item xs={12} sm={6} md={4} mx={"auto"} key={skip.id}>
              <Card
                onClick={() => setFocusedId(skip.id)}
                sx={{
                  backgroundColor: isFocused ? "#111827" : "#1e1e1e",
                  color: "white",
                  border: isSelected ? "2px solid #0037C1" : "1px solid #333",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  borderRadius: 2,
                  overflow: "hidden",
                  transition:
                    "transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease",
                  transform: "scale(1)",
                  boxShadow: isSelected
                    ? "0 0 10px #0037C1"
                    : "0px 2px 12px rgba(0,0,0,0.3)",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: "0 4px 18px rgba(0, 55, 193, 0.25)",
                  },
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    height="192"
                    image={IMAGE_URL}
                    alt={`Skip ${skip.size} yd`}
                    sx={{ objectFit: "cover" }}
                  />
                  <Chip
                    label={`${skip.size} Yards`}
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      backgroundColor: "#0037C1",
                      color: "white",
                      fontWeight: 600,
                    }}
                  />
                  {skip.allows_heavy_waste && (
                    <Chip
                      label="Heavy Waste OK"
                      size="small"
                      sx={{
                        position: "absolute",
                        bottom: 8,
                        left: 8,
                        backgroundColor: "#2e7d32",
                        color: "white",
                        fontWeight: 600,
                      }}
                    />
                  )}
                </Box>

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, mb: 1, fontSize: "1.1rem" }}
                  >
                    {skip.size} Yard Skip
                  </Typography>

                  <Typography variant="body2" sx={{ color: "gray", mb: 1 }}>
                    {skip.hire_period_days}-day hire period
                  </Typography>

                  <Tooltip
                    title={`£${skip.price_before_vat} + ${skip.vat}% VAT`}
                  >
                    <Typography
                      sx={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "white",
                        mb: 0.5,
                        textShadow: "0 0 6px rgba(0, 55, 193, 0.5)",
                      }}
                    >
                      <Box component="span" sx={{ color: "#1976d2" }}>
                        £
                      </Box>{" "}
                      {totalPrice}
                    </Typography>
                  </Tooltip>

                  <Typography
                    variant="caption"
                    sx={{
                      color: "#999",
                      fontStyle: "italic",
                      fontSize: "0.75rem",
                    }}
                  >
                    per hire incl. VAT
                  </Typography>
                </CardContent>

                <Box sx={{ px: 2, pb: 2 }}>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation(); // prevent click bubbling
                      setSelectedId(skip.id);
                    }}
                    variant={isSelected ? "contained" : "outlined"}
                    fullWidth
                    sx={{
                      backgroundColor: isSelected ? "#1976d2" : "#333",
                      color: "white",
                      textTransform: "none",
                      fontWeight: 500,
                      borderColor: "#444",
                      "&:hover": {
                        backgroundColor: isSelected ? "#115293" : "#555",
                      },
                    }}
                  >
                    {isSelected ? "Selected" : "Select This Skip →"}
                  </Button>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
