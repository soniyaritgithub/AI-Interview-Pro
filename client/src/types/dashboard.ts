import type { LucideIcon } from "lucide-react";

/* ==========================================================
   Dashboard Navigation
========================================================== */

export interface DashboardNavItem {
  id: string;
  label: string;
  path: string;
  icon: LucideIcon;

  active?: boolean;

  badge?: string | number;

  disabled?: boolean;

  children?: DashboardNavItem[];
}

/* ==========================================================
   Dashboard User
========================================================== */

export interface DashboardUser {
  id: string;

  name: string;

  email: string;

  avatar?: string;

  role: "Candidate" | "Recruiter" | "Admin";

  plan: "Free" | "Pro" | "Enterprise";

  verified?: boolean;
}

/* ==========================================================
   Notifications
========================================================== */

export interface DashboardNotification {
  id: string;

  title: string;

  message: string;

  type:
    | "success"
    | "info"
    | "warning"
    | "error";

  read: boolean;

  createdAt: string;
}

/* ==========================================================
   Search
========================================================== */

export interface SearchResult {
  id: string;

  title: string;

  description?: string;

  url: string;
}

/* ==========================================================
   Sidebar State
========================================================== */

export interface SidebarState {
  isOpen: boolean;

  isCollapsed: boolean;

  isMobile: boolean;

  isTablet: boolean;

  isDesktop: boolean;
}

/* ==========================================================
   Dashboard Statistics
========================================================== */

export interface DashboardStat {
  id: string;

  title: string;

  value: number | string;

  icon: LucideIcon;

  color?: string;

  change?: number;

  trend?: "up" | "down" | "neutral";
}

/* ==========================================================
   Recent Resume
========================================================== */

export interface RecentResume {
  id: string;

  fileName: string;

  atsScore: number;

  uploadedAt: string;

  status:
    | "Completed"
    | "Processing"
    | "Failed";

  size?: string;
}

/* ==========================================================
   Activity Timeline
========================================================== */

export interface DashboardActivity {
  id: string;

  title: string;

  description: string;

  createdAt: string;

  icon?: LucideIcon;
}

/* ==========================================================
   Theme
========================================================== */

export type DashboardTheme =
  | "light"
  | "dark"
  | "system";

/* ==========================================================
   Profile Dropdown
========================================================== */

export interface ProfileMenuItem {
  id: string;

  label: string;

  path?: string;

  danger?: boolean;
}