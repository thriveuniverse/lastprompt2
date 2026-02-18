"use client";

import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Users, TrendingUp, Mail, BarChart3, Download, Search, Filter, LogOut, Loader2, Eye, Tag as TagIcon, ChevronDown, RefreshCw } from "lucide-react";
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
  source?: string;
  createdAt: string;
  tags?: { tag: { name: string; color: string } }[];
}

interface Analytics {
  totalLeads: number;
  verifiedLeads: number;
  conversionRate: string;
  segmentBreakdown: { segment: string; count: number }[];
  statusBreakdown: { status: string; count: number }[];
  topSources: { source: string; count: number }[];
}

export default function AdminDashboard() {
  const { data: session, status } = useSession() || {};
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({ segment: "", status: "", interest: "" });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/admin/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (status === "authenticated") {
      fetchData();
    }
  }, [status]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (search) params.append("search", search);
      if (filters.segment) params.append("segment", filters.segment);
      if (filters.status) params.append("status", filters.status);
      if (filters.interest) params.append("interest", filters.interest);

      const [leadsRes, analyticsRes] = await Promise.all([
        fetch(`/api/leads?${params.toString()}`),
        fetch("/api/analytics"),
      ]);

      const leadsData = await leadsRes.json();
      const analyticsData = await analyticsRes.json();

      setLeads(Array.isArray(leadsData) ? leadsData : []);
      setAnalytics(analyticsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleExport = () => {
    window.location.href = "/api/leads/export";
  };

  if (status === "loading" || (status === "unauthenticated")) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-cyan-400" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 pt-20 pb-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">CRM Dashboard</h1>
            <p className="text-gray-400">Manage leads and track conversions</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchData}
              className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              title="Refresh"
            >
              <RefreshCw className="w-5 h-5 text-gray-400" />
            </button>
            <button
              onClick={handleExport}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </button>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="flex items-center gap-2 px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-400 text-sm">Total Leads</span>
            </div>
            <p className="text-3xl font-bold text-white">{analytics?.totalLeads || 0}</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center gap-3 mb-2">
              <Mail className="w-5 h-5 text-green-400" />
              <span className="text-gray-400 text-sm">Verified</span>
            </div>
            <p className="text-3xl font-bold text-white">{analytics?.verifiedLeads || 0}</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-orange-400" />
              <span className="text-gray-400 text-sm">Conversion Rate</span>
            </div>
            <p className="text-3xl font-bold text-white">{analytics?.conversionRate || 0}%</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center gap-3 mb-2">
              <BarChart3 className="w-5 h-5 text-purple-400" />
              <span className="text-gray-400 text-sm">B2B Leads</span>
            </div>
            <p className="text-3xl font-bold text-white">
              {analytics?.segmentBreakdown?.find((s) => s.segment === "b2b")?.count || 0}
            </p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search by name, email, or company..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && fetchData()}
                className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              <Filter className="w-4 h-4" />
              Filters
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </button>
            <button
              onClick={fetchData}
              className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-lg transition-colors"
            >
              Search
            </button>
          </div>

          {showFilters && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-700">
              <select
                value={filters.segment}
                onChange={(e) => setFilters({ ...filters, segment: e.target.value })}
                className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white"
              >
                <option value="">All Segments</option>
                <option value="player">Player</option>
                <option value="b2b">B2B</option>
              </select>
              <select
                value={filters.status}
                onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white"
              >
                <option value="">All Statuses</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="qualified">Qualified</option>
                <option value="won">Won</option>
                <option value="lost">Lost</option>
              </select>
              <select
                value={filters.interest}
                onChange={(e) => setFilters({ ...filters, interest: e.target.value })}
                className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white"
              >
                <option value="">All Interests</option>
                <option value="colony">Colony</option>
                <option value="corporate">Corporate Crisis</option>
                <option value="both">Both</option>
              </select>
            </div>
          )}
        </div>

        {/* Leads Table */}
        <div className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Name</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Email</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Segment</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Interest</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Status</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Score</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Source</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={8} className="px-6 py-12 text-center">
                      <Loader2 className="w-6 h-6 animate-spin text-cyan-400 mx-auto" />
                    </td>
                  </tr>
                ) : leads.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-6 py-12 text-center text-gray-500">
                      No leads found
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead.id} className="border-b border-gray-700/50 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-white font-medium">{lead.name}</p>
                          {lead.companyName && <p className="text-gray-500 text-sm">{lead.companyName}</p>}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-300">{lead.email}</span>
                          {lead.verified && <span className="w-2 h-2 bg-green-400 rounded-full" title="Verified" />}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          lead.segment === "b2b" ? "bg-orange-400/20 text-orange-400" : "bg-green-400/20 text-green-400"
                        }`}>
                          {lead.segment.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-300 capitalize">{lead.interest}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          lead.status === "new" ? "bg-blue-400/20 text-blue-400" :
                          lead.status === "contacted" ? "bg-yellow-400/20 text-yellow-400" :
                          lead.status === "qualified" ? "bg-purple-400/20 text-purple-400" :
                          lead.status === "won" ? "bg-green-400/20 text-green-400" :
                          "bg-red-400/20 text-red-400"
                        }`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-12 h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-cyan-400 rounded-full"
                              style={{ width: `${lead.score}%` }}
                            />
                          </div>
                          <span className="text-gray-400 text-sm">{lead.score}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-400 text-sm">{lead.source || "Direct"}</td>
                      <td className="px-6 py-4 text-right">
                        <Link
                          href={`/admin/leads/${lead.id}`}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                          View
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Source Breakdown */}
        {analytics?.topSources && analytics.topSources.length > 0 && (
          <div className="mt-8 bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Top Traffic Sources</h3>
            <div className="space-y-3">
              {analytics.topSources.slice(0, 5).map((source, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="text-gray-400 w-24 truncate">{source.source}</span>
                  <div className="flex-1 h-4 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-cyan-400 rounded-full"
                      style={{ width: `${(source.count / (analytics?.totalLeads || 1)) * 100}%` }}
                    />
                  </div>
                  <span className="text-white font-medium w-12 text-right">{source.count}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}