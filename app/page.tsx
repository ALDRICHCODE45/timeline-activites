import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TimelinePeopleFlowComercial from "@/timelineComponent/PeopleFlowComercialTimeline";
import TimelineTrustERP from "@/timelineComponent/TrustErpTimeline";

export default function Home() {
  return (
    <>
      <Tabs defaultValue="PFComercial" className="w-full">
        <div className="flex justify-center mb-6 sm:mb-8 px-3 sm:px-0m pt-10">
          <TabsList className="h-10 sm:h-12 px-1">
            <TabsTrigger
              value="PFComercial"
              className="text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-2.5"
            >
              PF Comercial
            </TabsTrigger>
            <TabsTrigger
              value="Trust"
              className="text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-2.5"
            >
              Trust
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="PFComercial" className="mt-0">
          <div className="text-center mb-8 sm:mb-12 px-3 sm:px-0">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-2">
              Timeline PF Comercial
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-muted-foreground mt-2 sm:mt-4">
              Planificación y seguimiento de actividades del proyecto.
            </p>
          </div>
          <TimelinePeopleFlowComercial />
        </TabsContent>
        <TabsContent value="Trust">
          <div className="text-center mb-8 sm:mb-12 px-3 sm:px-0">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-2">
              Timeline TrustPeople
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-muted-foreground mt-2 sm:mt-4">
              Planificación y seguimiento de actividades del ERP Interno.
            </p>
          </div>
          <TimelineTrustERP />
        </TabsContent>
      </Tabs>
    </>
  );
}
