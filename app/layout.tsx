import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import { WhitepaperPill } from "@/components/whitepaper-pill";
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
    title: "The Mandate — AI-Evaluated Decision Practice | Powered by Last Prompt",
    description: "The Mandate is an AI-evaluated decision practice platform for leaders reasoning under uncertainty. Powered by the Last Prompt engine. Not a game. Not a simulation. Not a course. A private evaluation of how you reason when it matters.",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "The Mandate — AI-Evaluated Decision Practice | Powered by Last Prompt",
      description: "The Mandate is an AI-evaluated decision practice platform for leaders reasoning under uncertainty. Not a game. Not a simulation. Not a course. A private evaluation of how you reason when it matters.",
      images: ["/og-image.jpg"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "The Mandate — AI-Evaluated Decision Practice | Powered by Last Prompt",
      description: "The Mandate is an AI-evaluated decision practice platform for leaders reasoning under uncertainty. Not a game. Not a simulation. Not a course. A private evaluation of how you reason when it matters.",
      images: ["/og-image.jpg"],
    },
  };
}

const SCHEMA_WEBSITE = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "The Mandate",
  "url": "https://last-prompt.com",
  "description": "The Mandate is an AI-evaluated decision practice platform for leaders reasoning under uncertainty. Not a game. Not a simulation. Not a course. A private evaluation of how you reason when it matters.",
};

const SCHEMA_APPLICATION = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "The Mandate",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "A private, AI-evaluated decision practice platform. Users write plans in plain English under high-stakes scenarios with incomplete information. A neutral AI evaluates the quality of their reasoning — not their choices — across five criteria. No two paths are the same. There is no undo.",
  "brand": {
    "@type": "Brand",
    "name": "Last Prompt",
    "description": "The proprietary engine powering The Mandate."
  },
};

const SCHEMA_ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Last Prompt",
  "url": "https://last-prompt.com",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "miranda@thethriveclan.com",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_APPLICATION) }}
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
          <WhitepaperPill />
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