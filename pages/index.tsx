import Layout from '@/layout/Layout/Layout';
import HeroSection from '@/page-components/HeroSection/HeroSection';
import AdvantagesSection from '@/page-components/AdvantagesSection/AdvantagesSection';
import RequestSection from '@/page-components/RequestSection/RequestSection';
import StagesOfWorkSection from '@/page-components/StagesOfWorkSection/StagesOfWorkSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AdvantagesSection />
      <RequestSection />
      <StagesOfWorkSection />
    </Layout>
  );
}
