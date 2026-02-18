"use client";

import { useState } from "react";
import { Trash2, CheckCircle2, Loader2, AlertTriangle } from "lucide-react";

export default function DeleteDataPage() {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email !== confirmEmail) {
      setMessage("Emails do not match.");
      return;
    }
    setStatus("loading");

    try {
      const res = await fetch("/api/delete-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setMessage(data.message);
      } else {
        setStatus("error");
        setMessage(data.message || "Request failed.");
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
          <h1 className="text-2xl font-bold text-white mb-2">Request Submitted</h1>
          <p className="text-gray-400">{message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 pt-24">
      <div className="max-w-md w-full bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
        <div className="text-center mb-6">
          <Trash2 className="w-12 h-12 text-red-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Delete My Data</h1>
          <p className="text-gray-400">Request permanent deletion of all your data from our systems.</p>
        </div>

        <div className="bg-amber-900/30 border border-amber-700/50 rounded-lg p-4 mb-6">
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-200">
              This action is irreversible. All your data including email preferences, history, and account information will be permanently deleted.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Confirm Email</label>
            <input
              type="email"
              required
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white"
              placeholder="Confirm your email"
            />
          </div>
          {status === "error" && <p className="text-red-400 text-sm">{message}</p>}
          <button
            type="submit"
            disabled={status === "loading" || email !== confirmEmail}
            className="w-full py-3 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            {status === "loading" ? <Loader2 className="w-5 h-5 animate-spin" /> : "Request Data Deletion"}
          </button>
        </form>
      </div>
    </div>
  );
}