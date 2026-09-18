import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: '¿Cómo funciona la receta médica digital?',
    answer: 'Tras tu teleconsulta, el médico emitirá una receta electrónica válida que podrás presentar en cualquier farmacia de nuestra red internacional.',
  },
  {
    question: '¿En qué países tienen cobertura de médicos a domicilio?',
    answer: 'Actualmente coordinamos visitas a domicilio en España, Portugal, Italia y Francia.',
  },
  {
    question: '¿Están mis datos médicos seguros?',
    answer: 'Absolutamente. Nuestra plataforma cumple con las normativas GDPR e HIPAA, garantizando encriptación de extremo a extremo.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      aria-labelledby="faq-heading" 
      className="py-5 lg:py-14 bg-eumedical-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          id="faq-heading" 
          className="font-dinosaur text-3xl md:text-4xl text-center text-eumedical-dark-blue mb-12"
        >
          Preguntas Frecuentes
        </h2>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className="bg-eumedical-light-grey rounded-xl shadow-sm border border-eumedical-light-blue/10 overflow-hidden"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-button-${index}`}
                    className="w-full flex items-center justify-between text-left p-6 font-didact font-bold text-lg text-eumedical-dark-blue rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-eumedical-medium-aquamarine focus-visible:ring-inset transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown 
                      className={`w-6 h-6 text-eumedical-medium-aquamarine shrink-0 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`} 
                      aria-hidden="true" 
                    />
                  </button>
                </h3>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen 
                      ? 'grid-rows-[1fr] opacity-100' 
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-arial text-eumedical-dark-blue/80 px-6 pb-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
