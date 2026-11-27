import { Icon } from "@iconify/react";

import Button from "../components/Button";
import PageLayout, { LayoutSection } from "../components/PageLayout";
import StatTile from "../components/StatTile";

const Home: React.FC = () => {
	return (
		<PageLayout
			title="Sweet Escape"
			subtitle="Track your sugar-free journey, one day at a time."
		>
			{/* Section 1: Current streak */}
			<LayoutSection label="Current streak" badgeVariant="amber" variant="sand">
				<div className="flex items-center justify-between gap-4">
					<div>
						<p className="text-sm font-medium text-[#6A746E]">
							Active streak
						</p>
						<p className="mt-1 text-3xl font-bold text-[#24483D]">
							0 days
						</p>
					</div>

					<Icon
						icon="solar:fire-bold"
						width={36}
						height={36}
						className="shrink-0 text-[#F4A261]"
						aria-hidden="true"
					/>
				</div>
			</LayoutSection>

			{/* Section 2: Daily check-in */}
			<LayoutSection label="Daily check-in" badgeVariant="gold" variant="dark">
				<h2 className="text-lg font-bold text-white">
					Ready to begin your journey?
				</h2>
				<p className="mt-1.5 text-sm leading-6 text-white/80">
					Set your sugar-free goal period to start tracking your progress and
					earning XP.
				</p>

				<div className="mt-5 flex justify-end">
					<Button to="/start" variant="secondary">
						Start
						<Icon
							icon="solar:arrow-right-linear"
							width={18}
							height={18}
							aria-hidden="true"
						/>
					</Button>
				</div>
			</LayoutSection>

			{/* Section 3: Today's progress */}
			<LayoutSection label="Today's progress" badgeVariant="dark" variant="teal">
				<h2 className="text-lg font-bold text-[#24483D]">Keep going!</h2>
				<p className="mt-1 text-sm text-[#24483D]/80">
					Every small step makes a difference.
				</p>

				<div className="mt-5 grid grid-cols-3 gap-3">
					<StatTile
						icon="solar:clock-circle-bold"
						iconColor="text-[#F4A261]"
						value="Pending"
						label="Check-in"
						variant="cream"
					/>
					<StatTile
						icon="solar:fire-bold"
						iconColor="text-[#F4A261]"
						value={0}
						label="Streak days"
						variant="cream"
					/>
					<StatTile
						icon="solar:stars-bold"
						iconColor="text-[#D49A32]"
						value={0}
						label="Total XP"
						variant="cream"
					/>
				</div>
			</LayoutSection>
		</PageLayout>
	);
};

export default Home;