import {
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";

import useMediaQuery from "./useMediaQuery";

export default function useSidebar() {
  /* ==========================================================
     Screen Detection
  ========================================================== */

  const {
    isMobile,
    isTablet,
    isDesktop,
  } = useMediaQuery();

  /* ==========================================================
     Sidebar State
  ========================================================== */

  const [isOpen, setIsOpen] = useState(false);

  const [isCollapsed, setIsCollapsed] =
    useState(false);

  /* ==========================================================
     Sidebar Reference
  ========================================================== */

  const sidebarRef =
    useRef<HTMLDivElement | null>(null);

  // Next Steps...
/* ==========================================================
   Sidebar Actions
========================================================== */

/**
 * Open Mobile Drawer
 */
const openSidebar = useCallback(() => {
  if (isMobile) {
    setIsOpen(true);
  }
}, [isMobile]);

/**
 * Close Mobile Drawer
 */
const closeSidebar = useCallback(() => {
  if (isMobile) {
    setIsOpen(false);
  }
}, [isMobile]);

/**
 * Collapse Desktop Sidebar
 */
const collapseSidebar = useCallback(() => {
  if (!isMobile) {
    setIsCollapsed(true);
  }
}, [isMobile]);

/**
 * Expand Desktop Sidebar
 */
const expandSidebar = useCallback(() => {
  if (!isMobile) {
    setIsCollapsed(false);
  }
}, [isMobile]);

/**
 * Toggle Sidebar
 *
 * Mobile  -> Open / Close Drawer
 * Desktop -> Collapse / Expand Sidebar
 */
const toggleSidebar = useCallback(() => {
  if (isMobile) {
    setIsOpen((prev) => !prev);
  } else {
    setIsCollapsed((prev) => !prev);
  }
}, [isMobile]);

/* ==========================================================
   Responsive Resize Effect
========================================================== */

useEffect(() => {
  /*
   * Mobile
   */
  if (isMobile) {
    setIsOpen(false);
  }

  /*
   * Desktop / Tablet
   */
  if (isDesktop) {
    setIsOpen(false);
  }
}, [isMobile, isDesktop]);

/* ==========================================================
   LocalStorage
========================================================== */

const STORAGE_KEY = "dashboard-sidebar-collapsed";

/*
 * Load sidebar state on first render
 */
useEffect(() => {
  if (typeof window === "undefined") return;

  const savedState = window.localStorage.getItem(STORAGE_KEY);

  if (savedState !== null) {
    setIsCollapsed(savedState === "true");
  }
}, []);

/*
 * Save sidebar state whenever it changes
 */
useEffect(() => {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(
    STORAGE_KEY,
    String(isCollapsed)
  );
}, [isCollapsed]);

/* ==========================================================
   Escape Key Support
   - Close Mobile Drawer
   - Keyboard Accessibility
========================================================== */

/* ==========================================================
   Escape Key Support
   - Close Mobile Drawer
   - Keyboard Accessibility
========================================================== */

useEffect(() => {
  /*
   * Run only when
   * 1. Mobile Device
   * 2. Drawer is Open
   */
  if (!isMobile || !isOpen) return;

  const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  /*
   * Register Listener
   */
  window.addEventListener("keydown", handleEscapeKey);

  /*
   * Cleanup
   */
  return () => {
    window.removeEventListener(
      "keydown",
      handleEscapeKey
    );
  };
}, [isMobile, isOpen]);
/* ==========================================================
   Outside Click Support
   - Close Drawer when clicking outside
========================================================== */

useEffect(() => {
  /*
   * Run only when
   * 1. Mobile Device
   * 2. Drawer is Open
   */
  if (!isMobile || !isOpen) return;

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  /*
   * Register Listener
   */
  document.addEventListener(
    "mousedown",
    handleOutsideClick
  );

  /*
   * Cleanup
   */
  return () => {
    document.removeEventListener(
      "mousedown",
      handleOutsideClick
    );
  };
}, [isMobile, isOpen]);

/* ==========================================================
   Hook Return
========================================================== */

return {
  /* Screen */
  isMobile,
  isTablet,
  isDesktop,

  /* Sidebar State */
  isOpen,
  isCollapsed,

  /* Sidebar Reference */
  sidebarRef,

  /* Actions */
  toggleSidebar,
  openSidebar,
  closeSidebar,
  collapseSidebar,
  expandSidebar,
};
}
