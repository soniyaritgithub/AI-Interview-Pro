import {
  LayoutDashboard,
  UploadCloud,
  FileText,
  BarChart3,
  Briefcase,
  Bot,
  Users,
  Settings,
  FileCheck,
} from "lucide-react";

import type {
  DashboardNavItem,
  DashboardNotification,
  DashboardStat,
  ProfileMenuItem,
} from "../types/dashboard";

/* ==========================================================
   Dashboard Navigation
========================================================== */

export const DASHBOARD_NAVIGATION: DashboardNavItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    id: "resume-upload",
    label: "Resume Upload",
    path: "/resume/upload",
    icon: UploadCloud,
  },
  {
    id: "resume-history",
    label: "Resume History",
    path: "/resume/history",
    icon: FileText,
  },
  {
    id: "ats-report",
    label: "ATS Report",
    path: "/ats-report",
    icon: BarChart3,
  },
  {
    id: "job-match",
    label: "Job Match",
    path: "/job-match",
    icon: Briefcase,
  },
  {
    id: "ai-interview",
    label: "AI Interview",
    path: "/ai-interview",
    icon: Bot,
    badge: "NEW",
  },
  {
    id: "recruiter",
    label: "Recruiter",
    path: "/recruiter",
    icon: Users,
  },
  {
    id: "settings",
    label: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

/* ==========================================================
   Profile Dropdown
========================================================== */

export const PROFILE_MENU: ProfileMenuItem[] = [
  {
    id: "profile",
    label: "My Profile",
    path: "/profile",
  },
  {
    id: "billing",
    label: "Billing",
    path: "/billing",
  },
  {
    id: "settings",
    label: "Settings",
    path: "/settings",
  },
  {
    id: "logout",
    label: "Logout",
    danger: true,
  },
];

/* ==========================================================
   Dashboard Statistics
========================================================== */

export const DASHBOARD_STATS: DashboardStat[] = [
  {
    id: "total-resumes",
    title: "Total Resumes",
    value: 24,
    icon: FileText,
    color: "blue",
    trend: "up",
    change: 12,
  },
  {
    id: "ats-score",
    title: "Average ATS",
    value: "89%",
    icon: FileCheck,
    color: "green",
    trend: "up",
    change: 8,
  },
  {
    id: "job-match",
    title: "Job Matches",
    value: 18,
    icon: Briefcase,
    color: "purple",
    trend: "up",
    change: 5,
  },
  {
    id: "ai-interviews",
    title: "AI Interviews",
    value: 6,
    icon: Bot,
    color: "orange",
    trend: "neutral",
    change: 0,
  },
];

/* ==========================================================
   Notifications
========================================================== */

export const DASHBOARD_NOTIFICATIONS: DashboardNotification[] = [
  {
    id: "1",
    title: "Resume Analyzed",
    message: "Your resume analysis has been completed successfully.",
    type: "success",
    read: false,
    createdAt: "2 min ago",
  },
  {
    id: "2",
    title: "New Job Match",
    message: "5 new jobs match your resume.",
    type: "info",
    read: false,
    createdAt: "10 min ago",
  },
  {
    id: "3",
    title: "ATS Improved",
    message: "Your ATS score increased by 7%.",
    type: "success",
    read: true,
    createdAt: "1 hour ago",
  },
];

/* ==========================================================
   Quick Actions
========================================================== */

export const QUICK_ACTIONS = [
  {
    id: "upload",
    title: "Upload Resume",
    path: "/resume/upload",
    icon: UploadCloud,
  },
  {
    id: "history",
    title: "Resume History",
    path: "/resume/history",
    icon: FileText,
  },
  {
    id: "job-match",
    title: "Job Match",
    path: "/job-match",
    icon: Briefcase,
  },
  {
    id: "interview",
    title: "AI Interview",
    path: "/ai-interview",
    icon: Bot,
  },
];

/* ==========================================================
   User (Mock)
========================================================== */

export const CURRENT_USER = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  role: "Candidate",
  plan: "Pro",
  verified: true,
  avatar: "",
};

/* ==========================================================
   Sidebar Sizes
========================================================== */

export const SIDEBAR_WIDTH = {
  expanded: 280,
  collapsed: 88,
};

/* ==========================================================
   Breakpoints
========================================================== */

export const DASHBOARD_BREAKPOINTS = {
  mobile: 640,
  tablet: 1024,
  desktop: 1280,
};