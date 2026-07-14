import {
  Activity,
  BarChart3,
  PieChart,
  TrendingUp,
} from "lucide-react";

interface AnalyticsCard {
  id: string;
  title: string;
  description: string;
  value: string;
  icon: React.ElementType;
  color: string;
}

const ANALYTICS_CARDS: AnalyticsCard[] = [
  {
    id: "ats",
    title: "Average ATS Score",
    description: "Resume performance",
    value: "89%",
    icon: PieChart,
    color: "blue",
  },
  {
    id: "applications",
    title: "Applications",
    description: "Jobs applied",
    value: "42",
    icon: BarChart3,
    color: "green",
  },
  {
    id: "interviews",
    title: "Interview Rate",
    description: "Interview conversion",
    value: "64%",
    icon: TrendingUp,
    color: "purple",
  },
  {
    id: "activity",
    title: "Weekly Activity",
    description: "Last 7 days",
    value: "18",
    icon: Activity,
    color: "orange",
  },
];

const COLOR_CLASSES = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "hover:border-blue-300",
  },

  green: {
    bg: "bg-green-50",
    text: "text-green-600",
    border: "hover:border-green-300",
  },

  purple: {
    bg: "bg-purple-50",
    text: "text-purple-600",
    border: "hover:border-purple-300",
  },

  orange: {
    bg: "bg-orange-50",
    text: "text-orange-600",
    border: "hover:border-orange-300",
  },
} as const;

export default function AnalyticsCards() {
  return (
    <section
      aria-labelledby="analytics-cards"
      className="w-full"
    >
      {/* Header */}

      <div className="mb-6">
        <h2
          id="analytics-cards"
          className="text-xl font-bold text-gray-900"
        >
          Analytics
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Performance overview of your resume activity.
        </p>
      </div>

      {/* Grid */}

      <div
        className="
          grid
          grid-cols-1
          gap-4

          sm:grid-cols-2

          xl:grid-cols-4
        "
      >
        {ANALYTICS_CARDS.map((card) => {
          const Icon = card.icon;

          const colors =
            COLOR_CLASSES[
              card.color as keyof typeof COLOR_CLASSES
            ];

          return (
            <article
              key={card.id}
              className={`
                group

                rounded-2xl

                border
                border-gray-200

                bg-white

                p-5

                shadow-sm

                transition-all
                duration-300

                hover:-translate-y-1
                hover:shadow-lg

                ${colors.border}
              `}
            >
              {/* Icon */}

              <div
                className={`
                  flex

                  h-14
                  w-14

                  items-center
                  justify-center

                  rounded-xl

                  ${colors.bg}
                `}
              >
                <Icon
                  className={`
                    h-7
                    w-7

                    ${colors.text}
                  `}
                />
              </div>

              {/* Value */}

              <h3
                className="
                  mt-5

                  text-3xl

                  font-bold

                  text-gray-900
                "
              >
                {card.value}
              </h3>

              {/* Title */}

              <p
                className="
                  mt-2

                  text-base

                  font-semibold

                  text-gray-800
                "
              >
                {card.title}
              </p>

              {/* Description */}

              <p
                className="
                  mt-1

                  text-sm

                  text-gray-500
                "
              >
                {card.description}
              </p>

              {/* Placeholder Chart */}

              <div
                className="
                  mt-5

                  h-20

                  rounded-xl

                  border
                  border-dashed
                  border-gray-200

                  bg-gray-50

                  flex
                  items-center
                  justify-center

                  text-xs
                  text-gray-400
                "
              >
                Chart Placeholder
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}