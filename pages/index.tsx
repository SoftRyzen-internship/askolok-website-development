import Head from 'next/head';

import Layout from '@/layout/Layout/Layout';
import HeroSection from '@/page-components/HeroSection/HeroSection';
import AdvantagesSection from '@/page-components/AdvantagesSection/AdvantagesSection';
import RequestSection from '@/page-components/RequestSection/RequestSection';
import StagesOfWorkSection from '@/page-components/StagesOfWorkSection/StagesOfWorkSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Асколок Анастасия</title>
      </Head>
      <Layout>
        <HeroSection />
        <AdvantagesSection />
        <StagesOfWorkSection />
        <RequestSection />
      </Layout>
    </>
  );
}
