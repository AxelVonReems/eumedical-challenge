import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Pill, Download, User, Calendar } from 'lucide-react';

export interface PrescriptionData {
  medication?: string;
  dosage?: string;
  doctor?: string;
  date?: string;
  instructions?: string;
}

interface PrescriptionDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  prescription?: PrescriptionData;
}

export default function PrescriptionDetailModal({ 
  isOpen, 
  onClose, 
  prescription = {} 
}: PrescriptionDetailModalProps) {

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

  const currentMedication = prescription.medication || 'Ibuprofeno 600mg';
  const currentDosage = prescription.dosage || '1 cada 8 horas (5 días)';
  const currentDoctor = prescription.doctor || 'Dr. López';
  const currentDate = prescription.date || '15 Sep 2026';
  const currentInstructions = prescription.instructions || 'Tomar preferiblemente con alimentos para evitar molestias gástricas. No superar la dosis diaria recomendada. En caso de experimentar efectos secundarios adversos, suspenda la toma y consulte con su médico especialista.';

  const modalContent = (
    <div 
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >

      {/* Modal Container */}
      <div 
        className="max-h-[90vh] bg-eumedical-white rounded-3xl shadow-xl w-full max-w-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50/50 shrink-0">
          <div className="flex items-center gap-3">
            <Pill className="w-6 h-6 text-eumedical-medium-aquamarine" aria-hidden="true" />
            <h2 className="font-dinosaur text-xl text-eumedical-dark-blue">
              Detalle de la Prescripción
            </h2>
          </div>
          <button 
            type="button" 
            onClick={onClose}
            className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer p-1 
            rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            aria-label="Cerrar modal"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 flex flex-col gap-6 overflow-y-auto">

          {/* Medication Title Overview */}
          <div>
            <h3 className="font-dinosaur text-lg text-eumedical-dark-blue">
              {currentMedication} <span className="text-sm font-didact text-gray-500 font-normal">({currentDosage})</span>
            </h3>
          </div>

          {/* Block 1 (Metadata) */}
          <div 
            className="bg-gray-50 p-4 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-4 font-didact 
            text-eumedical-dark-blue"
          >
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Médico Prescriptor</span>
              <div className="flex items-center gap-1.5 font-semibold">
                <User className="w-4 h-4 text-gray-400 shrink-0" aria-hidden="true" />
                <span>{currentDoctor}</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Fecha de validez</span>
              <div className="flex items-center gap-1.5 font-semibold">
                <Calendar className="w-4 h-4 text-gray-400 shrink-0" aria-hidden="true" />
                <span>{currentDate}</span>
              </div>
            </div>
          </div>

          {/* Block 2 (Instructions / Posology) */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wider">
              Instrucciones y Posología
            </h3>
            <div 
              className="border border-gray-200 rounded-xl p-4 bg-eumedical-white font-didact text-gray-700 
              leading-relaxed min-h-[120px]"
            >
              {currentInstructions}
            </div>
          </div>

        </div>

        {/* Modal Footer (Actions) */}
        <div 
          className="p-6 border-t border-gray-100 bg-gray-50/50 flex flex-col-reverse sm:flex-row 
          justify-between items-center gap-4 shrink-0"
        >
          <button 
            type="button"
            className="flex items-center px-6 py-2.5 justify-center gap-2 bg-eumedical-dark-blue 
            lg:bg-eumedical-medium-aquamarine lg:hover:bg-eumedical-dark-blue 
            transition-colors text-eumedical-white font-bold cursor-pointer focus-visible:outline-none 
            focus-visible:ring-2 focus-visible:ring-eumedical-medium-aquamarine rounded-lg w-full sm:w-auto"
          >
            <Download className="w-5 h-5" aria-hidden="true" />
            Descargar Receta (PDF)
          </button>

          <button 
            type="button" 
            onClick={onClose}
            className="bg-gray-300 lg:bg-gray-200 text-gray-700 px-6 py-2.5 rounded-xl font-bold 
            lg:hover:bg-gray-300 transition-colors cursor-pointer focus-visible:outline-none 
            focus-visible:ring-2 focus-visible:ring-gray-400 w-full sm:w-auto"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
