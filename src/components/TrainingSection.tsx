import React, { useState } from 'react';
import { Clock, Users, Award, ArrowRight, Check } from 'lucide-react';
import { TrainingItem } from '../types';
import { TRAINING_CATALOG } from '../data/jpxData';

interface TrainingSectionProps {
  onSelectCourseForQuote: (courseTheme: string) => void;
}

export const TrainingSection: React.FC<TrainingSectionProps> = ({
  onSelectCourseForQuote,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Todas las Capacitaciones' },
    { id: 'Ergonomía', label: 'Ergonomía' },
    { id: 'SST', label: 'SST & Prevención' },
    { id: 'Emergencias', label: 'Emergencias' },
    { id: 'Higiene Industrial', label: 'Higiene' },
    { id: 'Medio Ambiente', label: 'Medio Ambiente' },
  ];

  const filteredCourses =
    selectedCategory === 'all'
      ? TRAINING_CATALOG
      : TRAINING_CATALOG.filter((c) => c.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedCourseId(expandedCourseId === id ? null : id);
  };

  return (
    <section id="capacitaciones" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase mb-2">
            <span style={{ color: '#0A7944' }} className="font-bold">
              05 · JPX Capacita
            </span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span style={{ color: '#3E5DA6' }} className="font-medium">
              Formación Empresarial Especializada
            </span>
          </div>
          <h2
            style={{ color: '#0F2D44' }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-balance"
          >
            JPX Capacita: Conocimiento que se Transforma en Prevención
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed text-balance">
            Formación técnica orientada a fortalecer conocimientos, conductas de autocuidado y prácticas efectivas de prevención dentro de las organizaciones. Cursos dictados por ingenieros y especialistas con amplia experiencia en faena.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl overflow-x-auto mb-10 w-fit">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={isActive ? { backgroundColor: '#0F2D44', color: '#ffffff' } : { color: '#0F2D44' }}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'shadow-xs font-semibold'
                    : 'hover:text-[#0A7944] hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => {
            const isExpanded = expandedCourseId === course.id;
            return (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-lg transition-all duration-200"
              >
                <div>
                  {/* Category and Modality chips */}
                  <div className="flex items-center justify-between gap-2 mb-3 text-xs">
                    <span style={{ color: '#0A7944' }} className="font-bold">
                      {course.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {course.modality}
                    </span>
                  </div>

                  <h3
                    style={{ color: '#0F2D44' }}
                    className="text-lg font-bold font-display mb-3 leading-snug"
                  >
                    {course.theme}
                  </h3>

                  {/* Objective */}
                  <div className="mb-4">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Objetivo
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {course.objective}
                    </p>
                  </div>

                  {/* Metadata fields */}
                  <div className="space-y-2 py-3 border-y border-slate-100 text-xs">
                    <div className="flex items-start gap-2 text-slate-600">
                      <Users className="w-4 h-4 text-[#3E5DA6] shrink-0 mt-0.5" />
                      <div>
                        <span style={{ color: '#0F2D44' }} className="font-semibold">Dirigido a: </span>
                        <span>{course.targetAudience}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock className="w-4 h-4 text-[#3E5DA6] shrink-0" />
                      <div>
                        <span style={{ color: '#0F2D44' }} className="font-semibold">Duración: </span>
                        <span className="font-mono">{course.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-slate-600">
                      <Award style={{ color: '#0A7944' }} className="w-4 h-4 shrink-0" />
                      <span className="text-[11px] text-slate-500">{course.certification}</span>
                    </div>
                  </div>

                  {/* Expandable Module syllabus */}
                  {isExpanded && (
                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 animate-fadeIn">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                        Módulos Temáticos:
                      </span>
                      {course.modules.map((mod, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <Check style={{ color: '#0A7944' }} className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                          <span>{mod}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer buttons */}
                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => toggleExpand(course.id)}
                    style={{ color: '#0F2D44' }}
                    className="text-xs font-semibold hover:text-[#0A7944] transition-colors cursor-pointer"
                  >
                    {isExpanded ? 'Ocultar temario' : 'Ver temario completo'}
                  </button>

                  <button
                    onClick={() => onSelectCourseForQuote(course.theme)}
                    style={{ backgroundColor: '#0A7944' }}
                    className="px-3.5 py-2 text-xs font-bold rounded-lg text-white hover:brightness-110 transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
                  >
                    <span>Cotizar In-House</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* In-company tailored workshop banner (Pantone 2965 C) */}
        <div
          style={{ backgroundColor: '#0F2D44' }}
          className="mt-12 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm border border-white/10"
        >
          <div className="space-y-1">
            <span
              style={{ color: '#0A7944' }}
              className="text-xs font-bold uppercase tracking-wider bg-white px-2 py-0.5 rounded"
            >
              Capacitaciones In-Company a Medida
            </span>
            <h4 className="text-xl font-bold font-display mt-2">
              ¿Tu empresa requiere un programa con horas específicas para el Comité de SST?
            </h4>
            <p className="text-xs text-slate-300 max-w-2xl">
              Diseñamos mallas curriculares según los riesgos particulares de tus plantas en Santa Cruz, La Paz o El Alto, con talleres vivenciales, ergonomía participativa y emisión de constancias con valor curricular.
            </p>
          </div>
          <button
            onClick={() => onSelectCourseForQuote('Programa Anual de Capacitación In-Company')}
            style={{ backgroundColor: '#0A7944' }}
            className="px-6 py-3 rounded-lg text-white font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-colors shrink-0 cursor-pointer shadow-md"
          >
            Solicitar Malla a Medida
          </button>
        </div>
      </div>
    </section>
  );
};
