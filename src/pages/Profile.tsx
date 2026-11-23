import PageLayout, { LayoutSection } from "../components/PageLayout";

function Profile() {
  return (
    <PageLayout
      title="My Profile"
      subtitle="Your personal sugar-free journey."
    >
      <LayoutSection label="Profile & Total XP" />
      <LayoutSection label="Statistics" />
      <LayoutSection label="Current goal" />
    </PageLayout>
  );
}

export default Profile;