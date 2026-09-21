import { useState } from 'react';
import { User, Clock, Video, Plus, CalendarPlus } from 'lucide-react';
import NewAppointmentModal from '../../components/dashboard/NewAppointmentModal';

export default function DashboardConsultas() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>

      {/* Page Header */}
      <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-4 mb-8">
        <div>
          <h1 className="font-dinosaur text-3xl text-eumedical-dark-blue">
            Mis Consultas
          </h1>
          <p className="text-gray-500 font-didact mt-2 text-lg">
            Gestiona tus próximas citas y accede a teleconsulta
          </p>
        </div>

        <button 
          type="button" 
          onClick={() => setIsModalOpen(true)} 
          className="flex items-center justify-center gap-2 bg-eumedical-medium-aquamarine text-white 
          font-bold rounded-xl px-6 py-3 cursor-pointer hover:bg-eumedical-dark-blue transition-colors 
          focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-eumedical-medium-aquamarine/50 
          w-full md:w-auto shrink-0"
        >
          <Plus className="w-5 h-5" aria-hidden="true" />
          Solicitar nueva cita
        </button>
      </div>

      {/* Main Section: Next Appointments */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* Card 1 */}
        <div 
          className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col 
          xl:flex-row justify-between items-start xl:items-center gap-6"
        >
          <div className="flex flex-col gap-3 w-full">
            <div className="flex items-center gap-3 text-eumedical-dark-blue">
              <User className="w-5 h-5 text-eumedical-medium-aquamarine shrink-0" aria-hidden="true" />
              <span className="font-didact text-lg font-bold">
                Dra. Maite Paredes <span className="font-normal text-eumedical-dark-blue/70">(Dermatología)</span>
              </span>
            </div>
            <div className="flex items-center gap-3 text-eumedical-dark-blue">
              <Clock className="w-5 h-5 text-eumedical-medium-aquamarine shrink-0" aria-hidden="true" />
              <span className="font-didact text-lg">
                Lunes, 21 de Septiembre · 10:30 AM
              </span>
            </div>
          </div>

          <button 
            type="button"
            className="flex items-center justify-center gap-2 bg-eumedical-plain-yellow text-eumedical-dark-blue 
            font-bold rounded-xl px-6 py-4 md:py-3 hover:bg-eumedical-dark-orange transition-colors 
            focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-eumedical-dark-blue w-full 
            xl:w-auto shrink-0 cursor-pointer disabled:opacity-50 disabled:hover:bg-eumedical-plain-yellow 
            disabled:cursor-not-allowed"
          >
            <Video className="w-5 h-5" aria-hidden="true" />
            Acceder a teleconsulta
          </button>
        </div>

        {/* Card 2 */}
        <div 
          className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col 
          xl:flex-row justify-between items-start xl:items-center gap-6"
        >
          <div className="flex flex-col gap-3 w-full">
            <div className="flex items-center gap-3 text-eumedical-dark-blue">
              <User className="w-5 h-5 text-eumedical-medium-aquamarine shrink-0" aria-hidden="true" />
              <span className="font-didact text-lg font-bold">
                Dr. Javier Castro <span className="font-normal text-eumedical-dark-blue/70">(Cardiología)</span>
              </span>
            </div>
            <div className="flex items-center gap-3 text-eumedical-dark-blue">
              <Clock className="w-5 h-5 text-eumedical-medium-aquamarine shrink-0" aria-hidden="true" />
              <span className="font-didact text-lg">
                Jueves, 24 de Septiembre · 16:00 PM
              </span>
            </div>
          </div>

          <button 
            type="button"
            disabled 
            className="flex items-center justify-center gap-2 bg-eumedical-plain-yellow text-eumedical-dark-blue 
            font-bold rounded-xl px-6 py-4 md:py-3 hover:bg-eumedical-dark-orange transition-colors 
            focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-eumedical-dark-blue w-full 
            xl:w-auto shrink-0 cursor-pointer disabled:opacity-50 disabled:hover:bg-eumedical-plain-yellow 
            disabled:cursor-not-allowed"
          >
            <Video className="w-5 h-5" aria-hidden="true" />
            Acceder a teleconsulta
          </button>
        </div>

        {/* Card 3 */}
        <div 
          className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col 
          xl:flex-row justify-between items-start xl:items-center gap-6"
        >
          <div className="flex flex-col gap-3 w-full">
            <div className="flex items-center gap-3 text-eumedical-dark-blue">
              <User className="w-5 h-5 text-eumedical-medium-aquamarine shrink-0" aria-hidden="true" />
              <span className="font-didact text-lg font-bold">
                Dra. Laura Montes <span className="font-normal text-eumedical-dark-blue/70">(Medicina General)</span>
              </span>
            </div>
            <div className="flex items-center gap-3 text-eumedical-dark-blue">
              <Clock className="w-5 h-5 text-eumedical-medium-aquamarine shrink-0" aria-hidden="true" />
              <span className="font-didact text-lg">
                Viernes, 25 de Septiembre · 09:15 AM
              </span>
            </div>
          </div>

          <button 
            type="button" 
            disabled 
            className="flex items-center justify-center gap-2 bg-eumedical-plain-yellow text-eumedical-dark-blue 
            font-bold rounded-xl px-6 py-4 md:py-3 hover:bg-eumedical-dark-orange transition-colors 
            focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-eumedical-dark-blue w-full 
            xl:w-auto shrink-0 cursor-pointer disabled:opacity-50 disabled:hover:bg-eumedical-plain-yellow 
            disabled:cursor-not-allowed"
          >
            <Video className="w-5 h-5" aria-hidden="true" />
            Acceder a teleconsulta
          </button>
        </div>

      </div>

      {/* Empty State (No Upcoming Appointments) */}
      <div className="mt-12 text-center p-8 border-2 border-dashed border-gray-200 rounded-2xl">
        <CalendarPlus className="text-gray-300 w-12 h-12 mx-auto mb-4" aria-hidden="true" />
        <p className="font-didact text-gray-500 max-w-md mx-auto">
          ¿Necesitas otra consulta? Puedes programar una nueva visita médica en cualquier momento.
        </p>
      </div>

      {/* Rendering Modal for New Appointment */}
      <NewAppointmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      </div>

  );
}
