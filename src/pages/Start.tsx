import PageLayout, { LayoutSection } from "../components/PageLayout";

function Start() {
  return (
    <PageLayout
      title="Start your journey"
      subtitle="Choose your sugar-free goal."
    >
      <LayoutSection label="Introduction & Goal selection" />
    </PageLayout>
  );
}

export default Start;