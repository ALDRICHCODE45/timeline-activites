import {
  Building2,
  Database,
  Server,
  Shield,
  Code,
  Users,
  Settings,
  FileText,
  TestTube,
  Rocket,
  CreditCard,
  Globe,
  Lock,
  FolderKanban,
  GitBranch,
  Cloud,
  HardDrive,
  Mail,
  Bell,
  Palette,
  LayoutDashboard,
  UserCog,
  Workflow,
  CheckSquare,
  Bug,
  BookOpen,
  Handshake,
  TrendingUp,
  Calendar,
  ClipboardList,
  Package,
  RefreshCcw,
  MonitorCheck,
  Zap,
  Triangle,
  LucideIcon,
} from "lucide-react";

export interface Activities {
  title: string;
  description: string;
  initialDate: string;
  endDate: string;
  moreDetails?: string;
  icon: LucideIcon;
}

// Timeline MVP con Vercel - 4 meses (17 semanas)
// Fecha de inicio estimada: 6 de Enero 2026
// Fecha de finalización estimada: 2 de Mayo 2026
// NOTA: Al usar Vercel, la Fase 1 se reduce significativamente,
// lo que nos da más tiempo para features y testing.

const activities: Activities[] = [
  // ============================================
  // FASE 0: PREPARACIÓN Y PLANIFICACIÓN (Semana 1-2)
  // ============================================
  {
    title: "Documentación de flujos actuales del Cliente (Trust)",
    description:
      "Documentar exhaustivamente todos los flujos de negocio actuales: CRM, ATS y Finanzas. Identificar qué es core vs personalización específica del cliente actual.",
    initialDate: "2026-01-06",
    endDate: "2026-01-10",
    moreDetails:
      "Crear diagramas de flujo para cada módulo. Documentar todos los estados posibles, reglas de transición, campos requeridos y opcionales. Esta documentación será la base para el sistema de configuración.",
    icon: FileText,
  },
  {
    title: "Definición de arquitectura multi-tenant",
    description:
      "Diseñar la arquitectura técnica completa: estrategia de schemas en PostgreSQL (Neon), estructura de carpetas, middleware de tenant, y sistema de configuración.",
    initialDate: "2026-01-06",
    endDate: "2026-01-12",
    moreDetails:
      "Decisiones clave: schema por tenant en PostgreSQL, identificación por subdominio usando Vercel Edge Middleware, configuración en JSONB, caché en Upstash Redis. Documentar ADRs (Architecture Decision Records).",
    icon: Building2,
  },
  {
    title: "Configuración del repositorio y CI/CD base",
    description:
      "Crear nuevo repositorio con estructura multi-tenant. El CI/CD será automático con Vercel (deploy on push). Establecer convenciones de código y branching strategy.",
    initialDate: "2026-01-13",
    endDate: "2026-01-15",
    moreDetails:
      "Estructura de carpetas: /src/app (Next.js App Router), /src/lib/db (Drizzle ORM), /src/lib/config (tipos compartidos). Configurar ESLint, Prettier, Husky para pre-commit hooks. Conectar repo a Vercel.",
    icon: GitBranch,
  },
  {
    title: "Diseño del schema de base de datos multi-tenant",
    description:
      "Diseñar el schema completo de PostgreSQL incluyendo: schema público (tenants, planes, configuraciones base) y schema template para tenants.",
    initialDate: "2026-01-13",
    endDate: "2026-01-17",
    moreDetails:
      "Incluir: tabla tenants, tabla plans, tabla tenant_configs. Template de schema de tenant con todas las tablas: users, prospects, contacts, interactions, positions, candidates, documents, comments, tasks, activity_logs. Usar Drizzle ORM para mejor DX con Neon.",
    icon: Database,
  },

  // ============================================
  // FASE 1: INFRAESTRUCTURA VERCEL (Semana 3) - REDUCIDA
  // ============================================
  {
    title: "Configuración de proyecto en Vercel",
    description:
      "Crear proyecto en Vercel, conectar repositorio de GitHub, configurar settings básicos de proyecto y team.",
    initialDate: "2026-01-20",
    endDate: "2026-01-20",
    moreDetails:
      "PAGO: Vercel Pro $20 USD/mes (necesario para wildcard domains y más builds). Crear proyecto, conectar repo, habilitar Preview Deployments, configurar Build & Development Settings para Next.js.",
    icon: Triangle,
  },
  {
    title: "Configuración de dominio y wildcard en Vercel",
    description:
      "Configurar dominio principal y wildcard subdomain (*.tuapp.com) para multi-tenancy. Vercel maneja SSL automáticamente.",
    initialDate: "2026-01-20",
    endDate: "2026-01-21",
    moreDetails:
      "PAGO: Dominio ~$12-15 USD/año (si no lo tienes). Agregar dominio a Vercel, configurar DNS (nameservers de Vercel o registros A/CNAME), agregar wildcard *.tuapp.com. SSL wildcard es automático y gratis en Vercel Pro.",
    icon: Globe,
  },
  {
    title: "Configuración de Neon PostgreSQL",
    description:
      "Crear proyecto en Neon, configurar base de datos principal, crear branch de desarrollo, y conectar con el proyecto de Vercel.",
    initialDate: "2026-01-21",
    endDate: "2026-01-22",
    moreDetails:
      "PAGO: Neon Pro $19 USD/mes (incluye 10GB storage, branching ilimitado, más compute). Crear proyecto en región us-east-1, crear database principal, copiar connection string a variables de entorno de Vercel. Crear branch 'development' para ambiente de dev.",
    icon: Database,
  },
  {
    title: "Configuración de Upstash Redis",
    description:
      "Crear base de datos Redis en Upstash para caché de configuraciones de tenant, sesiones y rate limiting.",
    initialDate: "2026-01-22",
    endDate: "2026-01-22",
    moreDetails:
      "PAGO: Upstash Pro $10 USD/mes (comandos ilimitados). Crear database en región us-east-1 (Global para mejor latencia), copiar UPSTASH_REDIS_REST_URL y UPSTASH_REDIS_REST_TOKEN a variables de Vercel. Usar @upstash/redis SDK.",
    icon: Zap,
  },
  {
    title: "Configuración de Vercel Blob para archivos",
    description:
      "Habilitar Vercel Blob Storage para almacenamiento de archivos (CVs, documentos, imágenes de candidatos).",
    initialDate: "2026-01-22",
    endDate: "2026-01-23",
    moreDetails:
      "PAGO: Vercel Blob incluido en Pro, $0.15/GB después de 1GB. Habilitar en dashboard de Vercel, obtener BLOB_READ_WRITE_TOKEN. Estructura de paths: {tenant_id}/documents/, {tenant_id}/candidates/. Configurar límites de upload.",
    icon: HardDrive,
  },
  {
    title: "Configuración de Resend para emails",
    description:
      "Crear cuenta en Resend, verificar dominio para emails transaccionales, y configurar integración con Next.js.",
    initialDate: "2026-01-23",
    endDate: "2026-01-23",
    moreDetails:
      "PAGO: Resend Free tier 3,000 emails/mes, Pro $20 USD/mes si necesitas más. Verificar dominio (agregar registros DNS), crear API key, agregar RESEND_API_KEY a variables de Vercel. Crear templates básicos: invitación, reset password, notificación.",
    icon: Mail,
  },
  {
    title: "Primer deploy y verificación de infraestructura",
    description:
      "Realizar primer deploy a producción, verificar que todos los servicios están conectados correctamente, probar conexiones a Neon, Upstash y Blob.",
    initialDate: "2026-01-23",
    endDate: "2026-01-24",
    moreDetails:
      "Crear página de health check que verifique: conexión a Neon, conexión a Upstash, permisos de Blob Storage. Deploy a producción, verificar en dominio real, probar subdominios wildcard. Resolver cualquier problema de configuración.",
    icon: Rocket,
  },

  // ============================================
  // FASE 2: CORE MULTI-TENANT (Semana 4-6)
  // ============================================
  {
    title: "Implementación de Edge Middleware para tenant",
    description:
      "Desarrollar middleware de Vercel Edge que identifique el tenant por subdominio, valide su existencia y estado activo, e inyecte el contexto en cada request.",
    initialDate: "2026-01-27",
    endDate: "2026-01-29",
    moreDetails:
      "Usar middleware.ts en la raíz del proyecto. El middleware debe: extraer subdominio del host header, verificar en caché Upstash (usando @upstash/redis), si no existe ir a Neon, rechazar si tenant inactivo o no existe, agregar headers x-tenant-id y x-tenant-slug. Manejar rutas especiales: www, admin, api, _next.",
    icon: Code,
  },
  {
    title: "Sistema de conexión a base de datos por tenant",
    description:
      "Implementar capa de abstracción con Drizzle ORM que automáticamente use el schema correcto según el tenant del request.",
    initialDate: "2026-01-29",
    endDate: "2026-01-31",
    moreDetails:
      "Crear helper getTenantDb(tenantSlug) que retorne cliente Drizzle con schema configurado. Usar SET search_path TO tenant_{slug}, public antes de cada operación. Implementar connection pooling con @neondatabase/serverless para mejor performance en serverless.",
    icon: Database,
  },
  {
    title: "Script de provisioning de nuevo tenant",
    description:
      "Crear script/función automatizada que cree todo lo necesario para un nuevo tenant: schema en Neon, usuario admin inicial, configuración default.",
    initialDate: "2026-01-31",
    endDate: "2026-02-04",
    moreDetails:
      "El script debe ser idempotente y transaccional. Incluir: CREATE SCHEMA IF NOT EXISTS, crear todas las tablas del tenant, insertar configuración default en tenant_configs, crear usuario admin con password temporal hasheado, crear carpeta base en Vercel Blob. Exponer como API route protegida para super admin.",
    icon: Settings,
  },
  {
    title: "Sistema de configuración de tenant (JSONB)",
    description:
      "Implementar sistema de configuración flexible usando JSONB en PostgreSQL. Crear tipos TypeScript con Zod para validación y API para leer/escribir configuración.",
    initialDate: "2026-02-04",
    endDate: "2026-02-12",
    moreDetails:
      "Estructura de config: modules (enabled/disabled), ats.statuses (array de estados con requisitos), ats.customFields, crm.stages, branding (logo, colores). Cachear en Upstash con TTL de 5 minutos, invalidar al actualizar. Usar Zod para validar estructura de config.",
    icon: FileText,
  },
  {
    title: "Sistema de autenticación multi-tenant",
    description:
      "Implementar autenticación que funcione por tenant usando NextAuth.js o similar, con usuarios aislados por organización.",
    initialDate: "2026-02-12",
    endDate: "2026-02-17",
    moreDetails:
      "Usar NextAuth.js con Credentials provider. La tabla users está en el schema del tenant. El login debe: identificar tenant por subdominio, buscar usuario en schema correcto, validar password con bcrypt, crear sesión con tenant_id incluido. Implementar middleware de protección de rutas.",
    icon: Lock,
  },

  // ============================================
  // FASE 3: SUPER ADMIN DASHBOARD (Semana 7-9)
  // ============================================
  {
    title: "Diseño UI/UX del Super Admin Dashboard",
    description:
      "Diseñar las interfaces del dashboard de administración: lista de tenants, creación de tenant, gestión de usuarios, métricas básicas.",
    initialDate: "2026-02-17",
    endDate: "2026-02-19",
    moreDetails:
      "Diseñar directamente en código con shadcn/ui. Vistas necesarias: Dashboard principal con métricas, Lista de organizaciones con filtros y búsqueda, Detalle de organización (tabs: info, usuarios, config, métricas), Wizard de crear organización, Modal de crear usuario.",
    icon: Palette,
  },
  {
    title: "Autenticación separada para Super Admin",
    description:
      "Implementar sistema de autenticación separado para super admins en el subdominio admin.tuapp.com, completamente aislado de tenants.",
    initialDate: "2026-02-19",
    endDate: "2026-02-21",
    moreDetails:
      "Super admins viven en tabla public.super_admins. Usar NextAuth con provider separado. Implementar MFA con TOTP (usando otplib). El middleware debe detectar si es admin.tuapp.com y usar flujo de auth diferente. Proteger todas las rutas de /admin.",
    icon: Shield,
  },
  {
    title: "CRUD de organizaciones (tenants)",
    description:
      "Implementar funcionalidad completa para crear, leer, actualizar y desactivar organizaciones desde el super admin dashboard.",
    initialDate: "2026-02-21",
    endDate: "2026-02-26",
    moreDetails:
      "API routes en /api/admin/organizations. Crear: validar datos con Zod, verificar slug único, ejecutar provisioning, enviar email de bienvenida con Resend. Editar: cambiar nombre, plan, logo. Desactivar: toggle is_active (NO eliminar nunca). Lista: paginación, búsqueda por nombre/slug, filtro por plan/estado.",
    icon: Building2,
  },
  {
    title: "Gestión de usuarios por organización",
    description:
      "Implementar desde super admin la capacidad de ver, crear y gestionar usuarios de cada organización. Incluye reset de contraseña y activación/desactivación.",
    initialDate: "2026-02-26",
    endDate: "2026-03-03",
    moreDetails:
      "Vista de usuarios por tenant con tabla paginada. Crear usuario: nombre, email, rol (basado en roles disponibles del plan). Enviar invitación por email con Resend y token temporal. Reset password: generar nuevo token, enviar email. Toggle activo/inactivo. NO eliminar usuarios, solo desactivar.",
    icon: Users,
  },
  {
    title: "Configurador de módulos por organización",
    description:
      "Implementar interfaz para activar/desactivar módulos (CRM, ATS, Finanzas) por organización y configurar límites según su plan.",
    initialDate: "2026-03-03",
    endDate: "2026-03-05",
    moreDetails:
      "UI con toggles para cada módulo. Configuración de límites: max_users, max_active_positions, max_storage_gb. Los límites se validan en tiempo real en la app del tenant. Guardar en tenant_config JSONB, invalidar caché de Upstash al guardar.",
    icon: Package,
  },
  {
    title: "Dashboard de métricas básicas para Super Admin",
    description:
      "Crear vista con métricas agregadas: total de organizaciones, usuarios activos, posiciones creadas, uso de storage por tenant.",
    initialDate: "2026-03-05",
    endDate: "2026-03-07",
    moreDetails:
      "Métricas a mostrar: orgs activas/inactivas (pie chart), usuarios totales y por tenant (bar chart), posiciones por estado agregado, storage usado por tenant, últimos 10 logins globales. Usar recharts para gráficas. Queries agregadas a todos los schemas.",
    icon: TrendingUp,
  },

  // ============================================
  // FASE 4: SISTEMA DE CONFIGURACIÓN DE PIPELINES (Semana 10-12)
  // ============================================
  {
    title: "Modelo de datos para estados configurables del ATS",
    description:
      "Diseñar e implementar el modelo de datos que permita configurar estados personalizados del pipeline de reclutamiento con sus reglas de transición.",
    initialDate: "2026-03-10",
    endDate: "2026-03-12",
    moreDetails:
      "Estructura en JSONB: { statuses: [{ id, name, order, color, icon, requirements: [{ type: 'min_candidates' | 'required_documents' | 'required_fields' | 'min_days', value, errorMessage }], automations: { onEnter: [], onExit: [] } }] }. Crear tipos TypeScript y schemas Zod para validación.",
    icon: Workflow,
  },
  {
    title: "UI para configurar estados del pipeline ATS",
    description:
      "Crear interfaz drag-and-drop para que desde super admin se pueda configurar el pipeline de cada organización: agregar estados, reordenar, definir colores y requisitos.",
    initialDate: "2026-03-12",
    endDate: "2026-03-17",
    moreDetails:
      "Usar @dnd-kit/core y @dnd-kit/sortable para drag-and-drop. Lista de estados ordenable, cada estado expandible para editar: nombre, color (color picker), icono (selector de iconos lucide). Sección de requisitos: agregar/eliminar requisitos con formulario dinámico. Preview en tiempo real del Kanban resultante.",
    icon: FolderKanban,
  },
  {
    title: "Motor de validación de transiciones de estado",
    description:
      "Implementar el engine que valida si una posición puede cambiar de estado basándose en los requisitos configurados para el estado destino.",
    initialDate: "2026-03-17",
    endDate: "2026-03-21",
    moreDetails:
      "Función validateTransition(position, targetStatus, config): { canTransition: boolean, errors: string[] }. Validadores por tipo: min_candidates (contar validados), required_documents (verificar tipos), required_fields (verificar campos no nulos), min_days (calcular días en estado actual). Retornar array de errores específicos y user-friendly.",
    icon: CheckSquare,
  },
  {
    title: "UI para configurar campos personalizados",
    description:
      "Crear interfaz para definir campos personalizados en candidatos y posiciones por organización. Tipos soportados: texto, número, fecha, select, multiselect, archivo, checkbox.",
    initialDate: "2026-03-21",
    endDate: "2026-03-26",
    moreDetails:
      "Almacenar definición de campos en tenant_config.ats.candidateCustomFields y positionCustomFields. Cada campo: { id, name, type, required, options (para selects), placeholder, helpText }. Los valores se guardan en columna JSONB custom_fields en candidates/positions. UI: lista de campos, modal de crear/editar, preview del formulario resultante.",
    icon: ClipboardList,
  },
  {
    title: "Sistema de configuración de etapas del CRM",
    description:
      "Implementar el mismo sistema de configuración de estados para el módulo de CRM: etapas personalizables del pipeline de ventas.",
    initialDate: "2026-03-26",
    endDate: "2026-03-28",
    moreDetails:
      "Reusar componentes del ATS adaptados para CRM. Etapas del CRM típicamente tienen menos requisitos formales. Configurar: nombre, color, orden, campos requeridos para avanzar (más simple que ATS). Incluir etapas default sugeridas: Contacto, Social Selling, Contacto Calido, Cita Agendada, Cita Atendida, Posiciones Asignadas, Stand By.",
    icon: Users,
  },
  {
    title: "Templates de configuración predefinidos",
    description:
      "Crear templates de configuración predefinidos para diferentes tipos de empresas de reclutamiento que se puedan aplicar al crear una organización.",
    initialDate: "2026-03-28",
    endDate: "2026-03-31",
    moreDetails:
      "Templates: 'Headhunting Ejecutivo' (proceso largo, muchos requisitos), 'Reclutamiento Masivo' (proceso corto, pocos requisitos), 'Staffing/Temporal' (proceso ágil), 'RPO' (proceso completo). Cada template incluye: estados del ATS, etapas del CRM, campos sugeridos. Selector de template en wizard de creación de org.",
    icon: FileText,
  },

  // ============================================
  // FASE 5: ADAPTACIÓN DE MÓDULOS CORE (Semana 13-15)
  // ============================================
  {
    title: "Refactorización del módulo CRM para multi-tenant",
    description:
      "Adaptar el módulo de CRM existente para usar configuración dinámica de etapas, campos personalizados y validaciones configurables.",
    initialDate: "2026-03-31",
    endDate: "2026-04-03",
    moreDetails:
      "Modificar: queries para usar schema correcto (ya debería funcionar con el sistema de tenant db), componentes de pipeline para leer etapas de config, formularios para renderizar campos dinámicos con react-hook-form, validaciones para usar reglas de config. Probar con cliente actual para asegurar compatibilidad.",
    icon: UserCog,
  },
  {
    title: "Refactorización del módulo ATS para multi-tenant",
    description:
      "Adaptar el módulo de ATS (reclutamiento) para soportar configuración dinámica de estados, campos personalizados y reglas de transición.",
    initialDate: "2026-04-03",
    endDate: "2026-04-08",
    moreDetails:
      "Este es el módulo más complejo y crítico. Adaptar: vista Kanban que renderice columnas dinámicamente basado en config, formularios de posición con campos custom renderizados dinámicamente, integrar motor de validación de transiciones con feedback visual, checklist dinámico basado en requisitos del estado siguiente, documentos requeridos mostrados según config.",
    icon: FolderKanban,
  },
  {
    title: "Sistema de notificaciones multi-tenant",
    description:
      "Implementar sistema de notificaciones que funcione por tenant: notificaciones in-app en tiempo real y emails de tareas pendientes.",
    initialDate: "2026-04-08",
    endDate: "2026-04-10",
    moreDetails:
      "Tabla notifications en schema de tenant. Triggers de notificación: asignar tarea, cambiar estado de posición, nuevo comentario, candidato agregado, documento subido. Notificaciones in-app con polling o Vercel AI SDK para real-time. Badge con contador de no leídas. Email diario de resumen usando Resend con react-email templates.",
    icon: Bell,
  },
  {
    title: "Sistema de tareas y recordatorios",
    description:
      "Implementar sistema robusto de tareas con recordatorios automáticos, integrado con el sistema de comentarios y posiciones.",
    initialDate: "2026-04-10",
    endDate: "2026-04-14",
    moreDetails:
      "Tareas pueden crearse desde: comentarios (marcar como tarea), posiciones, candidatos, prospectos. Campos: título, descripción, fecha límite, asignado a, prioridad, estado (pendiente/completada). Vercel Cron Jobs para: recordatorio día antes de vencimiento, alerta de tareas vencidas. Vista de 'Mis tareas' con filtros.",
    icon: CheckSquare,
  },

  // ============================================
  // FASE 6: TESTING Y CALIDAD (Semana 16)
  // ============================================
  {
    title: "Testing de aislamiento de datos entre tenants",
    description:
      "Crear suite de tests específica para validar que no hay data leaks entre tenants. Probar todos los endpoints críticos.",
    initialDate: "2026-04-14",
    endDate: "2026-04-16",
    moreDetails:
      "Tests críticos con Vitest + Supertest: usuario de tenant A no puede acceder datos de tenant B, queries sin contexto de tenant fallan, middleware rechaza tenants inactivos, super admin puede acceder a todos los tenants. Crear fixtures de test con 2 tenants y datos de prueba. Ejecutar en CI con GitHub Actions.",
    icon: Shield,
  },
  {
    title: "Testing de flujos de negocio configurables",
    description:
      "Probar que los flujos de CRM y ATS funcionan correctamente con diferentes configuraciones de estados y reglas de transición.",
    initialDate: "2026-04-16",
    endDate: "2026-04-18",
    moreDetails:
      "Crear 3 configs de test diferentes (minimal, standard, complex). Tests para: transiciones válidas pasan, transiciones inválidas fallan con errores correctos, campos custom se guardan y recuperan correctamente, validaciones funcionan en forms. Tests E2E con Playwright para flujos críticos completos.",
    icon: TestTube,
  },
  {
    title: "Testing de performance y optimización",
    description:
      "Realizar pruebas de performance para identificar cuellos de botella y optimizar queries y componentes críticos.",
    initialDate: "2026-04-18",
    endDate: "2026-04-21",
    moreDetails:
      "Herramientas: Vercel Analytics (incluido), Neon query insights. Identificar: queries lentas (optimizar con índices), componentes que re-renderizan mucho (React.memo, useMemo), llamadas excesivas a API (batching, SWR). Objetivo: First Contentful Paint < 1.5s, Time to Interactive < 3s. Optimizar imágenes con next/image.",
    icon: TrendingUp,
  },
  {
    title: "Corrección de bugs críticos encontrados",
    description:
      "Buffer de tiempo dedicado exclusivamente a corregir bugs críticos encontrados durante el testing.",
    initialDate: "2026-04-21",
    endDate: "2026-04-23",
    moreDetails:
      "Priorización: P0 (blocker) = bugs de seguridad o pérdida de datos, P1 (critical) = bugs que bloquean flujos principales, P2 (major) = bugs que tienen workaround. Resolver todos los P0 y P1 antes de continuar. Documentar P2 en backlog de GitHub Issues para post-MVP.",
    icon: Bug,
  },

  // ============================================
  // FASE 7: DOCUMENTACIÓN Y PREPARACIÓN (Semana 17)
  // ============================================
  {
    title: "Documentación de onboarding de nuevo tenant",
    description:
      "Crear documentación paso a paso del proceso de onboarding: desde la venta hasta el tenant funcionando con sus usuarios.",
    initialDate: "2026-04-23",
    endDate: "2026-04-25",
    moreDetails:
      "Formato: Notion o Markdown en repo. Contenido: checklist de datos requeridos del cliente, paso a paso de creación en super admin, guía de configuración de pipeline (con screenshots), proceso de creación de usuarios e invitaciones, guía de capacitación inicial para el cliente (30-60 min).",
    icon: BookOpen,
  },
  {
    title: "Documentación técnica para mantenimiento",
    description:
      "Documentar arquitectura, procesos de deployment, troubleshooting común, y procedimientos de backup/recovery.",
    initialDate: "2026-04-25",
    endDate: "2026-04-28",
    moreDetails:
      "Incluir: diagrama de arquitectura (Vercel + Neon + Upstash + Blob), guía de variables de entorno, cómo hacer rollback en Vercel (es un click), cómo restaurar backup de Neon (branching), runbook de problemas comunes, guía de monitoreo con Vercel Analytics.",
    icon: FileText,
  },
  {
    title: "Configuración de monitoreo y alertas",
    description:
      "Configurar monitoreo de aplicación y alertas para situaciones críticas usando las herramientas de Vercel y servicios externos.",
    initialDate: "2026-04-28",
    endDate: "2026-04-29",
    moreDetails:
      "Vercel incluye: Analytics, Speed Insights, Logs. Agregar: Sentry para error tracking (free tier 5k events/mes), UptimeRobot para monitoreo de uptime (free 50 monitors). Alertas por email/Slack para: errores 5xx frecuentes, deployment fallido, sitio caído. Neon tiene alertas de conexiones y storage.",
    icon: MonitorCheck,
  },
  {
    title: "Preparación final de producción",
    description:
      "Revisión final de configuración de producción: variables de entorno, secrets, configuración de seguridad, backups.",
    initialDate: "2026-04-29",
    endDate: "2026-04-30",
    moreDetails:
      "Checklist final: todas las variables de entorno en Vercel (no hardcoded), Neon backup automático habilitado (incluido en Pro), dominio verificado, emails de Resend funcionando, rate limiting configurado (middleware de Vercel + Upstash Ratelimit), headers de seguridad configurados en next.config.js.",
    icon: Shield,
  },

  // ============================================
  // FASE 8: LANZAMIENTO MVP (Semana 17 - Final)
  // ============================================
  {
    title: "Migración final del cliente actual a producción",
    description:
      "Ejecutar migración final del cliente actual al sistema en producción. Validar todos los datos y funcionalidades con el cliente.",
    initialDate: "2026-04-30",
    endDate: "2026-05-01",
    moreDetails:
      "Proceso: backup del sistema actual, crear branch de Neon para migración de prueba, ejecutar migración y validar, si todo OK ejecutar en main, sesión con el cliente para validación final (checklist de funcionalidades), capacitación de refresher si necesario. Tener plan de rollback (restaurar backup de Neon, revertir deployment en Vercel).",
    icon: RefreshCcw,
  },
  {
    title: "Onboarding del primer cliente nuevo",
    description:
      "Realizar el onboarding completo del primer cliente nuevo usando el super admin dashboard y los procesos documentados.",
    initialDate: "2026-05-01",
    endDate: "2026-05-02",
    moreDetails:
      "Usar documentación creada. Proceso: reunión de kickoff para entender necesidades, crear organización desde super admin, seleccionar template de config o personalizar, crear usuarios y enviar invitaciones, sesión de capacitación (1-2 horas), documentar todo el feedback y fricciones encontradas.",
    icon: Handshake,
  },
  {
    title: "Monitoreo intensivo post-lanzamiento",
    description:
      "Período de monitoreo cercano después del lanzamiento para detectar y resolver problemas rápidamente.",
    initialDate: "2026-05-02",
    endDate: "2026-05-05",
    moreDetails:
      "Primeras 72 horas críticas. Revisar: Vercel Logs cada 2-3 horas, Sentry por nuevos errores, Neon por queries lentas. Estar disponible por WhatsApp/email para soporte inmediato a clientes. Daily standup de 15 min revisando métricas. Hotfixes inmediatos para bugs críticos. Documentar todo el feedback para V1.1.",
    icon: MonitorCheck,
  },
];

// ============================================
// RESUMEN DE COSTOS MENSUALES - STACK VERCEL
// ============================================
/*
COSTOS MENSUALES ESTIMADOS (USD):
--------------------------------
Vercel Pro:                       $20
Neon Pro:                         $19
Upstash Pro:                      $10
Vercel Blob (~5GB):               $1
Resend (free tier):               $0
Sentry (free tier):               $0
UptimeRobot (free tier):          $0
--------------------------------
TOTAL ESTIMADO:                   ~$50 USD/mes

COSTOS ÚNICOS:
- Dominio (si no lo tienes):      $12-15 USD/año

COMPARACIÓN CON AWS:
- AWS estimado:                   $80-150 USD/mes
- Vercel stack:                   ~$50 USD/mes
- AHORRO:                         40-70%

NOTA: Estos costos escalan predeciblemente.
Con 10 clientes, probablemente llegues a ~$100/mes.
Con 50 clientes, quizás ~$200-300/mes.
El pricing de estos servicios es muy transparente.
*/

// ============================================
// HITOS CLAVE DEL PROYECTO (ACTUALIZADO)
// ============================================
/*
HITO 1 (Fin Semana 3 - 24 Enero):
  ✓ Infraestructura Vercel completa
  ✓ Neon, Upstash, Blob configurados
  ✓ Dominio con wildcard funcionando
  ✓ Primer deploy exitoso
  → 1.5 SEMANAS ANTES que con AWS

HITO 2 (Fin Semana 6 - 17 Febrero):
  ✓ Sistema multi-tenant funcionando
  ✓ Autenticación por tenant
  ✓ Cliente actual migrado
  ✓ Provisioning automatizado

HITO 3 (Fin Semana 9 - 7 Marzo):
  ✓ Super Admin Dashboard operativo
  ✓ CRUD completo de organizaciones
  ✓ Gestión de usuarios funcionando
  ✓ Métricas básicas visibles

HITO 4 (Fin Semana 12 - 31 Marzo):
  ✓ Sistema de configuración completo
  ✓ Estados y reglas personalizables
  ✓ Campos custom funcionando
  ✓ Templates de configuración listos

HITO 5 (Fin Semana 15 - 14 Abril):
  ✓ Módulos CRM y ATS adaptados
  ✓ Notificaciones funcionando
  ✓ Sistema de tareas operativo

HITO 6 (Fin Semana 17 - 2 Mayo):
  ✓ MVP EN PRODUCCIÓN
  ✓ Cliente actual operando
  ✓ Primer cliente nuevo onboarded
  ✓ Monitoreo y alertas activos
*/

// ============================================
// VENTAJAS DEL STACK VERCEL VS AWS
// ============================================
/*
1. VELOCIDAD DE SETUP:
   - Vercel: 3-4 días
   - AWS: 2 semanas
   
2. MANTENIMIENTO:
   - Vercel: Casi cero DevOps
   - AWS: Requiere conocimiento de múltiples servicios
   
3. DEPLOYMENTS:
   - Vercel: Push to Git = Deploy automático
   - AWS: Configurar CI/CD manualmente
   
4. PREVIEW ENVIRONMENTS:
   - Vercel: Automático por cada PR
   - AWS: Configuración adicional necesaria
   
5. SSL/HTTPS:
   - Vercel: Automático, incluyendo wildcard
   - AWS: Configurar ACM + CloudFront
   
6. ESCALADO:
   - Vercel: Automático, serverless
   - AWS: Configurar auto-scaling groups
   
7. ROLLBACKS:
   - Vercel: Un click en dashboard
   - AWS: Depende de tu setup de deployment
   
8. COSTOS PREDECIBLES:
   - Vercel: Pricing claro y simple
   - AWS: Puede haber sorpresas en la factura
*/

export { activities };
