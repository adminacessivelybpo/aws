import type { Metadata } from "next";
import { Playfair_Display, Space_Grotesk } from "next/font/google";
import { PageTransition } from "@/components/providers/page-transition";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Ferdinand Dablo | Full-Stack Portfolio",
    template: "%s | Ferdinand Dablo",
  },
  description:
    "Production-ready portfolio showcasing full-stack engineering across web, mobile, backend, cloud, and AI with refined motion design.",
  keywords: [
    "Next.js portfolio",
    "TypeScript developer",
    "Framer Motion animations",
    "Full-stack engineer",
    "AI engineer",
  ],
  openGraph: {
    title: "Ferdinand Dablo Portfolio",
    description:
      "Animated, accessible portfolio built with Next.js, Tailwind CSS, and Framer Motion.",
    url: "https://example.com",
    siteName: "Ferdinand Dablo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferdinand Dablo Portfolio",
    description:
      "Full-stack portfolio for web, mobile, cloud, and AI engineering delivery.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
