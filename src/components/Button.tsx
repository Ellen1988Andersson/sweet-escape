import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps {
	ariaLabel?: string;
	children: React.ReactNode;
	className?: string;
	disabled?: boolean;
	onClick?: () => void;
	to?: string;
	type?: "button" | "submit" | "reset";
	variant?: ButtonVariant;
}

// Reusable button component supporting both <button> and React Router <Link>
const Button: React.FC<ButtonProps> = ({
	ariaLabel,
	children,
	className = "",
	disabled = false,
	onClick,
	to,
	type = "button",
	variant = "primary",
}) => {
	const variantStyles: Record<ButtonVariant, string> = {
		primary:
			"bg-[#24483D] text-white border border-transparent hover:bg-[#2E8B67] disabled:opacity-50 disabled:pointer-events-none",
		secondary:
			"bg-[#F4A261] text-[#24483D] border border-transparent hover:bg-[#2E8B67] hover:text-white disabled:opacity-50 disabled:pointer-events-none",
		outline:
			"bg-transparent text-[#24483D] border border-[#24483D] hover:bg-[#24483D] hover:text-white hover:border-transparent disabled:opacity-50 disabled:pointer-events-none",
		ghost:
			"bg-transparent text-[#24483D] border border-transparent hover:bg-[#DCEBE1] underline underline-offset-4",
	};

	const baseStyles = `inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A261] ${variantStyles[variant]} ${className}`;

	if (to) {
		return (
			<Link to={to} aria-label={ariaLabel} className={baseStyles}>
				{children}
			</Link>
		);
	}

	return (
		<button
			type={type}
			disabled={disabled}
			onClick={onClick}
			aria-label={ariaLabel}
			className={baseStyles}
		>
			{children}
		</button>
	);
};

export default Button;