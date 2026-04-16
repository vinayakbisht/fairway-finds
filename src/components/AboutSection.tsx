import { MapPin, Phone } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="bg-primary py-20 text-primary-foreground">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-gold">About Us</p>
        <h2 className="mt-3 font-heading text-4xl font-bold md:text-5xl">
          Destination Fareways LLC
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
          Destination Fareways LLC is dedicated to providing premium travel essentials for golfers
          who explore the world through the game. We believe every round deserves the finest gear,
          and every journey should feel effortless.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16">
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-gold" />
            <span className="text-sm text-primary-foreground/80">
              C13 Ogal Bhatta, Turner Road, Dehradun
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-gold" />
            <a href="tel:+919760876702" className="text-sm text-primary-foreground/80 hover:text-gold transition-colors">
              +91 9760876702
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
