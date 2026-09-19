import imageAboutHero from '../../assets/photos/About-hero.jpg';

export default function About() {
  return (
    <main className="py-12 bg-eumedical-light-grey/50">

      {/* Text Header */}
      <div className="max-w-5xl mx-auto text-center px-4 mb-16">
        <p className="font-dinosaur text-3xl md:text-5xl text-eumedical-dark-blue leading-tight">
          Somos una compañía de asistencia sanitaria digital con capacidad internacional para 
          responder a las necesidades de pacientes y empresas alrededor del mundo.
        </p>
      </div>

      {/* Image Section */}
      <div className="max-w-6xl mx-auto px-4 mb-10">
        <div className="aspect-[21/9] overflow-hidden rounded-3xl shadow-2xl">
          <img 
            src={imageAboutHero} 
            alt="Tecnología médica avanzada" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Text Section (2 Column Grid) */}
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Column 1 (Mission) */}
        <div>
          <p className="font-didact text-xl text-eumedical-dark-blue font-bold mb-4">
            Ponemos a disposición de nuestros partners el acceso al Know How local en más de 80 
            países con un enfoque holístico en todos los casos que gestionamos, traduciéndose en 
            una experiencia de cliente única a través de un servicio sobresaliente.
          </p>
          <p className="font-arial text-eumedical-dark-blue/80 leading-relaxed">
            Nuestra misión es democratizar el acceso a la salud de calidad. Combinamos tecnología 
            de vanguardia con una red médica de excelencia para ofrecer diagnósticos precisos y 
            tratamientos efectivos en tiempo récord.
          </p>
        </div>

        {/* Column 2 (Vision) */}
        <div>
          <p className="font-didact text-xl text-eumedical-dark-blue font-bold mb-4">
            Creemos firmemente en que la telemedicina no debe sustituir la calidez humana, sino potenciarla.
          </p>
          <p className="font-arial text-eumedical-dark-blue/80 leading-relaxed">
            Por ello, nuestra plataforma garantiza un acompañamiento integral, desde la primera 
            consulta hasta la resolución total del caso. Operamos bajo los más estrictos estándares 
            de seguridad y privacidad internacional, asegurando que tu bienestar y tus datos estén 
            siempre protegidos, sin importar dónde te encuentres.
          </p>
        </div>
      </div>
    </main>
  );
}
