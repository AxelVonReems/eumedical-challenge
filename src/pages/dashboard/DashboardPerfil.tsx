import React, { useState } from 'react';
import { 
  Pencil, 
  Check, 
  X, 
  Droplet, 
  AlertCircle, 
  Activity, 
  ShieldCheck, 
  Calendar, 
  FileText,
  KeyRound
} from 'lucide-react';

export default function DashboardPerfil() {
  const [isEditing, setIsEditing] = useState(false);

  // Form state for Personal Details
  const [formData, setFormData] = useState({
    email: 'paciente.demo@eumedical.es',
    phone: '+34 612 345 678',
    address: 'Calle Gran Vía 45, 3ºB, 28013 Madrid'
  });

  // Temporary state while editing
  const [editValues, setEditValues] = useState({ ...formData });

  // Simulated toggles state
  const [smsReminder, setSmsReminder] = useState(true);
  const [emailResults, setEmailResults] = useState(true);

  const handleEditClick = () => {
    setEditValues({ ...formData });
    setIsEditing(true);
  };

  const handleCancel = () => {
    setEditValues({ ...formData });
    setIsEditing(false);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ ...editValues });
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col gap-8">

      {/* Content Area Header */}
      <div>
        <h1 className="font-dinosaur text-3xl text-eumedical-dark-blue">
          Mi Perfil
        </h1>
        <p className="text-gray-500 font-didact mt-2 text-lg">
          Gestiona tu información personal, médica y preferencias de contacto.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Card 1: Personal Data */}
        <div className="bg-eumedical-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-dinosaur text-xl text-eumedical-dark-blue">
                Datos Personales
              </h2>

              {!isEditing ? (
                <button
                  type="button"
                  onClick={handleEditClick}
                  className="flex items-center gap-1.5 text-eumedical-white bg-eumedical-dark-blue 
                  lg:bg-eumedical-medium-aquamarine lg:hover:bg-eumedical-dark-blue transition-colors 
                  font-didact font-bold text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 
                  focus-visible:ring-eumedical-dark-blue px-3 py-1.5 rounded-xl"
                >
                  <Pencil className="w-4 h-4" aria-hidden="true" />
                  Editar
                </button>
              ) : (
                <div className="flex items-center lg:gap-2">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="flex items-center gap-1 text-red-600 bg-none lg:hover:bg-red-100 transition-colors 
                    font-didact font-bold text-sm cursor-pointer focus-visible:outline-none 
                    focus-visible:ring-2 focus-visible:ring-eumedical-dark-blue px-3 py-1.5 rounded-xl"
                  >
                    <X className="w-4 h-4" aria-hidden="true" />
                    Cancelar
                  </button>
                  <button
                    type="button"
                    onClick={handleSave}
                    className="flex items-center gap-1 text-eumedical-white bg-eumedical-dark-blue 
                    lg:bg-eumedical-medium-aquamarine lg:hover:bg-eumedical-dark-blue 
                    px-3 py-1.5 rounded-xl font-didact font-bold text-sm 
                    transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 
                    focus-visible:ring-eumedical-dark-blue"
                  >
                    <Check className="w-4 h-4" aria-hidden="true" />
                    Guardar
                  </button>
                </div>
              )}
            </div>

            {/* Content Form / Display */}
            <form onSubmit={handleSave} className="flex flex-col gap-4 font-didact">
              <div>
                <label className="text-xs text-gray-500 font-bold uppercase tracking-wider block mb-1">
                  Email
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    value={editValues.email}
                    onChange={(e) => setEditValues({ ...editValues, email: e.target.value })}
                    className="border border-gray-200 rounded-xl px-4 py-2 w-full focus:outline-none 
                    focus:border-eumedical-medium-aquamarine text-eumedical-dark-blue transition-colors"
                    required
                  />
                ) : (
                  <p className="text-eumedical-dark-blue font-bold">
                    {formData.email}
                  </p>
                )}
              </div>

              <div>
                <label className="text-xs text-gray-500 font-bold uppercase tracking-wider block mb-1">
                  Teléfono
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={editValues.phone}
                    onChange={(e) => setEditValues({ ...editValues, phone: e.target.value })}
                    className="border border-gray-200 rounded-xl px-4 py-2 w-full focus:outline-none 
                    focus:border-eumedical-medium-aquamarine text-eumedical-dark-blue transition-colors"
                    required
                  />
                ) : (
                  <p className="text-eumedical-dark-blue font-bold">
                    {formData.phone}
                  </p>
                )}
              </div>

              <div>
                <label className="text-xs text-gray-500 font-bold uppercase tracking-wider block mb-1">
                  Dirección
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editValues.address}
                    onChange={(e) => setEditValues({ ...editValues, address: e.target.value })}
                    className="border border-gray-200 rounded-xl px-4 py-2 w-full focus:outline-none 
                    focus:border-eumedical-medium-aquamarine text-eumedical-dark-blue transition-colors"
                    required
                  />
                ) : (
                  <p className="text-eumedical-dark-blue font-bold">
                    {formData.address}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Card 2: Basic Medical Profile */}
        <div className="bg-eumedical-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="font-dinosaur text-xl text-eumedical-dark-blue mb-6">
              Información Médica
            </h2>

            <div className="flex flex-col gap-4 font-didact">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div 
                  className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center 
                  text-red-500 shrink-0"
                >
                  <Droplet className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block">
                    Grupo Sanguíneo
                  </span>
                  <span className="text-eumedical-dark-blue font-bold">
                    A+ (Positivo)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div 
                  className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center 
                  text-amber-500 shrink-0"
                >
                  <AlertCircle className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block">
                    Alergias Conocidas
                  </span>
                  <span className="text-eumedical-dark-blue font-bold">
                    Ninguna conocida
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div 
                  className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center 
                  text-eumedical-medium-aquamarine shrink-0"
                >
                  <Activity className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block">
                    Condiciones Crónicas
                  </span>
                  <span className="text-eumedical-dark-blue font-bold">
                    Hipertensión controlada
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Insurance Policy Details */}
        <div className="bg-eumedical-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="font-dinosaur text-xl text-eumedical-dark-blue mb-6">
              Mi Póliza
            </h2>

            <div className="flex flex-col gap-4 font-didact">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div 
                  className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center 
                  text-eumedical-medium-aquamarine shrink-0"
                >
                  <FileText className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block">
                    Número de Póliza
                  </span>
                  <span className="text-eumedical-dark-blue font-bold">
                    EU-8472910
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div 
                  className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center 
                  text-eumedical-dark-blue shrink-0"
                >
                  <ShieldCheck className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block">
                    Tipo de Cobertura
                  </span>
                  <span className="text-eumedical-dark-blue font-bold">
                    Salud Global Premium
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div 
                  className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center 
                  text-eumedical-medium-aquamarine shrink-0"
                >
                  <Calendar className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block">
                    Fecha de Alta
                  </span>
                  <span className="text-eumedical-dark-blue font-bold">
                    12 Enero 2024
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Preferences and Security */}
        <div className="bg-eumedical-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="font-dinosaur text-xl text-eumedical-dark-blue mb-6">
              Notificaciones y Seguridad
            </h2>

            <div className="flex flex-col gap-5 font-didact">
              {/* Toggle 1 */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-eumedical-dark-blue font-bold block text-sm">
                    Recordatorios por SMS
                  </span>
                  <span className="text-xs text-gray-500">
                    Avisos 24 horas antes de cada consulta programada
                  </span>
                </div>

                <button
                  type="button"
                  role="switch"
                  aria-checked={smsReminder}
                  onClick={() => setSmsReminder(!smsReminder)}
                  className={
                    `relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors 
                    cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eumedical-medium-aquamarine 
                    ${smsReminder ? 'bg-eumedical-medium-aquamarine' : 'bg-gray-200'}`
                  }
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-eumedical-white transition-transform ${
                      smsReminder ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Toggle 2 */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-eumedical-dark-blue font-bold block text-sm">
                    Resultados por Email
                  </span>
                  <span className="text-xs text-gray-500">
                    Notificación instantánea cuando haya analíticas listas
                  </span>
                </div>

                <button
                  type="button"
                  role="switch"
                  aria-checked={emailResults}
                  onClick={() => setEmailResults(!emailResults)}
                  className={
                    `relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors 
                    cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eumedical-medium-aquamarine 
                    ${emailResults ? 'bg-eumedical-medium-aquamarine' : 'bg-gray-200'}`
                  }
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-eumedical-white transition-transform ${
                      emailResults ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100 mt-6">
            <button
              type="button"
              className="flex items-center justify-center gap-2 border border-gray-200 text-eumedical-dark-blue 
              rounded-xl px-4 py-2 w-full font-didact font-bold cursor-pointer hover:bg-gray-50 transition-colors 
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eumedical-medium-aquamarine"
            >
              <KeyRound className="w-4 h-4 text-gray-500" aria-hidden="true" />
              Cambiar contraseña
            </button>
          </div>
        </div>

        {/* Example of a mocked error state for the prototype */}
        <div className="flex flex-col gap-1">
          <p className="text-eumedical-dark-blue text-xl font-bold">Error handling for inputs</p>
          <label className="text-sm font-didact text-gray-600">Correo Electrónico</label>
          <input 
            type="text" 
            defaultValue="paciente@correo" 
            className="border-2 border-red-500 bg-red-50 rounded-xl px-4 py-2 focus:outline-none text-red-900"
          />
          <span className="text-xs text-red-500 font-didact">Formato de correo inválido</span>
        </div>

      </div>
    </div>
  );
}
