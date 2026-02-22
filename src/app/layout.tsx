import type { Metadata } from "next";
import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "@/../utils/ScrollToTopButton";
import ScrollProgress from "./components/ScrollProgress";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "700"],
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://henrischulz.com"),
  title: {
    default: "Henri Schulz | Portfolio",
    template: "%s | Henri Schulz",
  },
  description:
    "Portfolio von Henri Schulz – Student der Elektrotechnik und Informationstechnik am KIT. Spezialisiert auf Hardware-Design, Verilog, ASIC-Entwicklung und Full-Stack-Webentwicklung.",
  keywords: [
    "Henri Schulz",
    "Elektrotechnik",
    "Electrical Engineering",
    "KIT Karlsruhe",
    "Verilog",
    "Hardware Design",
    "ASIC",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Karlsruhe",
  ],
  authors: [{ name: "Henri Schulz", url: "https://henrischulz.com" }],
  creator: "Henri Schulz",
  openGraph: {
    title: "Henri Schulz | Personal Portfolio",
    description:
      "Elektrotechnik & Software-Entwicklung – an der Schnittstelle von Hardware und Software.",
    url: "https://henrischulz.com",
    siteName: "Henri Schulz Portfolio",
    images: [
      {
        url: "/Website-overview.png",
        width: 1200,
        height: 630,
        alt: "Henri Schulz Portfolio Übersicht",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Henri Schulz | Portfolio",
    description: "Elektrotechnik & Software-Entwicklung am KIT.",
    images: ["/Website-overview.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://henrischulz.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Henri Schulz",
    url: "https://henrischulz.com",
    email: "henri.schulz.bs@icloud.com",
    jobTitle: "Electrical Engineering & IT Student",
    worksFor: {
      "@type": "Organization",
      name: "Karlsruher Institut für Technologie (KIT)",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karlsruhe",
      addressCountry: "DE",
    },
    sameAs: ["https://github.com/henriSchulz"],
    knowsAbout: [
      "Electrical Engineering",
      "Hardware Design",
      "Verilog",
      "ASIC Design",
      "Full-Stack Web Development",
      "TypeScript",
      "Next.js",
    ],
  };

  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${geistMono.variable} antialiased`}
        style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
      >
        <ScrollProgress />
        <Navbar />
        <main className="text-white">
          <div className="container">{children}</div>
        </main>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
