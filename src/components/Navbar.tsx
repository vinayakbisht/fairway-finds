import { Logo } from "./Logo";
import { CartSheet } from "./CartSheet";

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/20 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />
        <div className="flex items-center gap-6">
          <a
            href="#products"
            className="hidden text-sm font-medium text-foreground/70 transition-colors hover:text-foreground sm:block"
          >
            Products
          </a>
          <a
            href="#about"
            className="hidden text-sm font-medium text-foreground/70 transition-colors hover:text-foreground sm:block"
          >
            About
          </a>
          <CartSheet />
        </div>
      </div>
    </nav>
  );
}
