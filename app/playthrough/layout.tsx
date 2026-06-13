import { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Leader's Record — The Mandate",
  description:
    "Four decisions from a live run of The Mandate. Colony scenario, Chapter 1. The scores were not curated. The plans were not optimal. This is the actual output.",
  openGraph: {
    title: "A Leader's Record — The Mandate",
    description:
      "Four decisions, four evaluations, one chapter. The unedited output of The Mandate evaluation engine.",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Leader's Record — The Mandate",
    description:
      "Four decisions, four evaluations, one chapter. The unedited output of The Mandate evaluation engine.",
    images: ["/og-image.jpg"],
  },
};

export default function PlaythroughLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
