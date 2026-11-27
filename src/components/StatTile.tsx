import { Icon } from "@iconify/react";

interface StatTileProps {
	icon: string;
	iconColor?: string;
	value: string | number;
	label: string;
	variant?: "white" | "cream" | "teal";
}

const StatTile: React.FC<StatTileProps> = ({
	icon,
	iconColor = "text-[#24483D]",
	value,
	label,
	variant = "cream",
}) => {
	const variantStyles: Record<NonNullable<StatTileProps["variant"]>, string> = {
		white: "bg-white border border-[#EAEDE5] text-[#24483D]",
		cream: "bg-[#F7F5EF] border border-[#CFE0D6] text-[#24483D]",
		teal: "bg-[#DCEBE1] text-[#24483D]",
	};

	return (
		<div
			className={`flex flex-col items-center rounded-2xl px-3 py-5 text-center ${variantStyles[variant]}`}
		>
			<div className={`flex h-11 w-11 items-center justify-center ${iconColor}`}>
				<Icon icon={icon} width={26} height={26} aria-hidden="true" />
			</div>

			<p className="mt-3 text-base font-bold text-[#24483D]">{value}</p>

			<p className="mt-1 text-xs font-medium text-[#6A746E]">{label}</p>
		</div>
	);
};

export default StatTile;