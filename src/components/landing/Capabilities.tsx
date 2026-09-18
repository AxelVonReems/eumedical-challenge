import { 
  Video, 
  Headset, 
  HousePlus, 
  Globe, 
  Stethoscope, 
  Ambulance, 
  Plane, 
  Users 
} from 'lucide-react';

const capabilities = [
  {
    title: 'Teleconsulta 24/7',
    description: 'Acceso inmediato a un médico a cualquier hora y desde cualquier lugar con prescripción médica local',
    icon: Video,
  },
  {
    title: 'Central Operativa Médica 24/7',
    description: 'Centro de coordinación médica disponible las 24 horas, todos los días',
    icon: Headset,
  },
  {
    title: 'House Calls',
    description: 'Atención médica a domicilio, sin necesidad de trasladarte',
    icon: HousePlus,
  },
  {
    title: 'Teleorientación Médica Global',
    description: 'Orientación médica a distancia en cualquier parte del mundo',
    icon: Globe,
  },
  {
    title: 'Médicos Especialistas',
    description: 'Acceso a profesionales especializados en distintas áreas de la medicina',
    icon: Stethoscope,
  },
  {
    title: 'Coordinación de Ambulancias',
    description: 'Gestión rápida y eficaz de ambulancias para traslados de emergencia o programados',
    icon: Ambulance,
  },
  {
    title: 'Fit to Fly',
    description: 'Certificación médica para garantizar que puedas volar de manera segura y sin riesgos',
    icon: Plane,
  },
  {
    title: 'Soporte Médico en Eventos',
    description: 'Cobertura y asistencia médica en reuniones, congresos o eventos especiales',
    icon: Users,
  },
];

export default function Capabilities() {
  return (
    <section 
      aria-labelledby="capabilities-heading" 
      className="py-5 lg:py-20 bg-eumedical-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 
          id="capabilities-heading" 
          className="font-dinosaur text-eumedical-dark-blue text-center text-3xl md:text-4xl mb-12"
        >
          Capacidades Médicas Internacionales
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center text-center bg-eumedical-light-grey rounded-2xl p-6 border border-eumedical-light-blue/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <Icon 
                  className="w-16 h-16 text-eumedical-medium-aquamarine mb-4" 
                  aria-hidden="true" 
                />
                <h3 className="font-didact text-lg font-bold text-eumedical-dark-blue mb-2">
                  {capability.title}
                </h3>
                <p className="font-arial text-md text-eumedical-dark-blue/80">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
