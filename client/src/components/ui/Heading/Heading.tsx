import clsx from "clsx";

interface HeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
}

export default function Heading({
  title,
  subtitle,
  description,
  align = "center",
}: HeadingProps) {
  return (
    <div
      className={clsx(
        "max-w-3xl",
        align === "center"
          ? "mx-auto text-center"
          : "text-left"
      )}
    >
      {subtitle && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-400">
          {subtitle}
        </p>
      )}

      <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}