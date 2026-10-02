import React from 'react';
import { ArrowUp, ShieldCheck, MapPin, Phone, Mail, Facebook, Linkedin } from 'lucide-react';
import { NavigationPage } from '../types';
import { COMPANY_INFO, SERVICES_DATA } from '../data/jpxData';

interface FooterProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenServiceDetail: (slug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenServiceDetail }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{ backgroundColor: '#091B29' }}
      className="text-slate-400 text-xs border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Col 1 & 2: Brand & Purpose */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div
                style={{ backgroundColor: '#0A7944' }}
                className="w-8 h-8 rounded-lg text-white font-bold font-display text-sm flex items-center justify-center shadow-xs"
              >
                JPX
              </div>
              <span className="text-base font-bold text-white tracking-tight font-display">
                JPX Ingeniería &amp; Consultoría
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Soluciones técnicas para una gestión responsable de la seguridad, salud en el trabajo, higiene ocupacional, ergonomía y medio ambiente.
            </p>

            {/* 3 Sedes */}
            <div className="space-y-1.5 pt-2 text-[11px] text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin style={{ color: '#0A7944' }} className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span><strong>Santa Cruz:</strong> calle Beni esq. Bolívar N° 75</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin style={{ color: '#0A7944' }} className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span><strong>La Paz:</strong> zona Alto Pampahasi calle &quot;D&quot; N° 8</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin style={{ color: '#0A7944' }} className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span><strong>El Alto:</strong> zona Santa Rosa calle &quot;I&quot; N° 33 A</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
              <ShieldCheck style={{ color: '#0A7944' }} className="w-4 h-4 shrink-0" />
              <span>Ingeniería especializada y gestión integral de riesgos operacionales.</span>
            </div>
          </div>

          {/* Col 3: Navegación */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3 font-display">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('inicio')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  01 · Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('nosotros')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  02 · Nosotros (Institucional)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('servicios')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  03 · Servicios Técnicos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('proyectos')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  04 · Casos de Estudio &amp; Proyectos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('capacitaciones')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  05 · JPX Capacita
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contacto')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  06 · Contacto &amp; Cotizaciones
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Especialidades de Servicio */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3 font-display">
              Servicios
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_DATA.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onOpenServiceDetail(s.id)}
                    className="hover:text-white transition-colors text-left cursor-pointer flex items-center gap-1.5"
                  >
                    <span>{s.icon}</span>
                    <span>{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contacto Directo & Redes */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3 font-display">
              Contacto Bolivia
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
              >
                <Mail style={{ color: '#0A7944' }} className="w-3.5 h-3.5 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>

              {COMPANY_INFO.phones.map((p, idx) => (
                <a
                  key={idx}
                  href={`tel:${p.number}`}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 font-mono text-[11px]"
                >
                  <Phone style={{ color: '#0A7944' }} className="w-3.5 h-3.5 shrink-0" />
                  <span>{p.display}</span>
                </a>
              ))}
            </div>

            {/* Redes */}
            <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-3">
              <a
                href={COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-[#3E5DA6] text-slate-300 hover:text-white transition-colors"
                title="Facebook JPX"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-[#0A7944] text-slate-300 hover:text-white transition-colors"
                title="LinkedIn JPX"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. Todos los derechos reservados.
            <span className="hidden sm:inline"> · Santa Cruz · La Paz · El Alto</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Seguridad &amp; Medio Ambiente</span>
            <span aria-hidden="true">·</span>
            <span>Normativa SST</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors cursor-pointer ml-2"
              aria-label="Volver arriba"
              title="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
