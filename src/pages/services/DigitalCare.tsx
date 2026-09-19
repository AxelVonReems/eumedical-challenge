import ServiceTemplate from '../../components/services/ServiceTemplate';
import imageDigitalCare from '../../assets/photos/Services-image-2.webp';

export default function DigitalCare() {
  return (
    <ServiceTemplate 
      badgeText="Soporte Continuo"
      title="ATENCIÓN MÉDICA 24/7"
      description="Nuestra central médica operativa está disponible 24/7 con atención inmediata, diseñada para responder a las exigencias de empresas que priorizan la excelencia operativa y el bienestar de sus clientes."
      benefits={[
        "Modelo de gestión integral desde el primer contacto hasta la resolución del caso.",
        "Optimización radical de los tiempos de respuesta y la calidad del servicio.",
        "Facilidad de contacto y agilidad para garantizar una experiencia de alto nivel."
      ]}
      imageSrc={imageDigitalCare}
      imageAlt="Doctor en videollamada ofreciendo atención médica digital"
    />
  );
};
