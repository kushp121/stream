"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackgroundAnimation } from "@/components/background-animation"
import { Button } from "@/components/ui/button"
import { Quote, Shield, Zap, FileCheck, TrendingUp } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"
import Link from "next/link"

export default function ArtistPartnersPage() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            entry.target.classList.remove("opacity-0")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".scroll-animate")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  const featuredArtists = [
    {
      name: "casper tng",
      quote:
        "streameum gave me the capital to take my sound to the next level. no strings attached, just real support for my vision. they get what toronto artists need.",
      image: "/casper-tng-portrait.jpg",
      streams: "8.5M",
    },
    {
      name: "lil berete",
      quote:
        "working with streameum let me focus on my craft without worrying about hidden fees. they're transparent, they're real, and they believe in regent park talent.",
      image: "/lil-berete-portrait.jpg",
      streams: "12.3M",
    },
    {
      name: "duvy",
      quote:
        "streameum understands the streets and the music. they helped me monetize my catalog while keeping full creative control. that's rare in this industry.",
      image: "/duvy-portrait.jpg",
      streams: "15.7M",
    },
  ]

  const partnerArtists = [
    { name: "casper tng", image: "/casper-tng-portrait.jpg" },
    { name: "3mfrench", image: "/3mfrench-portrait.jpg" },
    { name: "ar paisley", image: "/ar-paisley-portrait.jpg" },
    { name: "burna bandz", image: "/burna-bandz-portrait.jpg" },
    { name: "duvy", image: "/duvy-portrait.jpg" },
    { name: "lil berete", image: "/lil-berete-portrait.jpg" },
    { name: "friyie", image: "/friyie-portrait.jpg" },
    { name: "coupedaze", image: "/coupedaze-portrait.jpg" },
  ]

  const reasons = [
    {
      title: "complete control over what you sell",
      description: "even partial rights. you own your music and make all creative decisions.",
      icon: Shield,
    },
    {
      title: "immediate funding",
      description: "we don't make you wait. get the capital you need to invest in your music quickly.",
      icon: Zap,
    },
    {
      title: "fair deals, clear terms",
      description: "no surprises. transparent contracts and real-time reporting on your earnings.",
      icon: FileCheck,
    },
    {
      title: "continuous support & growth",
      description: "marketing, playlisting, sync. we continue working beside you — promotion, strategy, protection.",
      icon: TrendingUp,
    },
  ]

  return (
    <div className="relative min-h-screen bg-background text-foreground pt-24">
      <BackgroundAnimation />
      <Header />
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="border-b border-border/50 py-24 md:py-32">
          <div className="container mx-auto px-4 text-center md:px-6 scroll-animate opacity-0">
            <h1 className="mb-6 text-5xl font-bold lowercase leading-tight md:text-7xl text-balance">
              meet the creators we stand behind
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground md:text-2xl text-pretty">
              we partner with bold, visionary artists who want more than just a deal — they want a partner.
            </p>
          </div>
        </section>

        {/* Featured Artists Section */}
        <section className="border-b border-border/50 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-16">
              {featuredArtists.map((artist, index) => (
                <div
                  key={artist.name}
                  className={`grid gap-8 md:grid-cols-2 md:gap-12 items-center scroll-animate opacity-0 ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <div className="relative aspect-square overflow-hidden rounded-lg border border-border/50">
                      <Image
                        src={artist.image || "/placeholder.svg"}
                        alt={artist.name}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <Quote className="mb-4 h-12 w-12 text-primary/50" />
                    <blockquote className="mb-6 text-2xl font-medium leading-relaxed md:text-3xl text-pretty">
                      "{artist.quote}"
                    </blockquote>
                    <div>
                      <div className="mb-1 text-xl font-bold lowercase text-primary">{artist.name}</div>
                      <div className="text-muted-foreground">{artist.streams} streams</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Gallery Section */}
        <section className="border-b border-border/50 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-12 text-4xl font-bold lowercase md:text-5xl text-center scroll-animate opacity-0">
              our growing community
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {partnerArtists.map((artist, index) => (
                <div
                  key={artist.name}
                  className="group relative aspect-square overflow-hidden rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary/50 scroll-animate opacity-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Image
                    src={artist.image || "/placeholder.svg"}
                    alt={artist.name}
                    fill
                    className="object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="font-bold lowercase text-foreground">{artist.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reasons Section */}
        <section className="border-b border-border/50 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-12 text-4xl font-bold lowercase md:text-5xl text-center scroll-animate opacity-0">
              why artists choose us
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {reasons.map((reason, index) => {
                const Icon = reason.icon
                return (
                  <div
                    key={reason.title}
                    className="group rounded-lg border border-border/50 bg-card/30 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-card/50 scroll-animate opacity-0"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="mb-4 flex items-center gap-4">
                      <div className="rounded-lg bg-primary/10 p-3 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                        <Icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
                      </div>
                      <h3 className="text-2xl font-bold lowercase text-primary">{reason.title}</h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 text-center md:px-6 scroll-animate opacity-0">
            <h2 className="mb-6 text-4xl font-bold lowercase md:text-5xl">get onboard</h2>
            <p className="mb-8 text-xl text-muted-foreground">
              ready to talk? let's do this. let's map your path forward.
            </p>
            <Link href="/">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-foreground text-background hover:bg-foreground/90 lowercase font-bold text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
              >
                <span className="relative z-10">join us</span>
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
