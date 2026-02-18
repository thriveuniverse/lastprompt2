import { Shield, Database, Eye, Trash2, Lock, Mail } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Last updated: February 2024</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-cyan-400" />
              <h2 className="text-xl font-bold text-white m-0">Data We Collect</h2>
            </div>
            <ul className="text-gray-400 space-y-2 list-disc list-inside">
              <li>Name and email address (when you sign up)</li>
              <li>Company and job title (optional, for B2B inquiries)</li>
              <li>Usage data and analytics (with consent)</li>
              <li>UTM parameters for marketing attribution</li>
            </ul>
          </section>

          <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-cyan-400" />
              <h2 className="text-xl font-bold text-white m-0">How We Use Your Data</h2>
            </div>
            <ul className="text-gray-400 space-y-2 list-disc list-inside">
              <li>Send product updates and announcements</li>
              <li>Provide early access to playtests</li>
              <li>Respond to demo requests and inquiries</li>
              <li>Improve our products and services</li>
            </ul>
          </section>

          <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-cyan-400" />
              <h2 className="text-xl font-bold text-white m-0">Data Protection</h2>
            </div>
            <p className="text-gray-400">
              We use industry-standard encryption and security measures to protect your data. Your information is stored securely and never sold to third parties.
            </p>
          </section>

          <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <Trash2 className="w-6 h-6 text-cyan-400" />
              <h2 className="text-xl font-bold text-white m-0">Your Rights</h2>
            </div>
            <ul className="text-gray-400 space-y-2 list-disc list-inside">
              <li><strong>Access:</strong> Request a copy of your data</li>
              <li><strong>Rectification:</strong> Correct inaccurate data</li>
              <li><strong>Erasure:</strong> Request deletion of your data</li>
              <li><strong>Portability:</strong> Receive your data in a portable format</li>
              <li><strong>Withdraw consent:</strong> Unsubscribe at any time</li>
            </ul>
            <p className="text-gray-400 mt-4">
              To exercise these rights, visit our <a href="/delete-data" className="text-cyan-400 hover:underline">data deletion page</a> or contact us.
            </p>
          </section>

          <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-cyan-400" />
              <h2 className="text-xl font-bold text-white m-0">Contact Us</h2>
            </div>
            <p className="text-gray-400">
              For privacy-related questions, please email us at privacy@lastprompt.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}