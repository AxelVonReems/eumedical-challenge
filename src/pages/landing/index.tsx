import BottomCta from '../../components/landing/BottomCta';
import Capabilities from '../../components/landing/Capabilities';
import CoverageVideo from '../../components/landing/CoverageVideo';
import Faq from '../../components/landing/Faq';
import Hero from '../../components/landing/Hero';
import ServicesGrid from '../../components/landing/ServicesGrid';
import SocialProof from '../../components/landing/SocialProof';

export default function Index() {
  return (
    <main className="flex-1 bg-eumedical-light-grey/50 min-h-screen flex flex-col">
      <Hero />
      <ServicesGrid />
      <CoverageVideo />
      <Capabilities />
      <SocialProof />
      <Faq />
      <BottomCta />
    </main>
  );
}