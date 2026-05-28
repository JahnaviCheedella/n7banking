"use client";
import { Box, Typography } from "@mui/material";
import { fontFamily } from "@/theme/typography";

const SEP_PATH =
  "M56.4857 27.4845 L37.6496 27.4845 C35.8088 27.4845 34.8861 25.2584 36.1896 23.9572 L49.508 10.6389 C50.0997 10.0472 50.0997 9.08594 49.508 8.49654 C48.9163 7.90486 47.9551 7.90486 47.3635 8.49654 L34.0451 21.8149 C32.7439 23.1161 30.5177 22.1957 30.5177 20.3527 L30.5177 1.51658 C30.5177 0.677806 29.8399 0 29.0011 0 C28.1624 0 27.4846 0.677806 27.4846 1.51658 L27.4846 20.3527 C27.4846 22.1935 25.2584 23.1161 23.9572 21.8149 L10.6388 8.49654 C10.0471 7.90486 9.08597 7.90486 8.49429 8.49654 C7.90262 9.08821 7.90262 10.0472 8.49429 10.6389 L21.8126 23.9572 C23.1139 25.2584 22.1935 27.4845 20.3527 27.4845 L1.51661 27.4845 C0.6801 27.4845 0 28.1624 0 29.0012 C0 29.8399 0.677833 30.5177 1.51661 30.5177 L20.3527 30.5177 C22.1935 30.5177 23.1161 32.7439 21.8126 34.0451 L8.49429 47.3635 C7.90262 47.9552 7.90262 48.9141 8.49429 49.5058 C9.08597 50.0974 10.0449 50.0974 10.6388 49.5058 L23.9572 36.1874 C25.2584 34.8862 27.4846 35.8065 27.4846 37.6473 L27.4846 56.4834 C27.4846 57.3199 28.1624 58 29.0011 58 C29.8399 58 30.5177 57.3199 30.5177 56.4834 L30.5177 37.6473 C30.5177 35.8065 32.7439 34.8839 34.0451 36.1851 L47.3635 49.5035 C47.9551 50.0952 48.914 50.0952 49.508 49.5035 C50.0997 48.9118 50.0997 47.9506 49.508 47.3612 L36.1896 34.0429 C34.8884 32.7416 35.8088 30.5155 37.6496 30.5155 L56.4857 30.5155 C57.3222 30.5155 58.0023 29.8377 58.0023 28.9989 C58.0023 28.1601 57.3245 27.4823 56.4857 27.4823 L56.4857 27.4845 Z";

function Separator() {
  return (
    <Box
      sx={{
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        width: { xs: "28px", md: "58px" },
        height: { xs: "28px", md: "58px" },
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 58 58" fill="none" style={{ display: "block" }}>
        <path d={SEP_PATH} fill="#000D12" />
      </svg>
    </Box>
  );
}

const ITEMS = [
  { brand: "N7" },
  { brand: "CB7" },
];

function TickerItem({ brand }: { brand: string }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: { xs: "12px", md: "24px" },
        flexShrink: 0,
        height: { xs: "36px", md: "66px" },
      }}
    >
      <Separator />

      <Typography
        component="span"
        sx={{
          fontFamily: fontFamily.primary,
          fontWeight: 500,
          fontSize: { xs: "24px", md: "47px" },
          lineHeight: "120%",
          background: "linear-gradient(135deg, #00B4FD 0%, #0039CE 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          whiteSpace: "nowrap",
        }}
      >
        {brand}
      </Typography>

      <Separator />

      <Typography
        component="span"
        sx={{
          fontFamily: fontFamily.primary,
          fontWeight: 600,
          fontSize: { xs: "24px", md: "47px" },
          lineHeight: "120%",
          color: "#000D12",
          whiteSpace: "nowrap",
        }}
      >
        Say
      </Typography>

      <Typography
        component="span"
        sx={{ fontSize: { xs: "22px", md: "42px" }, lineHeight: 1, flexShrink: 0 }}
        aria-hidden="true"
      >
        👋
      </Typography>

      <Typography
        component="span"
        sx={{
          fontFamily: fontFamily.primary,
          fontWeight: 600,
          fontSize: { xs: "24px", md: "47px" },
          lineHeight: "120%",
          color: "#000D12",
          whiteSpace: "nowrap",
        }}
      >
        to the new way of banking
      </Typography>
    </Box>
  );
}

export default function TickerSection() {
  const track = [...ITEMS, ...ITEMS];

  return (
    <Box
      component="section"
      sx={{
        background: "#FFFFFF",
        height: { xs: "66px", md: "116px" },
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          width: "max-content",
          willChange: "transform",
          animation: "tickerScroll 40s linear infinite",
          "@keyframes tickerScroll": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-50%)" },
          },
        }}
      >
        {track.map((item, i) => (
          <TickerItem key={i} brand={item.brand} />
        ))}
      </Box>
    </Box>
  );
}
