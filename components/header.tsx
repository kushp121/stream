"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { StreameumLogo } from "@/components/streameum-logo"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [clickedItem, setClickedItem] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  const handleMobileNavClick = (item: string) => {
    setClickedItem(item)
    setTimeout(() => {
      setMobileMenuOpen(false)
      setClickedItem(null)
    }, 300)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md transition-all duration-500 animate-fade-in ${
        scrolled ? "py-2 shadow-[0_8px_30px_rgba(168,85,247,0.15)]" : "py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4 md:gap-8">
          <Link href="/" className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
            <StreameumLogo />
          </Link>
          <nav className="hidden items-center gap-4 md:flex lg:gap-6">
            <Link
              href="/about"
              className="text-sm font-bold lowercase text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-110 hover:text-primary"
            >
              about us
            </Link>
            <Link
              href="/artist-partners"
              className="text-sm font-bold lowercase text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-110 hover:text-primary"
            >
              artist partners
            </Link>
          </nav>
        </div>

        <Link href="/" className="hidden md:block">
          <Button className="group relative overflow-hidden bg-foreground text-background hover:bg-foreground/90 lowercase font-bold transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] text-sm px-5 py-2">
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-[-8px]">
              request a meeting
            </span>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
              <Image
                src="/images/streameum-star.png"
                alt=""
                width={20}
                height={20}
                className="animate-spin-slow"
                style={{
                  filter: "drop-shadow(0 0 10px rgba(168, 85, 247, 0.9))",
                }}
              />
            </div>
          </Button>
        </Link>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-gradient-to-b from-background via-background/98 to-background/95 backdrop-blur-lg md:hidden z-40 animate-fade-in">
          <nav className="container mx-auto px-6 py-12 flex flex-col gap-4 h-full">
            <Link
              href="/about"
              onClick={() => handleMobileNavClick("about")}
              className={`group relative text-3xl font-bold lowercase text-foreground py-6 border-b border-primary/20 transition-all duration-300 ${
                clickedItem === "about" ? "scale-95 text-primary" : "hover:text-primary hover:translate-x-2"
              }`}
            >
              <span className="relative z-10 flex items-center gap-4">
                <span className="inline-block w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                about us
              </span>
              <div
                className={`absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  clickedItem === "about" ? "opacity-100 animate-pulse" : ""
                }`}
              />
            </Link>
            <Link
              href="/artist-partners"
              onClick={() => handleMobileNavClick("artists")}
              className={`group relative text-3xl font-bold lowercase text-foreground py-6 border-b border-primary/20 transition-all duration-300 ${
                clickedItem === "artists" ? "scale-95 text-primary" : "hover:text-primary hover:translate-x-2"
              }`}
            >
              <span className="relative z-10 flex items-center gap-4">
                <span className="inline-block w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                artist partners
              </span>
              <div
                className={`absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  clickedItem === "artists" ? "opacity-100 animate-pulse" : ""
                }`}
              />
            </Link>
            <Link href="/" onClick={() => handleMobileNavClick("meeting")}>
              <Button
                className={`mt-8 w-full bg-gradient-to-r from-primary to-primary/80 text-background hover:from-primary/90 hover:to-primary/70 lowercase font-bold text-xl py-8 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] transition-all duration-300 ${
                  clickedItem === "meeting" ? "scale-95" : "hover:scale-105"
                }`}
              >
                request a meeting
              </Button>
            </Link>
            <div className="absolute bottom-12 right-8 opacity-20">
              <Image src="/images/streameum-star.png" alt="" width={120} height={120} className="animate-float" />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
