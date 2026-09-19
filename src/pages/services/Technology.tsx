import ServiceTemplate from '../../components/services/ServiceTemplate';
import imageTechnology from '../../assets/photos/Services-image-3.webp';

export default function Technology() {
  return (
    <ServiceTemplate 
      badgeText="Innovación Médica"
      title="TECNOLOGÍA"
      description="En Eumedical creemos que la tecnología es mucho más que un recurso: es la clave para ofrecer experiencias médicas de excelencia adaptadas a las necesidades de cada cliente y paciente."
      benefits={[
        "Soluciones 'Plug & Play' flexibles, con o sin desarrollos tecnológicos propios.",
        "Integración de innovaciones de vanguardia para un servicio ágil y seguro.",
        "Comodidad y eficiencia garantizadas estés donde estés en el mundo."
      ]}
      imageSrc={imageTechnology}
      imageAlt="Paciente en videoconsulta tecnológica"
    />
  );
};
