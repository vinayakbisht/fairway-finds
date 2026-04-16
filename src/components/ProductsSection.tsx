import { products, formatPrice, type Product } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { addToCart } from "@/lib/cart-store";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

interface Props {
  onSelectProduct: (product: Product) => void;
}

export function ProductsSection({ onSelectProduct }: Props) {
  const handleAdd = (p: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({ id: p.id, name: p.name, price: p.price, image: p.image });
    toast.success(`${p.name} added to cart`);
  };

  return (
    <section id="products" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-gold">
            Curated Collection
          </p>
          <h2 className="mt-3 font-heading text-4xl font-bold text-foreground md:text-5xl">
            Our Products
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Handpicked essentials for the discerning golfer who travels the world.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-card-foreground">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                  {product.shortDesc}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-gold">{formatPrice(product.price)}</span>
                  <Button
                    variant="default"
                    size="sm"
                    onClick={(e) => handleAdd(product, e)}
                    className="gap-1.5"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
