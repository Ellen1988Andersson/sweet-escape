import type { ReactNode } from "react";

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

interface LayoutSectionProps {
  label?: string;
  children?: ReactNode;
}

export function LayoutSection({ label, children }: LayoutSectionProps) {
  return (
    <section
      aria-label={label}
      className="rounded-3xl border border-[#E8EDE7] bg-white p-6 shadow-xs"
    >
      {label && (
        <p className="text-xs font-semibold uppercase tracking-wider text-[#6A746E]">
          {label}
        </p>
      )}
      {children}
    </section>
  );
}

function PageLayout({ title, subtitle, children }: PageLayoutProps) {
  return (
    <div className="mx-auto w-full max-w-md md:max-w-2xl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-[#163B32]">
          {title}
        </h1>
        {subtitle && <p className="mt-2 text-sm text-[#6A746E]">{subtitle}</p>}
      </header>

      {children && <div className="space-y-4">{children}</div>}
    </div>
  );
}

export default PageLayout;