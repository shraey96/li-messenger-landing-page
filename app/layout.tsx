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
