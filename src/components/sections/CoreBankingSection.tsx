"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { colors } from "@/theme/colors";
import { fontFamily } from "@/theme/typography";
import { coreBankingContent } from "@/constants/content";
import { assetPaths } from "@/constants/assets";
import CTAButton from "@/components/ui/CTAButton";

export default function CoreBankingSection() {
  return (
    <Box
      component="section"
      sx={{
        background: colors.bgDark,
        position: "relative",
        overflowX: "clip",
        overflowY: "visible",
        height: { xs: "auto", md: "619px" },
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          top: "-2.25px",
          left: "-163.31px",
          width: "1141px",
          height: "687px",
          opacity: 0.5,
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
          overflow: "visible",
        }}
      >
        <svg
          width="1141"
          height="687"
          viewBox="0 0 1141 687"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block" }}
        >
          <defs>
            <linearGradient
              id="cb7StrokeGrad"
              gradientUnits="userSpaceOnUse"
              x1="-47.9"
              y1="160.3"
              x2="1188.9"
              y2="526.7"
            >
              <stop offset="0%" stopColor="rgba(0,180,253,0.5)" />
              <stop offset="86.98%" stopColor="rgba(0,58,206,0.5)" />
            </linearGradient>
          </defs>
          <text
            x="0"
            y="530"
            fontFamily="Archivo, sans-serif"
            fontWeight="500"
            fontSize="572.63"
            fill="none"
            stroke="url(#cb7StrokeGrad)"
            strokeWidth="1.59"
          >
            CB7
          </text>
        </svg>
      </Box>

      <Box
        sx={{
          position: { xs: "relative", md: "absolute" },
          top: { md: "156.88px" },
          left: { md: "80px" },
          width: { xs: "100%", md: "607.83px" },
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          px: { xs: 3, md: 0 },
          pt: { xs: 8, md: 0 },
          pb: { xs: 4, md: 0 },
          zIndex: 1,
        }}
      >
        <Typography
          component="h2"
          sx={{
            fontFamily: fontFamily.primary,
            fontWeight: 400,
            fontSize: { xs: "2rem", md: "53px" },
            lineHeight: "120%",
            letterSpacing: "-0.01em",
            color: "#E9F4F9",
            m: 0,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {coreBankingContent.heading}
        </Typography>

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
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {coreBankingContent.subtitle}
        </Typography>

        <CTAButton variant="filled" sx={{ alignSelf: { xs: "center", md: "flex-start" }, width: { xs: "100%", md: "auto" } }}>
          REQUEST DEMO
        </CTAButton>

        <Box
          sx={{ display: "flex", alignItems: "center", gap: "4px", cursor: "pointer", width: "fit-content", alignSelf: { xs: "center", md: "flex-start" } }}
        >
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

      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          top: "80.17px",
          left: "927px",
          width: "651.67px",
          height: "461.42px",
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <Image
          src={assetPaths.amlDashboard}
          alt="AML Dashboard"
          width={652}
          height={461}
          style={{ width: "651.67px", height: "461.42px", display: "block" }}
        />
      </Box>

      <Box sx={{ display: { xs: "block", md: "none" }, px: 3, pb: 6 }}>
        <Image
          src={assetPaths.amlDashboard}
          alt="AML Dashboard"
          width={652}
          height={461}
          style={{ width: "100%", height: "auto", display: "block", borderRadius: "12px" }}
        />
      </Box>
    </Box>
  );
}
