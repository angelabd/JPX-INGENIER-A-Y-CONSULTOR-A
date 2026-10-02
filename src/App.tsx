/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { DeviceSimulatorBar, ViewportMode } from './components/DeviceSimulatorBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { WhyUsSection } from './components/WhyUsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { TrainingSection } from './components/TrainingSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DesignProcessModal } from './components/DesignProcessModal';
import { NavigationPage, ServiceItem, ProjectItem } from './types';
import { SERVICES_DATA, FEATURED_PROJECTS } from './data/jpxData';
import { ArrowRight, PhoneCall, Sparkles } from 'lucide-react';

export default function App() {
  const [viewportMode, setViewportMode] = useState<ViewportMode>('fluid');
  const [currentPage, setCurrentPage] = useState<NavigationPage>('inicio');

  // Modals state
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const [isDesignProcessOpen, setIsDesignProcessOpen] = useState(false);

  // Contact form preselection state
  const [contactInitialService, setContactInitialService] = useState<string>('Ergonomía');

  // Navigation handler
  const handleNavigate = (page: NavigationPage) => {
    setCurrentPage(page);

    // Scroll to section smoothly if present on DOM
    const sectionElement = document.getElementById(page);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Open dedicated service modal
  const handleOpenServiceDetail = (service: ServiceItem) => {
    setSelectedService(service);
    setIsServiceModalOpen(true);
  };

  const handleOpenServiceById = (serviceId: string) => {
    const s = SERVICES_DATA.find((item) => item.id === serviceId);
    if (s) {
      setSelectedService(s);
      setIsServiceModalOpen(true);
    }
  };

  // Open project case study modal
  const handleOpenProjectDetail = (project: ProjectItem) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  // Pre-fill contact form and scroll to contact
  const handleSelectServiceForContact = (serviceTitle: string) => {
    setContactInitialService(serviceTitle);
    setCurrentPage('contacto');
    const contactElem = document.getElementById('contacto');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col font-sans selection:bg-[#0A7944] selection:text-white">
      {/* 1. Device Simulator Top Bar for 1440px Desktop vs 390px Mobile vs Fluid preview */}
      <DeviceSimulatorBar
        mode={viewportMode}
        onModeChange={(mode) => setViewportMode(mode)}
        onOpenDesignProcess={() => setIsDesignProcessOpen(true)}
      />

      {/* Main Viewport Container Frame */}
      <div className="flex-1 w-full flex justify-center bg-slate-900/90 py-0">
        <div
          className={`w-full transition-all duration-300 bg-white flex flex-col min-h-screen ${
            viewportMode === 'desktop'
              ? 'max-w-[1440px] my-4 rounded-xl shadow-2xl overflow-hidden border border-slate-700/60 ring-1 ring-white/10'
              : viewportMode === 'mobile'
              ? 'max-w-[390px] my-6 rounded-[40px] shadow-2xl overflow-hidden border-[8px] border-slate-800 ring-4 ring-slate-700'
              : 'max-w-full'
          }`}
        >
          {/* Mobile Bezel Header indicator when in 390px simulated mode */}
          {viewportMode === 'mobile' && (
            <div className="bg-slate-900 text-white px-6 py-2 flex items-center justify-between text-[11px] font-mono border-b border-slate-800">
              <span>9:41</span>
              <div className="w-16 h-3.5 bg-slate-950 rounded-full mx-auto" />
              <div className="flex items-center gap-1">
                <span>5G</span>
                <span>100%</span>
              </div>
            </div>
          )}

          {/* 2. Top Navigation Bar conforming to the Top Bar Contract */}
          <Navbar
            currentPage={currentPage}
            onNavigate={handleNavigate}
            onOpenContactModal={() => handleSelectServiceForContact('Asesoría General')}
          />

          {/* Main Website Sections */}
          <main className="flex-1">
            {/* 01 — INICIO: HERO */}
            <div id="inicio">
              <Hero
                onNavigate={handleNavigate}
                onExploreServices={() => handleNavigate('servicios')}
              />
            </div>

            {/* 03 — NUESTROS SERVICIOS (5 cards) */}
            <ServicesSection
              onOpenServiceDetail={handleOpenServiceDetail}
              onSelectServiceForContact={handleSelectServiceForContact}
            />

            {/* ¿POR QUÉ JPX? (4 Pillars) */}
            <WhyUsSection />

            {/* JPX EN ACCIÓN: 04 — PROYECTOS DESTACADOS */}
            <ProjectsSection
              onOpenProjectDetail={handleOpenProjectDetail}
              onExploreAllProjects={() => handleNavigate('proyectos')}
            />

            {/* 05 — JPX CAPACITA */}
            <TrainingSection
              onSelectCourseForQuote={(courseTitle) =>
                handleSelectServiceForContact(`Capacitación: ${courseTitle}`)
              }
            />

            {/* 02 — NOSOTROS: CONOCE JPX */}
            <AboutSection />

            {/* ¿NECESITAS ASESORAMIENTO? CONVERSEMOS CTA STRIP (Pantone 7725 C) */}
            <section
              style={{ backgroundColor: '#0A7944' }}
              className="py-12 px-4 sm:px-6 lg:px-8 text-white shadow-inner"
            >
              <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-100 block mb-1">
                    Atención Inmediata en Bolivia
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-white">
                    ¿Necesitas asesoramiento técnico? Conversemos.
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-100 font-medium mt-1">
                    Evaluaciones diagnósticas, cotizaciones de monitoreo ocupacional y programas de SST en Santa Cruz, La Paz y El Alto.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => handleNavigate('contacto')}
                    style={{ backgroundColor: '#0F2D44' }}
                    className="px-6 py-3.5 rounded-xl text-white font-bold text-xs uppercase tracking-wider hover:brightness-125 transition-all shadow-lg cursor-pointer flex items-center gap-2"
                  >
                    <span>Contactar con JPX</span>
                    <ArrowRight className="w-4 h-4 text-emerald-300" />
                  </button>
                </div>
              </div>
            </section>

            {/* 06 — CONTACTO */}
            <ContactSection
              initialServiceInterest={contactInitialService}
              onClearInitialService={() => setContactInitialService('')}
            />
          </main>

          {/* Corporate Footer */}
          <Footer
            onNavigate={handleNavigate}
            onOpenServiceDetail={handleOpenServiceById}
          />
        </div>
      </div>

      {/* Interactive Modals */}
      <ServiceDetailModal
        service={selectedService}
        isOpen={isServiceModalOpen}
        onClose={() => setIsServiceModalOpen(false)}
        onSelectServiceForContact={handleSelectServiceForContact}
        onSelectAnotherService={(service) => setSelectedService(service)}
        allServices={SERVICES_DATA}
      />

      <ProjectDetailModal
        project={selectedProject}
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        onContactForSimilarProject={handleSelectServiceForContact}
      />

      <DesignProcessModal
        isOpen={isDesignProcessOpen}
        onClose={() => setIsDesignProcessOpen(false)}
        onSelectViewport={(mode) => setViewportMode(mode)}
      />
    </div>
  );
}
