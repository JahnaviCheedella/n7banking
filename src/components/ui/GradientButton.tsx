"use client";
import { Button, ButtonProps } from "@mui/material";
import { colors } from "@/theme/colors";
import { fontFamily } from "@/theme/typography";

interface GradientButtonProps extends ButtonProps {
  dark?: boolean;
}

export default function GradientButton({ dark, sx, children, ...props }: GradientButtonProps) {
  return (
    <Button
      variant="contained"
      sx={{
        background: colors.gradientCTA,
        color: "#E9F4F9",
        fontFamily: fontFamily.mono,
        fontWeight: 400,
        fontSize: "12px",
        textTransform: "uppercase",
        letterSpacing: 0,
        borderRadius: "10px",
        px: "51px",
        py: "15px",
        height: "49px",
        "&:hover": {
          background: "linear-gradient(135deg, #22CAFF 0%, #1050E8 100%)",
          boxShadow: "0 8px 24px rgba(0, 180, 253, 0.35)",
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
