import Layout from '@/layout/Layout/Layout';
import HeroSection from '@/page-components/HeroSection/HeroSection';
import RequestSection from '@/page-components/RequestSection/RequestSection';
import StagesOfWorkSection from '@/page-components/StagesOfWorkSection/StagesOfWorkSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <RequestSection />
      <StagesOfWorkSection />
    </Layout>
  );
}
