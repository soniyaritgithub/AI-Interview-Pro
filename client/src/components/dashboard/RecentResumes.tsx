import {
  Eye,
  FileText,
} from "lucide-react";

interface ResumeItem {
  id: string;
  name: string;
  uploadedAt: string;
  atsScore: number;
  status: "Completed" | "Processing";
}
const RECENT_RESUMES: ResumeItem[] = [
    
  {
    id: "1",
    name: "Frontend_Resume.pdf",
    uploadedAt: "Today",
    atsScore: 92,
    status: "Completed",
  },
  {
    id: "2",
    name: "Backend_Resume.pdf",
    uploadedAt: "Yesterday",
    atsScore: 86,
    status: "Completed",
  },
  {
    id: "3",
    name: "FullStack_Resume.pdf",
    uploadedAt: "2 Days Ago",
    atsScore: 78,
    status: "Processing",
  },
];
const isLoading = false;
export default function RecentResumes() {
    return (

<section
  aria-labelledby="recent-resumes"
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
    items-center
    justify-between
  "
>
  <div>
    <h2
      id="recent-resumes"
      className="
        text-xl
        font-bold
        text-gray-900
      "
    >
      Recent Resumes
    </h2>

    <p
      className="
        mt-1
        text-sm
        text-gray-500
      "
    >
      Recently uploaded resumes.
    </p>
  </div>
</div>
{isLoading && (
  <div className="space-y-4 animate-pulse">
    {[1, 2, 3].map((item) => (
      <div
        key={item}
        className="
          h-20
          rounded-xl
          bg-gray-100
        "
      />
    ))}
  </div>
)}

{!isLoading &&
RECENT_RESUMES.length === 0 && (

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

<FileText className="h-14 w-14 text-gray-300" />

<h3
  className="
    mt-4
    text-lg
    font-semibold
    text-gray-800
  "
>
  No Resume Found
</h3>

<p
  className="
    mt-2
    text-sm
    text-gray-500
  "
>
  Upload your first resume to get started.
</p>

<button
  type="button"
  aria-label="Upload Resume"
  className="
    mt-6
    rounded-xl
    bg-blue-600
    px-5
    py-3
    text-white
    transition
    hover:bg-blue-700
    focus:outline-none
    focus:ring-2
    focus:ring-blue-500
    focus:ring-offset-2
  "
>
  Upload Resume
</button>

</div>

)}

<div className="overflow-x-auto">

{!isLoading &&
RECENT_RESUMES.length > 0 && (

<table
aria-label="Recent resumes"
  className="
    hidden
    min-w-full
    divide-y
    divide-gray-200
    lg:table
  "
>
    <thead>
  <tr>

    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
      Resume
    </th>

    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
      Uploaded
    </th>

    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
      ATS Score
    </th>

    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
      Status
    </th>

    <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
      Action
    </th>

  </tr>
</thead>
<tbody
  className="
    divide-y
    divide-gray-100
  "
>
    {RECENT_RESUMES.map((resume) => (
        <tr
  key={resume.id}
 className="
hover:bg-blue-50
transition-all
duration-300
"
>
    <td className="px-4 py-4">

  <div className="flex items-center gap-3">

    <div
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-lg
        bg-blue-50
      "
    >
      <FileText className="h-5 w-5 text-blue-600" />
    </div>

    <span
      className="
        font-medium
        text-gray-900
      "
    >
      {resume.name}
    </span>

  </div>

</td>
<td className="px-4 py-4 text-gray-600">
  {resume.uploadedAt}
</td>
<td className="px-4 py-4">

  <span
    className="
      rounded-full
      bg-green-100
      px-3
      py-1
      text-sm
      font-semibold
      text-green-700
    "
  >
    {resume.atsScore}%
  </span>

</td>
<td className="px-4 py-4">

  <span
    className={`
      rounded-full
      px-3
      py-1
      text-sm
      font-medium

      ${
        resume.status === "Completed"
          ? "bg-green-100 text-green-700"
          : "bg-yellow-100 text-yellow-700"
      }
    `}
  >
    {resume.status}
  </span>

</td>
<td className="px-4 py-4 text-right">

 <button
aria-label={`View ${resume.name}`}
    type="button"
    className="
      inline-flex
      items-center
      gap-2

      rounded-lg

      border
      border-gray-200

      px-3
      py-2

      text-sm

      transition-all
duration-200
hover:bg-blue-50

      hover:bg-gray-50

      focus:outline-none
      focus:ring-2
      focus:ring-blue-500
      focus:ring-offset-2
    "
  >
    <Eye className="h-4 w-4" />

    View

  </button>

</td>
</tr>

))}

</tbody>

</table>

)}

</div>

{!isLoading &&
RECENT_RESUMES.length > 0 && (

<div
  className="
    grid
    gap-4
    sm:gap-5
    lg:hidden
  "
>
    {RECENT_RESUMES.map((resume) => (
        <div
key={resume.id}
role="article"
aria-label={resume.name}
  className="
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
  "
>
    <div className="flex items-center gap-3">

<div
  className="
    flex
    h-11
    w-11
    items-center
    justify-center
    rounded-xl
    bg-blue-50
  "
>
<FileText className="h-5 w-5 text-blue-600"/>

</div>

<div className="min-w-0">

<p className="truncate font-semibold text-gray-900">
{resume.name}
</p>

<p className="text-sm text-gray-500">
{resume.uploadedAt}
</p>

</div>

</div>
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
    rounded-full
    bg-green-100
    px-3
    py-1
    text-sm
    font-semibold
    text-green-700
  "
>
{resume.atsScore}%
</span>

<span
  className={`
rounded-full
px-3
py-1
text-sm

${
resume.status==="Completed"
?"bg-green-100 text-green-700"
:"bg-yellow-100 text-yellow-700"
}
`}
>
{resume.status}
</span>

</div>
<div
  className="
    mt-6
    flex
    gap-3
  "
>

<button
  type="button"
  aria-label={`View ${resume.name}`}
  className="
    flex-1
    rounded-xl
    border
    border-gray-200
    px-4
    py-3
    transition
    hover:bg-gray-50
    focus:outline-none
    focus:ring-2
    focus:ring-blue-500
    focus:ring-offset-2
  "
>

<Eye className="mr-2 inline h-4 w-4"/>

View

</button>

{/* Future API Integration */}

<button
  type="button"
  disabled
  aria-disabled="true"
  className="
    rounded-xl
    border
    border-dashed
    border-gray-300
    px-4
    py-3
    text-gray-400
    cursor-not-allowed
    
  "
>

Delete

</button>

</div>
</div>

))}
</div>

)}

</section>
    ); 
}