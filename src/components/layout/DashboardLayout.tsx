import { useState } from 'react';
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  LayoutDashboard,
  Video, 
  History, 
  FileText, 
  Pill, 
  User, 
  LogOut 
} from 'lucide-react';
import logoEumedicalBlue from '../../assets/logos/eumedical-logo-blue.png';
import logoEumedicalSymbol from '../../assets/logos/eumedical-symbol.png';

export default function DashboardLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/dashboard', icon: LayoutDashboard, text: 'Inicio', end: true },
    { to: '/dashboard/consultas', icon: Video, text: 'Consultas' },
    { to: '/dashboard/historial', icon: History, text: 'Historial' },
    { to: '/dashboard/documentos', icon: FileText, text: 'Documentos' },
    { to: '/dashboard/recetas', icon: Pill, text: 'Recetas' },
    { to: '/dashboard/perfil', icon: User, text: 'Mi Perfil' },
  ];

  const location = useLocation();
  const currentLink = navLinks.find(link => link.end ? location.pathname === link.to : location.pathname.startsWith(link.to));
  const currentTabName = currentLink ? currentLink.text : 'Inicio';
  const CurrentIcon = currentLink ? currentLink.icon : LayoutDashboard;

  return (
    <div className="h-screen overflow-hidden bg-eumedical-light-grey flex flex-col pt-16">
    {/* <div className="min-h-screen bg-eumedical-light-grey flex flex-col pt-16"> */}

      {/* Header (Cabecera Superior) */}
      <header className="fixed top-0 left-0 right-0 bg-eumedical-light-grey z-40 h-16 flex items-center justify-between px-4 md:px-8 shrink-0">

        {/* Left Group */}
        <div className="flex items-center gap-4 md:gap-6">
          <img 
            src={logoEumedicalBlue} 
            alt="Logotipo de Eumedical azul" 
            className="h-12 hidden md:block"
          />
          <img 
            src={logoEumedicalSymbol} 
            alt="Símbolo de Eumedical azul" 
            className="h-10 md:hidden"
          />

          {/* Divider and Patient Name (Desktop only) */}
          <div className="h-6 w-px bg-eumedical-light-aquamarine hidden md:block" aria-hidden="true"></div>
          <span className="font-didact text-eumedical-dark-blue text-xl font-bold hidden md:block">
            Bienvenidos, Paciente Demo
          </span>
        </div>

        {/* Central Title (Mobile only) */}
        <div className="md:hidden absolute left-1/2 -translate-x-1/2 flex items-center gap-2 text-eumedical-dark-blue">
          <CurrentIcon className="w-5 h-5 shrink-0" aria-hidden="true" />
          <span className="font-didact font-bold text-xl">
            {currentTabName}
          </span>
        </div>

        {/* Right Group: Hamburger menu button (Mobile only) */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden p-2 -mr-2 text-eumedical-dark-blue/70 hover:bg-gray-200 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eumedical-medium-aquamarine"
          aria-label="Abrir menú de navegación"
        >
          <Menu className="w-7 h-7" aria-hidden="true" />
        </button>
      </header>

      {/* Main Body (Flex Row) */}
      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar - Desktop */}
        <aside className="hidden md:flex flex-col w-64 shrink-0 pb-4">
          <nav className="flex-1 flex flex-col gap-2 pl-4 md:pl-8 mb-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `flex items-center gap-3 pl-5 py-4 font-didact text-lg transition-all rounded-l-2xl rounded-r-none ${
                      isActive
                        ? 'bg-eumedical-white text-eumedical-dark-blue font-bold z-10'
                        : 'bg-eumedical-medium-aquamarine/15 text-eumedical-dark-blue hover:bg-eumedical-medium-aquamarine/45'
                    }`
                  }
                >
                  <Icon className="w-5 h-5 shrink-0" aria-hidden="true" />
                  {link.text}
                </NavLink>
              );
            })}
          </nav>

          <div className="pl-4 md:pl-8 mt-auto">
            <Link
              to="/login"
              className="flex items-center gap-3 bg-eumedical-white/90 hover:bg-red-50 text-red-600 font-didact text-lg px-5 py-4 transition-colors rounded-2xl mr-4"
            >
              <LogOut className="w-5 h-5 shrink-0" aria-hidden="true" />
              Cerrar sesión
            </Link>
          </div>
        </aside>

        {/* Mobile Menu (Overlay) */}
        <div 
          className={`md:hidden fixed inset-0 z-50 flex justify-end transition-visibility duration-300 ${
            isMobileMenuOpen ? 'visible' : 'invisible'
          }`}
        >
          <div 
            className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
              isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`} 
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Mobile Sidebar Container */}
          <aside 
            className={`relative w-72 h-full flex flex-col bg-eumedical-light-grey shadow-xl transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex items-center justify-between p-4 border-b border-eumedical-light-blue shrink-0">
              <span className="font-didact text-eumedical-dark-blue text-lg font-bold">Paciente Demo</span>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-eumedical-dark-blue/70 hover:bg-eumedical-light-grey rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eumedical-medium-aquamarine"
                aria-label="Cerrar menú"
              >
                <X className="w-7 h-7" aria-hidden="true" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.end}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-xl font-didact text-lg transition-colors ${
                        isActive
                          ? 'bg-eumedical-medium-aquamarine text-white font-bold'
                          : 'bg-eumedical-white text-eumedical-dark-blue hover:bg-eumedical-light-grey'
                      }`
                    }
                  >
                    <Icon className="w-5 h-5 shrink-0" aria-hidden="true" />
                    {link.text}
                  </NavLink>
                );
              })}
            </nav>

            <div className="m-4 p-1 rounded-xl bg-eumedical-white">
              <Link
                to="/login"
                className="flex items-center gap-3 text-red-600 hover:bg-red-50 px-4 py-3 rounded-xl font-didact transition-colors"
              >
                <LogOut className="w-5 h-5 shrink-0" aria-hidden="true" />
                Cerrar sesión
              </Link>
            </div>
          </aside>
        </div>

        {/* Content Area (on the right) */}
        <main className="flex-1 bg-eumedical-white shadow-xl overflow-y-auto relative z-0">
          <div className="p-6 md:p-10 min-h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
