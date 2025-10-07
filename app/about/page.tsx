"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackgroundAnimation } from "@/components/background-animation"
import { Button } from "@/components/ui/button"
import { CheckCircle2, TrendingUp, Users, DollarSign } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"
import Link from "next/link"

export default function AboutPage() {
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

  return (
    <div className="relative min-h-screen bg-background text-foreground pt-24">
      <BackgroundAnimation />
      <Header />
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border/50">
          <div className="absolute inset-0 opacity-20">
            <Image src="/toronto-studio-session.jpg" alt="" fill className="object-cover" />
          </div>
          <div className="container relative mx-auto px-4 py-24 md:px-6 md:py-32 scroll-animate opacity-0">
            <div className="max-w-3xl">
              <h1 className="mb-6 text-5xl font-bold lowercase leading-tight md:text-7xl text-balance">
                putting creators first.
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl text-pretty">
                we believe artists deserve total choice, total control, and real capital — without the strings most
                deals carry.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="border-b border-border/50 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <div className="scroll-animate opacity-0">
                <h2 className="mb-6 text-4xl font-bold lowercase md:text-5xl">our mission</h2>
                <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
                  we enable music creators to turn their catalogs into leverage. whether it's a few tracks or your whole
                  back catalog, we structure deals that are fair, flexible, and future-friendly.
                </p>
                <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
                  complex contracts, hidden recoupment, and limited transparency have long been the industry's default.
                  streameum exists to flip that script.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  we built a new model where you monetize your catalog on your terms.
                </p>
                <div className="mt-12 flex justify-center md:justify-start">
                  <div className="group relative cursor-pointer">
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl transition-all duration-500 group-hover:bg-primary/40 group-hover:blur-3xl" />
                    <Image
                      src="/images/design-mode/TEXT_TRANSPARENT_01%20longer(1).png"
                      alt="Streameum"
                      width={480}
                      height={480}
                      className="relative transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 scroll-animate opacity-0">
                <div className="rounded-lg border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/70 hover:scale-105">
                  <CheckCircle2 className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="mb-2 text-xl font-bold lowercase">no hidden clauses</h3>
                  <p className="text-muted-foreground">
                    transparent reporting always. you always know where your money is going.
                  </p>
                </div>
                <div className="rounded-lg border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/70 hover:scale-105">
                  <CheckCircle2 className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="mb-2 text-xl font-bold lowercase">you retain creative control</h3>
                  <p className="text-muted-foreground">
                    your music, your vision. we support your artistic decisions, not dictate them.
                  </p>
                </div>
                <div className="rounded-lg border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/70 hover:scale-105">
                  <CheckCircle2 className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="mb-2 text-xl font-bold lowercase">no interest</h3>
                  <p className="text-muted-foreground">we're artists for artists — your trust is our foundation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Numbers Section */}
        <section className="border-b border-border/50 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-12 text-4xl font-bold lowercase md:text-5xl text-center scroll-animate opacity-0">
              the numbers
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg border border-border/50 bg-card/30 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary/50 scroll-animate opacity-0">
                <div className="mb-2 text-5xl font-bold text-primary">hundreds</div>
                <div className="text-lg text-muted-foreground lowercase">
                  of creators supported (growing every month)
                </div>
              </div>
              <div className="rounded-lg border border-border/50 bg-card/30 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary/50 scroll-animate opacity-0">
                <div className="mb-2 text-5xl font-bold text-primary">millions</div>
                <div className="text-lg text-muted-foreground lowercase">
                  in capital deployed to independent artists
                </div>
              </div>
              <div className="rounded-lg border border-border/50 bg-card/30 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary/50 scroll-animate opacity-0">
                <div className="mb-2 text-5xl font-bold text-primary">growing</div>
                <div className="text-lg text-muted-foreground lowercase">
                  network of fans, playlists, and strategic partners
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="border-b border-border/50 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-12 text-4xl font-bold lowercase md:text-5xl text-center scroll-animate opacity-0">
              what we do
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="group rounded-lg border border-border/50 bg-card/30 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-card/50 scroll-animate opacity-0">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold lowercase">catalog deals</h3>
                <p className="text-muted-foreground">
                  sell tracks, masters, publishing — fully or partially. you choose how much to commit.
                </p>
              </div>
              <div className="group rounded-lg border border-border/50 bg-card/30 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-card/50 scroll-animate opacity-0">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold lowercase">advanced funding</h3>
                <p className="text-muted-foreground">
                  get paid quickly, reinvest in your craft. no hidden fees or interest.
                </p>
              </div>
              <div className="group rounded-lg border border-border/50 bg-card/30 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-card/50 scroll-animate opacity-0">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold lowercase">catalog management</h3>
                <p className="text-muted-foreground">
                  we help optimize your exposure, revenue, and sync opportunities.
                </p>
              </div>
              <div className="group rounded-lg border border-border/50 bg-card/30 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-card/50 scroll-animate opacity-0">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold lowercase">support & tools</h3>
                <p className="text-muted-foreground">insight dashboards, marketing support, and rights navigation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="border-b border-border/50 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-12 text-4xl font-bold lowercase md:text-5xl text-center scroll-animate opacity-0">
              how it works
            </h2>
            <div className="mx-auto max-w-4xl">
              <div className="space-y-8">
                <div className="flex gap-6 scroll-animate opacity-0">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xl font-bold text-primary">
                    1
                  </div>
                  <div>
                    <h3 className="mb-2 text-2xl font-bold lowercase">you reach out</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      we talk, get to know your catalog. share your music and streaming data with us.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 scroll-animate opacity-0">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xl font-bold text-primary">
                    2
                  </div>
                  <div>
                    <h3 className="mb-2 text-2xl font-bold lowercase">we propose flexible deal options</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      if we're a good fit, we'll present transparent offers with clear terms and no hidden fees.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 scroll-animate opacity-0">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xl font-bold text-primary">
                    3
                  </div>
                  <div>
                    <h3 className="mb-2 text-2xl font-bold lowercase">you choose & get funds</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      you choose how much (or how little) to commit. you get funds — fast.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 scroll-animate opacity-0">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xl font-bold text-primary">
                    4
                  </div>
                  <div>
                    <h3 className="mb-2 text-2xl font-bold lowercase">we continue working beside you</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      promotion, strategy, protection. receive ongoing support and transparent reporting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="border-b border-border/50 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-12 text-4xl font-bold lowercase md:text-5xl text-center scroll-animate opacity-0">
              our impact
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg border border-border/50 bg-card/30 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary/50 scroll-animate opacity-0">
                <div className="mb-2 text-5xl font-bold text-primary">150+</div>
                <div className="text-lg text-muted-foreground lowercase">artist partners</div>
              </div>
              <div className="rounded-lg border border-border/50 bg-card/30 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary/50 scroll-animate opacity-0">
                <div className="mb-2 text-5xl font-bold text-primary">50M+</div>
                <div className="text-lg text-muted-foreground lowercase">total streams</div>
              </div>
              <div className="rounded-lg border border-border/50 bg-card/30 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary/50 scroll-animate opacity-0">
                <div className="mb-2 text-5xl font-bold text-primary">$2M+</div>
                <div className="text-lg text-muted-foreground lowercase">capital deployed</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 text-center md:px-6 scroll-animate opacity-0">
            <h2 className="mb-6 text-4xl font-bold lowercase md:text-5xl">ready to partner with us?</h2>
            <p className="mb-8 text-xl text-muted-foreground">
              let's discuss how streameum can help you monetize your catalog on your terms.
            </p>
            <Link href="/">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-foreground text-background hover:bg-foreground/90 lowercase font-bold text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
              >
                <span className="relative z-10">request a meeting</span>
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
