export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 max-w-3xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>
          Built by{" "}
          <span className="text-foreground font-medium">
            Theophany Sakra Muhammad
          </span>{" "}
          with Next.js & Tailwind
        </p>
        <p className="font-mono">&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
