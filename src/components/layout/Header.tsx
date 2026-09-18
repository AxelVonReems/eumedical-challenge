import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from '../../assets/logos/eumedical-logo-blue.png';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isDesktopMenuHidden, setIsDesktopMenuHidden] = useState(false);

  const location = useLocation();
  const isServicesActive = location.pathname.startsWith('/services');

  // Helper to close mobile menus when a link is clicked
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  // Helper to close Servicios menus when a link is clicked
  const handleDesktopSubmenuClick = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setIsDesktopMenuHidden(true);
    setTimeout(() => setIsDesktopMenuHidden(false), 150);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-eumedical-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">

        {/* Logo Section */}
        <NavLink to="/" onClick={closeMenu} className="flex items-center z-50">
          <img 
            src={logo} 
            alt="Eumedical Logo" 
            className="h-16 w-auto object-contain min-w-35" 
          />
        </NavLink>

        <nav className="hidden lg:flex items-center gap-10">

        {/* Servicios Dropdown */}
          <div className="group relative py-4">
            <button
              type="button"
              aria-haspopup="true"
              onClick={handleDesktopSubmenuClick}
              className={`flex items-center gap-1 text-xl font-didact transition-colors outline-none ${
                isServicesActive
                  ? "font-extrabold text-eumedical-medium-aquamarine underline decoration-2 underline-offset-8"
                  : "font-semibold text-eumedical-dark-blue hover:text-eumedical-medium-aquamarine focus:text-eumedical-medium-aquamarine"
                }`
              }
            >
              Servicios
              <ChevronDown className="h-5 w-5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
            </button>

            {/* Dropdown Menu */}
            <div 
              className={`absolute left-0 top-full mt-0 w-72 flex-col rounded-b-lg bg-eumedical-white py-2 shadow-lg transition-all duration-300 ${
                isDesktopMenuHidden 
                  ? 'hidden' 
                  : 'flex invisible opacity-0 group-hover:visible group-hover:translate-y-1 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-1 group-focus-within:opacity-100'
              }`}
            >
              <NavLink 
                to="/services/medical-network" 
                onClick={handleDesktopSubmenuClick}
                className={({ isActive }) =>
                  `px-6 py-3 font-didact text-sm font-semibold transition-colors hover:bg-eumedical-light-grey focus:bg-eumedical-light-grey outline-none ${
                    isActive
                      ? "text-eumedical-medium-aquamarine"
                      : "text-eumedical-dark-blue hover:text-eumedical-medium-aquamarine focus:text-eumedical-medium-aquamarine"
                  }`
                }
              >
                Red médica propia
              </NavLink>
              <NavLink 
                to="/services/digital-care" 
                onClick={handleDesktopSubmenuClick}
                className={({ isActive }) =>
                  `px-6 py-3 font-didact text-sm font-semibold transition-colors hover:bg-eumedical-light-grey focus:bg-eumedical-light-grey outline-none ${
                    isActive
                      ? "text-eumedical-medium-aquamarine"
                      : "text-eumedical-dark-blue hover:text-eumedical-medium-aquamarine focus:text-eumedical-medium-aquamarine"
                  }`
                }
              >
                Atencion médica digital 24/7
              </NavLink>
              <NavLink 
                to="/services/technology" 
                onClick={handleDesktopSubmenuClick}
                className={({ isActive }) =>
                  `px-6 py-3 font-didact text-sm font-semibold transition-colors hover:bg-eumedical-light-grey focus:bg-eumedical-light-grey outline-none ${
                    isActive
                      ? "text-eumedical-medium-aquamarine"
                      : "text-eumedical-dark-blue hover:text-eumedical-medium-aquamarine focus:text-eumedical-medium-aquamarine"
                  }`
                }
              >
                Tecnología avanzada
              </NavLink>
              <NavLink 
                to="/services/home-care" 
                onClick={handleDesktopSubmenuClick}
                className={({ isActive }) =>
                  `px-6 py-3 font-didact text-sm font-semibold transition-colors hover:bg-eumedical-light-grey focus:bg-eumedical-light-grey outline-none ${
                    isActive
                      ? "text-eumedical-medium-aquamarine"
                      : "text-eumedical-dark-blue hover:text-eumedical-medium-aquamarine focus:text-eumedical-medium-aquamarine"
                  }`
                }
              >
                Médicos a domicilio
              </NavLink>
            </div>
          </div>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-xl font-didact transition-colors ${
                isActive
                  ? "font-extrabold text-eumedical-medium-aquamarine underline decoration-2 underline-offset-8"
                  : "font-semibold text-eumedical-dark-blue hover:text-eumedical-medium-aquamarine"
              }`
            }
          >
            Sobre nosotros
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-xl font-didact transition-colors ${
                isActive
                  ? "font-extrabold text-eumedical-medium-aquamarine underline decoration-2 underline-offset-8"
                  : "font-semibold text-eumedical-dark-blue hover:text-eumedical-medium-aquamarine"
              }`
            }
          >
            Contacto
          </NavLink>
          <a
            href="https://apply.workable.com/eumedical/?lng=en#jobs"
            className="text-xl text-eumedical-dark-blue hover:text-eumedical-medium-aquamarine font-didact font-semibold transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Únete a nuestro equipo
          </a>
        </nav>

        {/* CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <Link 
            to="/login" 
            className="hidden sm:inline-flex rounded-full bg-eumedical-plain-yellow px-8 py-3 text-didact font-bold text-eumedical-dark-blue transition-transform duration-300 hover:scale-105"
          >
            Área Paciente
          </Link>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-eumedical-dark-blue focus:outline-none z-50 relative"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={
          `lg:hidden absolute left-0 top-full w-full bg-eumedical-white border-t border-eumedical-light-grey shadow-lg transition-all duration-300 origin-top overflow-hidden ${
            isMobileMenuOpen 
              ? "scale-y-100 opacity-100 visible" 
              : "scale-y-0 opacity-0 invisible"
          }`
        }
      >
        <div className="flex flex-col px-4 py-4 gap-2">

          {/* Servicios Accordion (Mobile) */}
          <div className="flex flex-col">
            <button 
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className={`flex items-center gap-1 text-xl font-didact transition-colors outline-none ${
                isServicesActive
                  ? "font-extrabold text-eumedical-medium-aquamarine underline decoration-2 underline-offset-8"
                  : "font-semibold text-eumedical-dark-blue hover:text-eumedical-medium-aquamarine focus:text-eumedical-medium-aquamarine"
                }`
              }
            >
              Servicios
              <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180 text-eumedical-medium-aquamarine" : ""}`} />
            </button>

            {/* Mobile Sub-menu */}
            <div className={
                `flex flex-col pl-6 border-l-2 border-eumedical-light-blue overflow-hidden transition-all duration-300 ${
                  isMobileServicesOpen 
                  ? "max-h-64 opacity-100 mb-2" 
                  : "max-h-0 opacity-0"
                }`
              }
            >
              <NavLink
                to="/services/medical-network"
                onClick={closeMenu}
                className={({ isActive }) => 
                  `py-2 font-didact text-sm ${
                    isActive 
                    ? "font-bold text-eumedical-medium-aquamarine underline decoration-2 underline-offset-6" 
                    : "text-eumedical-dark-blue"
                  }`
                }
              >
                Red médica propia
              </NavLink>
              <NavLink
                to="/services/digital-care"
                onClick={closeMenu}
                                className={({ isActive }) => 
                  `py-2 font-didact text-sm ${
                    isActive 
                    ? "font-bold text-eumedical-medium-aquamarine underline decoration-2 underline-offset-6" 
                    : "text-eumedical-dark-blue"
                  }`
                }
              >
                Atención médica digital 24/7
              </NavLink>
              <NavLink
                to="/services/technology"
                onClick={closeMenu}
                className={({ isActive }) => 
                  `py-2 font-didact text-sm ${
                    isActive 
                    ? "font-bold text-eumedical-medium-aquamarine underline decoration-2 underline-offset-6" 
                    : "text-eumedical-dark-blue"
                  }`
                }
              >
                Tecnología avanzada
              </NavLink>
              <NavLink
                to="/services/home-care"
                onClick={closeMenu}
                className={({ isActive }) => 
                  `py-2 font-didact text-sm ${
                    isActive 
                    ? "font-bold text-eumedical-medium-aquamarine underline decoration-2 underline-offset-6" 
                    : "text-eumedical-dark-blue"
                  }`
                }
              >
                Médicos a domicilio
              </NavLink>
            </div>
          </div>

          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) => 
              `py-3 text-lg font-didact transition-colors ${
                isActive 
                ? "font-bold text-eumedical-medium-aquamarine underline decoration-2 underline-offset-6" 
                : "font-semibold text-eumedical-dark-blue"
              }`
            }
          >
            Sobre nosotros
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) => 
              `py-3 text-lg font-didact transition-colors ${
                isActive 
                ? "font-bold text-eumedical-medium-aquamarine underline decoration-2 underline-offset-6" 
                : "font-semibold text-eumedical-dark-blue"
              }`
            }
          >
            Contacto
          </NavLink>
          <a
            href="https://apply.workable.com/eumedical/?lng=en#jobs"
            onClick={closeMenu}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 text-lg font-didact font-semibold text-eumedical-dark-blue"
          >
            Únete a nuestro equipo
          </a>

          <Link
            to="/login" 
            onClick={closeMenu} 
            className="sm:hidden mt-4 inline-flex justify-center rounded-full bg-eumedical-plain-yellow px-8 py-3 text-didact font-bold text-eumedical-dark-blue">
            Área Paciente
          </Link>
        </div>
      </div>
    </header>
  );
}
