import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NavigationPage } from '../types';

interface NavbarProps {
  currentPage: NavigationPage;
  onNavigate: (page: NavigationPage) => void;
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: NavigationPage }[] = [
    { label: 'Inicio', page: 'inicio' },
    { label: 'Nosotros', page: 'nosotros' },
    { label: 'Servicios', page: 'servicios' },
    { label: 'Proyectos', page: 'proyectos' },
    { label: 'Capacitaciones', page: 'capacitaciones' },
    { label: 'Contacto', page: 'contacto' },
  ];

  const handleNavClick = (page: NavigationPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleNavClick('inicio')}
            className="group flex items-center gap-2.5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-md"
            aria-label="JPX Ingeniería & Consultoría - Página de inicio"
          >
            <div
              style={{ backgroundColor: '#0A7944' }}
              className="w-9 h-9 rounded-lg text-white font-bold font-display text-base flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm"
            >
              JPX
            </div>
            <span
              style={{ color: '#0F2D44' }}
              className="text-lg font-bold tracking-tight font-display"
            >
              JPX Ingeniería &amp; Consultoría
            </span>
          </button>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  style={isActive ? { color: '#0A7944' } : { color: '#0F2D44' }}
                  className={`transition-colors py-1 cursor-pointer relative whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded ${
                    isActive
                      ? 'font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0A7944]'
                      : 'hover:text-[#3E5DA6]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('contacto')}
              style={{ backgroundColor: '#0A7944' }}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white rounded-lg hover:brightness-110 transition-all cursor-pointer shadow-sm whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <span>Solicitar Asesoría</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-emerald-200" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-[#0F2D44] hover:bg-slate-100 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Responsive Mobile Menu) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white shadow-xl animate-fadeIn">
          <div className="px-4 pt-3 pb-6 space-y-1">
            <div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Navegación
            </div>
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`w-full text-left px-3 py-3 rounded-lg text-sm font-medium flex items-center justify-between cursor-pointer transition-colors ${
                    isActive
                      ? 'bg-emerald-50 text-[#0A7944] font-bold border-l-4 border-[#0A7944]'
                      : 'text-[#0F2D44] hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-slate-400 font-mono">0{navItems.indexOf(item) + 1}</span>
                </button>
              );
            })}
            <div className="pt-4 px-3">
              <button
                onClick={() => handleNavClick('contacto')}
                style={{ backgroundColor: '#0A7944' }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-white font-semibold text-xs hover:brightness-110 transition-all shadow-sm cursor-pointer"
              >
                <span>Hablemos de tu Proyecto</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-200" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
