import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Hidden Gap | Last Prompt",
  description: "Why High-Achievers from the Best Schools Still Struggle to Translate Success into Judgment. A series of 12 entries explaining the logic of our engine.",
};

export default function HiddenGapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
