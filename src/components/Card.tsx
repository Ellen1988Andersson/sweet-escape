import type { BadgeVariant, SurfaceVariant } from "./PageLayout";

interface CardProps {
	badge?: string;
	badgeVariant?: BadgeVariant;
	children: React.ReactNode;
	className?: string;
	variant?: SurfaceVariant;
}

const Card: React.FC<CardProps> = ({
	badge,
	badgeVariant = "white",
	children,
	className = "",
	variant = "white",
}) => {
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
		<div className={`rounded-4xl p-6 ${variantStyles[variant]} ${className}`}>
			{badge && (
				<span
					className={`mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${badgeStyles[badgeVariant]}`}
				>
					{badge}
				</span>
			)}
			{children}
		</div>
	);
};

export default Card;