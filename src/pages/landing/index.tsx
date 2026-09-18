import Hero from '../../components/landing/Hero';
import ServicesGrid from '../../components/landing/ServicesGrid';

export function Index() {
  return (
    <main className="flex-1 bg-eumedical-light-grey min-h-screen flex flex-col">
      <Hero />
      <ServicesGrid />



      {/* You can add the rest of your home page content below */}
      <section className="p-8 min-h-[1000px]">
        <h2 className="text-3xl text-eumedical-dark-blue font-bold text-center mt-8">
          Bienvenido a Eumedical
        </h2>
      </section>
    </main>
  );
}