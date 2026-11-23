import PageLayout, { LayoutSection } from "../components/PageLayout";

function Progress() {
  return (
    <PageLayout
      title="Your Progress"
      subtitle="See how far you've come."
    >
      <LayoutSection label="Current goal" />
      <LayoutSection label="This week" />
      <LayoutSection label="Weekly insights" />
      <LayoutSection label="Total XP" />
    </PageLayout>
  );
}

export default Progress;