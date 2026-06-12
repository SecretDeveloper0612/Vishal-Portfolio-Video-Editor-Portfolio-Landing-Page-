import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vishal Verma | Video Editor & Motion Designer",
  description: "Professional video editor specializing in cinematic storytelling, YouTube content, commercials, reels, and motion graphics.",
  openGraph: {
    title: "Vishal Verma | Video Editor",
    description: "Professional video editor specializing in cinematic storytelling.",
    type: "website",
    locale: "en_US",
    siteName: "Vishal Verma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishal Verma | Video Editor",
    description: "Professional video editor specializing in cinematic storytelling.",
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
      className={`${inter.variable} ${bebasNeue.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
