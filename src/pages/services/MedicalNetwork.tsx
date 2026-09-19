import ServiceTemplate from '../../components/services/ServiceTemplate';
import imageMedicalNetwork from '../../assets/photos/Services-image-1.webp';

export default function MedicalNetwork() {
  return (
    <ServiceTemplate 
      badgeText="Cobertura Global"
      title="RED MÉDICA PROPIA"
      description="Nuestra amplia presencia en más de 80 países, operando en más de 10 idiomas, nos permite ofrecer soluciones adaptadas con un profundo Know How local."
      benefits={[
        "Garantía de aceptación del 99% en recetas locales.",
        "Optimización del tiempo y mejora de la experiencia del paciente.",
        "Servicio integral de medicina general y especialidades en cada región."
      ]}
      imageSrc={imageMedicalNetwork}
      imageAlt="Equipo de médicos profesionales de Eumedical"
    />
  );
};
