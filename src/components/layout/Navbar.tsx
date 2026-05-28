"use client";
import {
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { fontFamily } from "@/theme/typography";
import { navLinks } from "@/constants/content";

const navItemSx = {
  fontFamily: fontFamily.mono,
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "130%",
  letterSpacing: "0%",
  textTransform: "uppercase" as const,
  color: "#E9F4F9",
};

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Box
        component="nav"
        sx={{
          position: "fixed",
          top: "31px",
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "calc(100% - 32px)", md: "716.46px" },
          zIndex: 1300,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            px: "10px",
            py: "9px",
            gap: "160px",
            borderRadius: "12px",
            background: "rgba(47, 47, 47, 0.70)",
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",
            border: "1px solid rgba(233, 244, 249, 0.08)",
          }}
        >
          <Typography
            sx={{
              fontFamily: fontFamily.primary,
              fontWeight: 500,
              fontSize: "24px",
              lineHeight: "120%",
              color: "#E9F4F9",
              userSelect: "none",
              flexShrink: 0,
              px: "6px",
            }}
          >
            N7
          </Typography>

          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "504.46px",
                height: "26px",
                gap: "80px",
                flexShrink: 0,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                {navLinks.map((link) => (
                  <Button
                    key={link.label}
                    href={link.href}
                    disableRipple
                    endIcon={
                      link.hasDropdown ? (
                        <KeyboardArrowDownIcon sx={{ fontSize: "12px !important", ml: "-4px" }} />
                      ) : undefined
                    }
                    sx={{
                      ...navItemSx,
                      px: "10px",
                      py: "4px",
                      minWidth: 0,
                      background: "transparent",
                      "&:hover": { background: "rgba(233,244,249,0.07)" },
                    }}
                  >
                    {link.label}
                  </Button>
                ))}
              </Box>

              <Button
                variant="outlined"
                href="#demo"
                disableRipple
                sx={{
                  ...navItemSx,
                  px: "14px",
                  py: "6px",
                  borderRadius: "6px",
                  borderColor: "rgba(233, 244, 249, 0.40)",
                  flexShrink: 0,
                  whiteSpace: "nowrap",
                  "&:hover": {
                    borderColor: "#E9F4F9",
                    background: "rgba(233,244,249,0.07)",
                  },
                }}
              >
                REQUEST DEMO
              </Button>
            </Box>
          )}

          {isMobile && (
            <Box sx={{ ml: "auto" }}>
              <IconButton size="small" onClick={() => setDrawerOpen(true)} sx={{ color: "#E9F4F9" }}>
                <MenuIcon />
              </IconButton>
            </Box>
          )}
        </Box>
      </Box>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{ paper: { sx: { width: 280, background: "rgba(47,47,47,0.97)" } } }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: "#E9F4F9" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.label} disablePadding>
              <ListItemButton href={link.href} onClick={() => setDrawerOpen(false)}>
                <ListItemText
                  primary={link.label}
                  slotProps={{ primary: { sx: { ...navItemSx } } }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem sx={{ px: 2, pt: 2 }}>
            <Button
              variant="outlined"
              fullWidth
              sx={{
                ...navItemSx,
                borderColor: "rgba(233,244,249,0.4)",
                "&:hover": { borderColor: "#E9F4F9" },
              }}
            >
              REQUEST DEMO
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
