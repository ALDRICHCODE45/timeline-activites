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
    title: "Finalizacion Modulo de CRM",
    description:
      "Implementar las mejoras solicitadas en el modulo de CRM para su finalizacion",
    initialDate: "2026-01-06",
    endDate: "2026-01-20",
    moreDetails: "Sin Detalles.",
    icon: FileText,
  },
  {
    title: "Finalizacion Modulo de ATS",
    description:
      "Implementar las mejoras solicitadas en el modulo de ATS para su finalizacion",
    initialDate: "2026-01-20",
    endDate: "2026-02-10",
    moreDetails: "Sin Detalles",
    icon: Building2,
  },
  {
    title: "Inicio Modulo de Finanzas",
    description:
      "Iniciar Modulo de finanzas usando los datos actuales de los modulos anteriores.",
    initialDate: "2025-02-11",
    endDate: "2025-03-15",
    moreDetails: "Sin Detalles",
    icon: GitBranch,
  },
  {
    title: "Finalizacion Modulo de Finanzas",
    description: "Finalizar modulo de finanzas usando",
    initialDate: "2026-03-15",
    endDate: "2025-03-30",
    moreDetails: "Sin Detalles",
    icon: Database,
  },

  {
    title: "Inicio y finalizacion del Modulo de Clientes",
    description:
      "Iniciar e implementar el modulo de clientes para mostrar estadisticas solicitadas por cada cliente.",
    initialDate: "2026-03-30",
    endDate: "2025-04-15",
    moreDetails: "Sin Deatalles",
    icon: Database,
  },
];
