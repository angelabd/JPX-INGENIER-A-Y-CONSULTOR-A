import React, { useState } from 'react';
import { X, Building2, Briefcase, Target, ArrowRight, CheckCircle, Lightbulb, FileText, BarChart3 } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
  onContactForSimilarProject: (projectTitle: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
  onContactForSimilarProject,
}) => {
  const [imgError, setImgError] = useState(false);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 md:p-6 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header with Title and Close Button (Pantone 2965 C) */}
        <div
          style={{ backgroundColor: '#0F2D44' }}
          className="px-6 py-5 text-white flex items-center justify-between border-b border-white/10"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase">
              <span style={{ color: '#0A7944' }} className="bg-white px-2 py-0.5 rounded font-bold">
                Caso de Estudio Técnico
              </span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-slate-200">{project.serviceName}</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white font-display mt-1">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Cerrar detalles del proyecto"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-8">
          {/* Top Hero Media & Metadata Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 rounded-xl overflow-hidden border border-slate-200 aspect-[16/10] bg-slate-100">
              {!imgError ? (
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div
                  style={{ backgroundColor: '#0F2D44' }}
                  className="w-full h-full flex items-center justify-center text-slate-300 p-6 text-center"
                >
                  <span className="text-sm font-semibold">{project.title}</span>
                </div>
              )}
            </div>

            <div className="md:col-span-5 space-y-3.5 text-xs text-slate-600 bg-slate-50 p-5 rounded-xl border border-slate-200">
              <div>
                <span className="text-slate-400 font-medium block">Cliente</span>
                <span style={{ color: '#0F2D44' }} className="font-bold text-sm flex items-center gap-1.5 mt-0.5">
                  <Building2 className="w-4 h-4 text-[#3E5DA6]" />
                  {project.client}
                </span>
              </div>

              <div>
                <span className="text-slate-400 font-medium block">Sector / Industria</span>
                <span className="font-semibold text-slate-800 text-xs">
                  {project.industry}
                </span>
              </div>

              <div>
                <span className="text-slate-400 font-medium block">Línea de Servicio</span>
                <span style={{ color: '#0A7944' }} className="font-bold text-xs flex items-center gap-1 mt-0.5">
                  <Briefcase className="w-3.5 h-3.5" />
                  {project.serviceName}
                </span>
              </div>

              <div className="pt-2 border-t border-slate-200">
                <span className="text-slate-400 font-medium block mb-1">Síntesis</span>
                <p className="text-slate-700 leading-relaxed text-xs">
                  {project.shortDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Quantified Metrics Highlight */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                style={{ backgroundColor: 'rgba(10, 121, 68, 0.06)', borderColor: 'rgba(10, 121, 68, 0.25)' }}
                className="border rounded-xl p-4 text-center sm:text-left"
              >
                <span style={{ color: '#0A7944' }} className="text-2xl font-bold font-mono block tabular-nums">
                  {m.value}
                </span>
                <span style={{ color: '#0F2D44' }} className="text-xs font-bold block mt-0.5">
                  {m.label}
                </span>
                <span className="text-[11px] text-slate-600 block mt-0.5">
                  {m.highlight}
                </span>
              </div>
            ))}
          </div>

          {/* Contexto, Objetivo y Alcance */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                01 · Contexto Inicial
              </span>
              <p className="text-xs text-slate-700 leading-relaxed">
                {project.context}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span style={{ color: '#0A7944' }} className="text-xs font-bold uppercase tracking-wider block mb-1">
                02 · Objetivo Técnico
              </span>
              <p className="text-xs text-slate-700 leading-relaxed">
                {project.objective}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                03 · Alcance de Intervención
              </span>
              <p className="text-xs text-slate-700 leading-relaxed">
                {project.scope}
              </p>
            </div>
          </div>

          {/* Metodología */}
          <div className="p-5 rounded-xl border border-slate-200 bg-white">
            <div className="flex items-center gap-2 mb-2">
              <Target style={{ color: '#0A7944' }} className="w-4 h-4" />
              <h4 style={{ color: '#0F2D44' }} className="text-xs font-bold uppercase tracking-wider">
                Metodología Aplicada &amp; Estándares
              </h4>
            </div>
            <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
              {project.methodology}
            </p>
          </div>

          {/* Desarrollo del Proyecto */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-4 h-4 text-[#3E5DA6]" />
              <h4 style={{ color: '#0F2D44' }} className="text-xs font-bold uppercase tracking-wider">
                Desarrollo Técnico de las Acciones
              </h4>
            </div>
            <div className="space-y-2">
              {project.development.map((step, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-700"
                >
                  <span
                    style={{ backgroundColor: '#0F2D44' }}
                    className="w-5 h-5 rounded-full text-white font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5"
                  >
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Resultados y Recomendaciones */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Resultados */}
            <div className="p-5 rounded-xl bg-emerald-50/50 border border-emerald-200/80">
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 style={{ color: '#0A7944' }} className="w-4 h-4" />
                <h4 style={{ color: '#0A7944' }} className="text-xs font-bold uppercase tracking-wider">
                  Resultados Alcanzados
                </h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-700">
                {project.results.map((res, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle style={{ color: '#0A7944' }} className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recomendaciones */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-4 h-4 text-[#3E5DA6]" />
                <h4 style={{ color: '#0F2D44' }} className="text-xs font-bold uppercase tracking-wider">
                  Recomendaciones de Sostenibilidad
                </h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-700">
                {project.recommendations.map((rec, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span style={{ color: '#0A7944' }} className="font-bold">•</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Box (Pantone 2965 C with 7725 C button) */}
          <div
            style={{ backgroundColor: '#0F2D44' }}
            className="p-6 rounded-xl text-white flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div>
              <span style={{ color: '#0A7944' }} className="text-xs font-bold uppercase tracking-wider bg-white px-2 py-0.5 rounded">
                Solución a la Medida
              </span>
              <h4 className="text-base font-bold font-display mt-1 text-white">
                ¿Tu empresa enfrenta un desafío técnico similar?
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Conversemos sobre los requerimientos específicos de tu operación en Bolivia y planifiquemos una visita técnica.
              </p>
            </div>
            <button
              onClick={() => {
                onContactForSimilarProject(project.title);
                onClose();
              }}
              style={{ backgroundColor: '#0A7944' }}
              className="px-5 py-2.5 rounded-lg text-white font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-colors shrink-0 flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Consultar por este Servicio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Dossier Técnico · JPX Ingeniería &amp; Consultoría
          </span>
          <button
            onClick={onClose}
            style={{ color: '#0F2D44' }}
            className="px-4 py-2 text-xs font-semibold rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
          >
            Cerrar Presentación
          </button>
        </div>
      </div>
    </div>
  );
};
