import { QueryClient, dehydrate } from 'react-query';
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection/CTASection';

import {
  SupportProgramBanners,
  useSupportProgramBanners,
} from '../components/SupportProgramBanners';

import { SupportPrograms, useSupportProgramFilters } from '../components/SupportPrograms';

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery(useSupportProgramBanners.getKeys(), useSupportProgramBanners.fetcher),
    queryClient.prefetchQuery(useSupportProgramFilters.getKeys(), useSupportProgramFilters.fetcher),
  ]);

  return {
    props: {
      reactQueryData: dehydrate(queryClient),
    },
    revalidate: 60,
  };
}

function Home() {
  return (
    <>
      <Header />
      <SupportProgramBanners />
      <SupportPrograms />
      <CTASection />
      <Footer />
    </>
  );
}
export default Home;
