import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="flex flex-col items-center gap-6">
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link href="/about" className="hover:text-foreground">
              About
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
          </nav>

          <div className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} DraftAI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
