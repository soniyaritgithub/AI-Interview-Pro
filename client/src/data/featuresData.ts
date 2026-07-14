import type { LucideIcon } from "lucide-react";

import {
  Brain,
  FileSearch,
  Code2,
  Mic,
  BarChart3,
  Sparkles,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
}

/* -------------------------------------------------------------------------- */
/*                                    Data                                    */
/* -------------------------------------------------------------------------- */

export const features: FeatureItem[] = [
  {
    id: 1,
    title: "AI Mock Interviews",
    description:
      "Practice realistic AI interviews with instant feedback, scoring and personalized improvement suggestions.",
    icon: Brain,
    accent: "#8B5CF6",
  },
  {
    id: 2,
    title: "Resume Analysis",
    description:
      "Get ATS score, keyword analysis, recruiter insights and actionable resume improvements.",
    icon: FileSearch,
    accent: "#06B6D4",
  },
  {
    id: 3,
    title: "Coding Challenges",
    description:
      "Solve coding problems with AI evaluation, hints, explanations and detailed performance reports.",
    icon: Code2,
    accent: "#22C55E",
  },
  {
    id: 4,
    title: "Communication Coach",
    description:
      "Improve confidence, fluency, pronunciation and interview communication with AI feedback.",
    icon: Mic,
    accent: "#F59E0B",
  },
  {
    id: 5,
    title: "Analytics Dashboard",
    description:
      "Track interview history, score trends and performance analytics from one beautiful dashboard.",
    icon: BarChart3,
    accent: "#EC4899",
  },
  {
    id: 6,
    title: "AI Reports",
    description:
      "Receive comprehensive interview reports with strengths, weaknesses and next-step recommendations.",
    icon: Sparkles,
    accent: "#6366F1",
  },
] as const;