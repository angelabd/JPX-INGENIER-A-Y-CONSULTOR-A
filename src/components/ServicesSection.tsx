import React from 'react';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/jpxData';

interface ServicesSectionProps {
  onOpenServiceDetail: (service: ServiceItem) => void;
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenServiceDetail,
  onSelectServiceForContact,
}) => {
  return (
    <section id="servicios" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase mb-2">
            <span style={{ color: '#0A7944' }} className="font-bold">
              03 · Servicios de Ingeniería &amp; Consultoría
            </span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span style={{ color: '#3E5DA6' }} className="font-medium">
              Gestión Responsable
            </span>
          </div>
          <h2
            style={{ color: '#0F2D44' }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-balance"
          >
            Nuestros Servicios
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed text-balance">
            Brindamos soluciones de ingeniería preventiva diseñadas bajo el marco legal vigente y los más altos estándares internacionales para proteger al trabajador y blindar las operaciones de su empresa.
          </p>
        </div>

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => {
            const isMarquee = index === 0 || index === 2;
            return (
              <div
                key={service.id}
                className={`bg-white rounded-2xl border border-slate-200 p-6 md:p-7 flex flex-col justify-between hover:shadow-xl transition-all duration-200 relative group ${
                  isMarquee ? 'border-slate-300' : ''
                }`}
              >
                <div>
                  {/* Top card header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className="text-3xl p-2.5 bg-slate-50 rounded-xl border border-slate-100 group-hover:scale-105 transition-transform">
                      {service.icon}
                    </span>
                    <span
                      style={{ color: '#0F2D44', backgroundColor: 'rgba(15, 45, 68, 0.06)' }}
                      className="text-xs font-mono font-medium px-2.5 py-1 rounded"
                    >
                      {service.badge}
                    </span>
                  </div>

                  <h3
                    style={{ color: '#0F2D44' }}
                    className="text-xl font-bold font-display mb-2 group-hover:text-[#0A7944] transition-colors"
                  >
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-500 font-medium mb-3">
                    {service.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {service.shortDescription}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                    {service.whatWeDo.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 style={{ color: '#0A7944' }} className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onOpenServiceDetail(service)}
                    style={{ color: '#0F2D44' }}
                    className="text-xs font-bold hover:text-[#0A7944] flex items-center gap-1.5 transition-colors cursor-pointer group-hover:translate-x-0.5"
                  >
                    <span>Ver Ficha &amp; Metodología</span>
                    <ChevronRight style={{ color: '#0A7944' }} className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onSelectServiceForContact(service.title)}
                    style={{ backgroundColor: 'rgba(10, 121, 68, 0.1)', color: '#0A7944' }}
                    className="text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-[#0A7944] hover:text-white transition-all cursor-pointer"
                  >
                    Cotizar
                  </button>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Corporate Integration Assurance Banner */}
          <div
            style={{ backgroundColor: '#0F2D44' }}
            className="rounded-2xl p-7 text-white flex flex-col justify-between border border-white/10 shadow-sm"
          >
            <div>
              <div
                style={{ backgroundColor: '#0A7944' }}
                className="w-9 h-9 rounded-lg text-white font-bold flex items-center justify-center font-display mb-4 shadow-xs"
              >
                JPX
              </div>
              <h3 className="text-xl font-bold font-display mb-2 text-white">
                Gestión Integral &amp; Diagnóstico 360°
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                ¿Necesitas articular varios servicios a la vez? Realizamos auditorías combinadas de SST, monitoreo de agentes físicos, evaluación ergonómica y adecuación ambiental en un solo contrato de consultoría.
              </p>
              <div className="text-xs text-emerald-300 font-semibold space-y-1">
                <p>✓ Informe unificado de hallazgos críticos</p>
                <p>✓ Cronograma integrado de medidas correctivas</p>
                <p>✓ Optimización de costos operativos hasta 35%</p>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onSelectServiceForContact('Diagnóstico Integral 360°')}
                style={{ backgroundColor: '#0A7944' }}
                className="w-full py-2.5 px-4 rounded-lg text-white text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Solicitar Diagnóstico Multidisciplinario</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
