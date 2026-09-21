import { useState } from 'react';
import { ChevronLeft, ChevronRight, Search, Pill } from 'lucide-react';
import PrescriptionDetailModal from '../../components/dashboard/PrescriptionDetailModal';

export default function DashboardRecetas() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col gap-10">

      {/* Content Area Header */}
      <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-4">
        <div>
          <h1 className="font-dinosaur text-3xl text-eumedical-dark-blue">
            Mis Recetas
          </h1>
          <p className="text-gray-500 font-didact mt-2 text-lg">
            Consulta tus prescripciones médicas activas y el historial de tratamientos.
          </p>
        </div>
      </div>

      {/* Prescriptions Section */}
      <section>

        {/* Prescriptions Header with Search Engine */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
          <div className="relative w-full sm:max-w-xs">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-eumedical-dark-blue/50" aria-hidden="true" />
            </div>
            <input 
              type="text" 
              placeholder="Buscar medicamento..." 
              className="border border-eumedical-light-blue rounded-xl pl-10 pr-4 py-2 w-full focus:outline-none 
              focus:ring-2 focus:ring-eumedical-medium-aquamarine font-didact text-eumedical-dark-blue 
              placeholder:text-eumedical-dark-blue/50 transition-shadow bg-eumedical-white"
            />
          </div>
        </div>

        <div className="bg-eumedical-white border border-eumedical-light-blue rounded-2xl overflow-hidden 
        shadow-sm flex flex-col">
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr>
                  <th className="bg-eumedical-light-grey text-eumedical-dark-blue/80 font-didact text-sm py-4 
                    px-6 border-b border-eumedical-light-blue font-bold uppercase tracking-wider whitespace-nowrap"
                  >
                    Medicamento
                  </th>
                  <th className="bg-eumedical-light-grey text-eumedical-dark-blue/80 font-didact text-sm py-4 
                    px-6 border-b border-eumedical-light-blue font-bold uppercase tracking-wider whitespace-nowrap"
                  >
                    Dosis
                  </th>
                  <th className="bg-eumedical-light-grey text-eumedical-dark-blue/80 font-didact text-sm py-4 
                    px-6 border-b border-eumedical-light-blue font-bold uppercase tracking-wider whitespace-nowrap"
                  >
                    Médico Prescriptor
                  </th>
                  <th className="bg-eumedical-light-grey text-eumedical-dark-blue/80 font-didact text-sm py-4 
                    px-6 border-b border-eumedical-light-blue font-bold uppercase tracking-wider whitespace-nowrap"
                  >
                    Estado
                  </th>
                  <th className="bg-eumedical-light-grey text-eumedical-dark-blue/80 font-didact text-sm py-4 
                    px-6 border-b border-eumedical-light-blue font-bold uppercase tracking-wider whitespace-nowrap"
                  >
                    Acción
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-eumedical-light-blue/50 font-didact text-eumedical-dark-blue">

                {/* Line 1 */}
                <tr className="hover:bg-eumedical-light-grey/50 transition-colors">
                  <td className="py-4 px-6 whitespace-nowrap font-bold flex items-center gap-2">
                    <Pill className="w-4 h-4 text-eumedical-medium-aquamarine shrink-0" aria-hidden="true" />
                    Ibuprofeno 600mg
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">1 cada 8 horas (5 días)</td>
                  <td className="py-4 px-6 whitespace-nowrap">Dr. López</td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <span 
                      className="inline-flex items-center justify-center bg-green-700 
                      text-eumedical-white font-bold text-xs px-3 py-1 rounded-full whitespace-nowrap"
                    >
                      Activa
                    </span>
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <button 
                      type="button" 
                      onClick={() => setIsModalOpen(true)} 
                      className="bg-eumedical-dark-blue lg:bg-eumedical-medium-aquamarine text-eumedical-white 
                      font-didact font-bold px-4 py-2 rounded-lg transition-colors hover:bg-eumedical-dark-blue 
                      cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eumedical-dark-blue"
                    >
                      Ver receta
                    </button>
                  </td>
                </tr>

                {/* Line 2 */}
                <tr className="hover:bg-eumedical-light-grey/50 transition-colors">
                  <td className="py-4 px-6 whitespace-nowrap font-bold flex items-center gap-2">
                    <Pill className="w-4 h-4 text-eumedical-medium-aquamarine shrink-0" aria-hidden="true" />
                    Paracetamol 1g
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">1 cada 8 horas (si dolor)</td>
                  <td className="py-4 px-6 whitespace-nowrap">Dra. Martínez</td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <span 
                      className="inline-flex items-center justify-center bg-green-700 
                      text-eumedical-white font-bold text-xs px-3 py-1 rounded-full whitespace-nowrap"
                    >
                      Activa
                    </span>
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <button 
                      type="button" 
                      className="bg-eumedical-dark-blue lg:bg-eumedical-medium-aquamarine text-eumedical-white 
                      font-didact font-bold px-4 py-2 rounded-lg transition-colors hover:bg-eumedical-dark-blue 
                      cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eumedical-dark-blue"
                    >
                      Ver receta
                    </button>
                  </td>
                </tr>

                {/* Line 3 */}
                <tr className="hover:bg-eumedical-light-grey/50 transition-colors">
                  <td className="py-4 px-6 whitespace-nowrap font-bold flex items-center gap-2">
                    <Pill className="w-4 h-4 text-eumedical-medium-aquamarine shrink-0" aria-hidden="true" />
                    Omeprazol 20mg
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">1 en ayunas (14 días)</td>
                  <td className="py-4 px-6 whitespace-nowrap">Dr. Fernández</td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <span 
                      className="inline-flex items-center justify-center bg-sky-700 
                      text-eumedical-white font-bold text-xs px-3 py-1 rounded-full whitespace-nowrap"
                    >
                      Finalizada
                    </span>
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <button 
                      type="button" 
                      className="bg-eumedical-dark-blue lg:bg-eumedical-medium-aquamarine text-eumedical-white 
                      font-didact font-bold px-4 py-2 rounded-lg transition-colors hover:bg-eumedical-dark-blue 
                      cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eumedical-dark-blue"
                    >
                      Ver receta
                    </button>
                  </td>
                </tr>

                {/* Line 4 */}
                <tr className="hover:bg-eumedical-light-grey/50 transition-colors">
                  <td className="py-4 px-6 whitespace-nowrap font-bold flex items-center gap-2">
                    <Pill className="w-4 h-4 text-eumedical-medium-aquamarine shrink-0" aria-hidden="true" />
                    Amoxicilina 500mg
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">1 cada 8 horas (7 días)</td>
                  <td className="py-4 px-6 whitespace-nowrap">Dra. Ruiz</td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <span 
                      className="inline-flex items-center justify-center bg-sky-700 
                      text-eumedical-white font-bold text-xs px-3 py-1 rounded-full whitespace-nowrap"
                    >
                      Finalizada
                    </span>
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <button 
                      type="button" 
                      className="bg-eumedical-dark-blue lg:bg-eumedical-medium-aquamarine text-eumedical-white 
                      font-didact font-bold px-4 py-2 rounded-lg transition-colors hover:bg-eumedical-dark-blue 
                      cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eumedical-dark-blue"
                    >
                      Ver receta
                    </button>
                  </td>
                </tr>

                {/* Line 5 */}
                <tr className="hover:bg-eumedical-light-grey/50 transition-colors">
                  <td className="py-4 px-6 whitespace-nowrap font-bold flex items-center gap-2">
                    <Pill className="w-4 h-4 text-eumedical-medium-aquamarine shrink-0" aria-hidden="true" />
                    Loratadina 10mg
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">1 comprimido al día (alergia estacional)</td>
                  <td className="py-4 px-6 whitespace-nowrap">Dr. Sánchez</td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <span 
                      className="inline-flex items-center justify-center bg-green-700 
                      text-eumedical-white font-bold text-xs px-3 py-1 rounded-full whitespace-nowrap"
                    >
                      Activa
                    </span>
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <button 
                      type="button" 
                      className="bg-eumedical-dark-blue lg:bg-eumedical-medium-aquamarine text-eumedical-white 
                      font-didact font-bold px-4 py-2 rounded-lg transition-colors hover:bg-eumedical-dark-blue 
                      cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eumedical-dark-blue"
                    >
                      Ver receta
                    </button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          {/* Pagination and Number of Pages Selector */}
          <div className="flex flex-col lg:flex-row justify-between items-center px-6 py-4 bg-eumedical-white border-t 
            border-eumedical-light-blue gap-4"
          >

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <span className="text-sm text-eumedical-dark-blue/70 font-didact">
                Mostrando 1 a 5 de 14 recetas
              </span>
              <select 
                className="bg-eumedical-light-grey border border-eumedical-light-blue text-eumedical-dark-blue/80 
                text-sm rounded-lg focus:ring-eumedical-medium-aquamarine focus:border-eumedical-medium-aquamarine 
                block p-2 font-didact outline-none cursor-pointer"
                defaultValue="5"
              >
                <option value="5">5 recetas por página</option>
                <option value="10">10 recetas por página</option>
                <option value="25">25 recetas por página</option>
              </select>
            </div>

            <div className="flex items-center font-didact text-sm">
              <button 
                type="button" 
                disabled 
                className="flex items-center justify-center px-3 py-2 border border-eumedical-light-blue 
                bg-eumedical-white text-eumedical-dark-blue/70 hover:bg-eumedical-light-grey/50 
                rounded-l-lg transition-colors focus-visible:outline-none focus-visible:ring-2 
                focus-visible:ring-eumedical-medium-aquamarine focus-visible:z-10 cursor-pointer 
                disabled:cursor-not-allowed disabled:bg-eumedical-white disabled:hover:bg-eumedical-white 
                disabled:text-eumedical-dark-blue/35"
              >
                <ChevronLeft className="w-4 h-4 mr-1" aria-hidden="true" />
                Anterior
              </button>

              <button 
                type="button" 
                className="flex items-center justify-center w-10 py-2 border-y border-eumedical-medium-aquamarine 
                border-l border-l-eumedical-light-blue bg-eumedical-medium-aquamarine text-eumedical-white font-bold 
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eumedical-medium-aquamarine 
                focus-visible:z-10 cursor-pointer"
              >
                1
              </button>

              <button 
                type="button" 
                className="flex items-center justify-center w-10 py-2 border-y border-l border-eumedical-light-blue 
                bg-eumedical-white text-eumedical-dark-blue/80 hover:bg-eumedical-light-grey transition-colors 
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eumedical-medium-aquamarine 
                focus-visible:z-10 cursor-pointer"
              >
                2
              </button>

              <button 
                type="button" 
                className="flex items-center justify-center w-10 py-2 border-y border-l border-eumedical-light-blue 
                bg-eumedical-white text-eumedical-dark-blue/80 hover:bg-eumedical-light-grey transition-colors 
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eumedical-medium-aquamarine 
                focus-visible:z-10 cursor-pointer"
              >
                3
              </button>

              <button 
                type="button" 
                className="flex items-center justify-center px-3 py-2 border border-eumedical-light-blue 
                bg-eumedical-white text-eumedical-dark-blue/70 hover:bg-eumedical-light-grey/50 
                rounded-r-lg transition-colors focus-visible:outline-none focus-visible:ring-2 
                focus-visible:ring-eumedical-medium-aquamarine focus-visible:z-10 cursor-pointer 
                disabled:cursor-not-allowed disabled:bg-eumedical-white disabled:hover:bg-eumedical-white 
                disabled:text-eumedical-dark-blue/35"
              >
                Siguiente
                <ChevronRight className="w-4 h-4 ml-1" aria-hidden="true" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Rendering Modal for Document Details */}
      <PrescriptionDetailModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </div>
  );
}
