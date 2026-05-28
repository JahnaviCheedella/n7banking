"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { fontFamily } from "@/theme/typography";
import { colors } from "@/theme/colors";

interface SolutionItemProps {
  icon: string;
  title: string;
  subtitle: string;
}

export default function SolutionItem({ icon, title, subtitle }: SolutionItemProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "26px" }}>
      <Box sx={{ width: "47px", height: "49px", flexShrink: 0 }}>
        <Image
          src={icon}
          alt={title}
          width={47}
          height={49}
          style={{ width: "47px", height: "49px", objectFit: "contain" }}
        />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "32px", flex: 1 }}>
        <Typography
          sx={{
            fontFamily: fontFamily.primary,
            fontWeight: 400,
            fontSize: "22px",
            lineHeight: "120%",
            letterSpacing: 0,
            color: "#E9F4F9",
            m: 0,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontFamily: fontFamily.primary,
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "130%",
            letterSpacing: 0,
            color: "#E9F4F9",
            opacity: 0.7,
            m: 0,
          }}
        >
          {subtitle}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: "4px", cursor: "pointer", width: "fit-content" }}>
        <Typography
          component="span"
          sx={{
            fontFamily: fontFamily.mono,
            fontWeight: 400,
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            color: colors.accentBlue,
          }}
        >
          <span style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>LEARN</span>
          {" MORE"}
        </Typography>
        <Typography component="span" sx={{ color: colors.accentBlue, fontSize: "14px", lineHeight: 1 }}>
          →
        </Typography>
      </Box>
    </Box>
  );
}
