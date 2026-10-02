import React, { useState } from 'react';
import { ArrowRight, Building2, TrendingUp } from 'lucide-react';
import { ProjectItem } from '../types';
import { FEATURED_PROJECTS } from '../data/jpxData';

interface ProjectsSectionProps {
  onOpenProjectDetail: (project: ProjectItem) => void;
  onExploreAllProjects?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenProjectDetail,
}) => {
  const [filter, setFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: 'Todos los Proyectos' },
    { id: 'ergonomia', label: 'Ergonomía' },
    { id: 'higiene', label: 'Higiene Industrial' },
    { id: 'medio-ambiente', label: 'Medio Ambiente' },
  ];

  const filteredProjects =
    filter === 'all'
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) => p.serviceId === filter);

  return (
    <section id="proyectos" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase mb-2">
              <span style={{ color: '#0A7944' }} className="font-bold">
                04 · JPX en Acción
              </span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span style={{ color: '#3E5DA6' }} className="font-medium">
                Portafolio Técnico
              </span>
            </div>
            <h2
              style={{ color: '#0F2D44' }}
              className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-balance"
            >
              Proyectos Destacados
            </h2>
            <p className="mt-2 text-base text-slate-600 leading-relaxed text-balance">
              Evidencia empírica y resultados medibles en clientes de sectores de alta exigencia operacional.
            </p>
          </div>

          {/* Interactive filter control */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto self-start md:self-auto border border-slate-200/80">
            {filterOptions.map((opt) => {
              const isActive = filter === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setFilter(opt.id)}
                  style={isActive ? { backgroundColor: '#0F2D44', color: '#ffffff' } : { color: '#0F2D44' }}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'shadow-xs font-semibold'
                      : 'hover:text-[#0A7944] hover:bg-slate-200/60'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3 Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo with hover zoom */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2D44]/80 via-transparent to-transparent" />
                  
                  {/* Service tag overlay */}
                  <div className="absolute top-3 left-3">
                    <span
                      style={{ backgroundColor: '#0F2D44' }}
                      className="text-[11px] font-semibold text-white px-2.5 py-1 rounded-md border border-white/20"
                    >
                      {project.serviceName}
                    </span>
                  </div>

                  {/* Primary highlight metric overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span style={{ color: '#0A7944' }} className="text-xl font-bold font-mono bg-white px-1.5 py-0.5 rounded tabular-nums">
                      {project.metrics[0].value}
                    </span>
                    <span className="text-xs text-white ml-2 font-medium">
                      {project.metrics[0].label}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Client & Industry unboxed metadata */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <Building2 className="w-3.5 h-3.5 text-[#3E5DA6]" />
                    <span className="font-semibold text-slate-700">{project.client}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.industry}</span>
                  </div>

                  <h3
                    style={{ color: '#0F2D44' }}
                    className="text-lg font-bold font-display mb-2 group-hover:text-[#0A7944] transition-colors line-clamp-2"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Additional Metric Chip */}
                  <div className="bg-slate-50 border border-slate-100 rounded-lg p-2.5 flex items-center justify-between text-xs">
                    <span className="text-slate-500">{project.metrics[1].label}:</span>
                    <span style={{ color: '#0F2D44' }} className="font-mono font-bold tabular-nums">
                      {project.metrics[1].value}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer with VER PROYECTO → */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => onOpenProjectDetail(project)}
                  style={{ backgroundColor: '#0F2D44' }}
                  className="w-full py-2.5 px-4 rounded-xl text-white font-semibold text-xs hover:bg-[#0A7944] transition-colors flex items-center justify-center gap-2 cursor-pointer group/btn shadow-xs"
                >
                  <span>Ver Proyecto</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-300 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Callout */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              style={{ backgroundColor: 'rgba(10, 121, 68, 0.1)', color: '#0A7944' }}
              className="w-10 h-10 rounded-xl flex items-center justify-center font-bold"
            >
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h4 style={{ color: '#0F2D44' }} className="text-sm font-bold font-display">
                ¿Buscas referencias de proyectos en un sector industrial particular?
              </h4>
              <p className="text-xs text-slate-500">
                Disponemos de dossiers técnicos específicos en minería, manufactura, logística y agroindustria.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              const proj = FEATURED_PROJECTS[0];
              if (proj) onOpenProjectDetail(proj);
            }}
            style={{ borderColor: '#3E5DA6', color: '#0F2D44' }}
            className="px-4 py-2 text-xs font-semibold hover:bg-slate-100 bg-white border rounded-lg transition-colors cursor-pointer whitespace-nowrap"
          >
            Explorar Plantilla de Presentación →
          </button>
        </div>
      </div>
    </section>
  );
};
