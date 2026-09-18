import { Link } from 'react-router-dom';
import logo from '../../assets/logos/eumedical-logo-white.png';

export default function Footer() {
  const linkStyles = `
    font-arial text-eumedical-light-grey transition-colors duration-200
    hover:text-eumedical-plain-yellow
    focus:outline-none focus-visible:ring-2 focus-visible:ring-eumedical-plain-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-eumedical-dark-blue rounded-sm
  `;

  return (
    <footer className="bg-eumedical-dark-blue text-eumedical-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Section 1: Marca */}
          <div>
            <Link to="/">
              <img 
                src={logo} 
                alt="Eumedical Logo" 
                className="h-16 w-auto mb-6" 
              />
            </Link>
            <p className="font-arial text-eumedical-light-grey">
              La solución integral para la salud digital y domiciliaria, ofreciendo capacidades médicas de vanguardia en todo el mundo.
            </p>
          </div>

          {/* Section 2: Servicios */}
          <nav aria-label="Navegación de servicios del pie de página">
            <h2 className="font-didact font-bold text-eumedical-medium-aquamarine text-lg mb-6">
              Servicios
            </h2>
            <ul className="space-y-4">
              <li>
                <Link to="/services/telemedicina" className={linkStyles}>
                  Telemedicina
                </Link>
              </li>
              <li>
                <Link to="/services/asistencia-domiciliaria" className={linkStyles}>
                  Asistencia Domiciliaria
                </Link>
              </li>
              <li>
                <Link to="/services/monitorizacion" className={linkStyles}>
                  Monitorización Remota
                </Link>
              </li>
              <li>
                <Link to="/services/consultoria" className={linkStyles}>
                  Consultoría Médica
                </Link>
              </li>
            </ul>
          </nav>

          {/* Section 3: Compañía */}
          <nav aria-label="Navegación de compañía del pie de página">
            <h2 className="font-didact font-bold text-eumedical-medium-aquamarine text-lg mb-6">
              Compañía
            </h2>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className={linkStyles}>
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link to="/contact" className={linkStyles}>
                  Contacto
                </Link>
              </li>
              <li>
                <a
                  href="https://apply.workable.com/eumedical/?lng=en#jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Únete a nuestro equipo
                </a>
              </li>
            </ul>
          </nav>

          {/* Section 4: Contacto */}
          <div>
            <h2 className="font-didact font-bold text-eumedical-medium-aquamarine text-lg mb-6">
              Contacto
            </h2>
            <address className="font-arial text-eumedical-light-grey not-italic flex flex-col space-y-4">
              <a 
                href="mailto:business@eumedical.es" 
                className={linkStyles}
              >
                business@eumedical.es
              </a>
              <a 
                href="tel:++34919227810" 
                className={linkStyles}
              >
                +34 919 22 78 10
              </a>
            </address>
          </div>
        </div>

        {/* Bottom line (Legal) */}
        <div className="mt-12 pt-8 border-t border-eumedical-light-blue/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-arial text-eumedical-light-grey text-md text-center md:text-left">
            &copy; 2026 Eumedical. Todos los derechos reservados.
          </p>
          <nav aria-label="Navegación legal del pie de página">
            <ul className="flex flex-wrap justify-center gap-6">
              <li>
                <Link to="/privacy-policy" className={`${linkStyles} text-md`}>
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/terms-of-use" className={`${linkStyles} text-md`}>
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};
