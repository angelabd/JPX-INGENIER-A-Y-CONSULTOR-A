import React, { useState } from 'react';
import { X, CheckCircle, Layers, Compass, Smartphone, Monitor, Palette, FileSpreadsheet, Sparkles } from 'lucide-react';
import { DESIGN_PROCESS_STEPS, COMPANY_INFO } from '../data/jpxData';

interface DesignProcessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectViewport: (mode: 'desktop' | 'mobile') => void;
}

export const DesignProcessModal: React.FC<DesignProcessModalProps> = ({
  isOpen,
  onClose,
  onSelectViewport,
}) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  if (!isOpen) return null;

  const currentStepData = DESIGN_PROCESS_STEPS.find((s) => s.number === activeStep) || DESIGN_PROCESS_STEPS[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 md:p-6 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header with Pantone 2965 C */}
        <div
          style={{ backgroundColor: '#0F2D44' }}
          className="px-6 py-5 text-white flex items-center justify-between border-b border-white/10"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase mb-1">
              <Sparkles style={{ color: '#0A7944' }} className="w-3.5 h-3.5 bg-white rounded-full p-0.5" />
              <span style={{ color: '#0A7944' }} className="bg-white px-2 py-0.5 rounded font-bold">
                Memoria Técnica de Diseño UI/UX &amp; Pantone Oficial
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white font-display">
              Proceso Metodológico en 7 Fases · JPX
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Steps navigation bar */}
        <div className="border-b border-slate-200 bg-slate-50 px-6 py-3 overflow-x-auto flex items-center gap-2">
          {DESIGN_PROCESS_STEPS.map((step) => {
            const isActive = step.number === activeStep;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(step.number)}
                style={isActive ? { backgroundColor: '#0F2D44', color: '#ffffff' } : {}}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'shadow-sm font-semibold'
                    : 'bg-white text-slate-600 hover:text-[#0F2D44] border border-slate-200 hover:border-slate-300'
                }`}
              >
                <span
                  style={isActive ? { backgroundColor: '#0A7944', color: '#ffffff' } : {}}
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    !isActive ? 'bg-slate-200 text-slate-700' : ''
                  }`}
                >
                  {step.number}
                </span>
                <span>{step.title.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Content body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* Active Step Details */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="flex items-center gap-2 text-xs font-semibold mb-1">
              <span style={{ color: '#0A7944' }} className="font-bold">FASE 0{currentStepData.number} DE 07</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-slate-500">METODOLOGÍA DE DISEÑO DE PRODUCTO DIGITAL</span>
            </div>
            <h3 style={{ color: '#0F2D44' }} className="text-xl font-bold font-display mb-3">
              {currentStepData.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {currentStepData.summary}
            </p>

            <h4 style={{ color: '#0F2D44' }} className="text-xs font-bold uppercase tracking-wider mb-3">
              Actividades Ejecutadas en esta fase:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {currentStepData.details.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-3.5 rounded-lg border border-slate-200/80 flex items-start gap-2.5 text-xs text-slate-700"
                >
                  <CheckCircle style={{ color: '#0A7944' }} className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div
              style={{ backgroundColor: 'rgba(10, 121, 68, 0.08)', borderColor: 'rgba(10, 121, 68, 0.25)' }}
              className="border rounded-lg p-3.5 flex items-start gap-3"
            >
              <FileSpreadsheet style={{ color: '#0A7944' }} className="w-4 h-4 shrink-0 mt-0.5" />
              <div>
                <span style={{ color: '#0A7944' }} className="text-xs font-bold block">
                  Entregable Clave:
                </span>
                <span className="text-xs text-slate-700">
                  {currentStepData.deliverables}
                </span>
              </div>
            </div>
          </div>

          {/* PALETA OFICIAL PANTONE (7725 C, 2965 C, 7683 C) */}
          <div className="border border-slate-200 rounded-xl p-6 bg-white space-y-4">
            <div className="flex items-center gap-2">
              <Palette style={{ color: '#0A7944' }} className="w-5 h-5" />
              <div>
                <h4 style={{ color: '#0F2D44' }} className="text-base font-bold font-display">
                  Paleta Cromática Oficial Pantone JPX
                </h4>
                <p className="text-xs text-slate-500">
                  Valores cromáticos normalizados para aplicaciones digitales, impresión y señalética técnica:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Pantone 7725 C */}
              <div className="rounded-xl border border-slate-200 overflow-hidden shadow-xs">
                <div style={{ backgroundColor: '#0A7944' }} className="h-16 p-3 flex items-end">
                  <span className="text-white font-bold text-xs uppercase tracking-wider bg-black/30 px-2 py-0.5 rounded">
                    Pantone 7725 C
                  </span>
                </div>
                <div className="p-3.5 bg-slate-50 text-xs space-y-1">
                  <div className="flex justify-between font-mono">
                    <span className="text-slate-500">HEX:</span>
                    <strong className="text-slate-900">#0A7944</strong>
                  </div>
                  <div className="flex justify-between font-mono">
                    <span className="text-slate-500">RGB:</span>
                    <span className="text-slate-700">10, 121, 68</span>
                  </div>
                  <div className="flex justify-between font-mono">
                    <span className="text-slate-500">CMYK:</span>
                    <span className="text-slate-700">92, 0, 44, 53</span>
                  </div>
                  <p className="text-[11px] text-emerald-800 font-semibold pt-1 border-t border-slate-200">
                    Seguridad, Salud &amp; Medio Ambiente (Acento Primario)
                  </p>
                </div>
              </div>

              {/* Pantone 2965 C */}
              <div className="rounded-xl border border-slate-200 overflow-hidden shadow-xs">
                <div style={{ backgroundColor: '#0F2D44' }} className="h-16 p-3 flex items-end">
                  <span className="text-white font-bold text-xs uppercase tracking-wider bg-black/40 px-2 py-0.5 rounded">
                    Pantone 2965 C
                  </span>
                </div>
                <div className="p-3.5 bg-slate-50 text-xs space-y-1">
                  <div className="flex justify-between font-mono">
                    <span className="text-slate-500">HEX:</span>
                    <strong className="text-slate-900">#0F2D44</strong>
                  </div>
                  <div className="flex justify-between font-mono">
                    <span className="text-slate-500">RGB:</span>
                    <span className="text-slate-700">15, 45, 68</span>
                  </div>
                  <div className="flex justify-between font-mono">
                    <span className="text-slate-500">CMYK:</span>
                    <span className="text-slate-700">78, 34, 0, 73</span>
                  </div>
                  <p className="text-[11px] text-slate-800 font-semibold pt-1 border-t border-slate-200">
                    Estructura Corporativa &amp; Rigor Institucional (Base)
                  </p>
                </div>
              </div>

              {/* Pantone 7683 C */}
              <div className="rounded-xl border border-slate-200 overflow-hidden shadow-xs">
                <div style={{ backgroundColor: '#3E5DA6' }} className="h-16 p-3 flex items-end">
                  <span className="text-white font-bold text-xs uppercase tracking-wider bg-black/30 px-2 py-0.5 rounded">
                    Pantone 7683 C
                  </span>
                </div>
                <div className="p-3.5 bg-slate-50 text-xs space-y-1">
                  <div className="flex justify-between font-mono">
                    <span className="text-slate-500">HEX:</span>
                    <strong className="text-slate-900">#3E5DA6</strong>
                  </div>
                  <div className="flex justify-between font-mono">
                    <span className="text-slate-500">RGB:</span>
                    <span className="text-slate-700">62, 93, 166</span>
                  </div>
                  <div className="flex justify-between font-mono">
                    <span className="text-slate-500">CMYK:</span>
                    <span className="text-slate-700">63, 44, 0, 35</span>
                  </div>
                  <p className="text-[11px] text-blue-800 font-semibold pt-1 border-t border-slate-200">
                    Ingeniería Técnica &amp; Consultoría (Acento Secundario)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Responsive Demonstration Callout */}
          <div
            style={{ backgroundColor: '#0F2D44' }}
            className="border border-white/10 rounded-xl p-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div>
              <span style={{ color: '#0A7944' }} className="text-xs font-bold uppercase tracking-wider bg-white px-2 py-0.5 rounded">
                Demostración de Arquitectura Responsive
              </span>
              <h4 className="text-base font-bold font-display mt-1.5">
                Valida la experiencia en Desktop (1440px) y Mobile (390px)
              </h4>
              <p className="text-xs text-slate-300 mt-0.5 max-w-lg">
                La web cuenta con navegación dedicada para computadoras y menú drawer táctil para celulares.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => {
                  onSelectViewport('desktop');
                  onClose();
                }}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors cursor-pointer border border-white/20"
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Ver Desktop 1440px</span>
              </button>
              <button
                onClick={() => {
                  onSelectViewport('mobile');
                  onClose();
                }}
                style={{ backgroundColor: '#0A7944' }}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-white text-xs font-semibold hover:brightness-110 transition-colors cursor-pointer"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Ver Mobile 390px</span>
              </button>
            </div>
          </div>

          {/* Tipografía y Sitemap */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="border border-slate-200 rounded-xl p-4 bg-white">
              <div className="flex items-center gap-2 mb-2 text-slate-900 font-semibold text-sm">
                <Layers className="w-4 h-4 text-[#3E5DA6]" />
                <span>Tipografía Técnica Curada</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-2 rounded bg-slate-50 border border-slate-100">
                  <span style={{ color: '#0F2D44' }} className="font-bold font-display block">
                    Outfit (Display / Titulares)
                  </span>
                  <span className="text-slate-500 text-[11px]">
                    Geométrica, contemporánea y sólida para marcas de ingeniería.
                  </span>
                </div>
                <div className="p-2 rounded bg-slate-50 border border-slate-100">
                  <span style={{ color: '#0F2D44' }} className="font-semibold block">
                    Plus Jakarta Sans (Cuerpo)
                  </span>
                  <span className="text-slate-500 text-[11px]">
                    Legibilidad óptima para especificaciones técnicas y normativas.
                  </span>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-xl p-4 bg-white">
              <div className="flex items-center gap-2 mb-2 text-slate-900 font-semibold text-sm">
                <Compass style={{ color: '#0A7944' }} className="w-4 h-4" />
                <span>Sitemap Estructurado (6 Niveles)</span>
              </div>
              <div className="space-y-1 text-xs text-slate-700">
                <div className="flex items-center gap-1.5">
                  <span style={{ color: '#0A7944' }} className="font-bold">01</span>
                  <span>Inicio (Hero, Servicios, ¿Por qué?, Proyectos, CTA)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span style={{ color: '#0A7944' }} className="font-bold">02</span>
                  <span>Nosotros (Misión, Visión, Valores, Sedes, Equipo)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span style={{ color: '#0A7944' }} className="font-bold">03</span>
                  <span>Servicios (5 fichas técnicas + metodología)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span style={{ color: '#0A7944' }} className="font-bold">04</span>
                  <span>Proyectos (Casos de estudio cuantificados)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span style={{ color: '#0A7944' }} className="font-bold">05</span>
                  <span>Capacitaciones (Catálogo JPX Capacita)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span style={{ color: '#0A7944' }} className="font-bold">06</span>
                  <span>Contacto (Sedes Santa Cruz, La Paz y El Alto)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer controls */}
        <div className="px-6 py-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
              disabled={activeStep === 1}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              ← Fase Anterior
            </button>
            <button
              onClick={() => setActiveStep((prev) => Math.min(7, prev + 1))}
              disabled={activeStep === 7}
              style={{ backgroundColor: '#0F2D44' }}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg text-white hover:brightness-125 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              Siguiente Fase →
            </button>
          </div>
          <button
            onClick={onClose}
            style={{ backgroundColor: '#0A7944' }}
            className="px-4 py-2 text-xs font-bold rounded-lg text-white hover:brightness-110 transition-colors cursor-pointer"
          >
            Cerrar y Explorar Sitio
          </button>
        </div>
      </div>
    </div>
  );
};
