"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, Mail, Building2, Briefcase, Calendar, Tag as TagIcon, Plus, X, Loader2, CheckCircle2, Clock, Send } from "lucide-react";
import Link from "next/link";

interface Lead {
  id: string;
  name: string;
  email: string;
  segment: string;
  interest: string;
  companyName?: string;
  jobTitle?: string;
  status: string;
  score: number;
  verified: boolean;
  notes?: string;
  source?: string;
  medium?: string;
  campaign?: string;
  referrer?: string;
  createdAt: string;
  tags?: { tag: { id: string; name: string; color: string } }[];
  events?: { id: string; type: string; action?: string; createdAt: string }[];
  emailLogs?: { id: string; emailType: string; subject: string; status: string; sentAt: string }[];
}

export default function LeadDetailPage() {
  const { data: session, status: authStatus } = useSession() || {};
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  const [lead, setLead] = useState<Lead | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [notes, setNotes] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [newTag, setNewTag] = useState("");
  const [tags, setTags] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    if (authStatus === "unauthenticated") {
      router.replace("/admin/login");
    }
  }, [authStatus, router]);

  useEffect(() => {
    if (authStatus === "authenticated" && id) {
      fetchLead();
      fetchTags();
    }
  }, [authStatus, id]);

  const fetchLead = async () => {
    try {
      const res = await fetch(`/api/leads/${id}`);
      const data = await res.json();
      setLead(data);
      setNotes(data.notes || "");
      setSelectedStatus(data.status);
    } catch (error) {
      console.error("Error fetching lead:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchTags = async () => {
    try {
      const res = await fetch("/api/tags");
      const data = await res.json();
      setTags(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching tags:", error);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await fetch(`/api/leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: selectedStatus, notes }),
      });
      fetchLead();
    } catch (error) {
      console.error("Error saving:", error);
    } finally {
      setSaving(false);
    }
  };

  const handleAddTag = async () => {
    if (!newTag.trim()) return;
    try {
      await fetch(`/api/leads/${id}/tags`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tagName: newTag.trim() }),
      });
      setNewTag("");
      fetchLead();
    } catch (error) {
      console.error("Error adding tag:", error);
    }
  };

  const handleRemoveTag = async (tagId: string) => {
    try {
      await fetch(`/api/leads/${id}/tags`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tagId }),
      });
      fetchLead();
    } catch (error) {
      console.error("Error removing tag:", error);
    }
  };

  if (authStatus === "loading" || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-cyan-400" />
      </div>
    );
  }

  if (!lead) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400">Lead not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 pt-20 pb-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <Link href="/admin" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header Card */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-white">{lead.name}</h1>
                  <div className="flex items-center gap-2 mt-1">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-400">{lead.email}</span>
                    {lead.verified && <CheckCircle2 className="w-4 h-4 text-green-400" />}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-cyan-400">{lead.score}</div>
                  <div className="text-gray-500 text-sm">Lead Score</div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-700">
                <div>
                  <div className="text-gray-500 text-sm">Segment</div>
                  <span className={`inline-block mt-1 px-2 py-1 rounded text-xs font-medium ${
                    lead.segment === "b2b" ? "bg-orange-400/20 text-orange-400" : "bg-green-400/20 text-green-400"
                  }`}>
                    {lead.segment.toUpperCase()}
                  </span>
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Interest</div>
                  <div className="text-white mt-1 capitalize">{lead.interest}</div>
                </div>
                {lead.companyName && (
                  <div>
                    <div className="text-gray-500 text-sm flex items-center gap-1"><Building2 className="w-3 h-3" />Company</div>
                    <div className="text-white mt-1">{lead.companyName}</div>
                  </div>
                )}
                {lead.jobTitle && (
                  <div>
                    <div className="text-gray-500 text-sm flex items-center gap-1"><Briefcase className="w-3 h-3" />Title</div>
                    <div className="text-white mt-1">{lead.jobTitle}</div>
                  </div>
                )}
              </div>
            </div>

            {/* Status & Notes */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">Status & Notes</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Status</label>
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="qualified">Qualified</option>
                    <option value="won">Won</option>
                    <option value="lost">Lost</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Notes</label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white resize-none"
                    placeholder="Add notes about this lead..."
                  />
                </div>
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50 text-black font-semibold rounded-lg transition-colors flex items-center gap-2"
                >
                  {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : "Save Changes"}
                </button>
              </div>
            </div>

            {/* Tags */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <TagIcon className="w-5 h-5" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {lead.tags?.map((t) => (
                  <span
                    key={t.tag.id}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-gray-700 text-white text-sm rounded-full"
                  >
                    {t.tag.name}
                    <button onClick={() => handleRemoveTag(t.tag.id)} className="hover:text-red-400">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                {(!lead.tags || lead.tags.length === 0) && (
                  <span className="text-gray-500 text-sm">No tags yet</span>
                )}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAddTag()}
                  className="flex-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white text-sm"
                  placeholder="Add a tag..."
                />
                <button
                  onClick={handleAddTag}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* UTM Data */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">Attribution</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Source</span>
                  <span className="text-white">{lead.source || "Direct"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Medium</span>
                  <span className="text-white">{lead.medium || "-"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Campaign</span>
                  <span className="text-white">{lead.campaign || "-"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Referrer</span>
                  <span className="text-white truncate max-w-[150px]">{lead.referrer || "-"}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-700">
                  <span className="text-gray-500">Created</span>
                  <span className="text-white">{new Date(lead.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            {/* Email History */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Send className="w-5 h-5" />
                Email History
              </h3>
              <div className="space-y-3">
                {lead.emailLogs?.map((log) => (
                  <div key={log.id} className="text-sm p-3 bg-gray-900 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white font-medium capitalize">{log.emailType.replace("_", " ")}</span>
                      <span className={`text-xs ${
                        log.status === "sent" ? "text-green-400" : "text-gray-500"
                      }`}>{log.status}</span>
                    </div>
                    <div className="text-gray-500 text-xs">{new Date(log.sentAt).toLocaleString()}</div>
                  </div>
                ))}
                {(!lead.emailLogs || lead.emailLogs.length === 0) && (
                  <p className="text-gray-500 text-sm">No emails sent yet</p>
                )}
              </div>
            </div>

            {/* Activity Timeline */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Activity
              </h3>
              <div className="space-y-3">
                {lead.events?.slice(0, 10).map((event) => (
                  <div key={event.id} className="flex items-start gap-3 text-sm">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-1.5" />
                    <div>
                      <div className="text-white capitalize">{event.action || event.type}</div>
                      <div className="text-gray-500 text-xs">{new Date(event.createdAt).toLocaleString()}</div>
                    </div>
                  </div>
                ))}
                {(!lead.events || lead.events.length === 0) && (
                  <p className="text-gray-500 text-sm">No activity yet</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}