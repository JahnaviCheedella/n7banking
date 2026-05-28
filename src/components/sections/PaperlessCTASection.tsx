"use client";
import { Box, Typography } from "@mui/material";
import { colors } from "@/theme/colors";
import { fontFamily } from "@/theme/typography";
import { paperlessCTAContent } from "@/constants/content";
import CTAButton from "@/components/ui/CTAButton";

interface PaperlessCTAProps {
  dark?: boolean;
  variant?: "card" | "flat";
}

function CB7Watermark() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "-160.72px",
        left: "223.56px",
        width: "1141px",
        height: "687px",
        opacity: 0.5,
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <svg width="1141" height="687" viewBox="0 0 1141 687" fill="none">
        <defs>
          <linearGradient id="cb7CTABlueGrad" gradientUnits="userSpaceOnUse"
            x1="-47.9" y1="160.3" x2="1188.9" y2="526.7">
            <stop offset="0%" stopColor="#00B4FD" />
            <stop offset="86.98%" stopColor="#003ACE" />
          </linearGradient>
          <linearGradient id="cb7CTADarkFadeGrad" gradientUnits="userSpaceOnUse"
            x1="249" y1="846" x2="892" y2="-159">
            <stop offset="0%" stopColor="#02171F" stopOpacity="1" />
            <stop offset="30.8%" stopColor="#02171F" stopOpacity="1" />
            <stop offset="77.46%" stopColor="#000000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>
        </defs>
        <text x="1141" y="530" fontFamily="Archivo" fontWeight="500" fontSize="572.63"
          textAnchor="end" fill="none" stroke="url(#cb7CTABlueGrad)" strokeWidth="1.59">CB7</text>
        <text x="1141" y="530" fontFamily="Archivo" fontWeight="500" fontSize="572.63"
          textAnchor="end" fill="none" stroke="url(#cb7CTADarkFadeGrad)" strokeWidth="1.59">CB7</text>
      </svg>
    </Box>
  );
}

function N7Watermark() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "-160.72px",
        left: "620.56px",
        width: "744px",
        height: "687px",
        opacity: 0.5,
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <svg width="744" height="687" viewBox="0 0 744 687" fill="none">
        <defs>
          <linearGradient id="n7CTABlueGrad" gradientUnits="userSpaceOnUse"
            x1="46" y1="417" x2="665" y2="247">
            <stop offset="0%" stopColor="#00B4FD" />
            <stop offset="100%" stopColor="#003ACE" />
          </linearGradient>
          <linearGradient id="n7CTADarkFadeGrad" gradientUnits="userSpaceOnUse"
            x1="481" y1="-372" x2="1103" y2="525">
            <stop offset="0%" stopColor="#02171F" stopOpacity="1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>
        </defs>
        <text x="0" y="530" fontFamily="Archivo" fontWeight="500" fontSize="572.63"
          fill="none" stroke="url(#n7CTABlueGrad)" strokeWidth="1.59">N7</text>
        <text x="0" y="530" fontFamily="Archivo" fontWeight="500" fontSize="572.63"
          fill="none" stroke="url(#n7CTADarkFadeGrad)" strokeWidth="1.59">N7</text>
      </svg>
    </Box>
  );
}

export default function PaperlessCTASection({ dark = true, variant = "card" }: PaperlessCTAProps) {
  if (variant === "flat") {
    return (
      <Box
        component="section"
        sx={{
          background: colors.bgDark,
          position: "relative",
          width: "100%",
          height: { xs: "auto", md: "316px" },
          display: "flex",
          alignItems: "center",
          py: { xs: 6, md: 0 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1440px",
            mx: "auto",
            px: { xs: 3, md: "80px" },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: { xs: 4, md: 0 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              width: { xs: "100%", md: "607.83px" },
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
              {paperlessCTAContent.heading}
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
              {paperlessCTAContent.subtitle}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              gap: "40px",
              width: { xs: "100%", sm: "auto" },
            }}
          >
            <CTAButton
              variant="outlined"
              href="#footer"
              sx={{
                width: { xs: "100%", sm: "208px" },
                minWidth: "auto",
                px: "59px",
              }}
            >
              {paperlessCTAContent.ctaSecondary}
            </CTAButton>
            <CTAButton
              variant="filled"
              sx={{
                width: { xs: "100%", sm: "210px" },
                minWidth: "auto",
                px: "51px",
              }}
            >
              {paperlessCTAContent.ctaPrimary}
            </CTAButton>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      component="section"
      sx={{
        ...(dark && { background: colors.bgDark }),
        position: "relative",
        ...(dark && {
          height: { xs: "auto", md: "681px" },
          minHeight: { xs: "520px", md: "681px" },
        }),
        ...(!dark && {
          pb: { xs: "40px", md: "116px" },
        }),
      }}
    >
      <Box
        sx={{
          position: { xs: "relative", md: dark ? "absolute" : "relative" },
          ...(dark && { top: { md: "127px" }, left: { md: "81px" } }),
          ...(!dark && { mx: { xs: "16px", md: "81px" }, my: { xs: "40px", md: 0 } }),
          width: { xs: "calc(100% - 32px)", md: dark ? "1279px" : "calc(100% - 162px)" },
          height: { xs: "auto", md: "427px" },
          borderRadius: "27px",
          overflow: "hidden",
          background: "linear-gradient(99.21deg, #031E2A -12.22%, #000D12 59.26%)",
          ...(dark && { mx: { xs: "16px", md: 0 }, my: { xs: "40px", md: 0 } }),
        }}
      >
        {dark ? <CB7Watermark /> : <N7Watermark />}

        <Box
          sx={{
            position: { xs: "relative", md: "absolute" },
            top: { md: "112.28px" },
            left: { md: "65px" },
            width: { xs: "100%", md: "607.83px" },
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            px: { xs: 4, md: 0 },
            pt: { xs: 6, md: 0 },
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
            {paperlessCTAContent.heading}
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
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {paperlessCTAContent.subtitle}
          </Typography>
        </Box>

        <Box
          sx={{
            position: { xs: "relative", md: "absolute" },
            top: { md: "189px" },
            right: { md: "65px" },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: "16px",
            px: { xs: 4, md: 0 },
            pb: { xs: 6, md: 0 },
            zIndex: 1,
            alignItems: "center",
          }}
        >
          <CTAButton variant="outlined" href="#footer" sx={{ width: { xs: "100%", sm: "auto" } }}>{paperlessCTAContent.ctaSecondary}</CTAButton>
          <CTAButton variant="filled" sx={{ width: { xs: "100%", sm: "auto" } }}>{paperlessCTAContent.ctaPrimary}</CTAButton>
        </Box>
      </Box>
    </Box>
  );
}
