import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verification Record — The Mandate",
  description:
    "Three claims about the Last Prompt evaluation engine, tested and documented. The evaluator is consistent. It reads context. Every path is unique.",
  openGraph: {
    title: "Verification Record — The Mandate",
    description:
      "Three claims about the Last Prompt evaluation engine. Here is the evidence for each.",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verification Record — The Mandate",
    description:
      "Three claims about the Last Prompt evaluation engine. Here is the evidence for each.",
    images: ["/og-image.jpg"],
  },
};

export default function ProofLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
