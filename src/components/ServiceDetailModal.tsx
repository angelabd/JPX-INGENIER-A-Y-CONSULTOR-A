import React from 'react';
import { X, Check, ArrowRight, ShieldCheck, ChevronRight, FileCheck2, Scale } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectServiceForContact: (serviceTitle: string) => void;
  onSelectAnotherService: (service: ServiceItem) => void;
  allServices: ServiceItem[];
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  isOpen,
  onClose,
  onSelectServiceForContact,
  onSelectAnotherService,
  allServices,
}) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 md:p-6 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Modal Top Header with Pantone 2965 C */}
        <div
          style={{ backgroundColor: '#0F2D44' }}
          className="px-6 py-5 text-white flex items-center justify-between border-b border-white/10"
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl p-2 bg-white/10 rounded-xl">{service.icon}</span>
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase">
                <span style={{ color: '#0A7944' }} className="bg-white px-2 py-0.5 rounded font-bold">
                  Servicio Técnico Especializado
                </span>
                <span aria-hidden="true" className="text-slate-400">·</span>
                <span className="text-slate-300 font-mono">/servicios/{service.slug}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white font-display mt-0.5">
                {service.title}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Cerrar ficha de servicio"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Service Switcher Tabs */}
        <div className="bg-slate-100 border-b border-slate-200 px-6 py-2 overflow-x-auto flex items-center gap-1.5">
          <span style={{ color: '#0F2D44' }} className="text-xs font-bold mr-2 whitespace-nowrap">
            Otros Servicios:
          </span>
          {allServices.map((s) => {
            const isCurrent = s.id === service.id;
            return (
              <button
                key={s.id}
                onClick={() => onSelectAnotherService(s)}
                style={isCurrent ? { borderColor: '#0A7944', color: '#0A7944' } : {}}
                className={`px-3 py-1 text-xs rounded-md font-medium whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${
                  isCurrent
                    ? 'bg-white font-bold shadow-xs border'
                    : 'text-slate-600 hover:text-[#0F2D44] hover:bg-slate-200'
                }`}
              >
                <span>{s.icon}</span>
                <span>{s.title}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-8">
          {/* Main Statement */}
          <div
            style={{ borderLeftColor: '#0A7944' }}
            className="border-l-4 pl-4 py-1"
          >
            <h3 style={{ color: '#0F2D44' }} className="text-lg md:text-xl font-bold leading-snug">
              {service.subtitle}
            </h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              {service.shortDescription}
            </p>
          </div>

          {/* ¿Qué hacemos? (Scope & Actions) */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FileCheck2 style={{ color: '#0A7944' }} className="w-5 h-5" />
              <h4 style={{ color: '#0F2D44' }} className="text-base font-bold uppercase tracking-wider font-display">
                ¿Qué hacemos?
              </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.whatWeDo.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3 text-xs md:text-sm text-slate-700 leading-relaxed"
                >
                  <span
                    style={{ backgroundColor: 'rgba(10, 121, 68, 0.15)', color: '#0A7944' }}
                    className="w-5 h-5 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5"
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metodología Cíclica: Evaluar → Analizar → Recomendar → Mejorar */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <ShieldCheck style={{ color: '#0A7944' }} className="w-5 h-5" />
                <h4 style={{ color: '#0F2D44' }} className="text-base font-bold uppercase tracking-wider font-display">
                  Metodología de Trabajo
                </h4>
              </div>
              <span style={{ color: '#3E5DA6' }} className="text-xs font-semibold hidden sm:inline">
                Ciclo técnico continuo
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {service.methodology.map((m, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 bg-white relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span style={{ color: '#0A7944' }} className="text-xs font-mono font-bold">
                      PASO {m.step}
                    </span>
                    {idx < 3 && (
                      <ChevronRight className="w-4 h-4 text-slate-300 hidden lg:block" />
                    )}
                  </div>
                  <h5 style={{ color: '#0F2D44' }} className="font-bold text-sm mb-1.5 font-display">
                    {m.title}
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Entregables y Base Normativa */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-2.5" style={{ color: '#0F2D44' }}>
                <FileCheck2 className="w-4 h-4 text-[#3E5DA6]" />
                <span>Entregables Técnicos Oficiales</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                {service.deliverables.map((deliv, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span style={{ color: '#0A7944' }} className="font-bold">•</span>
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-2.5" style={{ color: '#0F2D44' }}>
                <Scale className="w-4 h-4 text-[#3E5DA6]" />
                <span>Marco Regulatorio &amp; Normativo</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {service.regulatoryBasis.map((norm, i) => (
                  <span
                    key={i}
                    className="text-xs text-slate-700 font-medium bg-white px-2.5 py-1 rounded border border-slate-200"
                  >
                    {norm}
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-slate-500 mt-3">
                Informes con firma de ingeniero colegiado habilitado y validez plena ante auditorías.
              </p>
            </div>
          </div>

          {/* CTA Box with Pantone 2965 C & 7725 C */}
          <div
            style={{ backgroundColor: '#0F2D44' }}
            className="p-6 rounded-xl text-white flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div>
              <span style={{ color: '#0A7944' }} className="text-xs font-bold uppercase tracking-wider bg-white px-2 py-0.5 rounded">
                Asesoría Inmediata
              </span>
              <h4 className="text-lg font-bold font-display mt-1.5">
                {service.ctaQuestion}
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Atención técnica en Santa Cruz, La Paz y El Alto. Cotización sin compromiso.
              </p>
            </div>
            <button
              onClick={() => {
                onSelectServiceForContact(service.title);
                onClose();
              }}
              style={{ backgroundColor: '#0A7944' }}
              className="px-5 py-3 rounded-lg text-white font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-colors shrink-0 flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Solicitar Información</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            JPX Ingeniería &amp; Consultoría · Sedes Santa Cruz, La Paz y El Alto
          </span>
          <button
            onClick={onClose}
            style={{ color: '#0F2D44' }}
            className="px-4 py-2 text-xs font-semibold rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
          >
            Cerrar Ficha
          </button>
        </div>
      </div>
    </div>
  );
};
