import type { Metadata, Viewport } from "next";
import { Archivo, Chivo_Mono } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "./ThemeRegistry";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-archivo",
});

const chivoMono = Chivo_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-chivo-mono",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "N7 Banking — The New Foundation of Modern Banking",
  description:
    "Cloud-native, modular banking platform for digital onboarding, core banking, AML compliance, and mobile-first experiences.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${chivoMono.variable}`}>
      <body>
        <ThemeRegistry>
          <div style={{ overflowX: "hidden", width: "100%", position: "relative" }}>
            {children}
          </div>
        </ThemeRegistry>
      </body>
    </html>
  );
}
