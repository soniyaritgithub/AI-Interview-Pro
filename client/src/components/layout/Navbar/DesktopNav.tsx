import { useState } from "react";
import clsx from "clsx";
import { navigation } from "./navigation";

export default function DesktopNav() {
  const [active, setActive] = useState("#features");

  return (
    <nav
      className="
      hidden
      lg:flex
      items-center
      gap-5
      xl:gap-8
      "
    >
      {navigation.map((item) => (
        <a
          key={item.label}
          href={item.href}
          onClick={() => setActive(item.href)}
          className={clsx(
            "relative text-sm font-medium transition-all duration-300",

            active === item.href
              ? "text-violet-400"
              : "text-slate-300 hover:text-white"
          )}
        >
          {item.label}

          {active === item.href && (
            <span
              className="
              absolute
              -bottom-2
              left-0
              h-0.5
              w-full
              rounded-full
              bg-violet-500
              "
            />
          )}
        </a>
      ))}
    </nav>
  );
}