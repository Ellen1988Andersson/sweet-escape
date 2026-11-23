import PageLayout, { LayoutSection } from "../components/PageLayout";

function Home() {
  return (
    <PageLayout
      title="Sweet Escape"
      subtitle="Track your sugar-free journey, one day at a time."
    >
      <LayoutSection label="Current streak" />
      <LayoutSection label="Daily check-in" />
      <LayoutSection label="Today's progress" />
    </PageLayout>
  );
}

export default Home;