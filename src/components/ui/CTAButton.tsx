"use client";
import { Button, ButtonProps } from "@mui/material";
import { fontFamily } from "@/theme/typography";
import { colors } from "@/theme/colors";

interface CTAButtonProps extends Omit<ButtonProps, "variant"> {
  variant?: "filled" | "outlined";
}

const baseSx = {
  fontFamily: fontFamily.mono,
  fontWeight: 400,
  fontSize: "12px",
  letterSpacing: 0,
  borderRadius: "10px",
  px: "59px",
  py: "15px",
  height: "49px",
  gap: "8px",
  whiteSpace: "nowrap" as const,
  minWidth: "226px",
};

export default function CTAButton({
  variant = "outlined",
  children,
  sx,
  ...props
}: CTAButtonProps) {
  if (variant === "filled") {
    return (
      <Button
        variant="contained"
        sx={{
          ...baseSx,
          textTransform: "uppercase",
          color: "#E9F4F9",
          background: colors.gradientCTA,
          border: "none",
          "&:hover": {
            background: "linear-gradient(135deg, #22CAFF 0%, #1050E8 100%)",
            boxShadow: "0 8px 24px rgba(0,180,253,0.35)",
          },
          ...sx,
        }}
        {...props}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button
      variant="outlined"
      sx={{
        ...baseSx,
        textTransform: "none",
        color: "#E9F4F9",
        borderColor: "#E9F4F9",
        borderWidth: "1px",
        background: "transparent",
        "&:hover": {
          borderColor: "#E9F4F9",
          background: "rgba(233,244,249,0.06)",
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
