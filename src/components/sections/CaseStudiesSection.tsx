"use client";
import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { colors } from "@/theme/colors";
import { fontFamily } from "@/theme/typography";
import { caseStudiesContent } from "@/constants/content";
import CaseStudyCard from "@/components/ui/CaseStudyCard";

const SECTION_BG = "#000D12";
const CARD_WIDTH = 1015;
const PEEK = 89;
const GAP = 16;
const CONTAINER_W = CARD_WIDTH + PEEK * 2 + GAP * 2;

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="20.94" height="20.94" viewBox="0 0 20.94 20.94" fill="none">
      {direction === "right" ? (
        <>
          <line x1="2" y1="10.47" x2="16" y2="10.47" stroke="#00B4FD" strokeWidth="1.5" strokeLinecap="round" />
          <polyline points="10,4 17,10.47 10,16.94" stroke="#00B4FD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </>
      ) : (
        <>
          <line x1="18.94" y1="10.47" x2="4.94" y2="10.47" stroke="#00B4FD" strokeWidth="1.5" strokeLinecap="round" />
          <polyline points="10.94,4 3.94,10.47 10.94,16.94" stroke="#00B4FD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </>
      )}
    </svg>
  );
}

function NavButton({ onClick, direction, disabled }: { onClick: () => void; direction: "left" | "right"; disabled: boolean }) {
  return (
    <Box
      component="button"
      onClick={onClick}
      disabled={disabled}
      sx={{
        width: 42, height: 42,
        borderRadius: "50%",
        border: "1px solid #00B4FD",
        background: "transparent",
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.3 : 1,
        transition: "opacity 0.2s",
        flexShrink: 0,
        "&:hover": { background: disabled ? "transparent" : "rgba(0,180,253,0.08)" },
      }}
    >
      <ArrowIcon direction={direction} />
    </Box>
  );
}

export default function CaseStudiesSection() {
  const [index, setIndex] = useState(0);
  const items = caseStudiesContent.items;
  const total = items.length;

  return (
    <Box
      id="case-studies"
      component="section"
      sx={{
        background: SECTION_BG,
        position: "relative",
        overflow: "hidden",
        height: { xs: "auto", md: "872px" },
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
          textAlign: "center",
          position: { xs: "relative", md: "absolute" },
          top: { md: "43px" },
          left: 0, right: 0, m: 0,
          pt: { xs: 6, md: 0 },
          zIndex: 1,
        }}
      >
        {caseStudiesContent.heading}
      </Typography>

      <Box
        sx={{
          position: { xs: "relative", md: "absolute" },
          top: { md: "179px" },
          left: { md: "123px" },
          width: { xs: "100%", md: `${CONTAINER_W}px` },
          height: { xs: "auto", md: "513px" },
          pt: { xs: 4, md: 0 },
          pb: { xs: 6, md: 0 },
        }}
      >
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            overflow: "visible",
            width: `${CONTAINER_W}px`,
            height: "438px",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "438px",
              perspective: "1200px",
              transformStyle: "preserve-3d",
            }}
          >
            {items.map((item, i) => {
              const relIndex = (i - index + total) % total;

              let transform = "";
              let zIndex = 1;
              let opacity = 0;
              const isActive = relIndex === 0;

              if (relIndex === 0) {
                transform = "translate3d(0px, 0px, 0px) scale(1) rotate(0deg)";
                zIndex = 10;
                opacity = 1;
              } else if (relIndex === 1) {
                transform = "translate3d(180px, 0px, -100px) scale(0.9) rotate(0deg)";
                zIndex = 8;
                opacity = 0.45;
              } else {
                transform = "translate3d(-180px, 0px, -100px) scale(0.9) rotate(0deg)";
                zIndex = 8;
                opacity = 0.65;
              }

              return (
                <Box
                  key={i}
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: "89px",
                    width: `${CARD_WIDTH}px`,
                    height: "438px",
                    transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                    transform,
                    zIndex,
                    opacity,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  <CaseStudyCard
                    tag={item.tag}
                    title={item.title}
                    image={item.image}
                  />
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: "row",
            gap: "16px",
            px: 2,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
            pb: 1,
          }}
        >
          {items.map((item, i) => (
            <Box key={i} sx={{ scrollSnapAlign: "start", flexShrink: 0, width: "calc(100vw - 48px)" }}>
              <CaseStudyCard
                tag={item.tag}
                title={item.title}
                image={item.image}
              />
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            position: "absolute",
            top: "471px",
            left: "475px",
            width: "243px",
            height: "42px",
            alignItems: "center",
            gap: "31px",
          }}
        >
          <NavButton onClick={() => setIndex((i) => (i - 1 + total) % total)} direction="left" disabled={false} />

          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {items.map((_, i) => (
              <Box
                key={i}
                onClick={() => setIndex(i)}
                sx={{
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  ...(i === index
                    ? { width: "38px", height: "12px", borderRadius: "6px", background: "#0B4B63" }
                    : { width: "12px", height: "12px", borderRadius: "50%", border: "1px solid #0B4B63", background: "transparent" }),
                }}
              />
            ))}
          </Box>

          <NavButton onClick={() => setIndex((i) => (i + 1) % total)} direction="right" disabled={false} />
        </Box>

        <Box
          component="a"
          href="#"
          sx={{
            display: { xs: "none", md: "inline-flex" },
            alignItems: "center",
            gap: "4px",
            position: "absolute",
            top: "482px",
            left: "1018px",
            textDecoration: "none",
            "&:hover": { opacity: 0.75 },
          }}
        >
          <Typography
            sx={{
              fontFamily: fontFamily.mono,
              fontSize: "12px",
              fontWeight: 400,
              color: colors.accentBlue,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>view</span>
            {" all"}
          </Typography>
          <Typography
            component="span"
            sx={{ color: colors.accentBlue, fontSize: "14px", lineHeight: 1 }}
          >
            →
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
