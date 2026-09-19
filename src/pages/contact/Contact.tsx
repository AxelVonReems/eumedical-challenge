import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import iconLinkedin from '../../assets/icons/icon-linkedin.png'

export default function Contact() {
  return (
    <main className="py-12 bg-eumedical-light-grey/50">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* Columna Izquierda (Información y Venta) */}
        <div>
          <h1 className="font-dinosaur text-4xl md:text-5xl text-eumedical-dark-blue leading-tight mb-6">
            ¿Listo para mejorar tu cobertura médica?
          </h1>
          <p className="font-didact text-lg text-gray-600 mb-12">
            Nuestro equipo de especialistas está disponible para resolver tus dudas y diseñar un plan adaptado a tus necesidades corporativas o personales.
          </p>

          <ul className="flex flex-col gap-6 mb-12">
            <li className="flex items-center gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center">
                <Phone className="w-6 h-6 text-eumedical-medium-aquamarine" aria-hidden="true" />
              </div>
              <span className="font-didact text-eumedical-dark-blue text-lg font-bold">
                <a 
                  href="tel:++34919227810" 
                >
                  +34 919 22 78 10
                </a>
              </span>
            </li>
            <li className="flex items-center gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center">
                <Mail className="w-6 h-6 text-eumedical-medium-aquamarine" aria-hidden="true" />
              </div>
              <span className="font-didact text-eumedical-dark-blue text-lg font-bold">
                <a 
                  href="mailto:business@eumedical.es" 
                >
                  business@eumedical.es
                </a>
              </span>
            </li>
            <li className="flex items-center gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center">
                <MapPin className="w-6 h-6 text-eumedical-medium-aquamarine" aria-hidden="true" />
              </div>
              <span className="font-didact text-eumedical-dark-blue text-lg font-bold">
                Calle Velázquez 157, 28002, Madrid
              </span>
            </li>
          </ul>

          <a 
            href="https://www.linkedin.com/company/eumedical?originalSubdomain=es"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-eumedical-dark-blue hover:text-eumedical-medium-aquamarine transition-colors font-didact font-bold"
          >
            <img 
              src={iconLinkedin} 
              alt="Icono de LinkedIn" 
              aria-hidden="true" 
              className="w-10 h-10" 
            />
            Síguenos en LinkedIn para novedades
          </a>

          <div className="mt-12 aspect-video w-full rounded-3xl overflow-hidden shadow-lg">
            <iframe
              title="Mapa de ubicación de Eumedical en Madrid"
              src="https://maps.google.com/maps?q=Calle%20Vel%C3%A1zquez%20157,%20Madrid&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Columna Derecha (Tarjeta de Formulario) */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="inline-block px-4 py-1 mb-2 rounded-full bg-[#E8F5F3] text-eumedical-medium-aquamarine font-didact font-bold text-sm">
            Respuesta en 24h
          </div>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="pl-2.5 text-eumedical-dark-blue">
                Nombre <span className="text-red-600">*</span>
              </label>
              <input 
                type="text" 
                id="firstName" 
                name="firstName" 
                placeholder="Juan" 
                className="w-full bg-gray-50 rounded-xl px-5 py-4 font-arial focus:bg-white focus:outline-none focus:ring-2 focus:ring-eumedical-medium-aquamarine transition-all placeholder:text-gray-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="lastName" className="pl-2.5 text-eumedical-dark-blue">
                Apellidos
              </label>
              <input 
                type="text" 
                id="lastName" 
                name="lastName" 
                placeholder="Carrasco" 
                className="w-full bg-gray-50 rounded-xl px-5 py-4 font-arial focus:bg-white focus:outline-none focus:ring-2 focus:ring-eumedical-medium-aquamarine transition-all placeholder:text-gray-400"
              />
            </div>

            <div className="sm:col-span-2 flex flex-col">
              <label htmlFor="email" className="pl-2.5 text-eumedical-dark-blue">
                Email <span className="text-red-600">*</span>
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="juancarrasco@example.com" 
                className="w-full bg-gray-50 rounded-xl px-5 py-4 font-arial focus:bg-white focus:outline-none focus:ring-2 focus:ring-eumedical-medium-aquamarine transition-all placeholder:text-gray-400"
                required
              />
            </div>

            <div className="sm:col-span-2 flex flex-col">
              <label htmlFor="message" className="pl-2.5 text-eumedical-dark-blue">
                Mensaje <span className="text-red-600">*</span>
              </label>
              <textarea 
                id="message" 
                name="message" 
                placeholder="Mensaje" 
                className="w-full bg-gray-50 rounded-xl px-5 py-4 font-arial min-h-[150px] resize-y focus:bg-white focus:outline-none focus:ring-2 focus:ring-eumedical-medium-aquamarine transition-all placeholder:text-gray-400"
                required
              ></textarea>
            </div>

            <div className="sm:col-span-2">
              <button 
                type="submit" 
                className="w-full flex items-center justify-center gap-2 bg-eumedical-medium-aquamarine text-white py-4 rounded-xl font-didact font-bold hover:scale-[1.02] transition-transform focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-eumedical-medium-aquamarine/50 focus-visible:ring-offset-2 cursor-pointer"
              >
                Enviar Mensaje
                <Send className="w-5 h-5" aria-hidden="true" />
              </button>
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                Al enviar este formulario acepta nuestra{' '}
                <Link 
                  to="/privacy-policy" 
                  className="underline hover:text-eumedical-medium-aquamarine transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eumedical-medium-aquamarine"
                >
                  política de privacidad
                </Link>
                {' '}y el tratamiento de sus datos para gestionar su consulta.
              </p>
            </div>
          </form>
        </div>

      </div>
    </main>
  );
}
