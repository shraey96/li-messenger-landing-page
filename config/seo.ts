import { DefaultSeoProps } from 'next-seo';

export const SEO_CONFIG: DefaultSeoProps = {
  titleTemplate: '%s | LinkedIn Message Assistant',
  defaultTitle: 'LinkedIn Message Assistant - AI-Powered Message Composition',
  description: 'Enhance your LinkedIn messaging with AI-powered composition capabilities. Save time and improve response quality while maintaining professional communication standards.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://linkedin-message-assistant.com/',
    siteName: 'LinkedIn Message Assistant',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LinkedIn Message Assistant',
      },
    ],
  },
  twitter: {
    handle: '@LiMessageAssist',
    site: '@LiMessageAssist',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
};