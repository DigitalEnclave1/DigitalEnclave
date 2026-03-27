import type { Metadata } from "next";
import { headers } from "next/headers";
import Script from "next/script"; // Import Next.js Script
import Navbar from "../components/Navbar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LocalBusinessInfo from "../components/LocalBusinessInfo"; // New component for address/phone

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "/";
  const canonicalUrl = `https://DigitalEnclave.com${pathname}`;
  return {
    title: "DigitalEnclave | Website Development & Digital Marketing Services India",
    description:
      "Professional website development, digital marketing & social media services in India. Boost your online presence with our SEO-optimized solutions & custom web design services.",
    icons: {
      icon: [
        { url: "/logo.png", sizes: "192x192", type: "image/png"},
        { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
    },
    keywords: [
      "DigitalEnclave",
      "Web Development",
      "AI Solutions",
      "IT Services",
      "Software Company",
      "Custom Software",
      "MERN Stack",
      "Full-Stack Development",
      "Enterprise Solutions",
      "Cloud Computing",
      "SEO Optimization",
    ],
    openGraph: {
      title: "DigitalEnclave | Website Development & Digital Marketing Services India",
      description:
        "Professional website development, digital marketing & social media services in India. Boost your online presence with our SEO-optimized solutions & custom web design services.",
      url: canonicalUrl,
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: "DigitalEnclave Logo",
        },
      ],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
         {/* LocalBusiness Schema for Local SEO */}
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://DigitalEnclave.com",
                "name": "DigitalEnclave",
                "image": "https://DigitalEnclave.com/logo.png",
                "url": "https://DigitalEnclave.com",
                "telephone": "+977 986-2973810",
                "priceRange": "",
                "description": "DigitalEnclave delivers custom web development, AI solutions, and enterprise IT services with a focus on quality and innovation.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Your Street Address",
                  "addressLocality": "Your City",
                  "addressRegion": "Your Region/Province",
                  "postalCode": "Your Postal Code",
                  "addressCountry": "NP"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "XX.XXXX",
                  "longitude": "XX.XXXX"
                },
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "18:00"
                  }
                ],
                "sameAs": [
                  "https://www.facebook.com/DigitalEnclave",
                  "https://www.linkedin.com/company/DigitalEnclave",
                  "https://twitter.com/DigitalEnclave"
                ],
                "areaServed": ["Kathmandu", "India", "Global"],
                "serviceType": ["Web Development", "AI Solutions", "IT Services", "Mobile App Development"],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+977 986-2973810",
                  "contactType": "customer service",
                  "availableLanguage": ["English", "Indiai"]
                }
              }
            `,
          }}
        />

        {/* Organization Schema (maintain this as well) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "DigitalEnclave",
                "url": "https://DigitalEnclave.com",
                "logo": "https://DigitalEnclave.com/logo.png",
                "sameAs": [
                  "https://www.facebook.com/DigitalEnclave",
                  "https://www.linkedin.com/company/DigitalEnclave",
                  "https://twitter.com/DigitalEnclave"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+977 986-2973810",
                  "contactType": "customer service",
                  "availableLanguage": ["English", "Indiai"]
                }
              }
            `,
          }}
        />
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-BJ2LQZ2FWJ"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BJ2LQZ2FWJ');
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <LocalBusinessInfo phone="+977 986-2973810" address="Noida,India" />
      </body>
    </html>
  );
}
