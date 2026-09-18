import { Link } from 'react-router-dom';
import iconRed from '../../assets/icons/icon-red.png';
import iconAttention from '../../assets/icons/icon-atencion.png';
import iconTechnology from '../../assets/icons/icon-tecnologia.png';
import iconHome from '../../assets/icons/icon-domicilio.png';

const services = [
  {
    title: 'RED MÉDICA PROPIA',
    description: 'Nuestra red médica propia disponible en más de 80 países y más de 10 idiomas',
    href: '/services/red-medica',
    icon: iconRed,
  },
  {
    title: 'ATENCIÓN MÉDICA DIGITAL 24/7',
    description: 'Accesibles en cualquier momento, desde cualquier lugar',
    href: '/services/atencion-medica-digital',
    icon: iconAttention,
  },
  {
    title: 'TECNOLOGÍA AVANZADA',
    description: 'Sin desarrollo de IT. Segura, fiable, user friendly y avanzada',
    href: '/services/tecnologia-avanzada',
    icon: iconTechnology,
  },
  {
    title: 'MÉDICOS A DOMICILIO',
    description: 'Coordinación de visitas médicas a domicilio en España, Portugal, Italia y Francia',
    href: '/services/medicos-a-domicilio',
    icon: iconHome,
  },
];

export default function ServicesGrid() {
  return (
    <section aria-labelledby="services-heading" className="w-full py-16 bg-eumedical-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="services-heading" className="sr-only">
          Nuestros Servicios Principales
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.href}
              className="bg-eumedical-white p-5 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-eumedical-medium-aquamarine group"
            >
              <div className="w-36 h-36 flex items-center justify-center rounded-lg mx-auto mb-2">
                <img 
                  src={service.icon} 
                  alt="" 
                  aria-hidden="true" 
                  className="w-full h-full object-contain" 
                />
              </div>

              <h3 className="text-center font-didact uppercase font-bold text-eumedical-dark-blue mb-3">
                {service.title}
              </h3>

              <p className="text-center font-arial text-sm text-eumedical-dark-blue/80">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
