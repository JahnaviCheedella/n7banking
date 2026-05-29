"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { fontFamily } from "@/theme/typography";
import { assetPaths } from "@/constants/assets";

const CARD_BG = "#01141B";
const IMG_BG = "#07193C";
const TAG_COLOR = "#2490BB";
const TEXT_LIGHT = "#E9F4F9";

export interface CaseStudyCardProps {
  tag: string;
  title: string;
  image: keyof typeof assetPaths;
}

export default function CaseStudyCard({ tag, title, image }: CaseStudyCardProps) {
  return (
    <Box
      sx={{
        position: "relative",
        width: { xs: "100%", md: "1015px" },
        height: { xs: "auto", md: "438px" },
        borderRadius: "18px",
        background: CARD_BG,
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          top: "26px",
          left: "24px",
          width: "422px",
          height: "382px",
          background: IMG_BG,
          borderRadius: "11px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "40px",
            left: "27px",
            width: "367px",
            height: "301px",
          }}
        >
          <Image
            src={assetPaths[image]}
            alt={title}
            width={367}
            height={301}
            style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          position: { xs: "relative", md: "absolute" },
          top: { md: "55px" },
          left: { md: "523px" },
          width: { xs: "100%", md: "480px" },
          height: { xs: "auto", md: "327px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: { xs: "24px", md: 0 },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "11px" }}>
          <Typography
            sx={{
              fontFamily: fontFamily.mono,
              fontSize: "12px",
              fontWeight: 500,
              color: TAG_COLOR,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            {tag}
          </Typography>
          <Typography
            sx={{
              fontFamily: fontFamily.primary,
              fontWeight: 400,
              fontSize: { xs: "24px", md: "36px" },
              lineHeight: "130%",
              color: TEXT_LIGHT,
            }}
          >
            {title}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: "8px", mt: "4px" }}>
            <Image
              src={assetPaths.logoZoomerr}
              alt="Zoomerr"
              width={30}
              height={30}
              style={{ display: "block", flexShrink: 0 }}
            />
            <Typography sx={{ fontFamily: "'Roboto', sans-serif", fontSize: "16px", fontWeight: 400, color: "#586E84" }}>
              Zoomerr
            </Typography>
          </Box>
        </Box>

        <Box
          component="a"
          href="#"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "100%", md: "431px" },
            height: "36px",
            border: "1px solid rgba(233,244,249,0.25)",
            borderRadius: "10px",
            textDecoration: "none",
            mt: { xs: "24px", md: 0 },
            "&:hover": { borderColor: TEXT_LIGHT },
          }}
        >
          <Typography
            sx={{
              fontFamily: fontFamily.mono,
              fontSize: "12px",
              fontWeight: 400,
              color: "rgba(233,244,249,0.5)",
              textTransform: "uppercase",
              lineHeight: "130%",
              letterSpacing: 0,
            }}
          >
            read more
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
