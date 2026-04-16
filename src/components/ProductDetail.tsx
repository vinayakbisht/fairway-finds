import { type Product, formatPrice } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { addToCart } from "@/lib/cart-store";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ShoppingCart, X, Plus, Minus, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface Props {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

export function ProductDetail({ product, open, onClose }: Props) {
  const [qty, setQty] = useState(1);

  if (!product) return null;

  const handleAdd = () => {
    addToCart({ id: product.id, name: product.name, price: product.price, image: product.image }, qty);
    toast.success(`${product.name} (x${qty}) added to cart`);
    setQty(1);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-2">
          <div className="aspect-square overflow-hidden bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between p-6 md:p-8">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-gold">
                Destination Fareways
              </p>
              <h2 className="mt-2 font-heading text-2xl font-bold text-foreground md:text-3xl">
                {product.name}
              </h2>
              <p className="mt-2 text-2xl font-bold text-gold">{formatPrice(product.price)}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">{product.description}</p>

              <div className="mt-6">
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-foreground">
                  Features
                </h4>
                <ul className="space-y-1.5">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-sm font-medium text-foreground">Quantity</span>
                <div className="flex items-center gap-1 rounded-lg border border-border">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="flex h-9 w-9 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-10 text-center text-sm font-medium">{qty}</span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="flex h-9 w-9 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <Button variant="hero" className="w-full gap-2 rounded-full py-6" onClick={handleAdd}>
                <ShoppingCart className="h-5 w-5" />
                Add to Cart — {formatPrice(product.price * qty)}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
