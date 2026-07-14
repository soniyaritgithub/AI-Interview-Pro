import {
  CheckCircle,
  Clock,
  FileText,
  Briefcase,
  Bot,
  type LucideIcon,
} from "lucide-react";

interface ActivityItem {
  id: string;
  title: string;
  description: string;
  time: string;

  status:
    | "success"
    | "processing"
    | "info";

  icon: LucideIcon;
}

const ACTIVITY_DATA: ActivityItem[] = [
  {
    id: "1",
    title: "Resume Uploaded",
    description:
      "Frontend_Resume.pdf uploaded successfully.",
    time: "2 minutes ago",
    status: "success",
    icon: FileText,
  },

  {
    id: "2",
    title: "ATS Analysis Completed",
    description:
      "Your ATS score increased to 92%.",
    time: "10 minutes ago",
    status: "success",
    icon: CheckCircle,
  },

  {
    id: "3",
    title: "Job Match Updated",
    description:
      "5 new jobs matched your resume.",
    time: "1 hour ago",
    status: "info",
    icon: Briefcase,
  },

  {
    id: "4",
    title: "AI Interview Scheduled",
    description:
      "Practice interview is ready.",
    time: "Today",
    status: "processing",
    icon: Bot,
  },

  {
    id: "5",
    title: "Resume Processing",
    description:
      "Backend_Resume.pdf is being analyzed.",
    time: "Just now",
    status: "processing",
    icon: Clock,
  },
];
const isLoading = false;
export default function ActivityTimeline() {
  return (
  <section
  role="region"
  aria-labelledby="activity-timeline"
      className="
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-6
        shadow-sm
      "
    >
     <div
  className="
    mb-6
    flex
    flex-col
    gap-4
    sm:flex-row
    sm:items-center
    sm:justify-between
  "
>
  <div>
    <h2
      id="activity-timeline"
      className="
text-xl
font-bold
text-gray-900
dark:text-white
"
    >
      Activity Timeline
    </h2>

    <p
      className="
mt-1
text-sm
text-gray-500
dark:text-slate-400
"
    >
      Track your latest resume activities and AI updates.
    </p>
  </div>

  <button
    type="button"
    aria-label="View all activities"
    className="
      inline-flex
      items-center
      justify-center
      rounded-xl
      border
      border-gray-200
      px-4
      py-2.5
      text-sm
      font-medium
      text-gray-700
      transition-all
      duration-200
      hover:bg-gray-50
      focus:outline-none
      focus:ring-2
      focus:ring-blue-500
      focus:ring-offset-2
      dark:bg-slate-900
dark:border-slate-700
dark:text-white
    "
  >
    View All
  </button>
</div>

{isLoading && (
  <div className="space-y-4 animate-pulse">

    {[1,2,3,4].map((item)=>(
      <div
        key={item}
        className="
          h-24
          rounded-2xl
          bg-gray-100
        "
      />
    ))}

  </div>
)}
{!isLoading &&
ACTIVITY_DATA.length === 0 && (

<div
  className="
    flex
    flex-col
    items-center
    justify-center
    rounded-2xl
    border
    border-dashed
    border-gray-300
    py-16
    text-center
  "
>

  <Clock className="h-14 w-14 text-gray-300" />

  <h3
    className="
      mt-4
      text-lg
      font-semibold
      text-gray-800
    "
  >
    No Activity Yet
  </h3>

  <p
    className="
      mt-2
      text-sm
      text-gray-500
    "
  >
    Your activity timeline will appear here.
  </p>

</div>

)}
{!isLoading &&
ACTIVITY_DATA.length>0 && (

<div
className="
relative
mt-6
"
>
    <div
  className="
    absolute
    left-5
    top-0
    bottom-0
    hidden
    w-0.5
    bg-gray-200
    sm:block
  "
/>
<div
role="list"
aria-label="Activity timeline"
className="
space-y-5
"
>
    {ACTIVITY_DATA.map((activity) => {
  const Icon = activity.icon;

  return (

<div
key={activity.id}
role="listitem"
  className="
    relative
    flex
   gap-3
sm:gap-4
lg:gap-5
    rounded-2xl
    border
    border-gray-200
    bg-white
dark:bg-slate-900
   p-4
sm:p-5
lg:p-6
    shadow-sm

    transition-all
    duration-300

    hover:-translate-y-1
   hover:shadow-lg
hover:border-blue-200
  "
>
<div
  className={`
relative
z-10
hidden
h-10
w-10
flex-shrink-0
items-center
justify-center
rounded-full
border-4
border-white
shadow
sm:flex
animate-pulse

${
activity.status==="success"
? "bg-green-100"
: activity.status==="processing"
? "bg-yellow-100"
: "bg-blue-100"
}
`}
>
  <Icon
  aria-hidden="true"
className={`
h-5
w-5

${
activity.status==="success"
?"text-green-600"
:activity.status==="processing"
?"text-yellow-600"
:"text-blue-600"
}
`}
/>
</div>
<div
className={`
flex
h-10
w-10
flex-shrink-0
items-center
justify-center
rounded-xl
sm:hidden

${
activity.status==="success"
? "bg-green-100"
: activity.status==="processing"
? "bg-yellow-100"
: "bg-blue-100"
}
`}
>
  <Icon
  aria-hidden="true"
className={`
h-5
w-5

${
activity.status==="success"
?"text-green-600"
:activity.status==="processing"
?"text-yellow-600"
:"text-blue-600"
}
`}
/>
</div>
<div
  className="
    min-w-0
    flex-1
  "
>

  <h3
    className="
      text-base
      font-semibold
      text-gray-900
      dark:text-white
    "
  >
    {activity.title}
  </h3>

  <p
    className="
      mt-1
      text-sm
      text-gray-500
      dark:text-slate-400
    "
  >
    {activity.description}
  </p>

  <div
    className="
      mt-3
      flex
      flex-wrap
      items-center
      justify-between
      gap-3
    "
  >

    <span
      className="
        text-xs
        text-gray-500
        dark:text-slate-400
      "
    >
      {activity.time}
    </span>

    <span
      aria-label={`Status ${activity.status}`}
      className={`
        rounded-full
        px-3
        py-1
        text-xs
        font-semibold

        ${
          activity.status==="success"
          ? "bg-green-100 text-green-700"
          : activity.status==="processing"
          ? "bg-yellow-100 text-yellow-700"
          : "bg-blue-100 text-blue-700"
        }
      `}
    >
      {activity.status}
    </span>

  </div>

</div>
</div>

  );

})}
</div>
</div>

)}

</section>
  );
}