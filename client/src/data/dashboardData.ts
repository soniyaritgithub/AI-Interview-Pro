import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Camera,
  Clock3,
  Code2,
  Eye,
  FileCheck,
  MessageSquareText,
  Mic,
  Smile,
} from "lucide-react";

export interface DashboardStat {
  title: string;
  value: string;
  icon: LucideIcon;
  accent: string;
}

export interface ProgressItem {
  title: string;
  value: number;
}

export interface InterviewStatusItem {
  title: string;
  value: string;
  icon: LucideIcon;
  color: string;
  bg: string;
}

export interface ActivityItem {
  day: string;
  value: number;
}

export const dashboardStats: DashboardStat[] = [
  {
    title: "ATS Score",
    value: "98%",
    icon: FileCheck,
    accent: "#8B5CF6",
  },
  {
    title: "AI Confidence",
    value: "94%",
    icon: Brain,
    accent: "#06B6D4",
  },
  {
    title: "Coding Score",
    value: "91%",
    icon: Code2,
    accent: "#22C55E",
  },
  {
    title: "Communication",
    value: "96%",
    icon: MessageSquareText,
    accent: "#F59E0B",
  },
];

export const progressItems: ProgressItem[] = [
  {
    title: "ATS Improvement",
    value: 98,
  },
  {
    title: "Confidence",
    value: 94,
  },
  {
    title: "Communication",
    value: 96,
  },
  {
    title: "Coding",
    value: 91,
  },
];

export const interviewStatus = [
  {
    title: "Microphone",
    value: "Connected",
    icon: Mic,
    color: "text-emerald-400",
    bg: "bg-emerald-500/15",
  },
  {
    title: "Camera",
    value: "HD Active",
    icon: Camera,
    color: "text-sky-400",
    bg: "bg-sky-500/15",
  },
  {
    title: "Emotion",
    value: "Confident",
    icon: Smile,
    color: "text-yellow-400",
    bg: "bg-yellow-500/15",
  },
  {
    title: "Eye Contact",
    value: "94%",
    icon: Eye,
    color: "text-violet-400",
    bg: "bg-violet-500/15",
  },
] satisfies InterviewStatusItem[];

export const activityData: ActivityItem[] = [
  {
    day: "Mon",
    value: 45,
  },
  {
    day: "Tue",
    value: 68,
  },
  {
    day: "Wed",
    value: 82,
  },
  {
    day: "Thu",
    value: 58,
  },
  {
    day: "Fri",
    value: 92,
  },
  {
    day: "Sat",
    value: 74,
  },
  {
    day: "Sun",
    value: 88,
  },
];

export const dashboardSummary = {
  title: "AI Interview Dashboard",

  subtitle: "Today's Performance & Interview Analytics",

  interviews: 24,

  averageScore: "94%",

  confidence: "High",

  rank: "Top 5%",

  timer: "12:45",

  liveStatus: "LIVE",

  activityGrowth: "+18%",
};

export const browserAddress = "interview.ai/dashboard";

export const browserTitle = "AI Powered Dashboard";

export const dashboardDate = {
  label: "Status",

  value: "Ready for Interview",

  icon: Clock3,
};