export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: number;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  popular: boolean;
  cta: string;
  buttonText: string;
  buttonVariant: "primary" | "secondary";
  features: PricingFeature[];
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: "Starter",
    description: "Perfect for students beginning interview preparation.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    popular: false,
     cta: "Get Started",

    buttonText: "Start Free",
    buttonVariant: "secondary",

    features: [
      {
        text: "3 AI Mock Interviews / Month",
        included: true,
      },
      {
        text: "Basic ATS Resume Analysis",
        included: true,
      },
      {
        text: "Interview Performance Score",
        included: true,
      },
      {
        text: "Basic Feedback Report",
        included: true,
      },
      {
        text: "Coding Interview Practice",
        included: false,
      },
      {
        text: "Communication Analysis",
        included: false,
      },
      {
        text: "Priority Support",
        included: false,
      },
      {
        text: "AI Career Roadmap",
        included: false,
      },
    ],
  },

  {
    id: 2,
    name: "Pro",
    description: "Best choice for job seekers preparing seriously.",
    monthlyPrice: 19,
    yearlyPrice: 15,
    popular: true,
    cta: "Start Free Trial",
    buttonText: "Get Pro",
    buttonVariant: "primary",

    features: [
      {
        text: "Unlimited AI Mock Interviews",
        included: true,
      },
      {
        text: "Advanced ATS Resume Analysis",
        included: true,
      },
      {
        text: "Detailed AI Feedback",
        included: true,
      },
      {
        text: "Communication Analysis",
        included: true,
      },
      {
        text: "Coding Interview Practice",
        included: true,
      },
      {
        text: "Behavioral Interview Practice",
        included: true,
      },
      {
        text: "AI Career Roadmap",
        included: true,
      },
      {
        text: "Priority Email Support",
        included: true,
      },
    ],
  },

  {
    id: 3,
    name: "Enterprise",
    description: "Designed for universities, bootcamps and companies.",
    monthlyPrice: 49,
    yearlyPrice: 39,
    popular: false,
    cta: "Choose Plan",
    buttonText: "Contact Sales",
    buttonVariant: "secondary",

    features: [
      {
        text: "Everything in Pro",
        included: true,
      },
      {
        text: "Unlimited Team Members",
        included: true,
      },
      {
        text: "Admin Dashboard",
        included: true,
      },
      {
        text: "Analytics & Reports",
        included: true,
      },
      {
        text: "Candidate Management",
        included: true,
      },
      {
        text: "API Access",
        included: true,
      },
      {
        text: "Dedicated Success Manager",
        included: true,
      },
      {
        text: "24×7 Premium Support",
        included: true,
      },
    ],
  },
];