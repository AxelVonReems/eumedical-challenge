import { Link } from 'react-router-dom';

interface ServiceTemplateProps {
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
}

export default function ServiceTemplate({
  title,
  paragraphs,
  imageSrc,
  imageAlt,
}: ServiceTemplateProps) {
  return (
    <section className="py-8 lg:py-12 bg-eumedical-light-grey/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column (Text and Button) */}
          <div className="order-2 lg:order-1 flex flex-col items-start animate-in fade-in slide-in-from-left-8 duration-700 ease-out">
            <h2 className="font-dinosaur text-4xl md:text-5xl text-eumedical-dark-blue uppercase mb-8">
              {title}
            </h2>

            <div className="mb-8 w-full">
              {paragraphs.map((text, index) => (
                <p 
                  key={index} 
                  className="font-arial text-lg text-eumedical-dark-blue/80 mb-6 last:mb-0"
                >
                  {text}
                </p>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-block bg-eumedical-medium-aquamarine text-eumedical-white font-didact font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-eumedical-medium-aquamarine/50 focus-visible:ring-offset-4 focus-visible:ring-offset-eumedical-white"
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
  );
}
