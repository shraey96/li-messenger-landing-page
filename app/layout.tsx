import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Metadata } from "next";
import { SEO_CONFIG } from "@/config/seo";

export const metadata: Metadata = {
  title: SEO_CONFIG.title,
  description: SEO_CONFIG.description,
  openGraph: SEO_CONFIG.openGraph,
  twitter: SEO_CONFIG.twitter,
  metadataBase: new URL("https://draftai.io"),

  metadataBase: new URL("https://draftai.io"),
  title: {
    default: SEO_CONFIG.title as string,
    template: "%s | DraftAI",
  },
  description: SEO_CONFIG.description,
  keywords: [
    "AI writing assistant",
    "LinkedIn messaging",
    "AI message composition",
    "professional communication",
    "networking tools",
  ],
  authors: [{ name: "DraftAI" }],
  creator: "DraftAI",
  publisher: "DraftAI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    ...SEO_CONFIG.openGraph,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    ...SEO_CONFIG.twitter,
    card: "summary_large_image",
    creator: "@draftai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
    yandex: "your-yandex-verification",
    yahoo: "your-yahoo-verification",
  },
  alternates: {
    canonical: "https://draftai.io",
    languages: {
      "en-US": "https://draftai.io",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-jakarta">
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
