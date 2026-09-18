import ServiceTemplate from './ServiceTemplate';
import imageTechnology from '../../assets/photos/Services-image-3.webp';

export default function Technology() {
  return (
    <ServiceTemplate 
      title="TECNOLOGÍA"
      paragraphs={[
        "En Eumedical creemos que la tecnología es mucho más que un recurso: es la clave para ofrecer experiencias médicas de excelencia.",
        "Por eso contamos con soluciones 'Plug & Play' con o sin desarrollos tecnológicos, logramos siempre integrar innovaciones de vanguardia y las adaptamos cuidadosamente a las necesidades de cada cliente y paciente.",
        "Esta visión nos permite garantizar un servicio ágil, seguro y de la más alta calidad, estés donde estés en el mundo. Porque tu salud merece no solo atención profesional, sino también la comodidad y eficiencia que solo una atención médica de primer nivel puede brindar."
      ]}
      imageSrc={imageTechnology}
      imageAlt="Paciente en videoconsulta tecnológica"
    />
  );
}
