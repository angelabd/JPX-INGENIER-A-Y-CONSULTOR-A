import React from 'react';
import { Target, Compass, Award, Users, CheckCircle, Workflow } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/jpxData';

export const AboutSection: React.FC = () => {
  const corporateValues = [
    {
      name: 'Rigor Técnico & Científico',
      description: 'Cada dictamen, cálculo y recomendación está respaldado en metodologías normadas, equipos calibrados y criterios de ingeniería contrastables.',
    },
    {
      name: 'Compromiso con la Vida',
      description: 'La salud física y mental del trabajador es el fin supremo de nuestra práctica profesional. No transigimos ante condiciones de riesgo no controlado.',
    },
    {
      name: 'Integridad & Transparencia',
      description: 'Diagnósticos objetivos y veraces, reportando con fidelidad las vulnerabilidades encontradas para garantizar una prevención genuina.',
    },
    {
      name: 'Innovación Preventiva',
      description: 'Incorporamos tecnología de vanguardia, software biomecánico y análisis de datos para anticipar riesgos antes de que causen daño.',
    },
    {
      name: 'Sostenibilidad Ambiental',
      description: 'Promovemos operaciones limpias, economía circular y uso eficiente de los recursos naturales para proteger los ecosistemas de nuestras comunidades.',
    },
  ];

  const methodologyPhases = [
    {
      step: '01',
      title: 'Diagnóstico & Línea Base',
      desc: 'Inspecciones técnicas en faena, auditoría documental y levantamiento de indicadores para determinar la brecha con respecto a la normativa.',
    },
    {
      step: '02',
      title: 'Ingeniería & Diseño de Controles',
      desc: 'Modelado biomecánico, mediciones instrumentales y diseño de barreras técnicas en fuente y medio de propagación.',
    },
    {
      step: '03',
      title: 'Despliegue & Formación',
      desc: 'Capacitación al personal, formalización de estándares PETS y acompañamiento a los comités y supervisores en campo.',
    },
    {
      step: '04',
      title: 'Auditoría & Mejora Continua',
      desc: 'Monitoreo de eficacia, reevaluaciones periódicas y preparación integral ante fiscalizaciones y auditorías.',
    },
  ];

  return (
    <section id="nosotros" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section Title & Intro */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase mb-2">
            <span style={{ color: '#0A7944' }} className="font-bold">
              02 · Nosotros
            </span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span style={{ color: '#3E5DA6' }} className="font-medium">
              Institucional
            </span>
          </div>
          <h2
            style={{ color: '#0F2D44' }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-balance"
          >
            Conoce JPX: Ingeniería, Salud Ocupacional y Gestión Ambiental
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed text-balance">
            Somos una firma consultora técnica especializada en brindar soluciones integrales para la prevención de riesgos laborales, la optimización ergonómica y el cumplimiento ambiental en los sectores productivos más exigentes.
          </p>
        </div>

        {/* Quiénes somos - Core Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4 text-slate-700 text-sm leading-relaxed">
            <h3 style={{ color: '#0F2D44' }} className="text-2xl font-bold font-display">
              Quiénes Somos
            </h3>
            <p>
              En <strong style={{ color: '#0F2D44' }}>JPX Ingeniería &amp; Consultoría</strong> entendemos que la seguridad y salud en el trabajo no son un trámite burocrático, sino el cimiento indispensable para la rentabilidad, la reputación corporativa y la continuidad operativa de cualquier organización.
            </p>
            <p>
              Nacemos con la convicción de integrar el rigor de la <strong style={{ color: '#0F2D44' }}>ingeniería de procesos</strong> con las ciencias de la salud ocupacional y la gestión ambiental. Esto nos permite diseñar intervenciones realistas que los comités de seguridad pueden sostener en el tiempo y que la alta gerencia puede medir en términos de reducción de ausentismo, cero paralizaciones y clima laboral armónico.
            </p>
            <p>
              Con oficinas en <strong style={{ color: '#0A7944' }}>Santa Cruz</strong>, <strong style={{ color: '#0A7944' }}>La Paz</strong> y <strong style={{ color: '#0A7944' }}>El Alto</strong>, brindamos cobertura técnica nacional con profesionales titulados y especialistas con amplia experiencia en ergonomía laboral y normas internacionales ISO 45001 e ISO 14001.
            </p>
          </div>

          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider" style={{ color: '#0F2D44' }}>
              <Award style={{ color: '#0A7944' }} className="w-4 h-4" />
              <span>Nuestros Compromisos Clave</span>
            </div>
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-start gap-2.5">
                <CheckCircle style={{ color: '#0A7944' }} className="w-4 h-4 shrink-0 mt-0.5" />
                <span><strong style={{ color: '#0F2D44' }}>Validez técnica:</strong> Todos los informes cumplen al 100% con los requerimientos normativos vigentes.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle style={{ color: '#0A7944' }} className="w-4 h-4 shrink-0 mt-0.5" />
                <span><strong style={{ color: '#0F2D44' }}>Enfoque preventivo:</strong> Eliminación y sustitución del riesgo antes de depender exclusivamente de EPP.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle style={{ color: '#0A7944' }} className="w-4 h-4 shrink-0 mt-0.5" />
                <span><strong style={{ color: '#0F2D44' }}>Acompañamiento cercano:</strong> Defensa técnica presencial en Santa Cruz, La Paz y El Alto ante auditorías.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Misión y Visión (Side-by-Side balanced cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 relative overflow-hidden">
            <div
              style={{ backgroundColor: 'rgba(10, 121, 68, 0.1)', color: '#0A7944' }}
              className="w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center mb-5"
            >
              <Target className="w-6 h-6" />
            </div>
            <span
              style={{ color: '#0A7944' }}
              className="text-xs font-mono font-bold tracking-wider uppercase block mb-1"
            >
              Propósito Fundamental
            </span>
            <h3 style={{ color: '#0F2D44' }} className="text-2xl font-bold font-display mb-3">
              Misión
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Brindar soluciones técnicas de ingeniería especializadas en seguridad, salud ocupacional y medio ambiente, aplicando metodologías científicas y criterios de diseño que salvaguarden la integridad física de las personas, optimicen la productividad y garanticen la sostenibilidad legal y operativa de nuestros clientes.
            </p>
          </div>

          <div
            style={{ backgroundColor: '#0F2D44' }}
            className="text-white rounded-2xl p-8 border border-white/10 relative overflow-hidden shadow-sm"
          >
            <div
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#0A7944' }}
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
            >
              <Compass className="w-6 h-6 text-white" />
            </div>
            <span
              style={{ color: '#0A7944' }}
              className="text-xs font-mono font-bold tracking-wider uppercase block mb-1 bg-white px-2 py-0.5 rounded w-fit"
            >
              Rumbo Estratégico
            </span>
            <h3 className="text-2xl font-bold font-display mb-3 text-white">
              Visión
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Ser reconocidos como la firma consultora referente a nivel nacional en ingeniería de prevención, ergonomía ocupacional y gestión ambiental estratégica, distinguidos por nuestro rigor técnico, excelencia en el servicio al cliente y capacidad para transformar la cultura de seguridad en una ventaja competitiva sostenible.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div>
          <div className="max-w-2xl mb-8">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase mb-1">
              <span style={{ color: '#0A7944' }} className="font-bold">Cultura Corporativa</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span style={{ color: '#3E5DA6' }} className="font-medium">Principios Rectores</span>
            </div>
            <h3 style={{ color: '#0F2D44' }} className="text-2xl font-bold font-display">
              Nuestros Valores
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateValues.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-colors"
              >
                <div
                  style={{ backgroundColor: 'rgba(10, 121, 68, 0.08)', color: '#0A7944' }}
                  className="w-8 h-8 rounded-lg font-bold font-mono text-xs flex items-center justify-center mb-4"
                >
                  0{idx + 1}
                </div>
                <h4 style={{ color: '#0F2D44' }} className="font-bold text-base font-display mb-2">
                  {val.name}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Metodología de Trabajo */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12">
          <div className="max-w-2xl mb-10">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase mb-1">
              <Workflow style={{ color: '#0A7944' }} className="w-4 h-4" />
              <span style={{ color: '#0F2D44' }} className="font-bold">Proceso Operacional</span>
            </div>
            <h3 style={{ color: '#0F2D44' }} className="text-2xl sm:text-3xl font-bold font-display">
              Nuestra Metodología de Intervención
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Un ciclo de 4 etapas estructurado para garantizar resultados medibles, trazabilidad técnica y aprobación en auditorías.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologyPhases.map((phase) => (
              <div
                key={phase.step}
                className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <span style={{ color: '#0A7944' }} className="text-xl font-bold font-mono block mb-2">
                    {phase.step}
                  </span>
                  <h4 style={{ color: '#0F2D44' }} className="font-bold text-sm font-display mb-2">
                    {phase.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Equipo de Trabajo */}
        <div>
          <div className="max-w-2xl mb-8">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase mb-1">
              <Users style={{ color: '#0A7944' }} className="w-4 h-4" />
              <span style={{ color: '#0F2D44' }} className="font-bold">Profesionales Especialistas</span>
            </div>
            <h3 style={{ color: '#0F2D44' }} className="text-2xl font-bold font-display">
              Equipo de Trabajo
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Especialistas en ingeniería industrial, higiene, ergonomía y salud ocupacional con habilitación profesional y trayectoria comprobada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 bg-white flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <div
                    style={{ backgroundColor: '#0F2D44' }}
                    className="w-14 h-14 rounded-2xl text-white font-bold font-display text-lg flex items-center justify-center mb-4 border border-white/10 shadow-xs"
                  >
                    {member.initials}
                  </div>
                  <h4 style={{ color: '#0F2D44' }} className="text-base font-bold font-display mb-0.5">
                    {member.name}
                  </h4>
                  <span style={{ color: '#0A7944' }} className="text-xs font-bold block mb-2">
                    {member.role}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 block mb-3 bg-slate-50 p-1.5 rounded border border-slate-100">
                    {member.credential}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
