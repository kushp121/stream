import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link href="#what-we-do" className="text-muted-foreground transition-colors hover:text-foreground">
              What We Do
            </Link>
            <Link href="#artist-partners" className="text-muted-foreground transition-colors hover:text-foreground">
              Artist Partners
            </Link>
            <Link href="#about" className="text-muted-foreground transition-colors hover:text-foreground">
              About Us
            </Link>
            <Link href="#contact" className="text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </Link>
          </nav>
          <p className="text-sm text-muted-foreground">© 2025 Streameum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
