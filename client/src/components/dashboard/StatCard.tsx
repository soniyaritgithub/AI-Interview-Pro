import React, { memo } from "react";
import {
  ArrowUpRight,
  ArrowDownRight,
  Minus,
} from "lucide-react";

import type { DashboardStat } from "../../types/dashboard";

interface StatCardProps {
  stat: DashboardStat;
}

const COLOR_VARIANTS = {
  blue: {
    bg: "bg-blue-50",
    icon: "text-blue-600",
    border: "hover:border-blue-300",
  },

  green: {
    bg: "bg-green-50",
    icon: "text-green-600",
    border: "hover:border-green-300",
  },

  purple: {
    bg: "bg-purple-50",
    icon: "text-purple-600",
    border: "hover:border-purple-300",
  },

  orange: {
    bg: "bg-orange-50",
    icon: "text-orange-600",
    border: "hover:border-orange-300",
  },
} as const;

function StatCard({
  stat,
}: StatCardProps) {
  const Icon = stat.icon;

  const colors =
    COLOR_VARIANTS[
      stat.color as keyof typeof COLOR_VARIANTS
    ] ?? COLOR_VARIANTS.blue;

  const TrendIcon =
    stat.trend === "up"
      ? ArrowUpRight
      : stat.trend === "down"
      ? ArrowDownRight
      : Minus;

  const trendColor =
    stat.trend === "up"
      ? "text-green-600"
      : stat.trend === "down"
      ? "text-red-600"
      : "text-gray-500";

  return (
    <article
      className={`
        group
        relative
        overflow-hidden

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
      {/* Top */}

      <div className="flex items-start justify-between">
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

              ${colors.icon}
            `}
          />
        </div>

        <div
          className={`
            flex
            items-center
            gap-1

            rounded-full

            bg-gray-50

            px-2
            py-1

            text-xs
            font-medium

            ${trendColor}
          `}
        >
          <TrendIcon className="h-4 w-4" />

          <span>
            {stat.change}%
          </span>
        </div>
      </div>

      {/* Title */}

      <h3
        className="
          mt-6

          text-sm

          font-medium

          text-gray-500
        "
      >
        {stat.title}
      </h3>

      {/* Value */}

      <p
        className="
          mt-2

          break-words

          text-3xl

          font-bold

          text-gray-900

          sm:text-4xl
        "
      >
        {stat.value}
      </p>

      {/* Bottom */}

      <div
        className="
          mt-5

          flex

          items-center

          justify-between
        "
      >
        <span
          className="
            text-xs

            text-gray-400
          "
        >
          Last updated today
        </span>

        <button
          type="button"
          className="
            rounded-lg

            px-3
            py-1.5

            text-xs
            font-medium

            text-blue-600

            transition-colors

            hover:bg-blue-50

            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:ring-offset-2
          "
        >
          View
        </button>
      </div>
    </article>
  );
}

export default memo(StatCard);