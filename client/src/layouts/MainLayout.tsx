import type { ReactNode } from "react";

import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/landing/Footer/Footer";

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main
        id="main-content"
        className="flex-1 w-full overflow-x-hidden"
      >
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}