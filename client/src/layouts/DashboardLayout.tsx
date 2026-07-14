import type { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
  header: ReactNode;
}

export default function DashboardLayout({
  children,
  sidebar,
  header,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="flex min-h-screen">
        {/* ===========================
            Desktop Sidebar
        ============================ */}
        <aside className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-72 lg:flex-shrink-0 lg:border-r lg:border-slate-200 lg:bg-white">
          <div className="h-full w-full overflow-y-auto">
            {sidebar}
          </div>
        </aside>

        {/* ===========================
            Right Content
        ============================ */}
        <div className="flex min-h-screen min-w-0 flex-1 flex-col">
          {/* ===========================
              Mobile Header
          ============================ */}
          <header className="sticky top-0 z-50 border-b border-slate-200 bg-white lg:hidden">
            {header}
          </header>

          {/* ===========================
              Desktop Header
          ============================ */}
          <header className="sticky top-0 z-40 hidden border-b border-slate-200 bg-white lg:block">
            {header}
          </header>

          {/* ===========================
              Main Content
          ============================ */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto">
            <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8 xl:px-10">
              {children}
            </div>
          </main>

          {/* ===========================
              Footer
          ============================ */}
          <footer className="border-t border-slate-200 bg-white px-4 py-4 text-center text-xs text-slate-500 sm:px-6 sm:text-sm lg:px-8">
            © {new Date().getFullYear()} AI Resume Analyzer. All rights
            reserved.
          </footer>
        </div>
      </div>
    </div>
  );
}