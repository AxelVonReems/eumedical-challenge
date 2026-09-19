import ServiceTemplate from '../../components/services/ServiceTemplate';
import imageHomeCare from '../../assets/photos/Services-image-4.webp';

export default function HomeCare() {
  return (
    <ServiceTemplate 
      badgeText="Asistencia Presencial"
      title="MÉDICOS A DOMICILIO"
      description="Ofrecemos un exclusivo servicio de médicos a domicilio adaptado para viajeros y ejecutivos, pensado para quienes desean atención inmediata, profesional y discreta sin alterar su agenda."
      benefits={[
        "Desplazamiento a hoteles, apartamentos turísticos o residencias privadas.",
        "Diagnósticos precisos y tratamientos efectivos por especialistas calificados.",
        "Experiencia médica confiable que evita pérdidas de tiempo en salas de espera."
      ]}
      imageSrc={imageHomeCare}
      imageAlt="Doctora visitando a un paciente en su domicilio"
    />
  );
}
