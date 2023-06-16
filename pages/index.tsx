import Layout from '@/layout/Layout/Layout';
import HeroSection from '@/page-components/HeroSection/HeroSection';
import RequestSection from '@/page-components/RequestSection/RequestSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <RequestSection />
    </Layout>
  );
}
