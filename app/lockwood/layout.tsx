import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lockwood | Last Prompt",
  description: "Six crux points in the history of computing and machine intelligence. You are The Traveller — a silent operative reasoning at moments that shaped the next century. Your thinking changes the timeline.",
  openGraph: {
    title: "Last Prompt: Lockwood — Historical Decision Simulation",
    description: "Six crux points in the history of computing. You are The Traveller. You cannot act directly — you whisper. A neutral AI evaluates whether your reasoning was sufficient to move the thread.",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Last Prompt: Lockwood — Historical Decision Simulation",
    description: "Six crux points in the history of computing. You are The Traveller. You cannot act directly — you whisper. A neutral AI evaluates whether your reasoning was sufficient to move the thread.",
    images: ["/og-image.jpg"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Last Prompt: Lockwood",
  "url": "https://last-prompt.com/lockwood",
  "description": "A historical decision simulation across six crux points in the development of computing and machine intelligence (1936–1948). Players reason as The Traveller — a silent operative who intervenes via The Whisper.",
  "genre": ["Simulation", "Educational", "Historical"],
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

export default function LockwoodLayout({ children }: { children: React.ReactNode }) {
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
