"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { MailX, CheckCircle2, Loader2 } from "lucide-react";
import Link from "next/link";

function UnsubscribeContent() {
  const searchParams = useSearchParams();
  const email = searchParams?.get("email") || "";
  const [inputEmail, setInputEmail] = useState(email);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleUnsubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: inputEmail }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setMessage("You have been unsubscribed.");
      } else {
        setStatus("error");
        setMessage(data.message || "Failed to unsubscribe.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 pt-24">
        <div className="max-w-md w-full bg-gray-800/50 rounded-2xl p-8 text-center border border-gray-700">
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Unsubscribed</h1>
          <p className="text-gray-400 mb-6">{message}</p>
          <Link href="/" className="text-cyan-400 hover:underline">Return to homepage</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 pt-24">
      <div className="max-w-md w-full bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
        <div className="text-center mb-6">
          <MailX className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Unsubscribe</h1>
          <p className="text-gray-400">Sorry to see you go. Enter your email to unsubscribe from all communications.</p>
        </div>
        <form onSubmit={handleUnsubscribe} className="space-y-4">
          <input
            type="email"
            required
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white"
            placeholder="your@email.com"
          />
          {status === "error" && <p className="text-red-400 text-sm">{message}</p>}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            {status === "loading" ? <Loader2 className="w-5 h-5 animate-spin" /> : "Unsubscribe"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function UnsubscribePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-cyan-400" />
      </div>
    }>
      <UnsubscribeContent />
    </Suspense>
  );
}