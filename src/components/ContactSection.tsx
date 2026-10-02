import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Linkedin, Facebook, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/jpxData';

interface ContactSectionProps {
  initialServiceInterest?: string;
  onClearInitialService?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialServiceInterest,
  onClearInitialService,
}) => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    correo: '',
    telefono: '',
    ciudad: 'Santa Cruz',
    servicio: 'Ergonomía',
    mensaje: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Update selected service if parent triggers one
  useEffect(() => {
    if (initialServiceInterest) {
      setFormData((prev) => ({
        ...prev,
        servicio: initialServiceInterest,
        mensaje: prev.mensaje || `Deseo solicitar información y una cotización técnica para el servicio: ${initialServiceInterest}.`,
      }));
    }
  }, [initialServiceInterest]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre.trim() || !formData.correo.trim() || !formData.telefono.trim()) {
      setErrorMsg('Por favor complete los campos obligatorios (Nombre, Correo y Teléfono).');
      return;
    }

    setIsSubmitting(true);

    // Simulate instant secure processing
    setTimeout(() => {
      const generatedId = `JPX-REQ-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmissionId(generatedId);
      setIsSubmitting(false);
      setSubmitted(true);
      if (onClearInitialService) onClearInitialService();
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      nombre: '',
      empresa: '',
      correo: '',
      telefono: '',
      ciudad: 'Santa Cruz',
      servicio: 'Ergonomía',
      mensaje: '',
    });
  };

  return (
    <section
      id="contacto"
      style={{ backgroundColor: '#0F2D44' }}
      className="py-20 text-white relative overflow-hidden border-b border-white/10"
    >
      {/* Background ambient lighting */}
      <div
        style={{ backgroundColor: '#0A7944' }}
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-15"
      />
      <div
        style={{ backgroundColor: '#3E5DA6' }}
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase mb-2">
            <span style={{ color: '#0A7944' }} className="bg-white px-2 py-0.5 rounded font-bold">
              06 · Contacto Directo
            </span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span className="text-slate-200">Santa Cruz · La Paz · El Alto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance">
            Hablemos de tu Proyecto
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed text-balance">
            ¿Necesitas una propuesta técnica, monitoreo ocupacional o evaluar la ergonomía de tus instalaciones? Escríbenos y un ingeniero especialista coordinará una reunión de diagnóstico con tu equipo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Container (7 cols) */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-slate-100 pb-4 mb-2">
                  <h3 style={{ color: '#0F2D44' }} className="text-xl font-bold font-display">
                    Formulario de Solicitud de Asesoría
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Atención técnica directa desde nuestras sedes en Bolivia.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nombre */}
                  <div>
                    <label style={{ color: '#0F2D44' }} className="block text-xs font-bold uppercase tracking-wider mb-1.5">
                      Nombre Completo <span style={{ color: '#0A7944' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      placeholder="Ej: Ing. Carlos Morales"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A7944] focus:border-[#0A7944] transition-all"
                    />
                  </div>

                  {/* Empresa */}
                  <div>
                    <label style={{ color: '#0F2D44' }} className="block text-xs font-bold uppercase tracking-wider mb-1.5">
                      Empresa / Razón Social <span className="text-slate-400 font-normal">(Opcional)</span>
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      placeholder="Ej: Industrias del Oriente S.A."
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A7944] focus:border-[#0A7944] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Correo */}
                  <div>
                    <label style={{ color: '#0F2D44' }} className="block text-xs font-bold uppercase tracking-wider mb-1.5">
                      Correo Electrónico <span style={{ color: '#0A7944' }}>*</span>
                    </label>
                    <input
                      type="email"
                      name="correo"
                      required
                      placeholder="nombre@empresa.com"
                      value={formData.correo}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A7944] focus:border-[#0A7944] transition-all"
                    />
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label style={{ color: '#0F2D44' }} className="block text-xs font-bold uppercase tracking-wider mb-1.5">
                      Teléfono / WhatsApp <span style={{ color: '#0A7944' }}>*</span>
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      required
                      placeholder="+591 70000000"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A7944] focus:border-[#0A7944] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Ciudad / Sede más cercana */}
                  <div>
                    <label style={{ color: '#0F2D44' }} className="block text-xs font-bold uppercase tracking-wider mb-1.5">
                      Ciudad / Sede Preferente
                    </label>
                    <select
                      name="ciudad"
                      value={formData.ciudad}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#0A7944] focus:border-[#0A7944] transition-all"
                    >
                      <option value="Santa Cruz">Santa Cruz (calle Beni esq. Bolívar)</option>
                      <option value="La Paz">La Paz (Alto Pampahasi calle D)</option>
                      <option value="El Alto">El Alto (Santa Rosa calle I)</option>
                      <option value="Otra Ciudad / Nacional">Otra Ciudad (Cobertura Nacional)</option>
                    </select>
                  </div>

                  {/* Servicio de Interés */}
                  <div>
                    <label style={{ color: '#0F2D44' }} className="block text-xs font-bold uppercase tracking-wider mb-1.5">
                      Servicio de Interés <span style={{ color: '#0A7944' }}>*</span>
                    </label>
                    <select
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#0A7944] focus:border-[#0A7944] transition-all"
                    >
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.icon} {s.title}
                        </option>
                      ))}
                      <option value="Capacitaciones In-Company (JPX Capacita)">
                        🎓 Capacitaciones In-Company (JPX Capacita)
                      </option>
                      <option value="Diagnóstico Integral 360°">
                        🔍 Diagnóstico Integral Multidisciplinario
                      </option>
                      <option value="Otro Requerimiento Específico">
                        📋 Otro Requerimiento Específico
                      </option>
                    </select>
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label style={{ color: '#0F2D44' }} className="block text-xs font-bold uppercase tracking-wider mb-1.5">
                    Mensaje / Detalle de la Solicitud
                  </label>
                  <textarea
                    name="mensaje"
                    rows={4}
                    placeholder="Describe las características de tus instalaciones, cantidad de colaboradores, sector o fecha estimada..."
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A7944] focus:border-[#0A7944] transition-all resize-y"
                  />
                </div>

                {/* Botón: ENVIAR CONSULTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{ backgroundColor: '#0A7944' }}
                    className="w-full py-3.5 px-6 rounded-xl text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    {isSubmitting ? (
                      <span>Procesando Solicitud...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-emerald-200" />
                        <span>Enviar Consulta</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-slate-500 text-center">
                  Garantizamos confidencialidad total de los datos operativos de su empresa.
                </p>
              </form>
            ) : (
              /* Success State / Ticket generated */
              <div className="py-8 text-center space-y-5 animate-fadeIn">
                <div
                  style={{ backgroundColor: 'rgba(10, 121, 68, 0.1)', color: '#0A7944' }}
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                >
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-1">
                  <span style={{ color: '#0A7944' }} className="text-xs font-mono font-bold uppercase tracking-wider">
                    Solicitud Registrada con Éxito
                  </span>
                  <h3 style={{ color: '#0F2D44' }} className="text-2xl font-bold font-display">
                    ¡Gracias por comunicarte con JPX!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Hemos recibido la consulta de <strong style={{ color: '#0F2D44' }}>{formData.nombre}</strong> referente a <strong style={{ color: '#0F2D44' }}>{formData.servicio}</strong> para la sede de <strong style={{ color: '#0A7944' }}>{formData.ciudad}</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-sm mx-auto text-left space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Código de Referencia:</span>
                    <span style={{ color: '#0F2D44' }} className="font-mono font-bold">{submissionId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Correo de Contacto:</span>
                    <span className="font-medium text-slate-800">{formData.correo}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Tiempo de Respuesta:</span>
                    <span style={{ color: '#0A7944' }} className="font-semibold">&lt; 24 horas</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/59173176145?text=Hola%20JPX,%20acabo%20de%20enviar%20el%20ticket%20${submissionId}%20referente%20a%20${encodeURIComponent(formData.servicio)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ backgroundColor: '#0A7944' }}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-white font-semibold text-xs hover:brightness-110 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Confirmar por WhatsApp (+591 73176145)</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold text-xs transition-colors cursor-pointer"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Contact Details & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(62, 93, 166, 0.25)' }}
              className="border rounded-3xl p-6 sm:p-8 space-y-6 backdrop-blur-xs"
            >
              <h3 className="text-xl font-bold text-white font-display">
                Canales de Atención Técnica
              </h3>

              {/* 3 Sedes Oficiales (Santa Cruz, La Paz, El Alto) */}
              <div className="space-y-3">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">
                  📍 Nuestras Sedes en Bolivia
                </span>
                
                {COMPANY_INFO.locations.map((loc, idx) => (
                  <div
                    key={idx}
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', borderColor: 'rgba(255, 255, 255, 0.08)' }}
                    className="p-3.5 rounded-xl border flex items-start gap-3 text-xs"
                  >
                    <div
                      style={{ backgroundColor: '#0A7944' }}
                      className="p-1.5 rounded-lg text-white shrink-0 mt-0.5"
                    >
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <strong className="text-white text-sm font-display">{loc.city}:</strong>
                        <span className="text-[10px] text-emerald-300 font-mono">{loc.badge}</span>
                      </div>
                      <p className="text-slate-300 mt-0.5">{loc.address}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 📞 Teléfonos */}
              <div className="pt-2 border-t border-white/10 space-y-2">
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                  📞 Teléfonos &amp; WhatsApp Directo
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                  {COMPANY_INFO.phones.map((phone, i) => (
                    <a
                      key={i}
                      href={`https://wa.me/${phone.number.replace(/\+/g, '').replace(/\s/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)' }}
                      className="p-3 rounded-xl border border-white/10 hover:border-emerald-400 text-slate-200 hover:text-white transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2">
                        <Phone style={{ color: '#0A7944' }} className="w-4 h-4" />
                        <span>{phone.display}</span>
                      </div>
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-400 opacity-60 group-hover:opacity-100" />
                    </a>
                  ))}
                </div>
              </div>

              {/* ✉️ Correo */}
              <div className="pt-2 border-t border-white/10">
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                  ✉️ Correo Electrónico
                </span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)' }}
                  className="p-3 rounded-xl border border-white/10 hover:border-emerald-400 text-slate-200 hover:text-emerald-300 font-mono text-xs flex items-center gap-2 transition-all block"
                >
                  <Mail style={{ color: '#0A7944' }} className="w-4 h-4 shrink-0 inline" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </div>

              {/* Horario */}
              <div className="flex items-start gap-3 pt-2 border-t border-white/10 text-xs">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block">Horario de Operaciones:</span>
                  <span className="text-slate-200">{COMPANY_INFO.hours}</span>
                </div>
              </div>

              {/* Redes Sociales Oficiales: Facebook & LinkedIn */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-3">
                  Redes Oficiales
                </span>
                <div className="flex flex-col sm:flex-row items-center gap-2.5">
                  <a
                    href={COMPANY_INFO.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ backgroundColor: 'rgba(62, 93, 166, 0.2)', borderColor: '#3E5DA6' }}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border hover:bg-[#3E5DA6] text-white text-xs font-semibold transition-all cursor-pointer"
                  >
                    <Facebook className="w-4 h-4 text-blue-300" />
                    <span>Facebook Oficial</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>

                  <a
                    href={COMPANY_INFO.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ backgroundColor: 'rgba(10, 121, 68, 0.2)', borderColor: '#0A7944' }}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border hover:bg-[#0A7944] text-white text-xs font-semibold transition-all cursor-pointer"
                  >
                    <Linkedin className="w-4 h-4 text-emerald-300" />
                    <span>LinkedIn Corporativo</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout Banner */}
            <div
              style={{ backgroundColor: 'rgba(10, 121, 68, 0.15)', borderColor: 'rgba(10, 121, 68, 0.35)' }}
              className="p-4 rounded-2xl border text-emerald-200 text-xs flex items-center justify-between gap-3"
            >
              <div>
                <span className="font-bold text-white block mb-0.5">
                  💬 ¿Prefieres atención inmediata por WhatsApp?
                </span>
                <span>
                  Escríbenos directamente a nuestras líneas de Santa Cruz o La Paz.
                </span>
              </div>
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: '#0A7944' }}
                className="px-3.5 py-2 rounded-lg text-white font-bold text-xs shrink-0 hover:brightness-110 transition-all flex items-center gap-1.5 shadow-sm"
              >
                <span>Chatear</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
