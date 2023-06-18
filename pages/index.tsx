import Layout from '@/layout/Layout/Layout';
import HeroSection from '@/page-components/HeroSection/HeroSection';
import AdvantagesSection from '@/page-components/AdvantagesSection/AdvantagesSection';
import RequestSection from '@/page-components/RequestSection/RequestSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AdvantagesSection />
      <RequestSection />
    </Layout>
  );
}
