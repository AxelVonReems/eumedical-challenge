import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { BellRing } from 'lucide-react';

interface AppointmentAlertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentAlertModal({ isOpen, onClose }: AppointmentAlertModalProps) {
  useEffect(() => {
    if (isOpen && typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'unset';
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full mx-4 text-center transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto w-16 h-16 rounded-full bg-yellow-50 flex items-center justify-center">
          <BellRing className="w-8 h-8 text-eumedical-plain-yellow" aria-hidden="true" />
        </div>

        <h2 className="font-dinosaur text-2xl text-eumedical-dark-blue mt-6 mb-2">
          Recordatorio de Consulta
        </h2>
        <p className="font-didact text-gray-600 mb-8 leading-relaxed">
          Tienes una teleconsulta programada en menos de 24 horas con la
          <span className="text-eumedical-dark-blue font-bold"> Dra. Maite Paredes</span>. 
          Recuerda comprobar tu conexión a internet.
        </p>

        <button
          type="button"
          onClick={onClose}
          className="w-full bg-eumedical-dark-blue text-eumedical-white lg:bg-eumedical-medium-aquamarine 
          lg:hover:bg-eumedical-dark-blue font-didact font-bold text-lg py-3 rounded-xl transition-colors 
          cursor-pointer focus-visible:outline-none focus-visible:ring-4 
          focus-visible:ring-eumedical-medium-aquamarine/40"
        >
          Entendido
        </button>
      </div>
    </div>,
    document.body
  );
}
