import ServiceTemplate from '../../components/services/ServiceTemplate';
import imageHomeCare from '../../assets/photos/Services-image-4.webp';

export default function HomeCare() {
  return (
    <ServiceTemplate 
      title="RED MÉDICA PROPIA"
      paragraphs={[
        "Nuestra amplia presencia en más de 80 países, operando en más de 10 idiomas, nos permite ofrecer soluciones adaptadas con un profundo Know How local.",
        "Este enfoque garantiza que el 99% de nuestras recetas locales sean aceptadas por los pacientes, optimizando su tiempo y mejorando notablemente la experiencia del usuario.",
        "Además, ponemos a su disposición un servicio integral de medicina general y especialidades, capaz de cubrir las distintas necesidades de salud de sus clientes en cada región."
      ]}
      imageSrc={imageHomeCare}
      imageAlt="Equipo de médicos profesionales de Eumedical"
    />
  );
}
