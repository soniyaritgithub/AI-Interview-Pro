import { DASHBOARD_STATS } from "../../constants/dashboard";
import StatCard from "./StatCard";

export default function DashboardStats() {
    return (


        <section
  aria-labelledby="dashboard-stats"
  className="w-full"
>
    <div className="mb-6 flex items-center justify-between">
  <div>
    <h2
      id="dashboard-stats"
      className="text-xl font-bold text-gray-900"
    >
      Dashboard Overview
    </h2>

    <p className="mt-1 text-sm text-gray-500">
      Track your resume performance and activity.
    </p>
  </div>
</div>
<div
  className="
    grid
    grid-cols-1
    gap-4

    sm:grid-cols-2

    xl:grid-cols-4
  "
>
    {DASHBOARD_STATS.map((stat) => (
  <StatCard
    key={stat.id}
    stat={stat}
  />
))}
</div>
</section>
);
}