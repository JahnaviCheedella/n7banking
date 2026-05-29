"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { fontFamily } from "@/theme/typography";
import { assetPaths } from "@/constants/assets";

interface FeatureCheckItemProps {
  title: string;
}

export default function FeatureCheckItem({ title }: FeatureCheckItemProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: "5px",
        width: "100%",
        minHeight: "31.4px",
        height: "auto",
        py: "1px",
      }}
    >
      <Image
        src={assetPaths.checkIcon}
        alt="check"
        width={19}
        height={19}
        style={{ width: "18.52px", height: "18.52px", display: "block", flexShrink: 0 }}
      />
      <Typography
        sx={{
          fontFamily: fontFamily.primary,
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "130%",
          letterSpacing: 0,
          color: "#E9F4F9",
          opacity: 0.8,
          m: 0,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
