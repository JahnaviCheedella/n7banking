"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { colors } from "@/theme/colors";
import { fontFamily } from "@/theme/typography";
import { heroContent, trustedByLogos } from "@/constants/content";
import { assetPaths } from "@/constants/assets";
import CTAButton from "@/components/ui/CTAButton";

const LOGO_COLOR = "#586F84";

export default function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        background: colors.bgDark,
        minHeight: { xs: "auto", md: "810px" },
        height: { md: "810px" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "flex-start" },
        pt: { xs: 12, sm: 14, md: "120px" },
        pb: { xs: 6, sm: 8, md: 0 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: { xs: "5%", md: "204.52px" },
          left: { xs: "auto", md: "873.13px" },
          right: { xs: "-10%", md: "auto" },
          width: { xs: "280px", md: "398.87px" },
          height: { xs: "280px", md: "398.87px" },
          borderRadius: "50%",
          background: "linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)",
          filter: "blur(100px)",
          opacity: 0.5,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={6} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "52px" }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "52px" }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <Typography
                    component="h1"
                    sx={{
                      fontFamily: fontFamily.primary,
                      fontWeight: 500,
                      fontSize: { xs: "2.2rem", sm: "3rem", md: "67px" },
                      lineHeight: "120%",
                      letterSpacing: "-0.01em",
                      color: "#E9F4F9",
                      width: { md: "607.83px" },
                      maxWidth: "100%",
                      m: 0,
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    {heroContent.headline}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: fontFamily.primary,
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "130%",
                      color: "#E9F4F9",
                      opacity: 0.8,
                      maxWidth: { xs: "100%", md: 460 },
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    {heroContent.subheadline}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: "20px",
                    flexWrap: "wrap",
                    flexDirection: { xs: "column", sm: "row" },
                  }}
                >
                  <CTAButton variant="filled" sx={{ px: { xs: 0, sm: "51px" }, minWidth: { xs: "auto", sm: "210px" }, width: { xs: "100%", sm: "auto" } }}>
                    {heroContent.ctaPrimary}
                  </CTAButton>

                  <CTAButton variant="outlined" href="#footer" sx={{ width: { xs: "100%", sm: "auto" } }}>
                    {heroContent.ctaSecondary}
                  </CTAButton>
                </Box>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <Typography
                  sx={{
                    fontFamily: fontFamily.primary,
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "130%",
                    color: "#E9F4F9",
                    opacity: 0.7,
                    textTransform: "capitalize",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  trusted by:
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "18.4px",
                    flexWrap: "wrap",
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  {trustedByLogos.map(({ name, asset }) => (
                    <Box
                      key={name}
                      sx={{ display: "flex", alignItems: "center", gap: "4.6px", flexShrink: 0 }}
                    >
                      <Image
                        src={assetPaths[asset as keyof typeof assetPaths]}
                        alt={name}
                        width={18}
                        height={18}
                        style={{
                          width: 18,
                          height: 18,
                          objectFit: "contain",
                          filter: "brightness(0) saturate(0) invert(40%) sepia(10%) saturate(500%) hue-rotate(180deg) brightness(70%)",
                        }}
                      />
                      <Typography
                        sx={{
                          fontFamily: fontFamily.primary,
                          fontWeight: 500,
                          fontSize: "13px",
                          lineHeight: 1,
                          color: LOGO_COLOR,
                          whiteSpace: "nowrap",
                          userSelect: "none",
                        }}
                      >
                        {name}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          top: "255px",
          left: "818px",
          width: "562px",
          height: "301px",
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <Image
          src={assetPaths.heroMockup}
          alt="Banking app mockup"
          width={562}
          height={301}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          priority
        />
      </Box>

      <Container maxWidth="lg" sx={{ display: { xs: "block", md: "none" }, order: { xs: -1, md: 0 }, mb: 4, position: "relative", zIndex: 1 }}>
        <Box sx={{ borderRadius: "24px", overflow: "hidden", boxShadow: "0 40px 80px rgba(0,0,0,0.5)" }}>
          <Image
            src={assetPaths.heroMockup}
            alt="Banking app mockup"
            width={562}
            height={301}
            style={{ width: "100%", height: "auto", display: "block" }}
            priority
          />
        </Box>
      </Container>
    </Box>
  );
}
