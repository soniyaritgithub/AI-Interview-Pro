import DashboardStats from "./DashboardStats";
import QuickActions from "./QuickActions";
import AnalyticsCards from "./AnalyticsCards";
import RecentResumes from "./RecentResumes";
import ActivityTimeline from "./ActivityTimeline";

export default function DashboardHome() {
    return (
  <main
  className="
    flex-1
    w-full
    min-h-screen
    bg-gray-50
    p-4
    sm:p-6
    lg:p-8
  "
>
    <div
  className="
    mx-auto
    flex
    w-full
    max-w-7xl
    flex-col
    gap-6
  "
>
<section
  aria-labelledby="dashboard-stats"
>
  <DashboardStats />
</section>
<section
  aria-labelledby="quick-actions"
>
  <QuickActions />
</section>
<section
  aria-labelledby="analytics"
>
  <AnalyticsCards />
</section>
<section
  className="
    grid
    gap-6
    lg:grid-cols-3
  "
>
    <div
  className="
    lg:col-span-2
  "
>
  <RecentResumes />
</div>
<div>
  <ActivityTimeline />
</div>
</section>
</div>
</main>
);
}