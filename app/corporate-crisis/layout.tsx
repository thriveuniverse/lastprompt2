import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Reckoning | Last Prompt",
  description: "Navigate a corporate crisis as a senior leader. Advisors with competing agendas, a board watching every move, and a neutral AI judging the quality of your thinking — not your personality.",
  openGraph: {
    title: "Last Prompt: Corporate Reckoning — Executive Crisis Simulation",
    description: "Navigate a corporate crisis as a senior leader. Advisors with competing agendas, a board watching every move, and a neutral AI judging the quality of your thinking.",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Last Prompt: Corporate Reckoning — Executive Crisis Simulation",
    description: "Navigate a corporate crisis as a senior leader. Advisors with competing agendas, a board watching every move, and a neutral AI judging the quality of your thinking.",
    images: ["/og-image.jpg"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Last Prompt: Corporate Reckoning",
  "url": "https://last-prompt.com/corporate-crisis",
  "description": "Navigate a corporate crisis as a senior leader. A decision-intelligence simulation that evaluates executive reasoning quality through AI-scored free-text planning.",
  "genre": ["Simulation", "Educational", "Business"],
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

export default function CorporateLayout({ children }: { children: React.ReactNode }) {
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
