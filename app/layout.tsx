import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import { headers } from "next/headers";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers();
  const host = headersList.get("x-forwarded-host") || headersList.get("host") || "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;

  return {
    metadataBase: new URL(baseUrl),
    title: "Last Prompt — Decision Intelligence Engine",
    description: "A crisis simulation engine that scores the quality of human reasoning under uncertainty. You receive incomplete information and partial-perspective advisors, write your plan in free text, and a neutral AI evaluates your thinking across five criteria. Not a game. Not a training course. Not about AI prompting.",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "Last Prompt — Decision Intelligence Engine",
      description: "A crisis simulation engine that scores the quality of human reasoning under uncertainty. Incomplete information, partial-perspective advisors, free-text plans, neutral AI evaluation. Not a game. Not about AI prompting.",
      images: ["/og-image.jpg"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Last Prompt — Decision Intelligence Engine",
      description: "A crisis simulation engine that scores the quality of human reasoning under uncertainty. Incomplete information, partial-perspective advisors, free-text plans, neutral AI evaluation. Not a game. Not about AI prompting.",
      images: ["/og-image.jpg"],
    },
  };
}

const SCHEMA_WEBSITE = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Last Prompt",
  "url": "https://last-prompt.com",
  "description": "A decision-intelligence engine that evaluates the quality of your reasoning under uncertainty. Not what you choose — how you think.",
};

const SCHEMA_ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Last Prompt",
  "url": "https://last-prompt.com",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "artikelly@hotmail.co.uk",
    "contactType": "customer support",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="1ZThygFOH-x4OtGHSfYOD3C3u8SX5S1j7X-GDeJiqwU" />
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_WEBSITE) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_ORGANIZATION) }}
        />
      </head>
      <body className={`${inter.className} bg-gray-950 text-white antialiased`}>
        <Providers>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CookieBanner />
        </Providers>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0GMRB9DQFD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0GMRB9DQFD');
          `}
        </Script>
      </body>
    </html>
  );
}