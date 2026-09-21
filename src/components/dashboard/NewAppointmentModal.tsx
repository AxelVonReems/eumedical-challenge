import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, CalendarPlus } from 'lucide-react';

interface NewAppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewAppointmentModal({ isOpen, onClose }: NewAppointmentModalProps) {
  const [minDateTime, setMinDateTime] = useState('');

  // Effect to Calculate the Minimum Date (Now) When the Modal is Opened
  useEffect(() => {
    if (isOpen) {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');

      setMinDateTime(`${year}-${month}-${day}T${hours}:${minutes}`);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const modalContent = (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-white rounded-3xl shadow-xl w-full max-w-lg overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50/50">
          <div className="flex items-center gap-3">
            <CalendarPlus className="w-6 h-6 text-eumedical-medium-aquamarine" aria-hidden="true" />
            <h2 className="font-dinosaur text-xl text-eumedical-dark-blue">
              Solicitar Nueva Cita
            </h2>
          </div>
          <button 
            type="button" 
            onClick={onClose}
            className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer p-1 rounded-lg 
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            aria-label="Cerrar modal"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        <div className="p-6 flex flex-col gap-5">
          <div>
            <label htmlFor="specialty" className="text-sm font-didact text-gray-600 mb-1 block">
              Especialidad
            </label>
            <select 
              id="specialty"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none 
              focus:border-eumedical-medium-aquamarine bg-white font-didact text-eumedical-dark-blue 
              cursor-pointer"
            >
              <option value="">Seleccione una especialidad...</option>
              <option value="general">Medicina General</option>
              <option value="dermatology">Dermatología</option>
              <option value="cardiology">Cardiología</option>
            </select>
          </div>

          <div>
            <label htmlFor="specialist" className="text-sm font-didact text-gray-600 mb-1 block">
              Especialista
            </label>
            <select 
              id="specialist"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none 
              focus:border-eumedical-medium-aquamarine bg-white font-didact text-eumedical-dark-blue 
              cursor-pointer"
            >
              <option value="any">Cualquier especialista</option>
              <option value="ramirez">Dra. Maite Paredes</option>
              <option value="castro">Dr. Javier Castro</option>
            </select>
          </div>

          <div>
            <label htmlFor="datetime" className="text-sm font-didact text-gray-600 mb-1 block">
              Fecha y hora preferida
            </label>
            <input 
              type="datetime-local" 
              id="datetime"
              min={minDateTime} 
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none 
              focus:border-eumedical-medium-aquamarine bg-white font-didact text-eumedical-dark-blue 
              cursor-pointer"
            />
          </div>

          <div>
            <label htmlFor="reason" className="text-sm font-didact text-gray-600 mb-1 block">
              Motivo de la consulta (breve)
            </label>
            <textarea 
              id="reason"
              rows={3}
              placeholder="Describa brevemente el motivo de su cita..."
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none 
              focus:border-eumedical-medium-aquamarine bg-white font-didact text-eumedical-dark-blue 
              resize-none"
            ></textarea>
          </div>
        </div>

        <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex justify-end gap-4">
          <button 
            type="button" 
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-gray-600 font-bold hover:bg-gray-200 
            transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 
            focus-visible:ring-gray-300"
          >
            Cancelar
          </button>
          <button 
            type="button"
            className="bg-eumedical-medium-aquamarine text-white px-6 py-2.5 rounded-xl 
            font-bold hover:bg-eumedical-dark-blue transition-colors cursor-pointer focus-visible:outline-none 
            focus-visible:ring-4 focus-visible:ring-eumedical-medium-aquamarine/50"
          >
            Confirmar Solicitud
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
