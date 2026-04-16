import heroImage from "@/assets/hero-golf.jpg";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Premium golf course at sunset"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gold">
          Premium Golf Travel Essentials
        </p>
        <h1 className="font-heading text-5xl font-bold leading-tight text-primary-foreground md:text-7xl">
          Destination Fareways LLC
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
          Premium travel essentials crafted for golfers who play beyond boundaries.
          Elevate your journey, wherever the fairway takes you.
        </p>
        <div className="mt-10">
          <Button
            variant="hero"
            size="lg"
            className="rounded-full px-10 py-6 text-base"
            onClick={() =>
              document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  );
}
