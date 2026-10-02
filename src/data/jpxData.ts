import { ServiceItem, ProjectItem, TrainingItem, TeamMember, DesignStep } from '../types';

export const COMPANY_INFO = {
  name: 'JPX Ingeniería & Consultoría',
  shortName: 'JPX',
  tagline: 'Soluciones técnicas para una gestión responsable de la seguridad, salud y medio ambiente.',
  email: 'jpxingenieria@gmail.com',
  corporateEmail: 'jpxingenieria@gmail.com',
  phones: [
    { number: '+591 73176145', display: '+591 73176145', isWhatsapp: true },
    { number: '+591 69704903', display: '+591 69704903', isWhatsapp: true },
  ],
  whatsappLink: 'https://wa.me/59173176145?text=Hola%20JPX%20Ingenier%C3%ADa,%20deseo%20solicitar%20asesor%C3%ADa%20t%C3%A9cnica.',
  hours: 'Lunes a Viernes: 08:30 - 18:30 hrs',
  locations: [
    {
      city: 'Santa Cruz',
      address: 'calle Beni esq. Bolívar N° 75',
      badge: 'Oficina Comercial & Operaciones',
    },
    {
      city: 'La Paz',
      address: 'zona Alto Pampahasi calle "D" N° 8',
      badge: 'Sede Central',
    },
    {
      city: 'El Alto',
      address: 'zona Santa Rosa calle "I" N° 33 A',
      badge: 'Oficina Técnica',
    },
  ],
  social: {
    facebook: 'https://www.facebook.com/jpxingenieria/?locale=es_LA',
    linkedin: 'https://www.linkedin.com/company/jpx-ingenier%C3%ADa-consultor%C3%ADa/posts/',
  },
  brandColors: {
    green: {
      name: 'Pantone 7725 C',
      hex: '#0A7944',
      rgb: '10, 121, 68',
      cmyk: '92, 0, 44, 53',
      role: 'Sostenibilidad, Seguridad y Acento Primario',
    },
    navy: {
      name: 'Pantone 2965 C',
      hex: '#0F2D44',
      rgb: '15, 45, 68',
      cmyk: '78, 34, 0, 73',
      role: 'Estructura Corporativa, Rigor y Fondo Principal',
    },
    blue: {
      name: 'Pantone 7683 C',
      hex: '#3E5DA6',
      rgb: '62, 93, 166',
      cmyk: '63, 44, 0, 35',
      role: 'Ingeniería Técnica, Interactividad y Acento Secundario',
    },
  },
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'sst',
    slug: 'seguridad-salud-ocupacional',
    title: 'Seguridad y Salud Ocupacional',
    subtitle: 'Sistemas de gestión preventiva orientados a salvaguardar la vida y el bienestar integral de los trabajadores.',
    shortDescription: 'Implementación integral de SGSST, matriz IPERC, comités paritarios, auditorías de cumplimiento legal y planes de contingencia.',
    icon: '🦺',
    badge: 'Ley N° 29783 & ISO 45001',
    whatWeDo: [
      'Elaboración y actualización de la Matriz IPERC (Identificación de Peligros, Evaluación de Riesgos y Medidas de Control).',
      'Diseño e implementación del Sistema de Gestión de Seguridad y Salud en el Trabajo (SGSST) según Ley 29783.',
      'Conformación, capacitación y asesoría permanente al Comité de Seguridad y Salud en el Trabajo (CSST).',
      'Investigación técnica de incidentes y accidentes de trabajo con análisis causal (Árbol de Causas e Ishikawa).',
      'Auditorías internas y de diagnóstico bajo el estándar internacional ISO 45001:2018.',
      'Planes de Contingencia, Respuesta ante Emergencias y conformación de brigadas operativas.'
    ],
    methodology: [
      { step: '01', title: 'Diagnóstico Inicial', description: 'Inspección de campo y línea base legal para cuantificar el estado de cumplimiento del SGSST.' },
      { step: '02', title: 'Identificación & Control', description: 'Levantamiento de peligros, evaluación de matrices IPERC y definición de jerarquía de controles.' },
      { step: '03', title: 'Implementación Técnica', description: 'Despliegue documental, estándares operacionales (PETS), señalética y capacitación especializada.' },
      { step: '04', title: 'Monitoreo & Auditoría', description: 'Seguimiento de indicadores de frecuencia/severidad y preparación ante fiscalizaciones de SUNAFIL.' }
    ],
    deliverables: [
      'Reglamento Interno de Seguridad y Salud en el Trabajo (RISST)',
      'Programa Anual de Seguridad y Salud en el Trabajo (PASST)',
      'Matriz IPERC por puesto y proceso con controles de ingeniería',
      'Informe técnico de auditoría y plan de acción de no conformidades'
    ],
    regulatoryBasis: ['Ley N° 29783', 'D.S. 005-2012-TR', 'R.M. 050-2013-TR', 'ISO 45001:2018'],
    ctaQuestion: '¿Necesitas implementar o auditar tu Sistema de Gestión de SST?'
  },
  {
    id: 'higiene',
    slug: 'higiene-industrial',
    title: 'Higiene Industrial',
    subtitle: 'Reconocimiento, evaluación y control de agentes físicos, químicos y biológicos en el entorno laboral.',
    shortDescription: 'Monitoreos ocupacionales con equipos calibrados: ruido (dosimetrías/sonometrías), iluminación, estrés térmico, vibraciones y polvo respirable.',
    icon: '🏭',
    badge: 'Monitoreos Ocupacionales Obligatorios',
    whatWeDo: [
      'Monitoreo de agentes físicos: Sonometría y dosimetría de ruido ocupacional, niveles de iluminación (Luxometría).',
      'Evaluación de estrés térmico (índice TGBH / WBGT en ambientes fríos y calurosos) y radiaciones UV/IR.',
      'Medición de vibraciones mecánicas de cuerpo entero (ISO 2631) y mano-brazo (ISO 5349).',
      'Muestreo y análisis de agentes químicos: Polvo inhalable y respirable, sílice libre cristalina, humos metálicos, COVs.',
      'Evaluación de calidad de aire interior y agentes biológicos en ambientes confinados y salas de control.',
      'Elaboración de mapas de agentes ocupacionales y especificación de Equipos de Protección Personal (EPP).'
    ],
    methodology: [
      { step: '01', title: 'Estratificación GES', description: 'Definición de Grupos de Exposición Similar (GES) y plan de muestreo representativo según NIOSH.' },
      { step: '02', title: 'Medición Instrumental', description: 'Ejecución de monitoreo en campo con equipos de clase 1 y 2 calibrados con trazabilidad INACAL.' },
      { step: '03', title: 'Análisis & Comparación', description: 'Procesamiento en laboratorio acreditado y comparación con Límites Máximos Permisibles (LMP).' },
      { step: '04', title: 'Controles de Ingeniería', description: 'Diseño de cerramientos acústicos, balance de ventilación y programas de vigilancia médica.' }
    ],
    deliverables: [
      'Informe técnico de monitoreo de agentes físicos y químicos',
      'Certificados de calibración vigente de la instrumentación utilizada',
      'Mapa de ruido y dosimetrías individuales con categorización de riesgo',
      'Recomendaciones técnicas de control en fuente, medio y receptor'
    ],
    regulatoryBasis: ['R.M. 375-2008-TR', 'D.S. 015-2005-SA', 'Estándares NIOSH / OSHA', 'ACGIH TLVs'],
    ctaQuestion: '¿Requieres ejecutar tu monitoreo ocupacional anual reglamentario?'
  },
  {
    id: 'ergonomia',
    slug: 'ergonomia',
    title: 'Ergonomía',
    subtitle: 'Adaptar el trabajo a las capacidades y características psicofisiológicas de las personas.',
    shortDescription: 'Evaluación de puestos con metodologías internacionales (REBA, RULA, OWAS, NIOSH), análisis biomecánico y prevención de TME.',
    icon: '🪑',
    badge: 'R.M. 375-2008-TR & Ergonomía Aplicada',
    whatWeDo: [
      'Evaluación ergonómica integral de puestos operativos, administrativos, centros de control y logística.',
      'Identificación y jerarquización de factores de riesgo disergonómico (posturas forzadas, movimientos repetitivos, levantamiento de cargas).',
      'Aplicación de metodologías biomecánicas validadas: REBA, RULA, OWAS, Ecuación NIOSH, OCRA Checklist y Job Strain Index.',
      'Análisis dimensional antropométrico para el rediseño de planos de trabajo, asientos, alcances y disposición de herramientas.',
      'Evaluación de fatiga mental, carga cognitiva y diseño de interfaces visuales de trabajo.',
      'Diseño y entrenamiento de pausas ergonómicas activas específicas por tipo de labor.'
    ],
    methodology: [
      { step: '01', title: 'Evaluar', description: 'Registro videográfico, medición antropométrica in situ y recopilación de antecedentes osteomusculares.' },
      { step: '02', title: 'Analizar', description: 'Procesamiento con software ergonómico y aplicación de ecuaciones biomecánicas normalizadas.' },
      { step: '03', title: 'Recomendar', description: 'Propuesta de adecuaciones técnicas: soportes mecánicos, reubicación de comandos y alturas óptimas.' },
      { step: '04', title: 'Mejorar', description: 'Reevaluación post-intervención para validar la disminución efectiva del nivel de riesgo ergonómico.' }
    ],
    deliverables: [
      'Estudio Ergonómico Integral con firma de especialista colegiado',
      'Fichas de evaluación ergonómica individual por puesto de trabajo',
      'Manual de diseño antropométrico adaptado al perfil del colaborador',
      'Guía ilustrada de pausas activas compensatorias personalizadas'
    ],
    regulatoryBasis: ['Norma Básica de Ergonomía R.M. 375-2008-TR', 'ISO 11226 (Posturas estáticas)', 'ISO 11228-1/2/3 (Cargas y movimientos)'],
    ctaQuestion: '¿Necesitas evaluar un puesto de trabajo o reducir licencias por lumbalgias?'
  },
  {
    id: 'medio-ambiente',
    slug: 'medio-ambiente',
    title: 'Medio Ambiente',
    subtitle: 'Gestión ambiental estratégica para asegurar el cumplimiento legal y la sostenibilidad de las operaciones.',
    shortDescription: 'Planes de Manejo Ambiental (PMA), monitoreo de efluentes/emisiones, cálculo de huella de carbono y gestión integral de residuos (GIR).',
    icon: '🌱',
    badge: 'Cumplimiento OEFA & MINAM',
    whatWeDo: [
      'Elaboración y actualización de Instrumentos de Gestión Ambiental (DIA, EIA-sd, IGA, Planes de Manejo Ambiental).',
      'Monitoreo ambiental de calidad de aire, ruido ambiental perimétrico, emisiones atmosféricas y vertimientos de agua residual.',
      'Diseño e implementación del Plan de Manejo de Residuos Sólidos (PMRS) según D.L. 1278 y su reglamento.',
      'Cálculo y verificación de Huella de Carbono Corporativa (ISO 14064 / GHG Protocol) y planes de mitigación.',
      'Auditorías ambientales de cumplimiento legal preventivas previas a inspecciones de OEFA o sectoriales.',
      'Capacitación y sensibilización ambiental en segregación en fuente y eficiencia energética.'
    ],
    methodology: [
      { step: '01', title: 'Línea Base Ambiental', description: 'Caracterización de aspectos e impactos ambientales significativos en la operación.' },
      { step: '02', title: 'Muestreo & Laboratorio', description: 'Toma de muestras ambientales con laboratorios acreditados ante INACAL.' },
      { step: '03', title: 'Diseño de Planes', description: 'Formulación de planes de mitigación, contingencia ambiental y economía circular.' },
      { step: '04', title: 'Soporte Regulatorio', description: 'Presentación de reportes ambientales semestrales y seguimiento ante autoridades competentes.' }
    ],
    deliverables: [
      'Instrumento de Gestión Ambiental o Actualización de PMA',
      'Informes de monitoreo ambiental con comparativa de ECAs y LMPs',
      'Declaración Anual de Manejo de Residuos Sólidos en SIGERSOL',
      'Reporte de Huella de Carbono y plan de reducción de emisiones'
    ],
    regulatoryBasis: ['D.L. 1278 (Gestión Integral de Residuos Sólidos)', 'Ley General del Ambiente N° 28611', 'Estándares de Calidad Ambiental (ECA)', 'ISO 14001:2015'],
    ctaQuestion: '¿Requieres regularizar tus compromisos ambientales o monitoreos de efluentes/aire?'
  },
  {
    id: 'supervision',
    slug: 'gestion-supervision-proyectos',
    title: 'Gestión y Supervisión de Proyectos',
    subtitle: 'Control técnico, aseguramiento de estándares de calidad, seguridad y cumplimiento normativo en obra.',
    shortDescription: 'Supervisión HSE en campo, fiscalización de contratistas, auditorías operativas, homologación técnica y gestión de permisos.',
    icon: '📋',
    badge: 'Control Técnico & Aseguramiento HSE',
    whatWeDo: [
      'Supervisión residente y fiscalización de Seguridad, Salud y Medio Ambiente (HSE) en proyectos de construcción y montaje.',
      'Homologación y control documental de empresas contratistas, subcontratistas y proveedores de servicios.',
      'Validación técnica de Permisos de Trabajo de Alto Riesgo (PETAR) y análisis seguro de trabajo (ATS/AST).',
      'Auditorías de campo inopinadas con verificación de condiciones de seguridad y uso correcto de EPP.',
      'Seguimiento y control de cronogramas de implementación de medidas preventivas y planes de calidad.',
      'Elaboración de dossiers de seguridad y fin de obra para entrega al cliente final.'
    ],
    methodology: [
      { step: '01', title: 'Planificación & PETAR', description: 'Revisión exhaustiva de procedimientos constructivos, planes de seguridad y liberación de frentes.' },
      { step: '02', title: 'Control en Terreno', description: 'Inspección permanente en campo con ingenieros especialistas certificados.' },
      { step: '03', title: 'Gestión de Contratistas', description: 'Plataforma de seguimiento y control de habilitación de personal, exámenes médicos y seguros (SCTR).' },
      { step: '04', title: 'Reportes & Cierre', description: 'Métricas diarias/semanales de horas hombre trabajadas, índices de incidentes y lecciones aprendidas.' }
    ],
    deliverables: [
      'Reportes diarios y semanales de supervisión HSE con evidencias fotográficas',
      'Matriz de control de contratistas y habilitación de personal',
      'Actas de inspección técnica y levantamiento de observaciones',
      'Dossier de Cierre de Seguridad y Medio Ambiente de la obra'
    ],
    regulatoryBasis: ['Norma Técnica G.050 Seguridad durante la Construcción', 'D.S. 011-2019-TR', 'OSHA 1926 Standards', 'PMBOK & ISO 21500'],
    ctaQuestion: '¿Tienes un proyecto u obra que requiera supervisión técnica especializada?'
  }
];

export const WHY_US_PILLARS = [
  {
    title: 'Experiencia técnica',
    headline: 'Rigor de ingeniería colegiada',
    description: 'Equipo multidisciplinario conformado por ingenieros químicos, mecánicos, industriales y ambientales colegiados, con postgrados y certificaciones internacionales.',
    stats: '+12 años',
    statLabel: 'Liderando proyectos en industrias de alta complejidad técnica.',
    icon: 'wrench'
  },
  {
    title: 'Prevención',
    headline: 'Anticipación antes que reacción',
    description: 'Enfoque proactivo diseñado para detectar vulnerabilidades en los procesos antes de que generen accidentes, paralizaciones operativas o sanciones regulatorias.',
    stats: '0 incidentes',
    statLabel: 'Índice de contingencias críticas en operaciones bajo nuestra supervisión técnica.',
    icon: 'shield-check'
  },
  {
    title: 'Soluciones adaptadas',
    headline: 'A la medida de cada sector',
    description: 'No creemos en plantillas genéricas. Diagnosticamos la realidad operativa, escala y riesgos específicos de su industria (minería, manufactura, retail, logística, construcción).',
    stats: '100% custom',
    statLabel: 'Protocolos ajustados a los procesos particulares de su empresa.',
    icon: 'cpu'
  },
  {
    title: 'Acompañamiento',
    headline: 'Soporte continuo de principio a fin',
    description: 'Estamos presentes durante todo el ciclo de vida: desde el diagnóstico y la ingeniería de control, hasta la capacitación, auditorías y defensa técnica ante entidades fiscalizadoras.',
    stats: '24/7 soporte',
    statLabel: 'Asistencia técnica oportuna en emergencias y fiscalizaciones.',
    icon: 'users'
  }
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-ergonomia-automotriz',
    title: 'Programa Ergonómico y Reducción de TME en Línea de Ensamblaje',
    client: 'Consorcio Automotriz Andina S.A.',
    industry: 'Manufactura Automotriz',
    serviceId: 'ergonomia',
    serviceName: 'Ergonomía',
    shortDescription: 'Evaluación biomecánica de 42 estaciones de ensamble, rediseño antropométrico y disminución del 64% en quejas musculoesqueléticas.',
    image: '/src/assets/images/project_ergonomics_automotive_1790969626753.jpg',
    metrics: [
      { label: 'Reducción de quejas TME', value: '-64%', highlight: 'En 6 meses de seguimiento' },
      { label: 'Puestos evaluados', value: '42 estaciones', highlight: 'Métodos REBA & NIOSH' },
      { label: 'Ahorro en descansos médicos', value: '$38,500', highlight: 'Retorno de inversión medible' }
    ],
    context: 'La planta presentaba una tasa creciente de ausentismo por dolores lumbares y síndrome del túnel carpiano en el área de montaje de chasis y cableado interior.',
    objective: 'Identificar factores de riesgo disergonómico en el 100% de las estaciones críticas y formular soluciones de ingeniería de bajo costo y alto impacto ergonómico.',
    scope: '42 puestos de trabajo, 120 operarios en 2 turnos, con cobertura en líneas de ensamblaje, manipulación de torquímetros y montaje de suspensión.',
    methodology: 'Registro videográfico en ángulos frontales y laterales, aplicación de métodos REBA, OWAS y Ecuación NIOSH, y talleres participativos con los trabajadores.',
    development: [
      'Levantamiento dimensional de alturas de trabajo y alcances máximos con antropometría industrial.',
      'Rediseño de mesas giratorias de posicionamiento que eliminaron torsiones de tronco superiores a 45 grados.',
      'Implementación de brazos balancines para herramientas neumáticas pesadas, reduciendo la fuerza de agarre en un 70%.',
      'Despliegue del programa "Pausas Dinámicas": 3 rutinas diarias guiadas por líderes de cuadrilla.'
    ],
    results: [
      'El 88% de los puestos clasificados en nivel de acción 3 (alto riesgo) pasaron a nivel 1 (riesgo bajo o aceptable).',
      'Disminución del 64% en consultas al tópico médico por molestias musculares en los primeros 180 días.',
      'Aumento del 8.5% en la productividad horaria de la línea gracias a la reducción de fatiga física.'
    ],
    recommendations: [
      'Mantener rotación de puestos cada 120 minutos entre estaciones de trabajo estático y dinámico.',
      'Incorporar la validación ergonómica obligatoria en la adquisición de nuevas herramientas y fixtures.',
      'Realizar reevaluación anual del perfil disergonómico.'
    ]
  },
  {
    id: 'proj-higiene-minera',
    title: 'Monitoreo Integral de Agentes Ocupacionales en Planta Concentradora',
    client: 'Minera Los Andes Operaciones',
    industry: 'Minería y Procesamiento Metalúrgico',
    serviceId: 'higiene',
    serviceName: 'Higiene Industrial',
    shortDescription: 'Campaña de monitoreo ocupacional de ruido, polvo respirable y sílice cristalina en 18 áreas operativas con trazabilidad instrumental.',
    image: '/src/assets/images/project_hygiene_mining_1790969637480.jpg',
    metrics: [
      { label: 'Cumplimiento normativo', value: '100%', highlight: 'Validado ante OSINERGMIN / SUNAFIL' },
      { label: 'Muestras analizadas', value: '96 puntos', highlight: 'Laboratorio acreditado INACAL' },
      { label: 'Áreas mapeadas', value: '18 zonas', highlight: 'Chancado, molienda y flotación' }
    ],
    context: 'Requerimiento anual obligatorio de línea base de agentes físicos y químicos en una planta procesadora de mineral con operación continua 24/7.',
    objective: 'Determinar con precisión científica la exposición ocupacional de los trabajadores para prevenir enfermedades profesionales (hipoacusia y silicosis).',
    scope: 'Planta de chancado primario, secundario, molienda SAG, celdas de flotación y espesadores; evaluando 180 colaboradores agrupados en 9 GES.',
    methodology: 'Dosimetrías personales de ruido según ISO 9612, muestreo de polvo respirable con bombas gravimétricas ciclón BGI según NIOSH 0600 y análisis de sílice por difracción de rayos X (XRD).',
    development: [
      'Determinación estadística de Grupos de Exposición Similar (GES) con muestreos durante jornadas completas de 12 horas.',
      'Generación de mapas isofónicos en 3D para delimitar zonas de obligatoriedad de doble protección auditiva.',
      'Inspección de sistemas de captación de polvos y verificación de presiones en mangas filtrantes.',
      'Homologación y selección de protectores auditivos de atenuación balanceada según NRR verificado.'
    ],
    results: [
      'Dossier técnico aprobado sin observaciones por las auditorías de fiscalización laboral.',
      'Identificación temprana de fugas de presión acústica en el molino de bolas, corrigiéndose con faldones viscoelásticos.',
      'Capacitación y sensibilización al 100% del personal expuesto sobre la conservación de la audición.'
    ],
    recommendations: [
      'Instalar monitoreo continuo de presión diferencial en los colectores de polvo del circuito de chancado.',
      'Ejecutar audiometrías de control semestrales a los trabajadores del GES de molienda.',
      'Revisar el estado de sellado de las cabinas presurizadas de los operadores de consola.'
    ]
  },
  {
    id: 'proj-ambiental-parque',
    title: 'Auditoría Ambiental, Plan de Manejo de Residuos y Huella de Carbono',
    client: 'Parque Eco-Industrial Norte',
    industry: 'Desarrollo Inmobiliario e Industrial',
    serviceId: 'medio-ambiente',
    serviceName: 'Medio Ambiente',
    shortDescription: 'Diseño integral del Plan de Manejo de Residuos Sólidos, monitoreo de vertimientos y cálculo de huella de carbono organizacional.',
    image: '/src/assets/images/project_environmental_audit_1790969647041.jpg',
    metrics: [
      { label: 'Desvío de residuos a vertedero', value: '+42%', highlight: 'Valorización y reciclaje' },
      { label: 'Reducción huella de carbono', value: '-18%', highlight: 'Plan de eficiencia energética' },
      { label: 'Conformidad legal', value: '100%', highlight: 'Cero sanciones ante OEFA' }
    ],
    context: 'Complejo industrial con más de 25 empresas residentes requería homologar sus estándares ambientales y modernizar su gestión de residuos según D.L. 1278.',
    objective: 'Elaborar el Plan Maestro de Gestión Ambiental, regularizar la estación central de transferencia de residuos y cuantificar la huella de carbono corporativa.',
    scope: 'Área de 45 hectáreas, 32 puntos de acopio intermedio, planta de tratamiento de aguas residuales (PTAR) doméstica y redes de drenaje pluvial.',
    methodology: 'Auditoría in situ bajo criterios ISO 14001, caracterización gravimétrica de residuos sólidos, muestreo de efluentes y cálculo de emisiones Alcance 1 y 2 con protocolo GHG.',
    development: [
      'Reestructuración de la estación de transferencia con segregación por código de colores NTP 900.058.',
      'Convenio con Operadores de Residuos Sólidos (EO-RS) autorizados para la valorización de cartón, plásticos y chatarra.',
      'Optimización operativa de la PTAR para garantizar parámetros microbiológicos y DBO/DQO para reúso en riego de áreas verdes.',
      'Digitalización del manifiesto de residuos peligrosos mediante plataforma en la nube.'
    ],
    results: [
      'Más de 140 toneladas métricas de residuos reaprovechables reincorporadas a cadenas de reciclaje en el primer año.',
      'Ahorro de $24,000 anuales en costos de transporte y disposición final de residuos no peligrosos.',
      'Obtención del reconocimiento ambiental otorgado por el Ministerio del Ambiente.'
    ],
    recommendations: [
      'Implementar biodigestores para el aprovechamiento de residuos orgánicos de comedores comunes.',
      'Instalar paneles solares para la iluminación perimétrica y alimentación de bombas de la PTAR.',
      'Continuar auditorías semestrales a los proveedores de recojo de residuos peligrosos.'
    ]
  }
];

export const TRAINING_CATALOG: TrainingItem[] = [
  {
    id: 'cap-ergonomia',
    theme: 'Ergonomía en el Puesto de Trabajo',
    objective: 'Brindar herramientas prácticas para identificar riesgos disergonómicos, configurar adecuadamente el puesto laboral y prevenir trastornos musculoesqueléticos.',
    targetAudience: 'Personal administrativo, jefaturas, operadores de ensamble, personal de almacén y miembros del CSST.',
    duration: '8 horas lectivas (Teórico - Práctico)',
    modality: 'Presencial In-Company',
    category: 'Ergonomía',
    modules: [
      'Fundamentos de ergonomía y normativa R.M. 375-2008-TR',
      'Factores de riesgo: Posturas forzadas y movimientos repetitivos',
      'Ajuste ergonómico de pantallas, sillas y elementos de entrada',
      'Taller práctico de pausas activas y gimnasia laboral'
    ],
    certification: 'Certificado de Aprobación por JPX Ingeniería (con valor curricular)'
  },
  {
    id: 'cap-cargas',
    theme: 'Manipulación Segura de Cargas y Prevención de Lesiones',
    objective: 'Capacitar a los colaboradores en técnicas biomecánicas de levantamiento, transporte y empuje de cargas para proteger la columna vertebral.',
    targetAudience: 'Operarios de logística, estibadores, personal de despacho, mantenimiento y almacenes.',
    duration: '6 horas lectivas (Demostrativo)',
    modality: 'Presencial In-Company',
    category: 'Ergonomía',
    modules: [
      'Anatomía y biomecánica básica de la columna vertebral',
      'Límites máximos permisibles de carga según género y edad',
      'Técnica correcta de flexión de rodillas y centro de gravedad',
      'Uso seguro de transpaletas, carretillas y ayudas mecánicas'
    ],
    certification: 'Certificado de Aprobación y Carnet de Manipulación Segura'
  },
  {
    id: 'cap-seguridad-prevencion',
    theme: 'Seguridad y Prevención de Accidentes en Operaciones Críticas',
    objective: 'Fortalecer la cultura de seguridad, el uso de la jerarquía de controles y el cumplimiento estricto de estándares en trabajos de alto riesgo.',
    targetAudience: 'Supervisores, prevencionistas, cuadrillas de mantenimiento, construcción y producción.',
    duration: '16 horas lectivas (2 jornadas)',
    modality: 'Semipresencial / Híbrida',
    category: 'SST',
    modules: [
      'Cultura preventiva y comportamiento seguro en planta',
      'Elaboración rigurosa de ATS (Análisis de Trabajo Seguro)',
      'Trabajos en Altura, Espacios Confinados y Bloqueo/Etiquetado (LOTO)',
      'Reporte de actos y condiciones subestándar (cero accidentes)'
    ],
    certification: 'Certificado de Competencia Técnica en Operaciones Críticas'
  },
  {
    id: 'cap-emergencias',
    theme: 'Plan de Emergencias, Evacuación y Primeros Auxilios',
    objective: 'Entrenar a las brigadas de emergencia de la empresa para responder con rapidez y eficacia ante sismos, incendios y accidentes con víctimas.',
    targetAudience: 'Miembros de la brigada de emergencias, comité de SST, personal de seguridad patrimonial y coordinadores de piso.',
    duration: '12 horas lectivas (Incluye simulacro con fuego real)',
    modality: 'Presencial In-Company',
    category: 'Emergencias',
    modules: [
      'Estructura del Plan de Contingencia y cadena de comando',
      'Uso y manejo práctico de extintores portátiles (PQS y CO2)',
      'Técnicas de evacuación rápida y control del pánico',
      'Primeros auxilios: RCP básico, control de hemorragias y fracturas'
    ],
    certification: 'Acreditación Oficial de Brigadista de Emergencia'
  },
  {
    id: 'cap-higiene-monitoreo',
    theme: 'Interpretación de Monitoreos Ocupacionales e Higiene Industrial',
    objective: 'Enseñar a los responsables de SST a interpretar informes de monitoreo, evaluar Límites Permisibles e implementar controles técnicos.',
    targetAudience: 'Ingenieros de seguridad, médicos ocupacionales, gerentes de operaciones y miembros del CSST.',
    duration: '8 horas lectivas',
    modality: 'Virtual Sincrónica',
    category: 'Higiene Industrial',
    modules: [
      'Agentes físicos: Ruido, vibración, iluminación y estrés térmico',
      'Agentes químicos: Polvo, humos, gases y vapores orgánicos',
      'Metodología de lectura de informes técnicos e instrumentación',
      'Diseño de medidas de mitigación y selección adecuada de EPP'
    ],
    certification: 'Certificado de Especialización en Higiene Ocupacional'
  },
  {
    id: 'cap-residuos-ambiente',
    theme: 'Gestión Integral de Residuos Sólidos y Cumplimiento Ambiental',
    objective: 'Capacitar en la correcta segregación, almacenamiento, manifiestos y valorización de residuos sólidos industriales bajo la ley D.L. 1278.',
    targetAudience: 'Jefes de planta, coordinadores ambientales, supervisores de almacén y operarios.',
    duration: '8 horas lectivas',
    modality: 'Semipresencial / Híbrida',
    category: 'Medio Ambiente',
    modules: [
      'Marco legal de residuos sólidos y fiscalización de OEFA',
      'Código de colores NTP y segregación eficiente en fuente',
      'Manejo seguro de residuos peligrosos e incompatibilidades químicas',
      'Plataforma SIGERSOL y manifiestos de trazabilidad'
    ],
    certification: 'Certificado de Gestión y Cumplimiento Ambiental'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Ing. Javier Pacheco X.',
    role: 'Director Gerente & Especialista Principal en SST',
    credential: 'CIP N° 184520 · Máster en Seguridad y Salud Ocupacional (UPC)',
    bio: 'Más de 15 años de trayectoria liderando consultorías de ingeniería y auditorías de sistemas de gestión para corporaciones industriales y mineras.',
    initials: 'JP'
  },
  {
    name: 'Ing. Patricia Valdivia M.',
    role: 'Jefa de Higiene Industrial & Ergonomía',
    credential: 'CIP N° 210894 · Especialista en Biomecánica & Ergonomía Laboral',
    bio: 'Auditora líder ISO 45001 con amplia experiencia en evaluación disergonómica de plantas de manufactura y campañas de monitoreo ocupacional.',
    initials: 'PV'
  },
  {
    name: 'Ing. Carlos Mendoza R.',
    role: 'Coordinador de Gestión Ambiental & Proyectos',
    credential: 'CIP N° 229103 · Máster en Ingeniería y Gestión Ambiental (UNI)',
    bio: 'Especialista en Instrumentos de Gestión Ambiental, huella hídrica y de carbono, y adecuación normativa ante entidades fiscalizadoras.',
    initials: 'CM'
  },
  {
    name: 'Dra. Elena Santillán F.',
    role: 'Asesora en Medicina Ocupacional & Ergonomía Clínica',
    credential: 'CMP N° 54109 · RNE Salud Ocupacional',
    bio: 'Médico especialista en vigilancia de la salud de los trabajadores, prevención de trastornos musculoesqueléticos e investigación de enfermedades laborales.',
    initials: 'ES'
  }
];

export const DESIGN_PROCESS_STEPS: DesignStep[] = [
  {
    number: 1,
    title: 'Investigación & Descubrimiento',
    summary: 'Revisión exhaustiva de la identidad técnica de JPX, catálogo de servicios, normativas legales aplicables (Ley 29783, R.M. 375, D.L. 1278) y análisis del público objetivo B2B.',
    details: [
      'Mapeo de requerimientos institucionales de JPX Ingeniería & Consultoría.',
      'Entrevistas de necesidades con clientes industriales (minería, manufactura, retail).',
      'Benchmark de consultoras técnicas de seguridad y salud en Latinoamérica.',
      'Definición de tono corporativo: rigor técnico, preventivo, humano y transparente.'
    ],
    deliverables: 'Brief técnico consolidado, perfiles de usuario B2B (Gerentes de SST, Jefes de Planta) y matriz de objetivos de conversión.'
  },
  {
    number: 2,
    title: 'Arquitectura de Información (IA)',
    summary: 'Estructuración lógica de los contenidos y jerarquía de navegación orientada a facilitar la consulta de servicios y la solicitud de cotizaciones.',
    details: [
      'Diseño del mapa de sitio (Sitemap): 6 secciones principales conectadas.',
      'Estructura modular: Inicio → Nosotros → 5 Servicios dedicados → Proyectos de alto impacto → JPX Capacita → Contacto directo.',
      'Taxonomía de contenidos sin jerga innecesaria ni sobrecarga de texto.',
      'Estrategia de conversión con CTAs contextuales en cada sección clave.'
    ],
    deliverables: 'Sitemap jerárquico, inventario de contenidos y flujos de usuario hacia la solicitud de asesoría técnica.'
  },
  {
    number: 3,
    title: 'Wireframes & Low-Fidelity',
    summary: 'Prototipado estructural para validar el orden visual, la distribución del espacio y la legibilidad antes de aplicar capas cromáticas.',
    details: [
      'Distribución en rejilla modular de 12 columnas para escritorio (1440px).',
      'Diseño de flujo mobile-first para pantallas móviles compactas (390px).',
      'Definición del Top Bar Contract de 3 zonas sin elementos parasitarios.',
      'Pruebas de escaneabilidad visual (ritmo de lectura en Z y F).'
    ],
    deliverables: 'Esquemas estructurales de página completa para vistas de escritorio y móvil.'
  },
  {
    number: 4,
    title: 'Diseño Visual & Sistema de Identidad Cromática',
    summary: 'Aplicación de la identidad visual corporativa de JPX basada en los estándares cromáticos oficiales Pantone, tipografía técnica y fotografía de alta resolución.',
    details: [
      'Tipografía: Outfit para titulares y Plus Jakarta Sans para máxima legibilidad técnica.',
      'Paleta Oficial: Pantone 7725 C (#0A7944) Verde Seguridad/Sostenibilidad, Pantone 2965 C (#0F2D44) Azul Marino Profundo Corporativo, y Pantone 7683 C (#3E5DA6) Azul Técnico de Ingeniería.',
      'Iconografía funcional de affordance sobria sin emojis ornamentales en exceso.',
      'Fotografía editorial realista con ingenieros en faena real sin fotos de stock artificiales.'
    ],
    deliverables: 'Design tokens, especificaciones Pantone/CMYK/RGB y componentes Tailwind CSS.'
  },
  {
    number: 5,
    title: 'Diseño Responsive & Adaptabilidad',
    summary: 'Adaptación milimétrica para pantallas de escritorio (1440px) y dispositivos móviles (390px) con navegación táctil accesible.',
    details: [
      'Desktop (1440px): Navegación expandida completa, grilla bento de 3-4 columnas, tablas comparativas y modales amplios.',
      'Mobile (390px): Botón hamburguesa accesible, drawer deslizante fluido, tarjetas apiladas y áreas de toque superiores a 44px.',
      'Respeto al límite del 15% de altura en elementos fijos/adhesivos en móvil.',
      'Simulador interactivo integrado para previsualizar ambos entornos en vivo.'
    ],
    deliverables: 'Layout responsive fluido verificado en breakpoints sm, md, lg y xl.'
  },
  {
    number: 6,
    title: 'Prototipo Interactivo & Funcional',
    summary: 'Desarrollo en React + Vite + TypeScript con animaciones suaves, formularios funcionales y modales de profundización.',
    details: [
      'Navegación fluida por tabs, modales de detalle de proyectos y servicios.',
      'Formulario de contacto con validación de datos y emisor de tickets de requerimiento en tiempo real.',
      'Filtro interactivo de capacitaciones y selector dinámico de servicios.',
      'Cero dependencias externas rotas; componentes optimizados para alto rendimiento.'
    ],
    deliverables: 'Aplicación web interactiva compilada y verificada sin errores de build ni advertencias de consola.'
  },
  {
    number: 7,
    title: 'Presentación Ejecutiva & Entrega',
    summary: 'Consolidación de la propuesta final para revisión del equipo directivo de JPX, con manual de diseño y documentación técnica.',
    details: [
      'Memoria técnica interactiva accesible con un solo clic.',
      'Demostración de capacidad de respuesta ante requerimientos de clientes.',
      'Estructura escalable lista para incorporar nuevos servicios y proyectos futuros.',
      'Alineación completa con la visión estratégica de JPX Ingeniería & Consultoría.'
    ],
    deliverables: 'Sitio web publicado, memoria técnica y checklist de validación de estándares.'
  }
];
