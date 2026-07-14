import {
  Upload,
  BrainCircuit,
  MessageSquareText,
  Trophy,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export interface StepItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const howItWorksData: StepItem[] = [
  {
    id: 1,
    title: "Upload Resume",
    description:
      "Upload your resume securely and let AI understand your experience and skills.",
    icon: Upload,
  },
  {
    id: 2,
    title: "AI Generates Interview",
    description:
      "Our AI creates personalized interview questions based on your resume and target role.",
    icon: BrainCircuit,
  },
  {
    id: 3,
    title: "Practice & Feedback",
    description:
      "Answer questions with voice or text and receive instant AI feedback.",
    icon: MessageSquareText,
  },
  {
    id: 4,
    title: "Get Interview Ready",
    description:
      "Improve communication, confidence and ATS score before real interviews.",
    icon: Trophy,
  },
];