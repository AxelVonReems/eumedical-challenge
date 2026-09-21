import { 
  ShieldCheck, 
  Calendar, 
  User, 
  Clock, 
  Video, 
  Pill, 
  FileText, 
  History 
} from 'lucide-react';

export default function DashboardIndex() {
  return (
    <div className="flex flex-col gap-8">

      {/* Insurance Information Card (Top) */}
      <div className="bg-eumedical-white rounded-2xl shadow-sm border border-eumedical-light-blue p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-eumedical-dark-blue/70 mb-1">Nº de Póliza</p>
            <p className="text-eumedical-dark-blue font-didact font-bold text-lg">
              EU-8472910
            </p>
          </div>
          <div>
            <p className="text-sm text-eumedical-dark-blue/70 mb-1">Tipo de Cobertura</p>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-eumedical-medium-aquamarine" aria-hidden="true" />
              <p className="text-eumedical-dark-blue font-didact font-bold text-lg">
                Salud Global Premium
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm text-eumedical-dark-blue/70 mb-1">Estado</p>
            <span 
              className="inline-block bg-green-300 text-green-700 
              font-bold px-3 py-1 rounded-full text-sm"
            >
              Activo
            </span>
          </div>
        </div>
      </div>

      {/* Featured Card: Upcoming Consultations (Next 7 days) */}
      <div 
        className="bg-eumedical-medium-aquamarine/10 border border-eumedical-medium-aquamarine/20 
        rounded-2xl p-6 md:p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="w-6 h-6 text-eumedical-dark-blue" aria-hidden="true" />
          <h2 className="text-eumedical-dark-blue font-dinosaur text-xl">
            Próximas consultas programadas
          </h2>
        </div>

        {/* Appointment List Container */}
        <div className="flex flex-col gap-4">

          <div 
            className="bg-eumedical-white border border-eumedical-light-blue rounded-xl p-5 flex flex-col 
            xl:flex-row xl:items-center justify-between gap-6 shadow-sm"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-eumedical-dark-blue">
                <User className="w-5 h-5 text-eumedical-light-aquamarine shrink-0" aria-hidden="true" />
                <span className="font-didact text-lg font-bold">
                  Dra. Maite Paredes <span className="font-normal text-eumedical-dark-blue/70">(Dermatología)</span>
                </span>
              </div>
              <div className="flex items-center gap-3 text-eumedical-dark-blue">
                <Clock className="w-5 h-5 text-eumedical-light-aquamarine shrink-0" aria-hidden="true" />
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

          <div 
            className="bg-eumedical-white border border-eumedical-light-blue rounded-xl p-5 flex flex-col 
            xl:flex-row xl:items-center justify-between gap-6 shadow-sm"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-eumedical-dark-blue">
                <User className="w-5 h-5 text-eumedical-light-aquamarine shrink-0" aria-hidden="true" />
                <span className="font-didact text-lg font-bold">
                  Dr. Javier Castro <span className="font-normal text-eumedical-dark-blue/70">(Cardiología)</span>
                </span>
              </div>
              <div className="flex items-center gap-3 text-eumedical-dark-blue">
                <Clock className="w-5 h-5 text-eumedical-light-aquamarine shrink-0" aria-hidden="true" />
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

        </div>
      </div>

      {/* Statistics Grid / Quick Access */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Card 1 (Treatments) */}
        <div 
          className="bg-eumedical-white rounded-2xl shadow-sm border border-eumedical-light-blue p-6 
          hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="w-12 h-12 bg-eumedical-medium-aquamarine/10 rounded-full flex items-center justify-center mb-4">
            <Pill className="w-6 h-6 text-eumedical-medium-aquamarine" aria-hidden="true" />
          </div>
          <p className="text-sm text-eumedical-dark-blue/70 mb-1">Medicación activa</p>
          <p className="text-eumedical-dark-blue font-didact font-bold text-xl mb-2">2 tratamientos</p>
          <p className="text-sm text-eumedical-dark-blue/70">Próxima toma: 14:00h</p>
        </div>

        {/* Card 2 (Documents) */}
        <div 
          className="bg-eumedical-white rounded-2xl shadow-sm border border-eumedical-light-blue p-6 
          hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="w-12 h-12 bg-eumedical-dark-blue/10 rounded-full flex items-center justify-center mb-4">
            <FileText className="w-6 h-6 text-eumedical-dark-blue" aria-hidden="true" />
          </div>
          <p className="text-sm text-eumedical-dark-blue/70 mb-1">Informes médicos</p>
          <p className="text-eumedical-dark-blue font-didact font-bold text-xl mb-2">1 informe nuevo</p>
          <p className="text-sm text-eumedical-dark-blue/70">Analítica general (Ayer)</p>
        </div>

        {/* Card 3 (History) */}
        <div 
          className="bg-eumedical-white rounded-2xl shadow-sm border border-eumedical-light-blue p-6 
          hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="w-12 h-12 bg-eumedical-light-grey rounded-full flex items-center justify-center mb-4">
            <History className="w-6 h-6 text-eumedical-dark-blue/70" aria-hidden="true" />
          </div>
          <p className="text-sm text-eumedical-dark-blue/70 mb-1">Última consulta</p>
          <p className="text-eumedical-dark-blue font-didact font-bold text-xl mb-2">Hace 15 días</p>
          <p className="text-sm text-eumedical-dark-blue/70">Dermatología</p>
        </div>
      </div>
    </div>
  );
}
