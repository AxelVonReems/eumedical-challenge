import { Link } from 'react-router-dom';

export default function BottomCta() {
  return (
    <section 
      aria-labelledby="bottom-cta-heading" 
      className="py-5 lg:py-10 bg-eumedical-plain-yellow"
    >
      <div className="text-center max-w-4xl mx-auto px-4 flex flex-col items-center">
        <h2 
          id="bottom-cta-heading" 
          className="text-4xl md:text-5xl font-dinosaur text-eumedical-dark-blue"
        >
          ¿Listo para acceder a atención médica inmediata?
        </h2>

        <p className="font-didact mt-6 mb-10 text-xl text-eumedical-dark-blue/90">
          Únete a más de 90,000 pacientes que confían en Eumedical cada día.
        </p>

        <Link
          to="/login"
          className="bg-eumedical-dark-blue text-eumedical-white font-didact font-bold px-10 py-4 rounded-full hover:scale-105 hover:text-eumedical-dark-blue hover:bg-eumedical-white transition-[transform, color, text] duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-eumedical-dark-blue/50 focus-visible:ring-offset-4 focus-visible:ring-offset-eumedical-plain-yellow"
        >
          Área Paciente
        </Link>
      </div>
    </section>
  );
}
