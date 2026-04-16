import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { ProductDetail } from "@/components/ProductDetail";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { Toaster } from "sonner";
import type { Product } from "@/lib/products";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Destination Fareways LLC — Premium Golf Travel Essentials" },
      { name: "description", content: "Premium travel essentials crafted for golfers who play beyond boundaries. Shop luxury golf bags, shoes, rangefinders and more." },
    ],
  }),
});

function Index() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection onSelectProduct={setSelectedProduct} />
        <AboutSection />
      </main>
      <Footer />
      <ProductDetail
        product={selectedProduct}
        open={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
      <Toaster position="bottom-right" richColors />
    </>
  );
}
