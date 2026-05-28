"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { colors } from "@/theme/colors";
import { fontFamily } from "@/theme/typography";
import { ckycContent } from "@/constants/content";
import { assetPaths } from "@/constants/assets";
import FeatureCheckItem from "@/components/ui/FeatureCheckItem";

export default function CKYCSection() {
  return (
    <Box
      component="section"
      sx={{
        background: colors.bgDark,
        position: "relative",
        overflowX: "clip",
        overflowY: "visible",
        height: { xs: "auto", md: "681px" },
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          top: "110px",
          left: "-159px",
          width: "652px",
          height: "461px",
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <Image
          src={assetPaths.ckycDashboard}
          alt="CKYC Dashboard"
          width={652}
          height={461}
          style={{ width: "652px", height: "461px", display: "block" }}
        />
      </Box>

      <Box
        sx={{
          position: { xs: "relative", md: "absolute" },
          top: { md: "168.68px" },
          left: { md: "770px" },
          width: { xs: "100%", md: "590px" },
          display: "flex",
          flexDirection: "column",
          gap: "34px",
          px: { xs: 3, md: 0 },
          pt: { xs: 8, md: 0 },
          pb: { xs: 6, md: 0 },
          zIndex: 2,
        }}
      >
        <Typography
          component="h2"
          sx={{
            fontFamily: fontFamily.primary,
            fontWeight: 400,
            fontSize: { xs: "1.5rem", md: "27px" },
            lineHeight: "130%",
            letterSpacing: 0,
            color: "#E9F4F9",
            m: 0,
            width: { md: "495.30px" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {ckycContent.heading}
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <Typography
            sx={{
              fontFamily: fontFamily.primary,
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "130%",
              letterSpacing: 0,
              color: "#E9F4F9",
              m: 0,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {ckycContent.subheading}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: "14px", sm: "29px" },
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "4px", width: { xs: "100%", sm: "296px" } }}>
              {ckycContent.featuresLeft.map((f) => (
                <FeatureCheckItem key={f} title={f} />
              ))}
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "4px", width: { xs: "100%", sm: "265px" } }}>
              {ckycContent.featuresRight.map((f) => (
                <FeatureCheckItem key={f} title={f} />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: { xs: "block", md: "none" }, px: 3, pb: 6 }}>
        <Image
          src={assetPaths.ckycDashboard}
          alt="CKYC Dashboard"
          width={652}
          height={461}
          style={{ width: "100%", height: "auto", display: "block", borderRadius: "12px" }}
        />
      </Box>
    </Box>
  );
}
