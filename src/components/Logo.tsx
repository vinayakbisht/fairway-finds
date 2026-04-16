import { ShoppingBag, Plane } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary">
        <ShoppingBag className="h-5 w-5 text-gold" />
        <Plane className="absolute -right-1 -top-1 h-4 w-4 text-gold rotate-45" />
      </div>
      <span className="font-heading text-xl font-bold tracking-tight text-primary">
        Destination Fareways
      </span>
    </div>
  );
}
