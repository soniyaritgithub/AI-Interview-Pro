import { QUICK_ACTIONS } from "../../constants/dashboard";
import QuickActionCard from "./QuickActionCard";

export default function QuickActions() {
  return (
    <section
      aria-labelledby="quick-actions"
      className="w-full"
    >
      {/* Header */}
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2
            id="quick-actions"
            className="text-xl font-bold text-gray-900"
          >
            Quick Actions
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Access your most frequently used tools.
          </p>
        </div>
      </div>

      {/* Responsive Grid */}
      <div
        className="
          grid
          grid-cols-1
          gap-4

          sm:grid-cols-2

          xl:grid-cols-4
        "
      >
        {QUICK_ACTIONS.map((action) => (
          <QuickActionCard
            key={action.id}
            action={action}
          />
        ))}
      </div>
    </section>
  );
}