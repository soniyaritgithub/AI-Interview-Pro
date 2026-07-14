import {
  useState,
  useEffect,
  useRef,
} from "react";

import {
  Bell,
  Menu,
  Moon,
  Search,
  Sun,
  User,
  ChevronDown,
  Settings,
  FileText,
   LogOut,
} from "lucide-react";

import useSidebar from "../../hooks/useSidebar";

import { CURRENT_USER } from "../../constants/dashboard";

export default function DashboardHeader() {
  const {
    isMobile,
    toggleSidebar,
  } = useSidebar();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement | null>(null);

  // 👇 Yahin states add hongi
useEffect(() => {
  function handleClickOutside(
    event: MouseEvent
  ) {
    if (
      profileMenuRef.current &&
      !profileMenuRef.current.contains(
        event.target as Node
      )
    ) {
      setIsProfileMenuOpen(false);
    }
  }

  if (isProfileMenuOpen) {
    document.addEventListener(
      "mousedown",
      handleClickOutside
    );
  }

  return () => {
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );
  };
}, [isProfileMenuOpen]);
useEffect(() => {
  function handleEscape(
    event: KeyboardEvent
  ) {
    if (event.key === "Escape") {
      setIsProfileMenuOpen(false);
    }
  }

  if (isProfileMenuOpen) {
    document.addEventListener(
      "keydown",
      handleEscape
    );
  }

  return () => {
    document.removeEventListener(
      "keydown",
      handleEscape
    );
  };
}, [isProfileMenuOpen]);
  return (
 <header
  className="
    sticky
    top-0
    z-40
    w-full
    border-b
    border-gray-200
    bg-white
    shadow-sm
  "
>
    <div
  className="
    mx-auto
    flex
    h-16
    w-full
    items-center
    justify-between
    px-4
    sm:px-6
    lg:px-8
  "
>
<div
  className="
    flex
    items-center
    gap-4
    min-w-0
  "
>
{isMobile && (
  <button
    type="button"
    onClick={toggleSidebar}
    aria-label="Open Sidebar"
    className="
      inline-flex
      h-10
      w-10
      items-center
      justify-center
      rounded-lg
      border
      border-gray-200
      bg-white
      text-gray-700
      transition-all
      duration-200
      hover:bg-gray-100
      lg:hidden
    "
  >
    <Menu className="h-5 w-5" />
  </button>
)}
<div className="flex flex-col">
  <h1
    className="
      text-lg
      font-semibold
      text-gray-900
      sm:text-xl
    "
  >
    Dashboard
  </h1>

  <p
    className="
      hidden
      text-sm
      text-gray-500
      md:block
    "
  >
    Welcome back 👋
  </p>
</div>
<div
  className="
  hidden
md:flex
flex-1
ml-6
    lg:max-w-md
  "
>
<div className="relative w-full">

  <Search
    className="
      absolute
      left-3
      top-1/2
      h-5
      w-5
      -translate-y-1/2
      text-gray-400
    "
  />

  <input
    type="text"
    placeholder="Search resumes..."
    className="
      h-11
      w-full
      rounded-xl
      border
      border-gray-200
      bg-gray-50
      pl-10
      pr-4
      text-sm
      outline-none
      transition-all
      duration-200
      focus:border-blue-500
      focus:bg-white
      focus:ring-2
      focus:ring-blue-200
    "
  />

</div>
</div>
</div>
<div
  className="
    flex
    items-center
    gap-3
    flex-shrink-0
  "
>
<button
  type="button"
  aria-label="Notifications"
  onClick={() =>
    setIsNotificationOpen(!isNotificationOpen)
  }
  className="
    relative
    flex
    h-10
    w-10
    items-center
    justify-center
    rounded-lg
    border
    border-gray-200
    bg-white
    text-gray-600
    transition-all
    duration-200
    hover:bg-gray-100
  "
>
  <Bell className="h-5 w-5" />

  <span
    className="
      absolute
      right-2
      top-2
      h-2
      w-2
      rounded-full
      bg-red-500
    "
  />
</button>

<button
  type="button"
  aria-label="Toggle Theme"
  onClick={() => setIsDarkMode(!isDarkMode)}
  className="
    flex
    h-10
    w-10
    items-center
    justify-center
    rounded-lg
    border
    border-gray-200
    bg-white
    text-gray-600
    transition-all
    duration-200
    hover:bg-gray-100
    hover:text-blue-600
    focus:outline-none
    focus:ring-2
    focus:ring-blue-500
    focus:ring-offset-2
  "
>
  {isDarkMode ? (
    <Sun className="h-5 w-5" />
  ) : (
    <Moon className="h-5 w-5" />
  )}
</button>
<div
  ref={profileMenuRef}
  className="relative"
>
<button
  type="button"
  aria-label="Open Profile Menu"
  aria-expanded={isProfileMenuOpen}
  aria-haspopup="menu"
aria-controls="profile-dropdown"
  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
  className="
flex
w-full
items-center
gap-3
px-4
py-3
text-sm
text-gray-700
transition-colors
hover:bg-gray-50

focus:outline-none
focus:ring-2
focus:ring-blue-500
focus:ring-offset-2
"
>
  {/* Avatar */}
  <div
    className="
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-full
      bg-blue-100
      text-blue-600
      font-semibold
    "
  >
    <User className="h-5 w-5" />
  </div>

  {/* User Info (Desktop Only) */}
  <div className="hidden flex-col items-start lg:flex">
    <span className="text-sm font-semibold text-gray-900">
      {CURRENT_USER.name}
    </span>

    <span className="text-xs text-gray-500">
      ⭐ {CURRENT_USER.plan}
    </span>
  </div>

  {/* Dropdown Icon */}
  <ChevronDown
    className={`
      hidden
      h-4
      w-4
      text-gray-500
      transition-transform
      duration-200
      lg:block

      ${
        isProfileMenuOpen
          ? "rotate-180"
          : ""
      }
    `}
  />
</button>
{isProfileMenuOpen && (
  <div
     id="profile-dropdown"
    role="menu"
   className={`
absolute
right-0
top-14
z-50
w-64
origin-top-right
rounded-xl
border
border-gray-200
bg-white
shadow-xl
overflow-hidden

transform
transition-all
duration-200
ease-out

${
  isProfileMenuOpen
    ? "scale-100 opacity-100 translate-y-0"
    : "pointer-events-none scale-95 opacity-0 -translate-y-2"
}
`}
  >
<div className="border-b border-gray-100 p-4">
  <p className="text-sm font-semibold text-gray-900">
    {CURRENT_USER.name}
  </p>

  <p className="mt-1 text-xs text-gray-500">
    ⭐ {CURRENT_USER.plan}
  </p>
</div>
<nav className="py-2">
  {/* Items will go here */}
  <button
   role="menuitem"
  type="button"
  className="
flex
w-full
items-center
gap-3
px-4
py-3
text-sm
text-gray-700
transition-colors
hover:bg-gray-50

focus:outline-none
focus:ring-2
focus:ring-blue-500
focus:ring-offset-2
"
>
  <User className="h-4 w-4" />

  My Profile
</button>
<button
  type="button"
  className="
flex
w-full
items-center
gap-3
px-4
py-3
text-sm
text-gray-700
transition-colors
hover:bg-gray-50

focus:outline-none
focus:ring-2
focus:ring-blue-500
focus:ring-offset-2
"
>
  <Settings className="h-4 w-4" />

  Settings
</button>
<button
  type="button"
 className="
flex
w-full
items-center
gap-3
px-4
py-3
text-sm
text-gray-700
transition-colors
hover:bg-gray-50

focus:outline-none
focus:ring-2
focus:ring-blue-500
focus:ring-offset-2
"
>
  <FileText className="h-4 w-4" />

  Resume History
</button>
<button
  type="button"
  className="
    flex
    w-full
    items-center
    gap-3
    border-t
    border-gray-100
    px-4
    py-3
    text-sm
    text-red-600
    transition-colors
    hover:bg-red-50
  "
>
  <LogOut className="h-4 w-4" />

  Logout
</button>
</nav>
  </div>
)}
</div>
</div>
</div>


  </header>
);
}