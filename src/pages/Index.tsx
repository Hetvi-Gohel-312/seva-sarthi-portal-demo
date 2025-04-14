
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import StatusTracker from "@/components/home/StatusTracker";
import InfoSection from "@/components/home/InfoSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <InfoSection />
      <StatusTracker />
    </Layout>
  );
};

export default Index;
