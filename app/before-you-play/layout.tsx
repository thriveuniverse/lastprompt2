import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Before You Play | Last Prompt",
  description:
    "Why sit in front of Last Prompt? Not to win, not to conquer a world — to practice owning what a decision creates, because that is how life actually works.",
};

export default function BeforeYouPlayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
