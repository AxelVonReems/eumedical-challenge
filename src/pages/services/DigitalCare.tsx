import ServiceTemplate from '../../components/services/ServiceTemplate';
import imageDigitalCare from '../../assets/photos/Services-image-2.webp';

export default function DigitalCare() {
  return (
    <ServiceTemplate 
      title="ATENCIÓN MÉDICA 24/7"
      paragraphs={[
        "Nuestra central médica operativa está disponible 24/7 con atención inmediata.",
        "Gracias a nuestro modelo de gestión integral, nos ocupamos de cada caso de forma completa, desde el primer contacto hasta su resolución, optimizando los tiempos de respuesta y la calidad del servicio.",
        "La facilidad de contacto y la agilidad en la atención se traducen en una experiencia de alto nivel, diseñada para responder a las exigencias de empresas que priorizan la excelencia operativa y el bienestar de sus clientes."
      ]}
      imageSrc={imageDigitalCare}
      imageAlt="Doctor en videollamada ofreciendo atención médica digital"
    />
  );
}
