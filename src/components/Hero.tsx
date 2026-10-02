import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { NavigationPage } from '../types';

interface HeroProps {
  onNavigate: (page: NavigationPage) => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onExploreServices }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section
      style={{ backgroundColor: '#0F2D44' }}
      className="relative overflow-hidden text-white border-b border-white/10"
    >
      {/* Background Decorative subtle grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #3E5DA6 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Subtle brand ambient glow */}
      <div
        className="absolute top-1/4 -left-20 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ backgroundColor: '#0A7944' }}
      />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-25"
        style={{ backgroundColor: '#3E5DA6' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Column 1: Copy and CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed clean metadata (Zero-Pill discipline) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-300">
              <span
                style={{ color: '#0A7944' }}
                className="font-bold tracking-wide uppercase bg-white/90 px-2 py-0.5 rounded text-[11px]"
              >
                Ingeniería &amp; Consultoría Especializada
              </span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>SST</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Higiene Industrial</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Ergonomía</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Medio Ambiente</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight font-display text-white text-balance leading-[1.12]">
              JPX Ingeniería &amp; Consultoría
            </h1>

            {/* Subtitle from brief */}
            <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl text-balance">
              Soluciones técnicas para una gestión responsable de la seguridad, salud y medio ambiente.
            </p>

            {/* Micro-proof points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-slate-200">
                <CheckCircle2 style={{ color: '#0A7944' }} className="w-4 h-4 shrink-0" />
                <span>Gestión técnica, prevención y normativa ocupacional</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-200">
                <CheckCircle2 style={{ color: '#0A7944' }} className="w-4 h-4 shrink-0" />
                <span>Presencia técnica en Santa Cruz, La Paz y El Alto</span>
              </div>
            </div>

            {/* Buttons from brief: CONOCE NUESTROS SERVICIOS / CONTÁCTANOS */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreServices}
                style={{ backgroundColor: '#0A7944' }}
                className="px-6 py-3.5 rounded-lg text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:brightness-110 flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <span>Conoce Nuestros Servicios</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('contacto')}
                style={{ borderColor: '#3E5DA6', backgroundColor: 'rgba(62, 93, 166, 0.15)' }}
                className="px-6 py-3.5 rounded-lg text-white font-semibold text-xs uppercase tracking-wider border hover:bg-[#3E5DA6]/30 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3E5DA6]"
              >
                <span>Contáctanos</span>
              </button>
            </div>

            {/* Hard metrics banner */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4">
              <div>
                <span className="block text-2xl lg:text-3xl font-bold font-display text-white font-mono tabular-nums">
                  3 Sedes
                </span>
                <span className="text-[11px] text-slate-300 leading-tight block mt-0.5">
                  Santa Cruz · La Paz · El Alto
                </span>
              </div>
              <div>
                <span className="block text-2xl lg:text-3xl font-bold font-display text-white font-mono tabular-nums">
                  100%
                </span>
                <span className="text-[11px] text-slate-300 leading-tight block mt-0.5">
                  Conformidad en auditorías
                </span>
              </div>
              <div>
                <span className="block text-2xl lg:text-3xl font-bold font-display text-white font-mono tabular-nums">
                  +180
                </span>
                <span className="text-[11px] text-slate-300 leading-tight block mt-0.5">
                  Informes &amp; proyectos técnicos
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: High-Fidelity Visual Asset (5 cols) */}
          <div className="lg:col-span-5">
            <div
              style={{ borderColor: 'rgba(62, 93, 166, 0.3)' }}
              className="relative rounded-2xl overflow-hidden border bg-slate-900 shadow-2xl aspect-[4/3] lg:aspect-[16/11]"
            >
              {!imageError ? (
                <img
                  src="/src/assets/images/hero_industrial_safety_1790969615793.jpg"
                  alt="Ingenieros especialistas de JPX realizando inspección de seguridad en planta industrial"
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                />
              ) : (
                /* Fallback container adhering to Zero-Broken-Image Policy */
                <div
                  style={{ backgroundColor: '#0F2D44' }}
                  className="w-full h-full p-8 flex flex-col justify-end text-white"
                >
                  <ShieldCheck style={{ color: '#0A7944' }} className="w-12 h-12 mb-4" />
                  <span className="text-lg font-bold font-display">
                    Ingeniería de Seguridad &amp; Salud en el Trabajo
                  </span>
                  <span className="text-xs text-slate-300 mt-1">
                    Equipos de medición calibrados y auditorías preventivas en terreno.
                  </span>
                </div>
              )}

              {/* Scrim Overlay */}
              <div
                style={{
                  background: 'linear-gradient(to top, rgba(15, 45, 68, 0.9) 0%, rgba(15, 45, 68, 0.2) 60%, transparent 100%)',
                }}
                className="absolute inset-0 pointer-events-none"
              />

              {/* Quiet caption inside media */}
              <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                <div
                  style={{ backgroundColor: 'rgba(15, 45, 68, 0.9)', borderColor: 'rgba(62, 93, 166, 0.4)' }}
                  className="backdrop-blur-sm border rounded-lg p-3 text-left"
                >
                  <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider mb-0.5">
                    <span style={{ color: '#0A7944' }} className="bg-white/95 px-1.5 py-0.2 rounded font-bold">
                      Supervisión Operacional
                    </span>
                    <span className="font-mono text-slate-300">JPX INGENIERÍA</span>
                  </div>
                  <p className="text-xs text-slate-200 mt-1">
                    Inspección técnica de condiciones de trabajo y monitoreo de riesgos ocupacionales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
