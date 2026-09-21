import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, FileText, Download, ShieldCheck } from 'lucide-react';

export interface DocumentData {
  title?: string;
  date?: string;
  specialty?: string;
  type?: string;
  description?: string;
}

interface DocumentDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  document?: DocumentData;
}

export default function DocumentDetailModal({ 
  isOpen, 
  onClose, 
  document: documentData 
}: DocumentDetailModalProps) {

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

  const currentTitle = documentData?.title || 'Analítica de sangre general';
  const currentDate = documentData?.date || '15 Sep 2026';
  const currentSpecialty = documentData?.specialty || 'Laboratorio';
  const currentType = documentData?.type || 'PDF (Firmado digitalmente)';
  const currentDescription = documentData?.description || 'Resultado analítico completo que incluye hemograma completo, perfil lipídico, glucemia y función renal. Todos los valores se encuentran dentro de los rangos de referencia establecidos, sin alteraciones clínicas significativas a destacar.';

  const modalContent = (
    <div 
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >

      {/* Modal Container */}
      <div 
        className="max-h-[90vh] bg-white rounded-3xl shadow-xl w-full max-w-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50/50 shrink-0">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-eumedical-medium-aquamarine" aria-hidden="true" />
            <h2 className="font-dinosaur text-xl text-eumedical-dark-blue">
              Detalle del Documento
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

          {/* Document Title Overview */}
          <div>
            <h3 className="font-dinosaur text-lg text-eumedical-dark-blue">
              {currentTitle}
            </h3>
          </div>

          {/* Block 1 (Metadata) */}
          <div 
            className="bg-gray-50 p-4 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-4 font-didact 
            text-eumedical-dark-blue"
          >
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Fecha y Especialidad</span>
              <span>{currentDate} · <span className="font-semibold">{currentSpecialty}</span></span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Tipo de archivo</span>
              <div className="flex items-center gap-1.5 text-eumedical-medium-aquamarine font-semibold">
                <ShieldCheck className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{currentType}</span>
              </div>
            </div>
          </div>

          {/* Block 2 (Preview / Description) */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wider">
              Resumen del documento
            </h3>
            <div 
              className="border border-gray-200 rounded-xl p-4 bg-white font-didact text-gray-700 
              leading-relaxed min-h-[120px]"
            >
              {currentDescription}
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
            Descargar Archivo
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
