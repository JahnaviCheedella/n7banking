"use client";
import { Box, Typography } from "@mui/material";
import { colors } from "@/theme/colors";
import { fontFamily } from "@/theme/typography";
import { solutionsContent } from "@/constants/content";
import { assetPaths } from "@/constants/assets";
import CTAButton from "@/components/ui/CTAButton";
import SolutionItem from "@/components/ui/SolutionItem";

export default function SolutionsSection() {
  return (
    <Box
      id="solutions"
      component="section"
      sx={{
        background: colors.bgDark,
        position: "relative",
        overflow: "hidden",
        pt: { xs: 8, md: "47px" },
        pb: { xs: 8, md: "95px" },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: { xs: "40%", md: "447px" },
          left: { xs: "-10%", md: "969px" },
          width: { xs: "300px", md: "557px" },
          height: { xs: "300px", md: "557px" },
          borderRadius: "50%",
          background: "linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)",
          filter: "blur(200px)",
          opacity: 0.1,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "stretch", md: "flex-start" },
          px: { xs: 3, md: "80px" },
          gap: { xs: 6, md: "217px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "48px",
            width: { md: "433px" },
            flexShrink: 0,
            pt: { md: "37px" },
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontFamily: fontFamily.primary,
              fontWeight: 400,
              fontSize: { xs: "1.75rem", md: "37px" },
              lineHeight: "120%",
              letterSpacing: "-0.01em",
              color: "#E9F4F9",
              m: 0,
              width: { md: "433px" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {solutionsContent.heading}
          </Typography>

          <CTAButton variant="outlined" sx={{ alignSelf: { xs: "center", md: "flex-start" }, width: { xs: "100%", md: "auto" } }}>
            REQUEST DEMO
          </CTAButton>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(2, 1fr)" },
            columnGap: { xs: "24px", md: "76px" },
            rowGap: { xs: "40px", md: "52px" },
            flex: { md: "1 1 613.01px" },
            maxWidth: { md: "613.01px" },
          }}
        >
          {solutionsContent.items.map((item) => (
            <SolutionItem
              key={item.title}
              icon={assetPaths[item.icon as keyof typeof assetPaths]}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
