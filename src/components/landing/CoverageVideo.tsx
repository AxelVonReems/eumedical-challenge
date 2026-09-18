export default function CoverageVideo() {
  return (
    <section 
      aria-labelledby="coverage-video-heading" 
      className="py-5 lg:py-20 bg-eumedical-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 
          id="coverage-video-heading" 
          className="font-dinosaur text-3xl md:text-5xl text-eumedical-dark-blue text-center mb-12"
        >
          Nuestra cobertura a nivel mundial
        </h2>

        {/* Video container */}
        <div className="relative max-w-4xl mx-auto aspect-video bg-eumedical-dark-blue rounded-2xl overflow-hidden shadow-xl">

          <video 
            className="w-full h-full object-cover focus:outline-none focus-visible:ring-4 focus-visible:ring-eumedical-plain-yellow"
            controls
            preload="metadata"
            aria-label="Video detallando nuestra cobertura médica a nivel mundial"
            // Recommended to add a cover image before the user hits play
            // poster="../../assets/video-thumbnail.jpg"
          >
            <source 
              src="https://video.wixstatic.com/video/e21290_c61b18067fd240d193c0273f92567a1c/1080p/mp4/file.mp4" 
              type="video/mp4" 
            />

            <track 
              kind="captions" 
              srcLang="es" 
              label="Español" 
            />

            {/* Backup message for very old browsers */}
            <p className="text-white p-4 text-center">
              Tu navegador no soporta la reproducción de videos. 
              <a href="https://video.wixstatic.com/video/e21290_c61b18067fd240d193c0273f92567a1c/1080p/mp4/file.mp4" className="underline text-eumedical-plain-yellow">
                Descarga el video aquí
              </a>.
            </p>
          </video>

        </div>
      </div>
    </section>
  );
}
