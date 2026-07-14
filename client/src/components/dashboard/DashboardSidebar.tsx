import { NavLink } from "react-router-dom";

import {
  Menu,
  ChevronLeft,
  ChevronRight,
  LogOut,
  User,
} from "lucide-react";

import useSidebar from "../../hooks/useSidebar";

import {
  DASHBOARD_NAVIGATION,
  CURRENT_USER,
} from "../../constants/dashboard";




// ==========================================
// Step 2 — Navigation Data (Metadata Array)
// ==========================================


export default function DashboardSidebar() {
   const {
  isOpen,
  isCollapsed,
  isMobile,
  isTablet,
  isDesktop,
  sidebarRef,
  toggleSidebar,
  closeSidebar,
} = useSidebar();
  return (
    <>
  {/* Step 3 & 10 — Outer Container & Mobile Behavior */}
    {isMobile && (
<button
aria-label={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
aria-expanded={!isCollapsed}
aria-controls="dashboard-sidebar"
    type="button"
    onClick={toggleSidebar}
    className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow lg:hidden"
  >
    <Menu className="h-6 w-6" />
  </button>
)}
{isMobile && isOpen && (
  <div
    className="fixed inset-0 z-40 bg-black/50 lg:hidden"
    onClick={closeSidebar}
  />
)}
    <aside
    id="dashboard-sidebar"
role="navigation"
aria-label="Dashboard Sidebar"
  ref={sidebarRef}
  className={`
fixed top-0 left-0 z-50
flex h-screen flex-col
border-r 
bg-white dark:bg-slate-900

text-gray-700 dark:text-slate-200

border-gray-200 dark:border-slate-700
shadow-lg
overflow-hidden
transition-[width,transform] duration-300 ease-in-out
select-none

${
  isMobile
    ? "w-[280px]"
    : isTablet
      ? (isCollapsed ? "w-[88px]" : "w-[280px]")
      : isDesktop
        ? (isCollapsed ? "w-[88px]" : "w-[280px]")
        : "w-[280px]"
}

${
  isMobile
    ? isOpen
      ? "translate-x-0 opacity-100"
      : "-translate-x-full opacity-0"
    : "translate-x-0 opacity-100"
}
`}
>
      
      {/* Step 4 — Logo Section */}
      <div className="h-16 flex items-center gap-3 px-6 border-b border-gray-100 flex-shrink-0">
        {/* App Logo Placeholder */}
        <div aria-hidden="true" className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
          A
        </div>
        {/* App Name */}
        {!isCollapsed && (
  <span
    className="
      font-semibold
      text-xl
      tracking-tight
      text-gray-900
      whitespace-nowrap
      transition-all
      duration-300
    "
  >
    AI Interview Pro
  </span>
)}
        <button
  type="button"
  onClick={toggleSidebar}
  className="ml-auto hidden lg:flex h-8 w-8 items-center justify-center rounded-lg hover:bg-gray-100 transition"
>
  {isCollapsed ? (
    <ChevronRight className="h-5 w-5" />
  ) : (
    <ChevronLeft className="h-5 w-5" />
  )}
</button>
      </div>

      {/* Step 5, 6, 7 & 11 — Navigation & Accessibility */}
      <nav aria-label="Primary navigation" className="overflow-y-auto py-4 px-4 space-y-1">
        {DASHBOARD_NAVIGATION.map((item) => {
          const Icon = item.icon;
          
          return (
            
            <NavLink
title={isCollapsed ? item.label : ""}
  key={item.id}
  to={item.path}
>
  {({ isActive }) => (
    <div
      className={`
        relative
        flex
        items-center
        py-3
        transition-all
        duration-300
        rounded-xl
        font-medium
        group
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        focus:ring-offset-2

        ${
          isCollapsed
            ? "justify-center px-2"
            : "gap-3 px-4"
        }

        ${
          isActive
            ? "bg-blue-50 text-blue-600 font-semibold"
            : "text-gray-600 hover:bg-blue-50 hover:text-gray-900 hover:scale-[1.02]"
        }
      `}
    >
      {/* Active Left Border */}
      {isActive && (
        <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r bg-blue-600" />
      )}

      {/* Icon */}
     <Icon
aria-hidden="true"
        className={`
h-5
w-5
flex-shrink-0
transition-all
duration-200
group-hover:scale-110

${
isActive
? "text-blue-600"
: "text-gray-400 group-hover:text-gray-600"
}
`}
      />

      {/* Label */}
      {!isCollapsed && (
        <span
          className={`
            whitespace-nowrap
            text-sm
           transition-all
duration-300
            duration-200

            ${
              isActive
                ? "text-blue-600"
                : ""
            }
          `}
        >
          {item.label}
        </span>
      )}
    </div>
  )}
</NavLink>
          );
        })}
      </nav>

      {/* Step 8 — Spacer (Pushes the footer down) */}
      <div className="flex-1" />

      {/* Step 9 — Footer / Profile Section */}
      <div
className="
p-4
border-t
border-gray-100
dark:border-slate-700
bg-gray-50/50
dark:bg-slate-900
">
        <div className="flex items-center gap-3 p-2 rounded-xl">
          {/* Avatar Placeholder */}
          <div title={CURRENT_USER.name} className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold flex-shrink-0">
            <User className="w-5 h-5 text-gray-500" />
          </div>
          
          {/* User Details */}
          {!isCollapsed && (
  <div className="flex min-w-0 flex-col">
    <span className="truncate text-sm font-semibold text-gray-900">
      {CURRENT_USER.name}
    </span>

    <span className="truncate text-xs text-gray-500">
      {CURRENT_USER.plan}
    </span>
  </div>
)}
        </div>
        <button
aria-label="Logout"
  type="button"
  className="mt-3 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-red-600 hover:bg-red-50 transition"
>
  <LogOut className="h-5 w-5" />

  {!isCollapsed && (
    <span>Logout</span>
  )}
</button>
      </div>

    </aside>
    </>
  );
}