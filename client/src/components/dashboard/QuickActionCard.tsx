import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import type { LucideIcon } from "lucide-react";

interface QuickAction {
  id: string;
  title: string;
  path: string;
  icon: LucideIcon;
}

interface QuickActionCardProps {
  action: QuickAction;
}

export default function QuickActionCard({
  action,
}: QuickActionCardProps) {
  const Icon = action.icon;

  return (
    <Link
      to={action.path}
      aria-label={action.title}
      className="
        group
        relative
        flex
        min-h-[140px]
        w-full
        flex-col
        justify-between
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
        hover:border-blue-300
        hover:shadow-lg

        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        focus:ring-offset-2
      "
    >
      {/* Background Hover Effect */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-blue-50
          to-transparent
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* Top Section */}
      <div className="relative z-10 flex items-center justify-between">
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-xl
            bg-blue-50
            transition-all
            duration-300
            group-hover:bg-blue-100
          "
        >
          <Icon
            className="
              h-7
              w-7
              text-blue-600
              transition-transform
              duration-300
              group-hover:scale-110
            "
          />
        </div>

        <ArrowRight
          className="
            h-5
            w-5
            text-gray-400
            transition-all
            duration-300
            group-hover:translate-x-1
            group-hover:text-blue-600
          "
        />
      </div>

      {/* Bottom */}
      <div className="relative z-10 mt-6">
        <h3
          className="
            text-lg
            font-semibold
            text-gray-900
            transition-colors
            duration-300
            group-hover:text-blue-600
          "
        >
          {action.title}
        </h3>

        <p
          className="
            mt-2
            text-sm
            leading-6
            text-gray-500
          "
        >
          Click to continue
        </p>
      </div>
    </Link>
  );
}