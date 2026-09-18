import Capabilities from '../../components/landing/Capabilities';
import CoverageVideo from '../../components/landing/CoverageVideo';
import Hero from '../../components/landing/Hero';
import ServicesGrid from '../../components/landing/ServicesGrid';

export function Index() {
  return (
    <main className="flex-1 bg-eumedical-light-grey min-h-screen flex flex-col">
      <Hero />
      <ServicesGrid />
      <CoverageVideo />
      <Capabilities />

      {/* Reviews */}
      {/* FAQ */}
      {/* Bottom CTA */}

      <section className="p-8 min-h-[1000px]">
        <h2 className="text-3xl text-eumedical-dark-blue font-bold text-center mt-8">
          Bienvenido a Eumedical
        </h2>
      </section>
    </main>
  );
}