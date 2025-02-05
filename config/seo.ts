import { Metadata } from "next";

export const SEO_CONFIG: Partial<Metadata> = {
  title: "DraftAI - AI-Powered Message Composition",
  description:
    "Enhance your LinkedIn messaging with AI-powered composition capabilities. Save time and improve response quality while maintaining professional communication standards.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://draftai.io/",
    siteName: "DraftAI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DraftAI",
      },
    ],
  },
};
