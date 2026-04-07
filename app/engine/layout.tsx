import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How the Engine Works | Last Prompt",
  description: "The Last Prompt Engine evaluates reasoning quality in five criteria: Variable Awareness, Resource Allocation, Risk Anticipation, Communication Clarity, and Multi-Step Planning. Scored 0–10 by a neutral AI.",
  openGraph: {
    title: "The Last Prompt Engine — How It Works",
    description: "A neutral AI evaluator scores your free-text plan across five reasoning criteria. It cannot be gamed. It has no pity. It rewards structured thinking.",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Last Prompt Engine — How It Works",
    description: "A neutral AI evaluator scores your free-text plan across five reasoning criteria. It cannot be gamed. It has no pity. It rewards structured thinking.",
    images: ["/og-image.jpg"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "How the Last Prompt Engine Works",
  "url": "https://last-prompt.com/engine",
  "description": "The Last Prompt Engine evaluates reasoning quality across five criteria scored by a neutral AI: Variable Awareness, Resource Allocation, Risk Anticipation, Communication Clarity, and Multi-Step Planning.",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Last Prompt",
    "url": "https://last-prompt.com",
  },
};

export default function EngineLayout({ children }: { children: React.ReactNode }) {
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
