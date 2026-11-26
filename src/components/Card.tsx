type CardVariant = "sage" | "dark" | "mint" | "amber" | "white";

interface CardProps {
	children: React.ReactNode;
	variant?: CardVariant;
	className?: string;
	as?: "section" | "article" | "div";
}

// Reusable base card matching the Sweet Escape color palette
const Card: React.FC<CardProps> = ({
	children,
	variant = "sage",
	className = "",
	as: Component = "section",
}) => {
	const variantStyles: Record<CardVariant, string> = {
		sage: "bg-[#E5EEE9] text-[#163B32]",
		dark: "bg-[#163B32] text-white",
		mint: "bg-[#9affc7] text-[#163B32]",
		amber: "bg-[#F4A261] text-[#163B32]",
		white: "bg-white text-[#163B32]",
	};

	return (
		<Component
			className={`rounded-4xl p-6 ${variantStyles[variant]} ${className}`}
		>
			{children}
		</Component>
	);
};

export default Card;