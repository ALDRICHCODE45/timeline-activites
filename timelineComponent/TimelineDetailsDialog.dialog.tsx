import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Props {
  initialDetails?: string;
  trigger: React.ReactElement;
}

export const TimelineDetailsDialog = ({
  initialDetails = "No hay detalles para esta actividad",
  trigger,
}: Props) => {
  return (
    <Dialog>
      <DialogTrigger
        className="w-full text-left border-0 bg-transparent p-0 outline-none hover:bg-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-xl focus-visible:outline-none"
        asChild
      >
        {trigger}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detalles de la actividad</DialogTitle>
          <DialogDescription>{initialDetails}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
