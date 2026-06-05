import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Mirror | The Mandate",
  description: "You are Jon Kelly. You make the decision. The Mandate shows you what you actually did. A walkthrough of the duality at the heart of The Mandate's evaluation engine.",
  openGraph: {
    title: "The Mirror — The Duality at the Heart of The Mandate",
    description: "You are Jon Kelly inside the story. But you also watch the Mandate's cold, neutral verdict on the quality of your reasoning. Jon never sees it. You do.",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Mirror — The Duality at the Heart of The Mandate",
    description: "You are Jon Kelly inside the story. But you also watch the Mandate's cold, neutral verdict on the quality of your reasoning. Jon never sees it. You do.",
    images: ["/og-image.jpg"],
  },
};

export default function TheMirrorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
