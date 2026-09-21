import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, FileText, Download, User } from 'lucide-react';

export interface AppointmentData {
  doctor?: string;
  specialty?: string;
  date?: string;
  diagnosis?: string;
  notes?: string;
}

interface AppointmentReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  appointment?: AppointmentData;
}

export default function AppointmentReportModal({ 
  isOpen, 
  onClose, 
  appointment 
}: AppointmentReportModalProps) {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentDoctor = appointment?.doctor || 'Dr. López';
  const currentSpecialty = appointment?.specialty || 'Traumatología';
  const currentDate = appointment?.date || '12 Ago 2026';
  const currentDiagnosis = appointment?.diagnosis || 'El paciente refiere dolor agudo en la región lumbar tras un sobreesfuerzo físico. A la palpación se observa una fuerte contractura muscular paravertebral derecha. No se detectan signos de afectación radicular ni déficits neurológicos asociados.';
  const currentNotes = appointment?.notes || 'Se recomienda reposo relativo durante las primeras 48 horas. Aplicar calor local en la zona afectada durante 15 minutos, 3 veces al día. Se pauta antiinflamatorio (Ibuprofeno 600mg cada 8h) durante 5 días. Solicitar nueva cita para revisión si los síntomas persisten o se irradian hacia las extremidades inferiores.';

  const modalContent = (
    <div 
      className="fixed inset-0 z-100 flex items-center justify-center bg-eumedical-black/50 backdrop-blur-sm p-4"
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
            <FileText className="w-6 h-6 text-eumedical-medium-aquamarine" aria-hidden="true" />
            <h2 className="font-dinosaur text-xl text-eumedical-dark-blue">
              Informe Médico
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

        {/* Report Body */}
        <div className="p-6 flex flex-col gap-5 overflow-y-auto">

          {/* Block 1 (Basic Info) */}
          <div className="bg-gray-50 p-4 rounded-xl flex flex-col sm:flex-row justify-between sm:items-center gap-2">
            <div className="flex items-center gap-3 text-eumedical-dark-blue font-didact">
              <User className="w-5 h-5 text-gray-400 shrink-0" aria-hidden="true" />
              <span className="font-bold">
                {currentDoctor} <span className="font-normal text-gray-500">({currentSpecialty})</span>
              </span>
            </div>
            <div className="text-eumedical-dark-blue font-didact sm:text-right">
              {currentDate}
            </div>
          </div>

          {/* Block 2 (Reason and Diagnosis) */}
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="font-bold text-sm text-gray-500 mb-2 uppercase tracking-wider">
                Diagnóstico / Motivo de consulta
              </h3>
              <p className="text-gray-700 font-didact leading-relaxed">
                {currentDiagnosis}
              </p>
            </div>

            <div>
              <h3 className="font-bold text-sm text-gray-500 mb-2 uppercase tracking-wider">
                Recomendaciones y Tratamiento
              </h3>
              <p className="text-gray-700 font-didact leading-relaxed whitespace-pre-line">
                {currentNotes}
              </p>
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
            className="flex items-center px-6 py-2.5 justify-center gap-2 bg-eumedical-medium-aquamarine 
            lg:bg-eumedical-medium-aquamarine/50 lg:hover:bg-eumedical-medium-aquamarine 
            transition-colors text-eumedical-white font-bold cursor-pointer focus-visible:outline-none 
            focus-visible:ring-2 focus-visible:ring-eumedical-medium-aquamarine rounded-lg w-full sm:w-auto"
          >
            <Download className="w-5 h-5" aria-hidden="true" />
            Descargar PDF
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
