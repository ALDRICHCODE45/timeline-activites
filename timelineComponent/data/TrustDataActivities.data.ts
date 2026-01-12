import { Building2, Database, FileText, GitBranch } from "lucide-react";
import { Activities } from "./projects.data";

// Timeline MVP con Vercel - 4 meses (17 semanas)
// Fecha de inicio estimada: 6 de Enero 2025
// Fecha de finalización estimada: 2 de Mayo 2025
// NOTA: Al usar Vercel, la Fase 1 se reduce significativamente,
// lo que nos da más tiempo para features y testing.

export const TrustActivities: Activities[] = [
  // ============================================
  // FASE 0: PREPARACIÓN Y PLANIFICACIÓN (Semana 1-2)
  // ============================================
  {
    title: "Finalizacion Modulo CRM",
    description:
      "Implementar las mejoras solicitadas en el modulo de CRM para su finalizacion",
    initialDate: "2026-02-06",
    endDate: "2026-02-20",
    moreDetails:
      "Robustecer los reportes, poder anadir imagenes al seguimiento de los contactos, reasignar leads facilmente",
    icon: FileText,
  },
  {
    title: "Finalizacion Modulo de ATS",
    description: "Concluir el modulo de ATS con las meojoras solicitadas",
    initialDate: "2026-02-20",
    endDate: "2026-03-10",
    moreDetails:
      "Implementar las mejoras solicitadas tales como arreglar inconsistencias en fechas, manejar correctamente los permisos entre administradores y reclutadores, mejorar automatizaciones para cambio de estados en vacantes, separar usuarios de Relevant con usuarios de Trust, duplicar vacantes.",
    icon: Building2,
  },
  {
    title: "Inicio y finalizacion del  Modulo de Finanzas",
    description:
      "Iniciar Modulo de finanzas usando los datos actuales de los modulos anteriores  (Iniciando en la version 2 del sistema) ",
    initialDate: "2025-03-10",
    endDate: "2025-03-30",
    moreDetails: "Sin Detalles",
    icon: GitBranch,
  },
  {
    title: "Inicio y finalizacion del Modulo de Clientes",
    description:
      "Iniciar e implementar el modulo de clientes para mostrar estadisticas solicitadas por cada cliente.",
    initialDate: "2026-03-30",
    endDate: "2025-04-15",
    moreDetails: "Sin Detalles",
    icon: Database,
  },
  {
    title: "Migracion de la Base de Datos actual a la version 2 de PeopleFlow",
    description: "Iniciar la migracion de los datos a la nueva Base de Datos",
    initialDate: "2026-04-15",
    endDate: "2025-04-30",
    moreDetails: "Deatalles",
    icon: Database,
  },
];

export const PfCandidatesActivities: Activities[] = [
  // ============================================
  // FASE 0: PREPARACIÓN Y PLANIFICACIÓN (Semana 1-2)
  // ============================================
  {
    title: "Analisis y diseno de arquitectura",
    description:
      "Disenar la mejor arquitectura y base de datos para el sistema",
    initialDate: "2026-02-10",
    endDate: "2026-02-20",
    moreDetails: "Sin Detalles",
    icon: FileText,
  },
  {
    title: "Realizar importacion de los datos existentes",
    description:
      "Importar la data de candidatos ya existente en el sistema y entregar la primera version de la base de datos.",
    initialDate: "2026-02-20",
    endDate: "2026-03-3",
    moreDetails: "Sin Detalles",
    icon: Building2,
  },
  {
    title: "Creacion de funcionalidades clave",
    description:
      "Creacion de las funcionalidades clave como acceso basado en roles, pago por vista completa de candidatos, capacidad de publicar vacantes.",
    initialDate: "2025-03-10",
    endDate: "2025-4-20",
    moreDetails: "Sin Detalles",
    icon: GitBranch,
  },
  {
    title: "Primera version del sistema PF Candidates",
    description:
      "Finalizacion de la primera versino de PF Candidates, Funcionalidades completas: Acceso parcial a data basado en roles, creacion de vacantes desde modulos especificos, etc..",
    initialDate: "2026-03-10",
    endDate: "2025-04-25",
    moreDetails: "Sin Detalles",
    icon: Database,
  },
  {
    title: "Primera salida a produccion",
    description: "Salida a produccion y monitoreo.",
    initialDate: "2026-04-15",
    endDate: "2025-04-30",
    moreDetails:
      "Monitorear el rendimineto de la aplicacion despues de su salida a produccion.",
    icon: Database,
  },
];
