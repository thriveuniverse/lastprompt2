"use client";

import { useState, useRef, useEffect } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Loader2, CheckCircle2, AlertCircle, Building2, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LeadFormProps {
  interest?: "colony" | "corporate" | "both";
  variant?: "default" | "demo";
  accentColor?: string;
}

export function LeadForm({ interest = "both", variant = "default", accentColor = "cyan" }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    segment: "player",
    interest: interest,
    companyName: "",
    jobTitle: "",
    gdprConsent: false,
  });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const captchaRef = useRef<HCaptcha>(null);

  const siteKey = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || "10000000-ffff-ffff-ffff-000000000001";

  const accentClasses = {
    cyan: "bg-cyan-500 hover:bg-cyan-600 focus:ring-cyan-500",
    orange: "bg-orange-500 hover:bg-orange-600 focus:ring-orange-500",
    green: "bg-green-500 hover:bg-green-600 focus:ring-green-500",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.gdprConsent) {
      setErrorMessage("Please accept the privacy policy to continue.");
      return;
    }
    if (!captchaToken) {
      setErrorMessage("Please complete the captcha.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const utmParams = new URLSearchParams(window.location.search);
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          captchaToken,
          isDemoRequest: variant === "demo",
          source: utmParams.get("utm_source") || undefined,
          medium: utmParams.get("utm_medium") || undefined,
          campaign: utmParams.get("utm_campaign") || undefined,
          term: utmParams.get("utm_term") || undefined,
          content: utmParams.get("utm_content") || undefined,
          referrer: document.referrer || undefined,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Submission failed");
      setStatus("success");
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error?.message || "Something went wrong. Please try again.");
      captchaRef.current?.resetCaptcha();
      setCaptchaToken(null);
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 px-6 bg-gray-800/50 rounded-xl border border-gray-700"
      >
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">Check Your Email!</h3>
        <p className="text-gray-400">We've sent you a verification link. Click it to confirm your subscription.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Email *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">I am a...</label>
          <select
            value={formData.segment}
            onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
          >
            <option value="player">Player / Gamer</option>
            <option value="b2b">Business / Corporate</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Interested in</label>
          <select
            value={formData.interest}
            onChange={(e) => setFormData({ ...formData, interest: e.target.value as any })}
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
          >
            <option value="colony">Colony</option>
            <option value="corporate">Corporate Crisis</option>
            <option value="both">Both</option>
          </select>
        </div>
      </div>

      <AnimatePresence>
        {(formData.segment === "b2b" || variant === "demo") && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-hidden"
          >
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                <Building2 className="w-4 h-4 inline mr-1" />Company Name
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                placeholder="Acme Inc."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                <Briefcase className="w-4 h-4 inline mr-1" />Job Title
              </label>
              <input
                type="text"
                value={formData.jobTitle}
                onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                placeholder="L&D Manager"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="gdpr"
          checked={formData.gdprConsent}
          onChange={(e) => setFormData({ ...formData, gdprConsent: e.target.checked })}
          className="mt-1 w-4 h-4 rounded border-gray-600 bg-gray-800 text-cyan-500 focus:ring-cyan-500"
        />
        <label htmlFor="gdpr" className="text-sm text-gray-400">
          I agree to receive updates and marketing communications. I can unsubscribe at any time. See our{" "}
          <a href="/privacy" className="text-cyan-400 hover:underline">Privacy Policy</a>.
        </label>
      </div>

      <div className="flex justify-center">
        <HCaptcha
          ref={captchaRef}
          sitekey={siteKey}
          theme="dark"
          onVerify={(token) => setCaptchaToken(token)}
          onExpire={() => setCaptchaToken(null)}
        />
      </div>

      {errorMessage && (
        <div className="flex items-center gap-2 text-red-400 text-sm">
          <AlertCircle className="w-4 h-4" />
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className={`w-full py-4 px-6 ${accentClasses[accentColor as keyof typeof accentClasses] || accentClasses.cyan} text-black font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : variant === "demo" ? (
          "Request Demo"
        ) : (
          "Join the Waitlist"
        )}
      </button>
    </form>
  );
}