import React from 'react';
import { Award, ShieldAlert, Cpu, HeartHandshake } from 'lucide-react';
import { WHY_US_PILLARS } from '../data/jpxData';

export const WhyUsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'wrench':
        return <Award style={{ color: '#0A7944' }} className="w-6 h-6" />;
      case 'shield-check':
        return <ShieldAlert style={{ color: '#0A7944' }} className="w-6 h-6" />;
      case 'cpu':
        return <Cpu style={{ color: '#0A7944' }} className="w-6 h-6" />;
      case 'users':
      default:
        return <HeartHandshake style={{ color: '#0A7944' }} className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase mb-2">
            <span style={{ color: '#0A7944' }} className="font-bold">
              Ventajas Competitivas
            </span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span style={{ color: '#3E5DA6' }} className="font-medium">
              Rigor &amp; Confianza
            </span>
          </div>
          <h2
            style={{ color: '#0F2D44' }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-balance"
          >
            ¿Por qué JPX?
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed text-balance">
            Combinamos conocimiento técnico colegiado, experiencia en faena industrial y un compromiso innegociable con la prevención real y la seguridad de las personas.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all duration-200"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-5 shadow-xs">
                  {getIcon(pillar.icon)}
                </div>
                
                <span
                  style={{ color: '#0A7944' }}
                  className="text-xs font-mono font-bold tracking-wider uppercase block mb-1"
                >
                  0{idx + 1} · {pillar.title}
                </span>

                <h3
                  style={{ color: '#0F2D44' }}
                  className="text-lg font-bold font-display mb-2 leading-snug"
                >
                  {pillar.headline}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Proven Metric / Proof Box */}
              <div className="pt-4 border-t border-slate-200/70">
                <span
                  style={{ color: '#0F2D44' }}
                  className="block text-xl font-bold font-mono tabular-nums"
                >
                  {pillar.stats}
                </span>
                <span className="text-[11px] text-slate-500 leading-tight block mt-0.5">
                  {pillar.statLabel}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Trust Banner in Pantone 2965 C */}
        <div
          style={{ backgroundColor: '#0F2D44' }}
          className="mt-14 rounded-2xl text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm border border-white/10"
        >
          <div className="space-y-1">
            <span
              style={{ color: '#0A7944' }}
              className="text-xs font-bold uppercase tracking-wider bg-white px-2 py-0.5 rounded"
            >
              Acreditación &amp; Legalidad
            </span>
            <h4 className="text-lg font-bold font-display text-white mt-1.5">
              Todos nuestros informes técnicos cuentan con validez legal ante entidades fiscalizadoras y auditorías
            </h4>
            <p className="text-xs text-slate-300">
              Firmas de ingenieros habilitados y certificados de calibración vigentes con trazabilidad instrumental.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="text-right hidden sm:block">
              <span className="text-xs text-slate-400 block font-mono">ESTÁNDARES APLICADOS</span>
              <span style={{ color: '#3E5DA6' }} className="text-xs font-bold text-white bg-[#3E5DA6] px-2 py-0.5 rounded">
                ISO 45001 / ISO 14001
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
