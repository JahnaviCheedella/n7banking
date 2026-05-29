"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { fontFamily } from "@/theme/typography";
import { assetPaths } from "@/constants/assets";

const SECTION_BG = "#000D12";
const CARD_BG = "#01141B";
const IMG_BG = "#07193C";
const TAG_COLOR = "#2490BB";
const TEXT_LIGHT = "#E9F4F9";
const META_COLOR = "#64A8C4";
const LINK_COLOR = "#00B4FD";

const articles = [
  {
    tag: "getting started",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
  {
    tag: "getting started",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
  {
    tag: "getting started",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
];

function ArticleImage() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "25.5px",
        left: "24px",
        width: "295px",
        height: "267px",
        background: IMG_BG,
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "24px",
          left: "19px",
          width: "257px",
          height: "218px",
        }}
      >
        <Image
          src={assetPaths.gettingStarted}
          alt="Getting started"
          width={257}
          height={218}
          style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
        />
      </Box>
    </Box>
  );
}

function ArticleMeta({ author, date }: { author: string; date: string }) {
  return (
    <Box sx={{ display: "flex", gap: "14px" }}>
      <Typography
        component="span"
        sx={{ fontFamily: fontFamily.primary, fontSize: "12px", color: META_COLOR }}
      >
        {author}
      </Typography>
      <Typography
        component="span"
        sx={{ fontFamily: fontFamily.primary, fontSize: "12px", color: META_COLOR }}
      >
        {date}
      </Typography>
    </Box>
  );
}

function ReadMoreButton() {
  return (
    <Box
      component="a"
      href="#"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "36px",
        border: "1px solid rgba(233,244,249,0.2)",
        borderRadius: "6px",
        textDecoration: "none",
        "&:hover": { borderColor: TEXT_LIGHT, opacity: 0.8 },
      }}
    >
      <Typography
        sx={{
          fontFamily: fontFamily.mono,
          fontSize: "12px",
          fontWeight: 400,
          color: TEXT_LIGHT,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
        }}
      >
        read more
      </Typography>
    </Box>
  );
}

function FeaturedCard({ article }: { article: typeof articles[0] }) {
  return (
    <Box
      sx={{
        background: CARD_BG,
        borderRadius: "18px",
        position: "relative",
        width: "100%",
        height: { xs: "auto", md: "318px" },
        overflow: "hidden",
      }}
    >
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <ArticleImage />
      </Box>

      <Box
        sx={{
          position: { xs: "relative", md: "absolute" },
          top: { md: "39.91px" },
          left: { md: "351.87px" },
          right: { md: "24px" },
          bottom: { md: "24px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: { xs: "24px", md: 0 },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Typography
            sx={{ fontFamily: fontFamily.mono, fontSize: "12px", fontWeight: 500, color: TAG_COLOR, textTransform: "uppercase", letterSpacing: "0.05em" }}
          >
            {article.tag}
          </Typography>
          <Typography
            sx={{ fontFamily: fontFamily.primary, fontSize: "20px", fontWeight: 400, lineHeight: "130%", color: TEXT_LIGHT }}
          >
            {article.title}
          </Typography>
          <ArticleMeta author={article.author} date={article.date} />
        </Box>
        <Box>
          <ReadMoreButton />
        </Box>
      </Box>
    </Box>
  );
}

function SmallCard({ article }: { article: typeof articles[0] }) {
  return (
    <Box
      sx={{
        background: CARD_BG,
        borderRadius: "8px",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: { xs: "24px 20px", md: "38px 30px 24px" },
        height: { md: "318px" },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <Typography
          sx={{ fontFamily: fontFamily.mono, fontSize: "12px", fontWeight: 500, color: TAG_COLOR, textTransform: "uppercase", letterSpacing: "0.05em" }}
        >
          {article.tag}
        </Typography>
        <Typography
          sx={{ fontFamily: fontFamily.primary, fontSize: "18px", fontWeight: 400, lineHeight: "130%", color: TEXT_LIGHT }}
        >
          {article.title}
        </Typography>
        <ArticleMeta author={article.author} date={article.date} />
      </Box>
      <Box sx={{ mt: "24px" }}>
        <ReadMoreButton />
      </Box>
    </Box>
  );
}

export default function InsightsSection() {
  return (
    <Box
      component="section"
      sx={{
        background: SECTION_BG,
        position: "relative",
        overflow: "hidden",
        height: { xs: "auto", md: "853px" },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "160px",
          left: "58px",
          width: "557px",
          height: "557px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,180,253,0.15) 0%, rgba(0,57,206,0.05) 60%, transparent 100%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: { xs: "relative", md: "absolute" },
          top: { md: "80px" },
          left: { md: "80px" },
          right: { md: "80px" },
          zIndex: 1,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "40px", md: "0px" },
          px: { xs: 3, md: 0 },
          py: { xs: 6, md: 0 },
        }}
      >
        <Box
          sx={{
            flexShrink: 0,
            width: { xs: "100%", md: "463px" },
            display: "flex",
            flexDirection: "column",
            gap: "48px",
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontFamily: fontFamily.primary,
              fontWeight: 400,
              fontSize: { xs: "2rem", md: "40px" },
              lineHeight: "120%",
              letterSpacing: "-0.01em",
              color: TEXT_LIGHT,
              m: 0,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Get yourself up-to-speed on all the things happening in fintech
          </Typography>

          <Box
            component="a"
            href="#"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "190px",
              height: "49px",
              border: "1px solid rgba(233,244,249,0.4)",
              borderRadius: "8px",
              textDecoration: "none",
              mx: { xs: "auto", md: 0 },
              "&:hover": { borderColor: TEXT_LIGHT },
            }}
          >
            <Typography
              sx={{
                fontFamily: fontFamily.mono,
                fontSize: "12px",
                fontWeight: 400,
                color: TEXT_LIGHT,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Insights
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            ml: { xs: 0, md: "147px" },
            display: "flex",
            flexDirection: "column",
            gap: "13px",
          }}
        >
          <FeaturedCard article={articles[0]} />

          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: "29px" }}>
            <SmallCard article={articles[1]} />
            <SmallCard article={articles[2]} />
          </Box>
        </Box>
      </Box>

      <Box
        component="a"
        href="#"
        sx={{
          position: { xs: "relative", md: "absolute" },
          bottom: { md: "67px" },
          right: { md: "80px" },
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "flex-start",
          textDecoration: "none",
          mx: { xs: 3, md: 0 },
          mb: { xs: 4, md: 0 },
          "&:hover": { opacity: 0.75 },
          zIndex: 1,
        }}
      >
        <Typography
          sx={{
            fontFamily: fontFamily.mono,
            fontSize: "12px",
            fontWeight: 400,
            color: LINK_COLOR,
            whiteSpace: "nowrap",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          read all insights
        </Typography>
        <Box sx={{ width: "32px", height: "1px", mt: "3px", background: LINK_COLOR }} />
      </Box>
    </Box>
  );
}
