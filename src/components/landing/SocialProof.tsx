import { Star } from 'lucide-react';

const metrics = [
  { value: '+90k', label: 'Pacientes satisfechos' },
  { value: '+250', label: 'Médicos expertos' },
  { value: '+70k', label: 'Recetas aceptadas' },
  { value: '+10', label: 'Especialidades médicas' },
];

const reviews = [
  "Excelente comunicación vía WhatsApp con el asegurado, ayudando en todo momento para que todo sea sencillo y la pronta atención del médico. La médica fue muy servicial y educada.",
  "Servicio rápido y muy profesional. Pude consultar a un especialista desde mi casa en menos de 20 minutos. Totalmente recomendado.",
  "Una tranquilidad enorme al viajar. Usamos el servicio de teleconsulta en el extranjero y la receta electrónica fue aceptada sin problemas en la farmacia local."
];

export default function SocialProof() {
  return (
    <section className="py-5 lg:py-12 bg-eumedical-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 
            id="social-proof-heading"
            className="font-dinosaur text-3xl md:text-4xl text-eumedical-dark-blue"
          >
            La confianza que nos respalda
          </h2>
        </div>

        {/* Metrics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              
              {/* Nuevo contenedor para el número y el símbolo */}
              <div className="font-bold text-5xl lg:text-6xl font-dinosaur mb-2">
                <span className="text-eumedical-plain-yellow">+</span>
                <span className="text-eumedical-dark-blue">{metric.value.replace('+', '')}</span>
              </div>

              <span className="font-didact font-bold text-xl text-eumedical-dark-blue">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Stars Section */}
        <div className="mt-14 mb-10 lg:mt-20 lg:mb-12 flex flex-col items-center text-center">
          <h2 className="font-didact text-3xl text-eumedical-dark-blue mb-6">
            Nuestra calidad siempre prevalece*
          </h2>

          <div 
            className="flex flex-col sm:flex-row items-center gap-4"
            role="img"
            aria-label="Valoración de 4.9 sobre 5 estrellas"
          >
            <div className="flex gap-1" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-10 h-10 text-eumedical-plain-yellow" 
                  fill="currentColor" 
                />
              ))}
            </div>
            <span className="font-dinosaur text-4xl text-eumedical-dark-blue" aria-hidden="true">
              4.9/5
            </span>
          </div>
          <p className="pt-6 text-eumedical-medium-aquamarine">
              * Según las encuestas de valoración de nuestros clientes después de usar nuestros servicios
            </p>
        </div>

        {/* Reviews Section */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          aria-label="Testimonios de pacientes"
        >
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-eumedical-light-grey/30 p-8 rounded-2xl flex flex-col justify-center"
            >
              <p className="font-arial italic text-eumedical-dark-blue/80 leading-relaxed text-center lg:text-left">
                "{review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
