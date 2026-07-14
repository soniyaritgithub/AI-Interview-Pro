import type { ReactNode } from "react";
import { ThemeProvider } from "../context/ThemeProvider";

interface Props {
  children: ReactNode;
}

export default function AppProviders({ children }: Props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
      storageKey="ai-interview-theme"
    >
      {children}
    </ThemeProvider>
  );
}