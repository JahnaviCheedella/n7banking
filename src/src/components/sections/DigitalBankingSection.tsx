"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { fontFamily } from "@/theme/typography";
import { digitalBankingContent } from "@/constants/content";
import { assetPaths } from "@/constants/assets";
import GradientButton from "@/components/ui/GradientButton";
import PaperlessCTASection from "@/components/sections/PaperlessCTASection";

const SECTION_BG = "#E9F4F8";
const TEXT_DARK = "#000D12";
const TEXT_MUTED = "rgba(0,13,18,0.70)";

function CheckBadge() {
  return (
    <Box
      sx={{
        width: 19,
        height: 19,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #00B4FD 0%, #0039CE 82%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        mt: "2px",
      }}
    >
      <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
        <path
          d="M1 3.5L3.2 5.5L8 1"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
}

function FeatureCard({
  title,
  body,
  features,
}: {
  title: string;
  body: string;
  features: string[];
}) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Typography
          sx={{
            fontFamily: fontFamily.primary,
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "130%",
            color: TEXT_DARK,
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
            color: TEXT_MUTED,
            m: 0,
          }}
        >
          {body}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {features.map((item) => (
          <Box
            key={item}
            sx={{ display: "flex", alignItems: "flex-start", gap: "11px" }}
          >
            <CheckBadge />
            <Typography
              sx={{
                fontFamily: fontFamily.primary,
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "130%",
                color: TEXT_MUTED,
                m: 0,
              }}
            >
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function SectionHeader({ mobile }: { mobile?: boolean }) {
  return (
    <Box
      sx={{
        flexDirection: "column",
        gap: "32px",
        ...(mobile
          ? { display: { xs: "flex", md: "none" } }
          : { display: { xs: "none", md: "flex" } }),
      }}
    >
      <Typography
        component="h2"
        sx={{
          fontFamily: fontFamily.primary,
          fontWeight: 400,
          fontSize: mobile ? { xs: "2rem" } : "53px",
          lineHeight: "120%",
          letterSpacing: "-0.01em",
          color: TEXT_DARK,
          opacity: 0.95,
          m: 0,
          ...(mobile && { textAlign: { xs: "center", md: "left" } }),
        }}
      >
        {digitalBankingContent.heading}
      </Typography>
      <Typography
        sx={{
          fontFamily: fontFamily.primary,
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "130%",
          color: TEXT_MUTED,
          m: 0,
          ...(mobile && { textAlign: { xs: "center", md: "left" } }),
        }}
      >
        {digitalBankingContent.body}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: mobile ? { xs: "center", md: "flex-start" } : "flex-start",
          gap: "16px",
        }}
      >
        <GradientButton sx={{ width: mobile ? { xs: "100%", sm: "auto" } : undefined }}>{digitalBankingContent.cta}</GradientButton>
        <Box
          component="a"
          href="#"
          sx={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textDecoration: "none",
            "&:hover": { opacity: 0.75 },
          }}
        >
          <Typography
            component="span"
            sx={{
              fontFamily: fontFamily.mono,
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "130%",
              background: "linear-gradient(135deg, #00B4FD 0%, #003ACE 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              whiteSpace: "nowrap",
            }}
          >
            LEARN MORE
          </Typography>
          <Box
            sx={{
              width: "33px",
              height: "1px",
              mt: "3px",
              background: "linear-gradient(135deg, #00B4FD 0%, #003ACE 100%)",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default function DigitalBankingSection() {
  return (
    <Box
      id="digital-banking"
      component="section"
      sx={{
        background: SECTION_BG,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "-67px",
          left: "277px",
          width: "744px",
          height: "687px",
          opacity: 0.5,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <svg width="744" height="687" viewBox="0 0 744 687" fill="none">
          <defs>
            <linearGradient id="dbN7Blue" gradientUnits="userSpaceOnUse"
              x1="16" y1="245" x2="728" y2="442">
              <stop offset="-5.68%" stopColor="#00B4FD" />
              <stop offset="86.98%" stopColor="#003ACE" />
            </linearGradient>
            <linearGradient id="dbN7Fade" gradientUnits="userSpaceOnUse"
              x1="109" y1="587" x2="635" y2="100">
              <stop offset="19.96%" stopColor="#E9F4F9" stopOpacity="1" />
              <stop offset="86.99%" stopColor="#000000" stopOpacity="0" />
            </linearGradient>
          </defs>
          <text x="0" y="530" fontFamily="Archivo" fontWeight="500" fontSize="572.63"
            letterSpacing="0" fill="none" stroke="url(#dbN7Blue)" strokeWidth="1.59">N7</text>
          <text x="0" y="530" fontFamily="Archivo" fontWeight="500" fontSize="572.63"
            letterSpacing="0" fill="none" stroke="url(#dbN7Fade)" strokeWidth="1.59">N7</text>
        </svg>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "418.17px",
          left: 0,
          width: "479.998779296875px",
          height: "1245.2142333984375px",
          opacity: 0.2,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <Image
          src={assetPaths.leftVector}
          alt=""
          fill
          style={{ objectFit: "fill" }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "957px",
          left: "887px",
          width: "861px",
          height: "1829px",
          opacity: 0.20,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <svg width="861" height="1829" viewBox="0 0 861 1829" fill="none">
          <defs>
            <linearGradient id="dbSevenBlue" gradientUnits="userSpaceOnUse" x1="0" y1="914" x2="861" y2="914">
              <stop offset="0%" stopColor="#00B4FD" />
              <stop offset="100%" stopColor="#0039CE" />
            </linearGradient>
          </defs>
          <text x="0" y="1410" fontFamily="Archivo" fontWeight="500" fontSize="1524.10"
            fill="none" stroke="url(#dbSevenBlue)" strokeWidth="1">7</text>
        </svg>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "-261px",
          left: "-86px",
          width: "586px",
          height: "586px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(253,166,0,1) 0%, rgba(206,86,0,1) 100%)",
          filter: "blur(60px)",
          opacity: 0.02,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "-92px",
          left: "661px",
          width: "779px",
          height: "779px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(253,166,0,1) 0%, rgba(206,86,0,1) 100%)",
          filter: "blur(80px)",
          opacity: 0.05,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "1929px",
          left: "-364px",
          width: "779px",
          height: "779px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,207,253,1) 0%, rgba(0,20,206,1) 100%)",
          filter: "blur(80px)",
          opacity: 0.10,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1440px",
          mx: "auto",
          pl: { xs: 3, md: "81px" },
          pr: { xs: 3, md: "166px" },
          pt: { xs: 8, md: "100px" },
          pb: { xs: 8, md: "100px" },
          display: "flex",
          alignItems: "flex-start",
          gap: { xs: 0, md: "103px" },
        }}
      >
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            width: "439px",
            flexShrink: 0,
            position: "sticky",
            top: "80px",
            alignSelf: "flex-start",
          }}
        >
          <SectionHeader />
        </Box>

        <Box
          sx={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: { xs: "64px", md: "110px" },
          }}
        >
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <SectionHeader mobile />
          </Box>

          {digitalBankingContent.cards.map((card, idx) => (
            <Box
              key={idx}
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  md: card.phoneLeft ? "row" : "row-reverse",
                },
                alignItems: { xs: "flex-start", md: "center" },
                gap: { xs: "32px", md: "80px" },
              }}
            >
              <Box
                sx={{
                  flexShrink: 0,
                  width: { xs: "200px", md: "268px" },
                  alignSelf: { xs: "center", md: "auto" },
                }}
              >
                <Image
                  src={assetPaths[card.phoneImage]}
                  alt={card.title}
                  width={268}
                  height={543}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </Box>

              <Box sx={{ flex: 1, minWidth: 0 }}>
                <FeatureCard
                  title={card.title}
                  body={card.body}
                  features={card.features}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <PaperlessCTASection dark={false} />
    </Box>
  );
}
