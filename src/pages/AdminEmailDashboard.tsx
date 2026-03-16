import { useState, useEffect, useMemo } from "react";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Mail, CheckCircle, XCircle, AlertTriangle, Clock } from "lucide-react";

type EmailLogRow = {
  id: string;
  message_id: string | null;
  template_name: string;
  recipient_email: string;
  status: string;
  error_message: string | null;
  created_at: string;
};

type TimeRange = "24h" | "7d" | "30d" | "all";

const STATUS_COLORS: Record<string, string> = {
  sent: "bg-green-600/20 text-green-400 border-green-600/30",
  pending: "bg-yellow-600/20 text-yellow-400 border-yellow-600/30",
  failed: "bg-red-600/20 text-red-400 border-red-600/30",
  dlq: "bg-red-600/20 text-red-400 border-red-600/30",
  suppressed: "bg-orange-600/20 text-orange-400 border-orange-600/30",
  rate_limited: "bg-orange-600/20 text-orange-400 border-orange-600/30",
};

const STATUS_ICONS: Record<string, typeof Mail> = {
  sent: CheckCircle,
  pending: Clock,
  failed: XCircle,
  dlq: XCircle,
  suppressed: AlertTriangle,
};

function getTimeRangeDate(range: TimeRange): string | null {
  const now = new Date();
  switch (range) {
    case "24h":
      return new Date(now.getTime() - 24 * 60 * 60 * 1000).toISOString();
    case "7d":
      return new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();
    case "30d":
      return new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString();
    default:
      return null;
  }
}

const PAGE_SIZE = 50;

export default function AdminEmailDashboard() {
  const [allRows, setAllRows] = useState<EmailLogRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [timeRange, setTimeRange] = useState<TimeRange>("7d");
  const [templateFilter, setTemplateFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [page, setPage] = useState(0);

  useEffect(() => {
    loadData();
  }, [timeRange]);

  async function loadData() {
    setLoading(true);
    setError(null);
    try {
      let query = supabase
        .from("email_send_log")
        .select("id, message_id, template_name, recipient_email, status, error_message, created_at")
        .order("created_at", { ascending: false })
        .limit(1000);

      const since = getTimeRangeDate(timeRange);
      if (since) {
        query = query.gte("created_at", since);
      }

      const { data, error: fetchError } = await query;
      if (fetchError) throw fetchError;
      setAllRows((data as EmailLogRow[]) || []);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to load email data");
    } finally {
      setLoading(false);
    }
  }

  // Deduplicate by message_id — keep latest row per message_id
  const dedupedRows = useMemo(() => {
    const byMessageId = new Map<string, EmailLogRow>();
    const noMessageId: EmailLogRow[] = [];

    for (const row of allRows) {
      if (!row.message_id) {
        noMessageId.push(row);
        continue;
      }
      const existing = byMessageId.get(row.message_id);
      if (!existing || new Date(row.created_at) > new Date(existing.created_at)) {
        byMessageId.set(row.message_id, row);
      }
    }
    return [...byMessageId.values(), ...noMessageId].sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  }, [allRows]);

  // Get unique template names for filter
  const templateNames = useMemo(
    () => [...new Set(dedupedRows.map((r) => r.template_name))].sort(),
    [dedupedRows]
  );

  // Apply filters
  const filteredRows = useMemo(() => {
    return dedupedRows.filter((row) => {
      if (templateFilter !== "all" && row.template_name !== templateFilter) return false;
      if (statusFilter !== "all" && row.status !== statusFilter) return false;
      return true;
    });
  }, [dedupedRows, templateFilter, statusFilter]);

  // Stats
  const stats = useMemo(() => {
    const total = filteredRows.length;
    const sent = filteredRows.filter((r) => r.status === "sent").length;
    const failed = filteredRows.filter((r) => r.status === "failed" || r.status === "dlq").length;
    const pending = filteredRows.filter((r) => r.status === "pending").length;
    const suppressed = filteredRows.filter((r) => r.status === "suppressed").length;
    return { total, sent, failed, pending, suppressed };
  }, [filteredRows]);

  // Paginate
  const pagedRows = filteredRows.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
  const totalPages = Math.ceil(filteredRows.length / PAGE_SIZE);

  useEffect(() => {
    setPage(0);
  }, [templateFilter, statusFilter, timeRange]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-7xl mx-auto px-4 pt-28 pb-16">
        <h1 className="text-3xl font-bold mb-8">Email Monitoring Dashboard</h1>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="flex gap-1">
            {(["24h", "7d", "30d", "all"] as TimeRange[]).map((range) => (
              <Button
                key={range}
                size="sm"
                variant={timeRange === range ? "default" : "outline"}
                onClick={() => setTimeRange(range)}
              >
                {range === "24h" ? "24h" : range === "7d" ? "7 days" : range === "30d" ? "30 days" : "All"}
              </Button>
            ))}
          </div>
          <Select value={templateFilter} onValueChange={setTemplateFilter}>
            <SelectTrigger className="w-[220px]">
              <SelectValue placeholder="All templates" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All templates</SelectItem>
              {templateNames.map((t) => (
                <SelectItem key={t} value={t}>{t}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="All statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              <SelectItem value="sent">Sent</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
              <SelectItem value="dlq">DLQ</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="suppressed">Suppressed</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" onClick={loadData}>
            Refresh
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {[
            { label: "Total", value: stats.total, icon: Mail, color: "text-muted-foreground" },
            { label: "Sent", value: stats.sent, icon: CheckCircle, color: "text-green-400" },
            { label: "Failed", value: stats.failed, icon: XCircle, color: "text-red-400" },
            { label: "Pending", value: stats.pending, icon: Clock, color: "text-yellow-400" },
            { label: "Suppressed", value: stats.suppressed, icon: AlertTriangle, color: "text-orange-400" },
          ].map((stat) => (
            <Card key={stat.label} className="bg-secondary/50 border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <stat.icon className={`w-4 h-4 ${stat.color}`} />
                  {stat.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Table */}
        {loading ? (
          <p className="text-muted-foreground">Loading…</p>
        ) : error ? (
          <p className="text-destructive">{error}</p>
        ) : (
          <>
            <div className="rounded-lg border border-border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-secondary/30">
                    <TableHead>Template</TableHead>
                    <TableHead>Recipient</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Error</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pagedRows.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                        No emails found
                      </TableCell>
                    </TableRow>
                  ) : (
                    pagedRows.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell className="font-mono text-xs">{row.template_name}</TableCell>
                        <TableCell className="text-sm">{row.recipient_email}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={STATUS_COLORS[row.status] || ""}
                          >
                            {row.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-xs text-muted-foreground">
                          {new Date(row.created_at).toLocaleString()}
                        </TableCell>
                        <TableCell className="text-xs text-red-400 max-w-[200px] truncate">
                          {row.error_message || "—"}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-4">
                <p className="text-sm text-muted-foreground">
                  Page {page + 1} of {totalPages} ({filteredRows.length} emails)
                </p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    disabled={page === 0}
                    onClick={() => setPage(page - 1)}
                  >
                    Previous
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    disabled={page >= totalPages - 1}
                    onClick={() => setPage(page + 1)}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
