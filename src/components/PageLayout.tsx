import type { ReactNode } from "react";

export type SurfaceVariant = "white" | "dark" | "teal" | "sand";
export type BadgeVariant = "white" | "teal" | "amber" | "gold" | "dark" | "sand" | "terracotta";

interface PageLayoutProps {
	title: string;
	subtitle?: string;
	children?: ReactNode;
}

interface LayoutSectionProps {
	label?: string;
	variant?: SurfaceVariant;
	badgeVariant?: BadgeVariant;
	className?: string;
	children?: ReactNode;
}

export function LayoutSection({
	label,
	variant = "white",
	badgeVariant = "white",
	className = "",
	children,
}: LayoutSectionProps) {
	const variantStyles: Record<SurfaceVariant, string> = {
		white: "bg-white text-[#24483D] border border-[#EAEDE5] shadow-xs",
		dark: "bg-[#24483D] text-white",
		teal: "bg-[#DCEBE1] text-[#24483D]",
		sand: "bg-[#EAE4D7] text-[#24483D]",
	};

	const badgeStyles: Record<BadgeVariant, string> = {
		white: "bg-white/85 text-[#24483D]",
		teal: "bg-[#DCEBE1] text-[#24483D]",
		amber: "bg-[#F4A261] text-[#24483D]",
		gold: "bg-[#E9B96E] text-[#24483D]",
		dark: "bg-[#356B58] text-white",
		sand: "bg-[#EAE4D7] text-[#24483D]",
		terracotta: "bg-[#B56950] text-white",
	};

	return (
		<section
			aria-label={label}
			className={`rounded-4xl p-6 ${variantStyles[variant]} ${className}`}
		>
			{label && (
				<span
					className={`mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${badgeStyles[badgeVariant]}`}
				>
					{label}
				</span>
			)}
			{children}
		</section>
	);
}

function PageLayout({ title, subtitle, children }: PageLayoutProps) {
	return (
		<div className="mx-auto w-full max-w-md md:max-w-2xl">
			<header className="mb-8">
				<h1 className="text-3xl font-bold tracking-tight text-[#24483D]">
					{title}
				</h1>
				{subtitle && <p className="mt-2 text-sm text-[#6A746E]">{subtitle}</p>}
			</header>

			{children && <div className="space-y-4">{children}</div>}
		</div>
	);
}

export default PageLayout;