export type NavigationPage = 'inicio' | 'nosotros' | 'servicios' | 'proyectos' | 'capacitaciones' | 'contacto';

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  icon: string;
  badge: string;
  whatWeDo: string[];
  methodology: {
    step: string;
    title: string;
    description: string;
  }[];
  deliverables: string[];
  regulatoryBasis: string[];
  ctaQuestion: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  industry: string;
  serviceId: string;
  serviceName: string;
  shortDescription: string;
  image: string;
  metrics: {
    label: string;
    value: string;
    highlight: string;
  }[];
  context: string;
  objective: string;
  scope: string;
  methodology: string;
  development: string[];
  results: string[];
  recommendations: string[];
}

export interface TrainingItem {
  id: string;
  theme: string;
  objective: string;
  targetAudience: string;
  duration: string;
  modality: 'Presencial In-Company' | 'Virtual Sincrónica' | 'Semipresencial / Híbrida';
  category: 'Ergonomía' | 'SST' | 'Higiene Industrial' | 'Emergencias' | 'Medio Ambiente';
  modules: string[];
  certification: string;
}

export interface TeamMember {
  name: string;
  role: string;
  credential: string;
  bio: string;
  initials: string;
}

export interface DesignStep {
  number: number;
  title: string;
  summary: string;
  details: string[];
  deliverables: string;
}
