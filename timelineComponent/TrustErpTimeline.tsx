import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { activities } from "./data/projects.data";
import { TimelineDetailsDialog } from "./TimelineDetailsDialog.dialog";
import {
  PfCandidatesActivities,
  TrustActivities,
} from "./data/TrustDataActivities.data";
import TimelinePeopleFlowComercial from "./PeopleFlowComercialTimeline";

// Función para calcular días entre fechas
function calculateDays(startDate: string, endDate: string): number {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

// Función para formatear fecha (versión completa para desktop)
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

// Función para formatear fecha compacta (móvil)
function formatDateCompact(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "short",
  });
}

// Componente interno para renderizar un timeline
function TimelineContent() {
  return (
    <div className="relative">
      {/* Línea del timeline con gradiente */}
      <div className="absolute left-[68px] sm:left-[110px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />

      {TrustActivities.map(
        (
          { title, description, initialDate, endDate, icon: Icon, moreDetails },
          index
        ) => {
          const days = calculateDays(initialDate, endDate);
          const isLast = index === TrustActivities.length - 1;

          return (
            <div
              key={index}
              className="group relative mb-6 sm:mb-8 last:mb-0"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {/* Contenedor principal */}
              <div className="flex items-start gap-2.5 sm:gap-6">
                {/* Columna de fechas */}
                <div className="flex flex-col gap-0.5 sm:gap-1 shrink-0 w-[65px] sm:w-[100px] text-right pt-1">
                  {/* Fecha inicial */}
                  <div className="text-[10px] sm:text-sm font-semibold text-primary leading-tight">
                    <span className="hidden sm:inline">
                      {formatDate(initialDate)}
                    </span>
                    <span className="sm:hidden">
                      {formatDateCompact(initialDate)}
                    </span>
                  </div>
                  {/* Fecha final */}
                  <div className="text-[10px] sm:text-xs text-muted-foreground leading-tight">
                    <span className="hidden sm:inline">
                      {formatDate(endDate)}
                    </span>
                    <span className="sm:hidden">
                      {formatDateCompact(endDate)}
                    </span>
                  </div>
                  {/* Badge de duración */}
                </div>

                {/* Línea vertical y punto del timeline */}
                <div className="relative flex flex-col items-center shrink-0">
                  {/* Punto del timeline con icono */}
                  <div className="relative z-10 flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 border-primary bg-background shadow-sm sm:shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                    <div className="absolute inset-0 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300" />
                    {Icon && (
                      <Icon className="relative z-10 w-3.5 h-3.5 sm:w-5 sm:h-5 text-primary" />
                    )}
                  </div>

                  {/* Línea vertical conectora */}
                  {!isLast && (
                    <div className="absolute top-8 sm:top-14 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/30 to-primary/10" />
                  )}
                </div>

                {/* Contenido de la tarjeta */}
                <div className="flex-1 min-w-0 pt-0.5">
                  <TimelineDetailsDialog
                    trigger={
                      <Card className="group-hover:shadow-lg group-hover:border-primary/50 transition-all duration-300 hover:scale-[1.01] sm:active:scale-[0.99]">
                        <CardHeader className="space-y-2 sm:space-y-3 px-4 py-4 sm:px-6 sm:py-6">
                          <CardTitle>
                            <h3 className="text-base sm:text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors leading-snug sm:leading-tight">
                              {title}
                            </h3>
                          </CardTitle>
                          <CardDescription>
                            <p className="text-xs sm:text-base leading-relaxed text-muted-foreground">
                              {description}
                            </p>
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    }
                    initialDetails={moreDetails}
                  />
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}

function TimelinePFCandidates() {
  return (
    <div className="relative">
      {/* Línea del timeline con gradiente */}
      <div className="absolute left-[68px] sm:left-[110px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />

      {PfCandidatesActivities.map(
        (
          { title, description, initialDate, endDate, icon: Icon, moreDetails },
          index
        ) => {
          const days = calculateDays(initialDate, endDate);
          const isLast = index === TrustActivities.length - 1;

          return (
            <div
              key={index}
              className="group relative mb-6 sm:mb-8 last:mb-0"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {/* Contenedor principal */}
              <div className="flex items-start gap-2.5 sm:gap-6">
                {/* Columna de fechas */}
                <div className="flex flex-col gap-0.5 sm:gap-1 shrink-0 w-[65px] sm:w-[100px] text-right pt-1">
                  {/* Fecha inicial */}
                  <div className="text-[10px] sm:text-sm font-semibold text-primary leading-tight">
                    <span className="hidden sm:inline">
                      {formatDate(initialDate)}
                    </span>
                    <span className="sm:hidden">
                      {formatDateCompact(initialDate)}
                    </span>
                  </div>
                  {/* Fecha final */}
                  <div className="text-[10px] sm:text-xs text-muted-foreground leading-tight">
                    <span className="hidden sm:inline">
                      {formatDate(endDate)}
                    </span>
                    <span className="sm:hidden">
                      {formatDateCompact(endDate)}
                    </span>
                  </div>
                  {/* Badge de duración */}
                </div>

                {/* Línea vertical y punto del timeline */}
                <div className="relative flex flex-col items-center shrink-0">
                  {/* Punto del timeline con icono */}
                  <div className="relative z-10 flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 border-primary bg-background shadow-sm sm:shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                    <div className="absolute inset-0 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300" />
                    {Icon && (
                      <Icon className="relative z-10 w-3.5 h-3.5 sm:w-5 sm:h-5 text-primary" />
                    )}
                  </div>

                  {/* Línea vertical conectora */}
                  {!isLast && (
                    <div className="absolute top-8 sm:top-14 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/30 to-primary/10" />
                  )}
                </div>

                {/* Contenido de la tarjeta */}
                <div className="flex-1 min-w-0 pt-0.5">
                  <TimelineDetailsDialog
                    trigger={
                      <Card className="group-hover:shadow-lg group-hover:border-primary/50 transition-all duration-300 hover:scale-[1.01] sm:active:scale-[0.99]">
                        <CardHeader className="space-y-2 sm:space-y-3 px-4 py-4 sm:px-6 sm:py-6">
                          <CardTitle>
                            <h3 className="text-base sm:text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors leading-snug sm:leading-tight">
                              {title}
                            </h3>
                          </CardTitle>
                          <CardDescription>
                            <p className="text-xs sm:text-base leading-relaxed text-muted-foreground">
                              {description}
                            </p>
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    }
                    initialDetails={moreDetails}
                  />
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}

export default function TimelineTrustERP() {
  return (
    <div className="max-w-7xl mx-auto pb-8 md:pb-20 pt-2 md:pt-4 px-3 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Primer timeline */}
        <div className="w-full">
          <TimelineContent />
        </div>
        {/* Segundo timeline */}
        <div className="w-full">
          <TimelinePFCandidates />
        </div>
      </div>
    </div>
  );
}
