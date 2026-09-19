import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleMockLogin = (e: React.FormEvent) => {
    e.preventDefault();



    navigate('/dashboard');
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-eumedical-dark-blue px-4">
      <div className="bg-eumedical-light-grey p-8 md:p-10 rounded-2xl shadow-xl w-full max-w-sm text-center">
        <h1 className="font-dinosaur text-3xl text-eumedical-dark-blue mb-2">Acceso</h1>
        <p className="font-didact text-gray-500 mb-8">Portal unificado de Eumedical</p>

        <form onSubmit={handleMockLogin} className="flex flex-col gap-5">
          <input 
            type="email" 
            placeholder="Email" 
            defaultValue="paciente@demo.com"
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-eumedical-medium-aquamarine focus:border-transparent font-arial text-eumedical-dark-blue" 
          />
          <input 
            type="password" 
            placeholder="Contraseña" 
            defaultValue="123456"
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-eumedical-medium-aquamarine focus:border-transparent font-arial text-eumedical-dark-blue" 
          />
          <button 
            type="submit" 
            className="cursor-pointer bg-eumedical-medium-aquamarine text-white font-didact font-bold text-lg py-3 rounded-xl hover:bg-eumedical-dark-blue transition-colors mt-2"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </main>
  );
}
