import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Brain,
  Sparkles,
  ShieldCheck,
  Rocket,
  Briefcase,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  review: string;
  icon: LucideIcon;
  accent: string;
}

/* -------------------------------------------------------------------------- */
/*                                    Data                                    */
/* -------------------------------------------------------------------------- */

export const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Frontend Developer",
    company: "Microsoft",
    avatar: "AS",
    rating: 5,
    review:
      "The AI Interview Copilot completely transformed my interview preparation. The instant feedback, communication analysis, and coding suggestions helped me build confidence before my actual interviews.",
    icon: Code2,
    accent: "#8B5CF6",
  },

  {
    id: 2,
    name: "Priya Verma",
    role: "Software Engineer",
    company: "Google",
    avatar: "PV",
    rating: 5,
    review:
      "Resume analysis was incredibly accurate. I improved my ATS score significantly and received multiple interview calls within weeks after applying the suggestions.",
    icon: Brain,
    accent: "#06B6D4",
  },

  {
    id: 3,
    name: "Rahul Mehta",
    role: "Backend Developer",
    company: "Amazon",
    avatar: "RM",
    rating: 5,
    review:
      "Mock interviews felt surprisingly realistic. The AI evaluated both technical answers and communication, making my preparation much more effective.",
    icon: Sparkles,
    accent: "#22C55E",
  },

  {
    id: 4,
    name: "Sneha Kapoor",
    role: "Full Stack Developer",
    company: "Adobe",
    avatar: "SK",
    rating: 5,
    review:
      "The analytics dashboard clearly showed my weak areas after every interview. Tracking my progress over time motivated me to improve consistently.",
    icon: ShieldCheck,
    accent: "#F59E0B",
  },

  {
    id: 5,
    name: "Aditya Singh",
    role: "AI Engineer",
    company: "NVIDIA",
    avatar: "AI",
    rating: 5,
    review:
      "One of the most polished interview preparation platforms I've used. The UI is premium, the reports are detailed, and the AI feedback feels genuinely useful.",
    icon: Rocket,
    accent: "#EC4899",
  },

  {
    id: 6,
    name: "Neha Patel",
    role: "Software Developer",
    company: "Infosys",
    avatar: "NP",
    rating: 5,
    review:
      "From resume optimization to mock interviews and communication analysis, everything is available in one place. It saved me countless hours during placement preparation.",
    icon: Briefcase,
    accent: "#6366F1",
  },
];