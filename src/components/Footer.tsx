export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Destination Fareways LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
