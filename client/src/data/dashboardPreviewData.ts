import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Code2,
  FileCheck2,
  MessageSquare,
  TrendingUp,
} from "lucide-react";

/* ---------- Types ---------- */

export interface DashboardStat {
  title: string;
  value: string;
  subtitle: string;
  trend: string;
  accent: string;
  icon: LucideIcon;
}

export interface PerformanceMetric {
  label: string;
  value: number;
  description: string;
  color: string;
  icon: LucideIcon;
}

export interface WeeklyActivityItem {
  day: string;
  value: number;
}

export interface DashboardSummary {
  badge: string;
  title: string;
  subtitle: string;
  status: string;
  growth: string;
}

/* ---------- Header ---------- */

export const dashboardSummary: DashboardSummary = {
  badge: "AI Powered Dashboard",
  title: "AI Interview Dashboard",
  subtitle: "Today's Performance",
  status: "Ready for Interview",
  growth: "+18%",
};

/* ---------- Stats ---------- */

export const dashboardStats: DashboardStat[] = [
  {
    title: "ATS Score",
    value: "98%",
    subtitle: "Excellent",
    trend: "+4%",
    accent: "#8B5CF6",
    icon: FileCheck2,
  },
  {
    title: "AI Confidence",
    value: "94%",
    subtitle: "Very High",
    trend: "+6%",
    accent: "#06B6D4",
    icon: Brain,
  },
  {
    title: "Coding",
    value: "91%",
    subtitle: "Strong",
    trend: "+3%",
    accent: "#22C55E",
    icon: Code2,
  },
  {
    title: "Communication",
    value: "96%",
    subtitle: "Excellent",
    trend: "+5%",
    accent: "#F59E0B",
    icon: MessageSquare,
  },
];

/* ---------- Performance ---------- */

export const performanceMetrics: PerformanceMetric[] = [
  {
    label: "ATS Improvement",
    value: 98,
    description: "Resume optimized",
    color: "#8B5CF6",
    icon: TrendingUp,
  },
  {
    label: "Confidence",
    value: 94,
    description: "Speaking quality",
    color: "#06B6D4",
    icon: Brain,
  },
  {
    label: "Communication",
    value: 96,
    description: "Professional tone",
    color: "#F59E0B",
    icon: MessageSquare,
  },
  {
    label: "Coding",
    value: 91,
    description: "Problem solving",
    color: "#22C55E",
    icon: Code2,
  },
];

/* ---------- Weekly Chart ---------- */

export const weeklyActivity: WeeklyActivityItem[] = [
  { day: "Mon", value: 42 },
  { day: "Tue", value: 68 },
  { day: "Wed", value: 58 },
  { day: "Thu", value: 88 },
  { day: "Fri", value: 74 },
  { day: "Sat", value: 96 },
  { day: "Sun", value: 82 },
];

/* ---------- Browser ---------- */

export const browserInfo = {
  url: "https://interview-ai.app/dashboard",
  secure: true,
};

/* ---------- Footer ---------- */

export const dashboardFooter = {
  interviews: 24,
  averageScore: "94%",
  completionRate: "98%",
  ranking: "Top 5%",
};

/* ---------- Future API ---------- */

/*
Later, replace these exports with data returned from FastAPI.

Example:

GET /api/dashboard-preview

{
  summary: {},
  stats: [],
  performance: [],
  weeklyActivity: [],
  footer: {}
}

UI components won't need any changes.
*/