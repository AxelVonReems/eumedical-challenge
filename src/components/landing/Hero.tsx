import { Link } from 'react-router-dom';
import Telemedicine from '../../assets/photos/Telemedicine-1.jpg';

export default function Hero() {
  return (
    <section 
      aria-labelledby="hero-heading" 
      className="
        relative w-full max-w-[1600px] mx-auto aspect-3/2 min-h-[400px] max-h-[600px] lg:max-h-[750px] 2xl:max-h-[900px] 
        flex items-center justify-center md:justify-start overflow-hidden bg-eumedical-white
      "
    >
      <img
        src={Telemedicine}
        alt="Doctora realizando una videoconsulta médica con auriculares"
        className="absolute inset-0 w-full h-full object-cover object-top"
        aria-hidden="false"
      />

      {/* Hero content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="bg-eumedical-light-grey/35 p-8 sm:p-10 md:p-12 max-w-2xl rounded-2xl shadow-xl flex flex-col items-center text-center md:items-start md:text-left backdrop-blur-sm"
        >
          <header>
            <h1 
              id="hero-heading" 
              className="font-dinosaur text-4xl sm:text-5xl lg:text-6xl text-eumedical-dark-blue mb-6 leading-tight"
            >
              La solución integral para la salud digital y domiciliaria
            </h1>
          </header>

          <p className="font-didact text-lg sm:text-xl text-eumedical-dark-blue mb-8">
            Capacidades médicas en más de 80 países.
          </p>

          <Link
            to="/services/atencion-digital"
            className="
              inline-flex items-center justify-center bg-eumedical-plain-yellow text-eumedical-dark-blue font-bold px-8 py-4 
              rounded-lg shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg focus:outline-none 
              focus-visible:ring-4 focus-visible:ring-eumedical-dark-blue focus-visible:ring-offset-2 
              focus-visible:ring-offset-eumedical-light-grey focus-visible:-translate-y-1
            "
          >
            Hablar con un médico
          </Link>
        </div>
      </div>
    </section>
  );
};
