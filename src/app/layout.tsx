import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: {
    default: "Technova Academy | Maktab boshqaruv paneli",
    template: "%s | Technova Academy",
  },
  description:
    "Technova Academy maktab boshqaruv paneli: o'quvchilar, o'qituvchilar, sinflar, davomat, natijalar va AI tahlil.",
  applicationName: "Technova Academy School CMS",
  authors: [{ name: "Technova Academy MCHJ" }],
  generator: "Next.js",
  keywords: [
    "maktab boshqaruvi",
    "o'quvchi paneli",
    "o'qituvchi paneli",
    "davomat nazorati",
    "sinf boshqaruvi",
    "ta'lim boshqaruvi",
    "AI tahlil",
  ],
  referrer: "origin-when-cross-origin",
  category: "education",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    siteName: "Technova Academy",
    title: "Technova Academy | Maktab boshqaruv paneli",
    description:
      "O'quvchilar, o'qituvchilar, sinflar, davomat, natijalar va AI tahlilini bir joyda boshqaring.",
    url: "/",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Technova Academy",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Technova Academy | Maktab boshqaruv paneli",
    description:
      "O'quvchilar, o'qituvchilar, sinflar, davomat, natijalar va AI tahlilini bir joyda boshqaring.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
