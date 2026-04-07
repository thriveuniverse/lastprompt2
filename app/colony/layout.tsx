import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colony | Last Prompt",
  description: "Lead 100 survivors through the collapse of civilisation. A post-collapse survival simulation where your written plan is the move — and a neutral AI evaluates the quality of your reasoning.",
  openGraph: {
    title: "Last Prompt: Colony — Post-Collapse Survival Simulation",
    description: "Lead 100 survivors through the collapse of civilisation. Your written reasoning is the move. A neutral AI evaluates its quality. The simulation resolves accordingly.",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Last Prompt: Colony — Post-Collapse Survival Simulation",
    description: "Lead 100 survivors through the collapse of civilisation. Your written reasoning is the move. A neutral AI evaluates its quality.",
    images: ["/og-image.jpg"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Last Prompt: Colony",
  "url": "https://last-prompt.com/colony",
  "description": "Lead 100 survivors through the collapse of civilisation. A post-collapse survival simulation where your written plan is evaluated by a neutral AI for reasoning quality.",
  "genre": ["Simulation", "Strategy", "Educational"],
  "gamePlatform": "Web Browser",
  "applicationCategory": "Game",
  "operatingSystem": "Web",
  "inLanguage": "en",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Last Prompt",
    "url": "https://last-prompt.com",
  },
};

export default function ColonyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  );
}
