import Layout from '@/layout/Layout/Layout';
import RequestSection from '@/page-components/RequestSection/RequestSection';
import StagesOfWorkSection from '@/page-components/StagesOfWorkSection/StagesOfWorkSection';

export default function Home() {
  return (
    <Layout>
      <RequestSection />
      <StagesOfWorkSection />
    </Layout>
  );
}
