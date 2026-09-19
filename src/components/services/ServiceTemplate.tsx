import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

interface ServiceTemplateProps {
  badgeText?: string;
  title: string;
  description: string;
  benefits: string[];
  imageSrc: string;
  imageAlt: string;
}

export default function ServiceTemplate({
  badgeText,
  title,
  description,
  benefits,
  imageSrc,
  imageAlt,
}: ServiceTemplateProps) {
  return (
    <>
      <section className="py-8 lg:py-12 bg-eumedical-light-grey/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Column (Text and Button) */}
            <div className="order-2 lg:order-1 flex flex-col items-start animate-in fade-in slide-in-from-left-8 duration-700 ease-out">
              {badgeText && (
                <span className="inline-block bg-gray-100 text-eumedical-dark-blue font-didact rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                  {badgeText}
                </span>
              )}

              <h2 className="font-dinosaur text-4xl md:text-5xl text-eumedical-dark-blue uppercase mb-8">
                {title}
              </h2>

              <p className="font-arial text-lg md:text-xl text-eumedical-dark-blue/90 mb-8">
                {description}
              </p>

              {benefits && benefits.length > 0 && (
                <ul className="flex flex-col gap-4 mb-10 w-full">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 
                        className="text-eumedical-medium-aquamarine w-6 h-6 flex-shrink-0 mr-3 mt-0.5" 
                        aria-hidden="true" 
                      />
                      <span className="font-arial text-eumedical-dark-blue/80">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              <Link
                to="/contact"
                className="self-center lg:self-start inline-block bg-eumedical-medium-aquamarine text-white font-didact font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-eumedical-medium-aquamarine/50 focus-visible:ring-offset-4 focus-visible:ring-offset-[#f8fafc]"
              >
                Solicitar información
              </Link>
            </div>

            {/* Right Column (Image) */}
            <div className="order-1 md:mx-6 lg:mx-0 lg:order-2 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={imageSrc} 
                alt={imageAlt} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
