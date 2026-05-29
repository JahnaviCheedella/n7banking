"use client";
import { Box, Typography } from "@mui/material";
import { colors } from "@/theme/colors";
import { fontFamily } from "@/theme/typography";

function FooterLink({ label, href = "#" }: { label: string; href?: string }) {
  return (
    <Box
      component="a"
      href={href}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "164px",
        minHeight: "21px",
        height: "auto",
        textDecoration: "none",
        cursor: "pointer",
        py: "1px",
      }}
    >
      <Typography
        sx={{
          fontFamily: fontFamily.primary,
          fontSize: "16px",
          fontWeight: 400,
          color: "#E9F4F9",
          opacity: 0.7,
          lineHeight: 1.3,
          width: "136.5px",
        }}
      >
        {label}
      </Typography>

      <Box
        component="span"
        sx={{ display: "inline-flex", alignItems: "center", width: "13.5px", height: "14.5px" }}
      >
        <svg width="14" height="15" viewBox="0 0 14 15" fill="none">
          <path
            d="M1 7.5H12.5M12.5 7.5L8 3M12.5 7.5L8 12"
            stroke={colors.accentBlue}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Box>
    </Box>
  );
}

function AddressBlock({ heading, text }: { heading: string; text: string }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
      <Typography
        sx={{
          fontFamily: fontFamily.primary,
          fontSize: "16px",
          fontWeight: 500,
          color: "#E9F4F9",
          lineHeight: "21px",
          m: 0,
        }}
      >
        {heading}
      </Typography>
      <Typography
        sx={{
          fontFamily: fontFamily.primary,
          fontSize: "16px",
          fontWeight: 400,
          color: "#E9F4F9",
          opacity: 0.7,
          lineHeight: "140%",
          whiteSpace: "pre-line",
          m: 0,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

function MenuBlock({ heading, links }: { heading: string; links: string[] }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Typography
        sx={{
          fontFamily: fontFamily.primary,
          fontSize: "16px",
          fontWeight: 500,
          color: "#E9F4F9",
          lineHeight: "21px",
          m: 0,
        }}
      >
        {heading}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {links.map((link) => (
          <FooterLink key={link} label={link} />
        ))}
      </Box>
    </Box>
  );
}

export default function Footer() {
  const londonAddress = "Linktia Infosystems Ltd – CB7,\n26 Main Road Sundridge,TN14 6EP, England, United Kingdom.";
  const dubaiAddress = "Linktia Infosystems Ltd – CB7,Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates";
  const puneAddress = "Linktia Infosystems Ltd – CB7,Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India";

  const solutionsLinks = [
    "Core Banking CB7",
    "Digital Banking N7",
    "Open Banking",
    "Loan Origination System",
    "Loan Management System",
    "Digital Transformation",
  ];

  const n7BankingLinks = [
    "About Us",
    "Solutions",
    "Contact",
    "Company",
    "Careers",
    "Insights",
    "Core Team",
    "Brand Center",
  ];

  const socialLinks = ["LinkedIn", "X"];

  return (
    <Box
      component="footer"
      id="footer"
      sx={{
        background: colors.bgDark,
        position: "relative",
        overflow: "hidden",
        width: "100%",
        pt: { xs: 8, md: 0 },
        pb: { xs: 8, md: 0 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "547.54px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1440px",
          height: "556.77px",
          borderRadius: "50%",
          background: colors.gradientCTA,
          filter: "blur(200px)",
          opacity: 0.05,
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
          height: { xs: "auto", md: "787px" },
          px: { xs: 3, md: "80px" },
        }}
      >
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            position: "absolute",
            top: "130.17px",
            left: "53px",
            width: "440px",
            height: "232px",
            userSelect: "none",
            pointerEvents: "none",
            opacity: 1,
          }}
        >
          <Typography
            sx={{
              fontFamily: fontFamily.primary,
              fontSize: "338px",
              fontWeight: 500,
              lineHeight: 0.68,
              height: "232px",
              margin: 0,
              textTransform: "uppercase",
              background: `
                radial-gradient(circle at 131px 173px, #74F1AE 0%, rgba(116,241,174,0) 80%),
                radial-gradient(circle at 301px 179px, #013ACF 0%, rgba(1,58,207,0) 80%),
                #01B4FD
              `,
              backgroundBlendMode: "color-dodge, normal, normal",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: 0,
            }}
          >
            N7
          </Typography>
        </Box>

        <Box
          sx={{
            position: { xs: "relative", md: "absolute" },
            top: { md: "130px" },
            left: { md: "543.68px" },
            width: { xs: "100%", md: "816.3px" },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: { xs: 6, md: 0 },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", width: { xs: "100%", md: "268.5px" } }}>
            <Box sx={{ height: { md: "228px" }, mb: { xs: 4, md: 0 } }}>
              <AddressBlock heading="London" text={londonAddress} />
            </Box>
            <MenuBlock heading="Solutions" links={solutionsLinks} />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", width: { xs: "100%", md: "268.5px" } }}>
            <Box sx={{ height: { md: "228px" }, mb: { xs: 4, md: 0 } }}>
              <AddressBlock heading="Dubai" text={dubaiAddress} />
            </Box>
            <MenuBlock heading="N7 Banking" links={n7BankingLinks} />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", width: { xs: "100%", md: "211.3px" } }}>
            <Box sx={{ height: { md: "228px" }, mb: { xs: 4, md: 0 } }}>
              <AddressBlock heading="Pune" text={puneAddress} />
            </Box>
            <MenuBlock heading="Our Socials" links={socialLinks} />
          </Box>
        </Box>

        <Typography
          sx={{
            position: { xs: "relative", md: "absolute" },
            top: { md: "718.96px" },
            left: { md: "543.68px" },
            width: { xs: "100%", md: "779.43px" },
            height: { md: "36px" },
            fontFamily: fontFamily.primary,
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: 1.3,
            letterSpacing: 0,
            color: "#E9F4F9",
            opacity: 0.3,
            mt: { xs: 6, md: 0 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
        </Typography>
      </Box>
    </Box>
  );
}
