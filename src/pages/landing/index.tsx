import Capabilities from '../../components/landing/Capabilities';
import CoverageVideo from '../../components/landing/CoverageVideo';
import Faq from '../../components/landing/Faq';
import Hero from '../../components/landing/Hero';
import ServicesGrid from '../../components/landing/ServicesGrid';
import SocialProof from '../../components/landing/SocialProof';

export function Index() {
  return (
    <main className="flex-1 bg-eumedical-white min-h-screen flex flex-col">
      <Hero />
      <ServicesGrid />
      <CoverageVideo />
      <Capabilities />
      <SocialProof />
      <Faq />

      {/* Bottom CTA */}

      <section className="p-8 min-h-[1000px]">
        <h2 className="text-3xl text-eumedical-dark-blue font-bold text-center mt-8">
          Bienvenido a Eumedical
        </h2>
      </section>
    </main>
  );
}